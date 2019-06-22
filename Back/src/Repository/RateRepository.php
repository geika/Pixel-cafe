<?php

namespace App\Repository;

use App\Entity\Rate;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;
use App\Entity\User;
use App\Entity\Event;

/**
 * @method Rate|null find($id, $lockMode = null, $lockVersion = null)
 * @method Rate|null findOneBy(array $criteria, array $orderBy = null)
 * @method Rate[]    findAll()
 * @method Rate[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RateRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Rate::class);
    }

    /**
     * @param Event $rate
     * @return Rate[]
     */
    
    public function findByEventQueryBuilder($event)
    {
        $qb = $this->createQueryBuilder('r')
        ->join('r.event', 'e')
        ->addSelect('e')
        ->where('r.event = :myEvent')
        ->setParameter('myEvent', $event)
        ;
        return $qb->getQuery()->getArrayResult();
    }

    /**
     * @param User $rate
     * @return Rate[]
     */
    
    public function findByUserQueryBuilder($user)
    {
        $qb = $this->createQueryBuilder('r')
        ->join('r.user', 'u')
        ->addSelect('u')
        ->where('r.user = :myUser')
        ->setParameter('myUser', $user)
        ;
        return $qb->getQuery()->getArrayResult();
    }

    // /**
    //  * @return Rate[] Returns an array of Rate objects
    //  */
    /*
    public function findByExampleField($value)
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->orderBy('r.id', 'ASC')
            ->setMaxResults(10)
            ->getQuery()
            ->getResult()
        ;
    }
    */

    /*
    public function findOneBySomeField($value): ?Rate
    {
        return $this->createQueryBuilder('r')
            ->andWhere('r.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
