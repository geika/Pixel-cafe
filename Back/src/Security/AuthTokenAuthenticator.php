<?php

namespace App\Security;

use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\Security\Core\Authentication\Token\PreAuthenticatedToken;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use Symfony\Component\Security\Core\Exception\AuthenticationException;
use Symfony\Component\Security\Core\Exception\BadCredentialsException;
use Symfony\Component\HttpKernel\Exception\UnauthorizedHttpException;

use Symfony\Component\Security\Core\User\UserProviderInterface;
use Symfony\Component\Security\Http\Authentication\AuthenticationFailureHandlerInterface;
use Symfony\Component\Security\Http\HttpUtils;

class AuthTokenAuthenticator implements AuthenticationFailureHandlerInterface
{
    const TOKEN_VALIDITY_DURATION = 12 * 3600;

    protected $httpUtils;

    public function __construct(HttpUtils $httpUtils)
    {
        $this->httpUtils = $httpUtils;
    }

    public function createToken(Request $request, $providerKey)
    {
        $authTokenHeader = $request->headers->get('X-Auth-Token');

        if (!$authTokenHeader) {
            throw new UnauthorizedHttpException('X-Auth-Token header is required');
        }

        return new PreAuthenticatedToken(
            'anon.',
            $authTokenHeader,
            $providerKey
        );
    }

 public function authenticateToken(TokenInterface $token, UserProviderInterface $userProvider, $providerKey)
    {
        if (!$userProvider instanceof AuthTokenUserProvider) {
            throw new \InvalidArgumentException(
                sprintf(
                    'The user provider must be an instance of AuthTokenUserProvider (%s was given).',
                    get_class($userProvider)
                )
            );
        }

        $authTokenHeader = $token->getCredentials();
        $authToken = $userProvider->getAuthToken($authTokenHeader);

        if (!$authToken || !$this->isTokenValid($authToken)) {
            throw new BadCredentialsException('Invalid authentication token');
        }

        $user = $authToken->getUser();
        $pre = new PreAuthenticatedToken(
            $user,
            $authTokenHeader,
            $providerKey,
            $user->getRoles()
        );

        $pre->setAuthenticated(true);

        return $pre;
    }

    public function supportsToken(TokenInterface $token, $providerKey)
    {
        return $token instanceof PreAuthenticatedToken && $token->getProviderKey() === $providerKey;
    }

    private function isTokenValid($authToken)
    {
        return (time() - $authToken->getCreatedAt()->getTimestamp()) < self::TOKEN_VALIDITY_DURATION;
    }

    public function onAuthenticationFailure(Request $request, AuthenticationException $exception)
    {

        throw $exception;
    }

    /**
* @ApiDoc(
*  section="Token",
*  description="Return user token",
*  parameters={
*      {"name"="email", "dataType"="string", "required"=true},
       {"name"="password", "dataType"="password", "required"=true}
*  }
* )
* @Route("/token", name="app_api_users_token")
* @Method("POST")
*/
public function postAuthTokensAction(Request $request)
{
    $em = $this->get('doctrine.orm.entity_manager');
    $serializer = $this->get("serializer");

    $user = $em->getRepository('AppBundle:User')->findOneByEmail($request->get('email'));

    if (!$user) { 
        throw $this->createAccessDeniedException('Invalid user');
    }

    $encoder = $this->get("security.encoder_factory")->getEncoder($user);

    $isPasswordValid = $encoder->isPasswordValid($user->getPassword(), $request->get('password'), $user->getSalt());

    if (!$isPasswordValid) {
        throw $this->createAccessDeniedException('Invalid credentials');
    }

    $authToken = new AuthToken();
    $authToken->setValue(base64_encode(random_bytes(50)));
    $authToken->setCreatedAt(new \DateTime('now'));
    $authToken->setUser($user);

    $em->persist($authToken);
    $em->flush();

    return new Response($serializer->serialize($authToken, "json"));
}

}

