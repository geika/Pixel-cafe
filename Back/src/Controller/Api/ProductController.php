<?php

namespace App\Controller\Api;

use App\Entity\Product;
use App\Form\ProductType;
use App\Repository\ProductRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\TypeRepository;

/**
 * @Route("/api", name="api_")
 */
class ProductController extends AbstractController
{
    /**
     * @Route("/products", name="all_products")
     */
    public function findAll(ProductRepository $repo)
    {
        $products = $repo->findAll();
        foreach ($products as $index => $currentValue) {
            $array[$index] = [
                'id' => $currentValue->getId(),
                'name' => $currentValue->getName(),
                'description' => $currentValue->getDescription(),
                'price' => $currentValue->getPrice(),
                'type' => $currentValue->getType()->getName()
            ];
            }
    $jsonProducts = \json_encode($array);
    $response = new Response($jsonProducts);
    $response->headers->set('Content-Type', 'application/json');
    // $response->headers->set('Access-Control-Allow-Origin', '');
    return $response;
    }

    /**
     * @Route("/product/{id}", name="product_by_one", methods={"GET"})
     */
    public function findOneProduct(Product $product)
    {
        $currentValue = $product;
        $array = [
            'id' => $currentValue->getId(),
            'name' => $currentValue->getName(),
            'description' => $currentValue->getDescription(),
            'price' => $currentValue->getPrice(),
            'type' => $currentValue->getType()->getName()
        ];
    $jsonOneProduct = \json_encode($array);
    $response = new Response($jsonOneProduct);
    $response->headers->set('Content-Type', 'application/json');
    // $response->headers->set('Access-Control-Allow-Origin', '');
    return $response;
    }
}
