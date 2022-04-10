<?php

namespace service;

use Doctrine\ORM\EntityManager;
use dto\task\TaskWithClientsDto;
use entity\Client;
use entity\Task;
use Symfony\Component\Config\Definition\Exception\Exception;
use Twig_Environment;


class TaskService
{
    private $entityManager;

    public function __construct(EntityManager $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function get()
    {
        /** @var Task[] $tasks */
        $tasks = $this->entityManager->getRepository(Task::class)->findAll();
        $dtos = [];
        foreach ($tasks as $task) {
            $dtos[] = $task->toDtoWithClients();
        }
        return $dtos;
    }

    public function checkCorrect($dateCreate, $deadline, $name)
    {
        if (new \DateTime($dateCreate) < new \DateTime($deadline)) {
            throw new Exception("Неправильно указаны даты");
        }
        if (empty($name)) {
            throw new Exception("Не ввели название задачи");
        }
    }

    public function save(TaskWithClientsDto $taskWithClientsDto)
    {
        try {
            $this->checkCorrect($taskWithClientsDto->deadline, $taskWithClientsDto->dateOfCreate, $taskWithClientsDto->name);
            if (empty($taskWithClientsDto->id)) {
                $task = new Task();
            } else {
                $task = $this->entityManager->getRepository(Task::class)->find($taskWithClientsDto->id);
            }
            $task->setName($taskWithClientsDto->name);
            $task->setDateOfCreate(new \DateTime($taskWithClientsDto->dateOfCreate));
            $task->setDeadline(new \DateTime($taskWithClientsDto->deadline));

            /** @var Client $client */
            foreach ($task->getUsers()->getValues() as $client) {
                if (!in_array($client->getId(), $taskWithClientsDto->clients)) {
                    $task->removeClient($client);
                    $client->removeTask($task);
                }
            }

            foreach ($taskWithClientsDto->clients as $clientId) {
                /** @var Client $client */
                $client = $this->entityManager->getRepository(Client::class)->find($clientId);
                $task->addClient($client);
                $client->addTask($task);
            }
            $this->entityManager->persist($task);
            $this->entityManager->flush();
        } catch (Exception $e) {
            $exceptionText = $e->getMessage();
            echo json_encode(['errMsg' => $exceptionText]);
            throw new \Exception();
        }
    }

    public function delete(int $id)
    {
        $task = $this->entityManager->getRepository(Task::class)->findOneBy([
            'id' => $id,
        ]);
        $this->entityManager->persist($task);
        $this->entityManager->remove($task);
        $this->entityManager->flush();
    }

    public function Pdf()
    {
        $loader = new \Twig\Loader\FilesystemLoader('../templates');
        $twig = new Twig_Environment($loader);
        $template = $twig->loadTemplate('task.html');
        $entityManager = GetEntityManager();
        /** @var Task[] $tasks */
        $tasks = $entityManager->getRepository(Task::class)->findAll();
        $result = [];
        foreach ($tasks as $task) {
            $result[] = $task->toDtoWithClients();
        }
        sort($result);
        $title = 'Отчет по задачам';
        $mpdf = new \Mpdf\Mpdf();
        $mpdf->WriteHTML($template->render(array(
            'title' => $title,
            'tasks' => $result
        )));
        $mpdf->Output();
    }

}