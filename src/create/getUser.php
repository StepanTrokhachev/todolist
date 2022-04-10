<?php

use entity\Client;

require_once(__DIR__ . '/../../config.php');

$entityManager = GetEntityManager();
$user = $entityManager->getRepository(Client::class)->findAll();

var_dump($user);