<?php

use Doctrine\Common\Annotations\AnnotationReader;
use Doctrine\Common\Cache\ArrayCache;
use Doctrine\ORM\EntityManager;
use Doctrine\ORM\Mapping\Driver\AnnotationDriver;
use Doctrine\ORM\Tools\Setup;

require_once "vendor/autoload.php";

/**
 * @return EntityManager
 * @throws \Doctrine\DBAL\DBALException
 * @throws \Doctrine\ORM\ORMException
 */
function GetEntityManager()
{
    $isDevMode = true;
    $proxyDir = null;
    $cache = null;
    $useSimpleAnnotationReader = false;
    $config = Setup::createAnnotationMetadataConfiguration(array(__DIR__."/src/entity"), $isDevMode, $proxyDir, $cache, $useSimpleAnnotationReader);
    $config = Setup::createConfiguration(true, __DIR__ . '/var/cache', new ArrayCache());
    $driver = new AnnotationDriver(new AnnotationReader(), [__DIR__ . '/src/entity']);
    $connectionParams = array(
        'dbname' => 'postgresbase',
        'user' => 'postgres',
        'password' => '280319',
        'host' => 'localhost',
        'driver' => 'pdo_pgsql',
    );
    $config->setMetadataDriverImpl($driver);
    $config->setProxyDir(__DIR__ . '/var/cache');
    $entityManager = EntityManager::create($connectionParams, $config);

    return $entityManager;
}

//$entityManager = GetEntityManager();
//
//$sql = "SELECT * FROM task";
//
//$result = $entityManager->getConnection()->executeQuery($sql)->fetchAll(PDO::FETCH_ASSOC);
//
//var_dump(
//    $result
//);