<?php

namespace service;

use Doctrine\ORM\EntityManager;
use dto\client\ClientDto;
use entity\Client;
use Symfony\Component\Config\Definition\Exception\Exception;
use Twig_Environment;

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

    public function checkNameUser($name)
    {
        if (empty($name)) {
            throw new Exception("Вы не ввели имя");
        }
    }

    public function save(ClientDto $clientDto)
    {
        try {
            $this->checkNameUser($clientDto->name);
            if (empty($clientDto->id)) {
                $client = new Client();
            } else {
                $client = $this->entityManager->find(Client::class, $clientDto->id);
            }
            $client->setClient($clientDto->name);
            $this->entityManager->persist($client);
            $this->entityManager->flush();
        } catch (Exception $e) {
            $exceptionText = $e->getMessage();
            echo json_encode(['errMsg' => $exceptionText]);
            throw new Exception();
        }
    }

    public function delete(int $id)
    {
        $client = $this->entityManager->getRepository(Client::class)->findOneBy([
            'id' => $id,
        ]);
        $this->entityManager->persist($client);
        $this->entityManager->remove($client);
        $this->entityManager->flush();
    }

    public function Pdf()
    {
        $loader = new \Twig\Loader\FilesystemLoader('../templates');
        $twig = new Twig_Environment($loader);
        $template = $twig->loadTemplate('client.html');
        $entityManager = GetEntityManager();
        /** @var Client[] $clients */
        $clients = $entityManager->getRepository(Client::class)->findAll();
        $result = [];
        foreach ($clients as $client) {
            $result[] = $client->toDto();
        }
        sort($result);
        $title = 'Отчет по пользователям';
        $mpdf = new \Mpdf\Mpdf();
        $mpdf->WriteHTML($template->render(array(
            'title' => $title,
            'clients' => $result
        )));
        $mpdf->Output();
    }

}
