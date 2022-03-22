<?php
//register_shutdown_function(function () {
//   var_dump(error_get_last());
//   die();
//});
require_once __DIR__ . '/../config.php';
$phpInput = json_decode(file_get_contents("php://input"), true);
$_REQUEST = array_merge($_REQUEST, $phpInput === null ? [] : $phpInput);
    if ($_REQUEST['act'] == 'Client') {
        $entityManager = GetEntityManager();
        $service = new \service\ClientService($entityManager); //entitymanager
        $clientController = new \controller\ClientController($service);
        $response = $clientController->{$_REQUEST['method']}($_REQUEST);
        if (!empty($response)) {
            echo json_encode($response);
        }
    }
    if ($_REQUEST['act'] == 'Task') {
//        var_dump($_REQUEST);
//        die();
//        $_REQUEST['clients'] = [32,33,34,35,36];
        $entityManager = GetEntityManager();
        $service = new \service\TaskService($entityManager); //entitymanager
        $clientController = new \controller\TaskController($service);
        $response = $clientController->{$_REQUEST['method']}($_REQUEST);
        if (!empty($response)) {
            echo json_encode($response);
        }
    }


