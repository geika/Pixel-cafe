<?php

namespace App\Controller\Api;


use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use App\Repository\ConsoleRepository;
use App\Repository\GameRepository;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Entity\Console;

/**
 * @Route("/api", name="api_")
 */
class ConsoleController extends AbstractController
{
    /**
     * @Route("/consoles", name="all_consoles")
     */
    public function findAll(ConsoleRepository $repo, GameRepository $gameRepository)
    {
    
        
        $consoles = $repo->findAll();
        foreach ($consoles as $console) {
            $array[] = [
                'id' => $console->getId(),
                'name' => $console->getName(),
                'description' => $console->getDescription(),
                'nbAvailable' => $console->getNbAvailable(),
                'brand' => $console->getBrand(),
                'image' => $console->getImage(),
                'releaseDate' => $console->getReleaseDate(),
                'games' => $gameRepository->findByConsoleQueryBuilder($console),
            ];
            }
    $jsonConsoles = \json_encode($array);
    $response = new Response($jsonConsoles);
    $response->headers->set('Content-Type', 'application/json');
    // $response->headers->set('Access-Control-Allow-Origin', '');
    return $response;
    }

    /**
     * @Route("/console/{id}", name="console_by_one", methods={"GET"})
     */
    public function findOneConsole(Console $console, GameRepository $gameRepository)
    {
        $game = $gameRepository->findByConsoleQueryBuilder($console);
        $currentValue = $console;
        $array = [
            'id' => $currentValue->getId(),
            'name' => $currentValue->getName(),
            'description' => $currentValue->getDescription(),
            'nbAvailable' => $currentValue->getNbAvailable(),
            'brand' => $currentValue->getBrand(),
            'image' => $currentValue->getImage(),
            'releaseDate' => $currentValue->getReleaseDate(),
            'game'=>$game
        ];

    $jsonOneConsole = \json_encode($array);
    $response = new Response($jsonOneConsole);
    $response->headers->set('Content-Type', 'application/json');
    // $response->headers->set('Access-Control-Allow-Origin', '');
    return $response;
    }
}
