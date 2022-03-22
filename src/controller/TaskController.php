<?php

namespace controller;
use dto\ClientDto;
use dto\TaskDto;
use dto\TaskWithClientsDto;
use entity\Task;
use service\TaskService;

require_once(__DIR__ . '/../../config.php');

class TaskController
{
    private $taskService;

    public function __construct ( TaskService $taskService){
        $this->taskService=$taskService;
    }

    public function save($request)
    {
        $taskWithClientsDto = $this->toTaskWithClientsDto($request);
        $this->taskService->save($taskWithClientsDto);
    }

    private function toTaskWithClientsDto ($incomingData)
    {
        $dto = new TaskWithClientsDto();
        $dto->id = $incomingData['id'];
        $dto->name = $incomingData['name'];
        $dto->dateofcreate = $incomingData['date'];
        $dto->deadline = $incomingData['deadline'];
        $dto->clients = $incomingData['clients'];

        return $dto;
    }

    public function getTask()
    {
        return ($this->taskService->get());
    }

    public function deleteTask()
    {
        $this->taskService->delete($_REQUEST['id']);
    }

}