<?php

use entity\Task;

require_once(__DIR__ . '/../../config.php');

$entityManager = GetEntityManager();
$tasks = $entityManager->getRepository(Task::class)->findAll();

var_dump($tasks);