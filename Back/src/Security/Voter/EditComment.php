<?php

namespace App\Security\Voter;

use Symfony\Component\Security\Core\Authorization\Voter\VoterInterface;
use Symfony\Component\Security\Core\Authentication\Token\TokenInterface;
use App\Entity\Comment;
use App\Entity\User;



class EditComment implements VoterInterface
{
    public function vote(TokenInterface $token, $subject, array $attributes)
    {
        if(!$subject instanceof Comment)
        {
            return self::ACCESS_ABSTAIN;
        }

        if(!in_array('EDIT', $attributes))
        {
            return self::ACCESS_ABSTAIN;
        }

        $user = $token->getUser();


        if(!$user instanceof User)
        {
            return self::ACCESS_DENIED;
        }
        
        if($user !== $subject->getUser())
        {
            return self::ACCESS_DENIED;
        }

        return self::ACCESS_GRANTED;
    }

}