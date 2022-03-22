<?php

namespace service;

use Doctrine\ORM\EntityManager;
use dto\ClientDto;
use entity\Client;

class ClientService
{
    private $entityManager;

    public function __construct(EntityManager $entityManager)
    {
        $this->entityManager = $entityManager;
    }

    public function get()
    {
        /** @var Client[] $clients */
        $clients = $this->entityManager->getRepository(Client::class)->findAll();
        $dtos = [];
        foreach ($clients as $client) {
            $dtos[] = $client->toDto();
        }
        return $dtos;
    }

    public function save(ClientDto $clientDto)
    {
        if (empty($client)) {
            $client = new Client();
        } else {
            $client = $this->entityManager->find(Client::class, $clientDto->id);
        }
        $client->setClient($clientDto->name);
        $this->entityManager->persist($client);
        $this->entityManager->flush();
    }
    public function delete(int $id){
        $client = $this->entityManager->getRepository(Client::class)->findOneBy([
            'id' => $id,
        ]);
        $this->entityManager->persist($client);
        $this->entityManager->remove($client);
        $this->entityManager->flush();
    }
}
