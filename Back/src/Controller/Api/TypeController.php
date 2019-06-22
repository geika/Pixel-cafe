<?php

namespace App\Controller\Api;

use App\Entity\Type;
use App\Form\TypeType;
use App\Repository\TypeRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\ProductRepository;

/**
 * @Route("/api", name="api_")
 */
class TypeController extends AbstractController
{
    /**
     * @Route("/types", name="all_types")
     */
    public function findAll(TypeRepository $repo, ProductRepository $productRepository)
    {
        $types = $repo->findAll();
        foreach ($types as $index => $currentValue) {
            $array[$index] = [
                'id' => $currentValue->getId(),
                'name' => $currentValue->getName(),
                'description' => $currentValue->getDescription(),
                'image' => $currentValue->getImage(),
                'products' =>  $productRepository->findByTypeQueryBuilder($currentValue)
            ];
            }
    $jsonTypes = \json_encode($array);
    $response = new Response($jsonTypes);
    $response->headers->set('Content-Type', 'application/json');
    // $response->headers->set('Access-Control-Allow-Origin', '');
    return $response;
    }

    /**
     * @Route("/type/{id}", name="type_by_one", methods={"GET"})
     */
    public function findOneType(Type $type, ProductRepository $productRepository)
    {
        $product = $productRepository->findByTypeQueryBuilder($type);
        $currentValue = $type;
        $array = [
            'id' => $currentValue->getId(),
            'name' => $currentValue->getName(),
            'description' => $currentValue->getDescription(),
            'image' => $currentValue->getImage(),
            'product' => $product
        ];
    $jsonOneType = \json_encode($array);
    $response = new Response($jsonOneType);
    $response->headers->set('Content-Type', 'application/json');
    // $response->headers->set('Access-Control-Allow-Origin', '');
    return $response;
    }
}
