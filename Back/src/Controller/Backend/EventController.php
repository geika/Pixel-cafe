<?php

namespace App\Controller\Backend;

use App\Entity\Event;
use App\Form\EventType;
use App\Repository\EventRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\UserEventVoteRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use App\Entity\UserEventVote;
use Doctrine\DBAL\Exception\UniqueConstraintViolationException;

/**
 * @Route("/admin/event")
 */
class EventController extends AbstractController
{
    /**
     * @Route("/", name="event_index", methods={"GET"})
     */
    public function index(EventRepository $eventRepository): Response
    {
        return $this->render('backend/event/index.html.twig', [
            'events' => $eventRepository->findAll(),
        ]);
    }

    /**
     * @Route("/new", name="event_new", methods={"GET","POST"})
     */
    public function new(Request $request): Response
    {
        $event = new Event();
        $form = $this->createForm(EventType::class, $event);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->persist($event);
            $entityManager->flush();
            dd($event->getDate());
            return $this->redirectToRoute('event_index');
        }

        return $this->render('backend/event/new.html.twig', [
            'event' => $event,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="event_show", methods={"GET"})
     */
    public function show(Event $event): Response
    {
        return $this->render('backend/event/show.html.twig', [
            'event' => $event,
        ]);
    }

    /**
     * @Route("/{id}/edit", name="event_edit", methods={"GET","POST"})
     */
    public function edit(Request $request, Event $event): Response
    {   
        $form = $this->createForm(EventType::class, $event);
        $form->handleRequest($request);

        if ($form->isSubmitted() && $form->isValid()) {
            $this->getDoctrine()->getManager()->flush();

            return $this->redirectToRoute('event_index', [
                'id' => $event->getId(),
            ]);
        }

        return $this->render('backend/event/edit.html.twig', [
            'event' => $event,
            'form' => $form->createView(),
        ]);
    }

    /**
     * @Route("/{id}", name="event_delete", methods={"DELETE"})
     */
    public function delete(Request $request, Event $event): Response
    {
        if ($this->isCsrfTokenValid('delete'.$event->getId(), $request->request->get('_token'))) {
            $entityManager = $this->getDoctrine()->getManager();
            $entityManager->remove($event);
            $entityManager->flush();
        }

        return $this->redirectToRoute('event_index');
    }

    /**
     * @Route ("/vote/{id}", name="event_vote", methods={"GET|POST"})
     */
    public function vote(Event $event = null, EntityManagerInterface $em, UserEventVoteRepository $uevr)
    {
        if(null === $event)
        {
            return new JsonResponse(
                [
                    'error' => true,
                    'message' => 'Event innexistant',
                    'data' => null
                ]);
        }
        $user = $this->getUser();

        $eventVote = new UserEventVote();
        $eventVote->setUser($user);
        $eventVote->setEvent($event);

        $em->persist($eventVote);

        try{
            $em->flush();
            $nbVotes = count($uevr->findBy(['event' => $event]));
            $event->setVotes($nbVotes);
            $em->flush();

            $this->addFlash('success', 'Event voté !');
        } catch(UniqueConstraintViolationException $e) {
            $this->addFlash('danger', 'Tu as deja voté !');
        }
        return $this->redirectToRoute('event_show', ['id' => $event->getId()]);

    }


    
}
