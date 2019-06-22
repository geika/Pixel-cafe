<?php

namespace App\Controller\Api;

use App\Entity\Game;
use App\Form\GameType;
use App\Repository\GameRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ConsoleRepository;

/**
 * @Route("/api", name="api_")
 */
class GameController extends AbstractController
{
    /**
     * @Route("/games", name="all_games")
     */
    public function findAll(GameRepository $repo)
    {
        $games = $repo->findAll();
        foreach ($games as $index => $currentValue) {
            $array[$index] = [
                'id' => $currentValue->getId(),
                'name' => $currentValue->getName(),
                'description' => $currentValue->getDescription(),
                'developer' => $currentValue->getDeveloper(),
                'editor' => $currentValue->getEditor(),
                'available' => $currentValue->getAvailable(),
                'releaseDate' => $currentValue->getReleaseDate(),
                'console' => $currentValue->getConsole()->getName()
            ];
            }
    $jsonGames = \json_encode($array);
    $response = new Response($jsonGames);
    $response->headers->set('Content-Type', 'application/json');
    // $response->headers->set('Access-Control-Allow-Origin', '');
    return $response;
    }

    /**
     * @Route("/game/{id}", name="game_by_one", methods={"GET"})
     */
    public function findOneGame(Game $game)
    {
        // $console = $consoleRepository->findByGamesQueryBuilder($game);
        $currentValue = $game;
        $array = [
            'id' => $currentValue->getId(),
            'name' => $currentValue->getName(),
            'description' => $currentValue->getDescription(),
            'developer' => $currentValue->getDeveloper(),
            'editor' => $currentValue->getEditor(),
            'available' => $currentValue->getAvailable(),
            'releaseDate' => $currentValue->getReleaseDate(),
            'console' => $currentValue->getConsole()->getName()
        ];
    $jsonOneGame = \json_encode($array);
    $response = new Response($jsonOneGame);
    $response->headers->set('Content-Type', 'application/json');
    // $response->headers->set('Access-Control-Allow-Origin', '');
    return $response;
    }
}