<?php

namespace App\Controller\Api;

use App\Entity\Event;
use App\Form\EventType;
use App\Repository\EventRepository;
use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Request;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;
use App\Repository\StyleRepository;
use App\Repository\GameRepository;
use App\Repository\CommentRepository;
use App\Repository\RankingRepository;
use App\Repository\RateRepository;
use Symfony\Component\HttpFoundation\JsonResponse;
use Symfony\Component\Form\FormInterface;
use Doctrine\ORM\EntityManagerInterface;
use App\Repository\UserEventVoteRepository;
use App\Entity\UserEventVote;
use Symfony\Component\Security\Core\Authentication\Token\Storage\TokenStorageInterface;
/**
 * @Route("/api", name="api_")
 */
class EventController extends AbstractController
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
     * @Route("/events", name="all_events")
     */
    public function findAll(EventRepository $repo, CommentRepository $commentRepository, RankingRepository $rankingRepository, RateRepository $rateRepository)
    {
        $events = $repo->findAll();
        foreach ($events as $event) {
            $array[] = [
                'id' => $event->getId(),
                'name' => $event->getName(),
                'description' => $event->getDescription(),
                'date' => $event->getDate(),
                'nbParticipants' => $event->getNbParticipants(),
                'available' => $event->getAvailable(),
                'selected' => $event->getSelected(),
                'image' => $event->getImage(),
                'vote' => $event->getVotes(),
                'comments' => $commentRepository->findByEventQueryBuilder($event),
                'rates' => $rateRepository->findByEventQueryBuilder($event),
                'rankings' => $rankingRepository->findByEventQueryBuilder($event),
                'style' => $event->getStyle()->getName(),
               
            ];
            }
    $jsonEvents = \json_encode($array);
    $response = new Response($jsonEvents);
    $response->headers->set('Content-Type', 'application/json');
    // $response->headers->set('Access-Control-Allow-Origin', '');
    return $response;
    }


    /**
     * @Route("/event/new", name="event_new", methods={"POST"})
     */
    public function newEventAction(Request $request): Response
    {
        $body = $request->request->all();
        $return = [];
        $event = new Event();
        $form = $this->createForm(EventType::class, $event);
        $form->submit($body);
        $form->handleRequest($request);
        if ($form->isSubmitted()) {
        //    $return['coucou'] = 'test';
            if($form->isValid()) {
                $entityManager = $this->getDoctrine()->getManager();
                $entityManager->persist($event);
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
     * @Route("/event/{id}", name="event_by_one", methods={"GET"})
     */
    public function findOneEvent(Event $event, CommentRepository $commentRepository, RankingRepository $rankingRepository, RateRepository $rateRepository)
    {
        $rate = $rateRepository->findByEventQueryBuilder($event);
        $ranking = $rankingRepository->findByEventQueryBuilder($event);
        $comment = $commentRepository->findByEventQueryBuilder($event);
        $currentValue = $event;
        $array = [
            'id' => $currentValue->getId(),
            'name' => $currentValue->getName(),
            'description' => $currentValue->getDescription(),
            'date' => $currentValue->getDate(),
            'nbParticipants' => $currentValue->getNbParticipants(),
            'available' => $currentValue->getAvailable(),
            'selected' => $currentValue->getSelected(),
            'image' => $currentValue->getImage(),
            'vote' => $event->getVotes(),
            'comments' => $comment,
            'rates' => $rate,
            'rankings' => $ranking,
            'style' => $currentValue->getStyle()->getName()
        ];

    $jsonOneEvent = \json_encode($array);
    $response = new Response($jsonOneEvent);
    $response->headers->set('Content-Type', 'application/json');
    // $response->headers->set('Access-Control-Allow-Origin', '');
    return $response;
    }
	
    /**
     * @Route("/private/event/vote/{id}", name="api_event_vote")
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
//	$user = $this->get('security.token_storage')->getToken()->getUser();
//$user =�$storage->getToken()->getUser();	
//$user = $storage;
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

        $jsonVoteEvent = \json_encode($eventVote);
        $response = new Response($jsonVoteEvent);
        $response->headers->set('Content-Type', 'application/json');
        return $response;
    }
}
