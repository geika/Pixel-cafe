<?php

namespace App\Repository;

use App\Entity\Ranking;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;
use App\Entity\User;
use App\Entity\Event;

/**
 * @method Ranking|null find($id, $lockMode = null, $lockVersion = null)
 * @method Ranking|null findOneBy(array $criteria, array $orderBy = null)
 * @method Ranking[]    findAll()
 * @method Ranking[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class RankingRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Ranking::class);
    }

    /**
     * @param User $ranking
     * @return Ranking[]
     */
    
    public function findByUserQueryBuilder($user)
    {
        $qb = $this->createQueryBuilder('r')
        ->join('r.user', 'u')
        ->addSelect('c')
        ->where('r.user = :myUser')
        ->setParameter('myUser', $user)
        ;
        return $qb->getQuery()->getArrayResult();
    }


    /**
     * @param Event $ranking
     * @return Ranking[]
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


    // /**
    //  * @return Ranking[] Returns an array of Ranking objects
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
    public function findOneBySomeField($value): ?Ranking
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
