<?php

namespace App\Repository;

use App\Entity\UserEventVote;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;

/**
 * @method UserEventVote|null find($id, $lockMode = null, $lockVersion = null)
 * @method UserEventVote|null findOneBy(array $criteria, array $orderBy = null)
 * @method UserEventVote[]    findAll()
 * @method UserEventVote[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class UserEventVoteRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, UserEventVote::class);
    }
}
