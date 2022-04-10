<?php

use entity\Client;

require_once(__DIR__ . '/../../config.php');
require_once(__DIR__ . '/../entity/Client.php');

//create a first customer
$entityManager = GetEntityManager();
$user = new Client();
$user->setClient('test2');
//$user->setId(1);
$entityManager->persist($user);
$entityManager->flush();

//echo "Created customer with id " . $Product->getId() . PHP_EOL;

// List of all customers:
//
//$Product = $entityManager->getRepository(Product::class)->findAll();
//
//print 'Customers: ' . print_r($Product, true) . PHP_EOL;