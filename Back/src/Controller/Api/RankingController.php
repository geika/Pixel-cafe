<?php

namespace App\Controller\Api;

use App\Entity\Ranking;
use App\Form\RankingType;
use App\Repository\RankingRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\UserRepository;
use App\Repository\EventRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Form\FormInterface;

/**
 * @Route("/api", name="api_")
 */
class RankingController extends AbstractController
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
     * @Route("/rankings", name="all_rankings")
     */
    public function findAll(RankingRepository $repo)
    {
        $rankings = $repo->findAll();
        foreach ($rankings as $index => $currentValue) {
            $array[$index] = [
                'id' => $currentValue->getId(),
                'name' => $currentValue->getName(),
                'place' => $currentValue->getPlace(),
                'score' => $currentValue->getScore(),
                'reward' => $currentValue->getReward(),
                'user' => $currentValue->getUser()->getUsername(),
                'event' => $currentValue->getEvent()->getName()
            ];
            }
    $jsonRankings = \json_encode($array);
    $response = new Response($jsonRankings);
    $response->headers->set('Content-Type', 'application/json');
    // $response->headers->set('Access-Control-Allow-Origin', '');
    return $response;
    }

    /**
     * @Route("/private/ranking/new", name="ranking_new", methods={"POST"})
     */
    public function newRankingAction(Request $request): Response
    {
        $body = $request->request->all();
        $return = [];
        $ranking = new Ranking();
        $form = $this->createForm(RankingType::class, $ranking);
        $form->submit($body);
        $form->handleRequest($request);
        if ($form->isSubmitted()) {
        //    $return['coucou'] = 'test';
            if($form->isValid()) {
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($ranking);
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
     * @Route("/ranking/{id}", name="ranking_by_one", methods={"GET"})
     */
    public function findOneRanking(Ranking $ranking)
    {
        $currentValue = $ranking;
        $array = [
            'id' => $currentValue->getId(),
            'name' => $currentValue->getName(),
            'place' => $currentValue->getPlace(),
            'score' => $currentValue->getScore(),
            'reward' => $currentValue->getReward(),
            'user' => $currentValue->getUser()->getUsername(),
            'event' => $currentValue->getEvent()->getName()
        ];
    $jsonOneRanking = \json_encode($array);
    $response = new Response($jsonOneRanking);
    $response->headers->set('Content-Type', 'application/json');
    // $response->headers->set('Access-Control-Allow-Origin', '');
    return $response;
    }

}