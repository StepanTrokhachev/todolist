<?php

namespace service;

use Doctrine\ORM\EntityManager;
use dto\TaskDto;
use dto\TaskWithClientsDto;
use entity\Client;
use entity\Task;

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


    public function save(TaskWithClientsDto $taskWithClientsDto)
    {
        if (empty($task)) {
            $task = new Task();
        } else {
            $task = $this->entityManager->find(Task::class, $taskWithClientsDto->id);
        }
        $task->setName($taskWithClientsDto->name);
        $task->setDateOfCreate(new \DateTime($taskWithClientsDto->dateofcreate));
        $task->setDeadline(new \DateTime($taskWithClientsDto->deadline));
        $this->entityManager->persist($task);

        foreach ($taskWithClientsDto->clients as $clientId) {
            /** @var Client $client */
            $client = $this->entityManager->getRepository(Client::class)->find($clientId);
            $task->addUser($client);
            $client->addTask($task);
        }
        $this->entityManager->flush();
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
}