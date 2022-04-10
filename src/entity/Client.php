<?php

namespace entity;

use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\ManyToMany;
use Doctrine\ORM\Mapping\JoinTable;
use dto\AbstractDto;
use dto\client\ClientDto;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;


/** @Entity */
class Client
{
    /**
     * @ORM\Id
     * @ORM\Column(type="integer")
     * @ORM\GeneratedValue
     */
    private $id;

    /**
     * @ORM\Column(type="string")
     */
    private $client;

    /**
     * @ORM\ManyToMany(targetEntity="entity\Task", inversedBy="users")
     * @ORM\JoinTable(name="clients_tasks",
     *              joinColumns={@ORM\JoinColumn(name="client_id", referencedColumnName="id")},
     *              inverseJoinColumns={@ORM\JoinColumn(name="task_id", referencedColumnName="id")}
     * )
     */
    private $task;

    public function __construct()
    {
        $this->task = new ArrayCollection();
    }

    /**
     * @return Collection
     */
    public function getTask(): Collection
    {
        return $this->task;
    }

    public function setId($id)
    {
        $this->id = $id;
    }

    public function getId()
    {
        return $this->id;
    }

    public function setClient($client)
    {
        $this->client = $client;
        return $this;
    }

    public function getClient()
    {
        return $this->client;
    }

    public function addTask(Task $task)
    {
        if (!$this->task->contains($task)) {
            $this->task->add($task);
            return $this;
        }
    }

    public function removeTask(Task $task)
    {
        if ($this->task->contains($task)) {
            $this->task->removeElement($task);
            return $this;
        }
    }

    public function toDto(): AbstractDto
    {
        $toDtoUser = new ClientDto();
        $toDtoUser->id = $this->getId();
        $toDtoUser->name = $this->getClient();
        return $toDtoUser;
    }

}