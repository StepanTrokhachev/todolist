<?php
require_once "vendor/autoload.php";
require_once 'config.php';
$loader = new \Twig\Loader\FilesystemLoader('templates');
//$options= array(
//    'cache' => 'var/cache'
//);
$twig = new Twig_Environment($loader);
$template = $twig->loadTemplate('twig.html');
$entityManager = GetEntityManager();
$sql = "SELECT * FROM task";
$result = $entityManager->getConnection()->executeQuery($sql)->fetchAll(PDO::FETCH_ASSOC);
$title = 'Отчет по пользователям';
echo $template->render(array(
    'title' => $title,
    'tasks'=>$result
));