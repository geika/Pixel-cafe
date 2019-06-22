<?php

namespace App\Controller\Api;

use App\Entity\Style;
use App\Form\StyleType;
use App\Repository\StyleRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/api", name="api_")
 */
class StyleController extends AbstractController
{
    /**
     * @Route("/styles", name="all_styles")
     */
    public function findAll(StyleRepository $repo)
    {
        $styles = $repo->findAll();
        foreach ($styles as $index => $currentValue) {
            $array[$index] = [
                'id' => $currentValue->getId(),
                'name' => $currentValue->getName(),
                'description' => $currentValue->getDescription(),
                'logo' => $currentValue->getLogo(),
                'events' => $currentValue->getEvents()
            ];
            }
    $jsonStyles = \json_encode($array);
    $response = new Response($jsonStyles);
    $response->headers->set('Content-Type', 'application/json');
    // $response->headers->set('Access-Control-Allow-Origin', '');
    return $response;
    }

    /**
     * @Route("/style/{id}", name="style_by_one", methods={"GET"})
     */
    public function findOneStyle(Style $style)
    {
        $currentValue = $style;
        $array = [
            'id' => $currentValue->getId(),
            'name' => $currentValue->getName(),
            'description' => $currentValue->getDescription(),
            'logo' => $currentValue->getLogo(),
            'events' => $currentValue->getEvents()
        ];
    $jsonOneStyle = \json_encode($array);
    $response = new Response($jsonOneStyle);
    $response->headers->set('Content-Type', 'application/json');
    // $response->headers->set('Access-Control-Allow-Origin', '');
    return $response;
    }
}
