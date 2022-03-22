<?php
namespace  entity;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\ManyToMany;
use Doctrine\ORM\Mapping\JoinTable;
use dto\AbstractDto;
use dto\ClientDto;
use Doctrine\Common\Collections\Collection;
use Doctrine\Common\Collections\ArrayCollection;



/** @Entity */
class Client
{
//    /**
//     * Many Users have Many Groups.
//     * @ManyToMany(targetEntity="Task", inversedBy="client")
//     * @JoinTable(name="clients_tasks")
//     */
//    private $task;
    /**
     * @ORM\ManyToMany(targetEntity="entity\Task", inversedBy="users")
     * @ORM\JoinTable(name="clients_tasks",
     *              joinColumns={@ORM\JoinColumn(name="client_id", referencedColumnName="id")},
     *              inverseJoinColumns={@ORM\JoinColumn(name="task_id", referencedColumnName="id")}
     * )
     */
    private $task;

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

    public function addTask(Task $task)
    {
        $this->task->add($task);
        return $this;
    }

    public function setId($id)
    {
        $this->id = $id;
    }

    public function setClient($client)
    {
        $this->client = $client;
        return $this;
    }

    public function getId()
    {
        return $this->id;
    }

    public function getClient()
    {
        return $this->client;
    }

    public function toDto(): AbstractDto
    {
        $toDtoUser = new ClientDto();
        $toDtoUser->id = $this->getId();
        $toDtoUser->name = $this->getClient();
        return $toDtoUser;
    }


}