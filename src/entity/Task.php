<?php

namespace entity;

use Cassandra\Date;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\ManyToMany;
use Doctrine\ORM\Mapping\JoinTable;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use dto\AbstractDto;
use dto\task\TaskDto;
use dto\task\TaskWithClientsDto;

/** @Entity */
class Task
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
    private $name;

    /**
     * @ORM\Column(name="date_of_create", type="datetime")
     */
    private $dateOfCreate;

    /**
     * @ORM\Column(type="datetime")
     */
    private $deadline;

    /**
     * @ORM\ManyToMany(targetEntity="entity\Client", mappedBy="task")
     */
    private $users;

    public function __construct()
    {
        $this->users = new ArrayCollection();
    }

    public function setId($id)
    {
        $this->id = $id;
    }

    public function getId()
    {
        return $this->id;
    }

    public function setName($name)
    {
        $this->name = $name;
    }

    public function getName()
    {
        return $this->name;
    }

    public function setDateOfCreate($dateOfCreate)
    {
        $this->dateOfCreate = $dateOfCreate;
    }

    public function getDateOfCreate(): \DateTime
    {
        return $this->dateOfCreate;
    }

    public function setDeadline($deadline)
    {
        $this->deadline = $deadline;
    }

    public function getDeadline(): \DateTime
    {
        return $this->deadline;
    }

    /**
     * @param ArrayCollection $users
     */
    public function setUsers(ArrayCollection $users): void
    {
        $this->users = $users;
    }

    /**
     * @return Collection
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    public function addClient(Client $client)
    {
        if (!$this->users->contains($client)) {
            $this->users->add($client);
            return $this;
        }
    }

    public function removeClient(Client $client)
    {
        if ($this->users->contains($client)) {
            $this->users->removeElement($client);
            return $this;
        }
    }

    public function toDto(): AbstractDto
    {
        $toDtoUser = new TaskDto();
        $toDtoUser->id = $this->getId();
        $toDtoUser->name = $this->getName();
        $toDtoUser->dateOfCreate = $this->getDateOfCreate()->format('d.m.Y');
        $toDtoUser->deadline = $this->getDeadline()->format('d.m.Y');
        return $toDtoUser;
    }

    public function toDtoWithClients()
    {
        /** @var TaskWithClientsDto $taskWithClientsDto */
        $taskWithClientsDto = $this->toDto();
        /** @var Client $client */
        foreach ($this->getUsers()->getValues() as $client) {
            $taskWithClientsDto->clients[] = $client->toDto();
        }
        return $taskWithClientsDto;
    }

}