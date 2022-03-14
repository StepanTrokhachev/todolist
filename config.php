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
    $config = Setup::createConfiguration(true, __DIR__ . '/var/cache', new ArrayCache());
    $driver = new AnnotationDriver(new AnnotationReader(), [__DIR__ . '/entity']);
    $dbParams = array(
        'driver' => 'pdo_mysql',
        'user' => 'root',
        'password' => 'QAZ_wsx_EDC1809',
        'dbname' => 'shop',
    );
    $connectionParams = array(
        'dbname' => 'postgres',
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

$entityManager = GetEntityManager();

$sql = "SELECT * FROM task";

$result = $entityManager->getConnection()->executeQuery($sql)->fetchAll(PDO::FETCH_ASSOC);

var_dump(
    $result
);