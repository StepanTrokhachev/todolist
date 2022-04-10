<?php
// cli-config.php
require_once "config.php";
$entityManager=GetEntityManager();
return \Doctrine\ORM\Tools\Console\ConsoleRunner::createHelperSet($entityManager);
