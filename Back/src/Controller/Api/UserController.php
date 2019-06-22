<?php

namespace App\Controller\Api;

use App\Entity\User;
use App\Form\UserType;
use App\Repository\UserRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\RoleRepository;
use App\Repository\RateRepository;
use App\Repository\RankingRepository;
use App\Repository\CommentRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Form\FormInterface;
use Symfony\Component\Security\Core\Encoder\UserPasswordEncoderInterface;

// use Proxies\__CG__\App\Entity\User;

/**
 * @Route("/api", name="api_")
 */
class UserController extends AbstractController
{


    private function getErrorsFromForm(FormInterface $form)
    {
        $errors = array();
        foreach ($form->getErrors() as $error) {
            $errors[] = $error->getMessage();
        }
        foreach ($form->all() as $childForm) {
            if ($childForm instanceof FormInterface) {
                if ($childErrors = $this->getErrorsFromForm($childForm)) {
                    $errors[$childForm->getName()] = $childErrors;
                }
            }
        }
        return $errors;
    }

    /**
     * @Route("/users", name="all_users")
     */
    public function findAll(UserRepository $repo, RateRepository $rateRepository, RankingRepository $rankingRepository, CommentRepository $commentRepository)
    {
        $users = $repo->findAll();
        foreach ($users as $user) {
            $array[] = [
                'id' => $user->getId(),
                'username' => $user->getUsername(),
                'password' => $user->getPassword(),
                'email' => $user->getEmail(),
                'role' => $user->getRole()->getName(),
                'comments' => $commentRepository->findByEventQueryBuilder($user),
                'rates' => $rateRepository->findByEventQueryBuilder($user),
                'rankings' => $rankingRepository->findByEventQueryBuilder($user)
            ];
            }
    $jsonUsers = \json_encode($array);
    $response = new Response($jsonUsers);
    $response->headers->set('Content-Type', 'application/json');
    // $response->headers->set('Access-Control-Allow-Origin', '');
    return $response;
    }


    /**
     * @Route("/user/new", name="user_new", methods={"POST"})
     */
    public function newUserAction(Request $request, UserPasswordEncoderInterface $passwordEncoder): Response
    {
        $body = $request->request->all();
        $return = [];
        $user = new User();
        $form = $this->createForm(UserType::class, $user);
        $form->submit($body);
        $form->handleRequest($request);
        if ($form->isSubmitted()) {
        //    $return['coucou'] = 'test';
            if($form->isValid()) {
                $encodedPassword = $passwordEncoder->encodePassword($user, $user->getPassword());

                $user->setPassword($encodedPassword);
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($user);
                $entityManager->flush();
                return new JsonResponse([], JsonResponse::HTTP_OK);
            } else {
                $return['error'] = $this->getErrorsFromForm($form);
            }
        } else {
            // $return['coucou'] = 'test2';
        }
        return new JsonResponse($return, JsonResponse::HTTP_BAD_REQUEST);
    }

    /**
     * @Route("/user/{id}", name="user_by_one", methods={"GET"})
     */
    public function findOneUser(User $user, RateRepository $rateRepository, RankingRepository $rankingRepository, CommentRepository $commentRepository)
    {
        $comment = $commentRepository->findByEventQueryBuilder($user);
        $ranking = $rankingRepository->findByEventQueryBuilder($user);
        $rate = $rateRepository->findByEventQueryBuilder($user);
        $currentValue = $user;
        $array = [
            'id' => $currentValue->getId(),
            'username' => $currentValue->getUsername(),
            'password' => $currentValue->getPassword(),
            'email' => $currentValue->getEmail(),
            'role' => $currentValue->getRole()->getName(),
            'comments' => $comment,
            'rates' => $rate,
            'rankings' => $ranking
        ];
    $jsonOneUser = \json_encode($array);
    $response = new Response($jsonOneUser);
    $response->headers->set('Content-Type', 'application/json');
    // $response->headers->set('Access-Control-Allow-Origin', '');
    return $response;
    }
}
