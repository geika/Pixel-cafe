<?php

namespace App\Controller\Backend;

use App\Entity\Ranking;
use App\Form\RankingType;
use App\Repository\RankingRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

/**
 * @Route("/admin/ranking")
 */
class RankingController extends AbstractController
{
    /**
     * @Route("/", name="ranking_index", methods={"GET"})
     */
    public function index(RankingRepository $rankingRepository): Response
    {
        return $this->render('backend/ranking/index.html.twig', [
            'rankings' => $rankingRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="ranking_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $ranking = new Ranking();
        $form = $this->createForm(RankingType::class, $ranking);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($ranking);
            $entityManager->flush();

            return $this->redirectToRoute('ranking_index');
        }

        return $this->render('backend/ranking/new.html.twig', [
            'ranking' => $ranking,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="ranking_show", methods={"GET"})
     */
    public function show(Ranking $ranking): Response
    {
        return $this->render('backend/ranking/show.html.twig', [
            'ranking' => $ranking,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="ranking_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Ranking $ranking): Response
    {
        $form = $this->createForm(RankingType::class, $ranking);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('ranking_index', [
                'id' => $ranking->getId(),
            ]);
        }

        return $this->render('backend/ranking/edit.html.twig', [
            'ranking' => $ranking,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="ranking_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Ranking $ranking): Response
    {
        if ($this->isCsrfTokenValid('delete'.$ranking->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($ranking);
            $entityManager->flush();
        }

        return $this->redirectToRoute('ranking_index');
    }
}
