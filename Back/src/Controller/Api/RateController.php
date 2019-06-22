<?php

namespace App\Controller\Api;

use App\Entity\Rate;
use App\Form\RateType;
use App\Repository\RateRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\EventRepository;
use App\Repository\UserRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Form\FormInterface;

/**
 * @Route("/api", name="api_")
 */
class RateController extends AbstractController
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
     * @Route("/rates", name="all_rates")
     */
    public function findAll(RateRepository $repo)
    {
        $rates = $repo->findAll();
        foreach ($rates as $index => $currentValue) {
            $array[$index] = [
                'id' => $currentValue->getId(),
                'user' => $currentValue->getUser()->getUsername(),
                'event' => $currentValue->getEvent()->getName()
            ];
            }
    $jsonRates = \json_encode($array);
    $response = new Response($jsonRates);
    $response->headers->set('Content-Type', 'application/json');
    // $response->headers->set('Access-Control-Allow-Origin', '');
    return $response;
    }


    /**
     * @Route("/private/rate/new", name="rate_new", methods={"POST"})
     */
    public function newRateAction(Request $request): Response
    {
        $body = $request->request->all();
        $return = [];
        $rate = new Rate();
        $form = $this->createForm(RateType::class, $rate);
        $form->submit($body);
        $form->handleRequest($request);
        if ($form->isSubmitted()) {
        //    $return['coucou'] = 'test';
            if($form->isValid()) {
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($rate);
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
     * @Route("/rate/{id}", name="rate_by_one", methods={"GET"})
     */
    public function findOneRate(Rate $rate)
    {
        $currentValue = $rate;
        $array = [
            'id' => $currentValue->getId(),
            'user' => $currentValue->getUser()->getUsername(),
            'event' => $currentValue->getEvent()->getName()
        ];
    $jsonOneRate = \json_encode($array);
    $response = new Response($jsonOneRate);
    $response->headers->set('Content-Type', 'application/json');
    // $response->headers->set('Access-Control-Allow-Origin', '');
    return $response;
    }
}
