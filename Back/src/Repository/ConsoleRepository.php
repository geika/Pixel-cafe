<?php

namespace App\Repository;

use App\Entity\Console;
use Doctrine\Bundle\DoctrineBundle\Repository\ServiceEntityRepository;
use Symfony\Bridge\Doctrine\RegistryInterface;
use App\Entity\Game;

/**
 * @method Console|null find($id, $lockMode = null, $lockVersion = null)
 * @method Console|null findOneBy(array $criteria, array $orderBy = null)
 * @method Console[]    findAll()
 * @method Console[]    findBy(array $criteria, array $orderBy = null, $limit = null, $offset = null)
 */
class ConsoleRepository extends ServiceEntityRepository
{
    public function __construct(RegistryInterface $registry)
    {
        parent::__construct($registry, Console::class);
    }

    /*
    public function findOneBySomeField($value): ?Console
    {
        return $this->createQueryBuilder('c')
            ->andWhere('c.exampleField = :val')
            ->setParameter('val', $value)
            ->getQuery()
            ->getOneOrNullResult()
        ;
    }
    */
}
