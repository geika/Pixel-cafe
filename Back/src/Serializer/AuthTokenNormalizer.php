<?php

namespace App\Serializer;

use AppBundle\Entity\AuthToken;
use Symfony\Component\Serializer\Normalizer\NormalizerInterface;

class AuthTokenNormalizer implements NormalizerInterface
{
    /**
     * {@inheritdoc}
     */
    public function normalize($object, $format = null, array $context = array())
    {

        return [
            'user_id'   => $object->getUser()->getId(),
            'login' => $object->getUser()->getEmail(),
            'token' => $object->getValue(),
            'created_at' => $object->getCreatedAt()
        ];
    }

    /**
     * {@inheritdoc}
     */
    public function supportsNormalization($data, $format = null)
    {
        return $data instanceof AuthToken;
    }
}