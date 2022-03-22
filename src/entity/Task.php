<?php
namespace  entity;
use Cassandra\Date;
use Doctrine\ORM\Mapping as ORM;
use Doctrine\ORM\Mapping\Entity;
use Doctrine\ORM\Mapping\ManyToMany;
use Doctrine\ORM\Mapping\JoinTable;
use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use dto\AbstractDto;
use dto\TaskDto;
use dto\TaskWithClientsDto;

/** @Entity
 */
class Task
{

//    /**
//     * @ManyToMany(targetEntity="Client", mappedBy="tasks")
//     */
//    private $users;

    /**
     * @ORM\ManyToMany(targetEntity="entity\Client", mappedBy="task")
     */
    private $users;

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
     * @ORM\Column(type="datetime")
     */
    private $dateofcreate;
    /**
     * @ORM\Column(type="datetime")
     */
    private $deadline;

    public function setId($id)
    {
        $this->id = $id;
    }

    public function setName($name)
    {
        $this->name = $name;
    }

    public function setDateOfCreate($dateofcreate)
    {
        $this->dateofcreate = $dateofcreate;
    }

    public function setDeadline($deadline)
    {
        $this->deadline = $deadline;
    }

    public function getId()
    {
        return $this->id;
    }


    public function getName()
    {
        return $this->name;
    }

    public function getDateOfCreate(): \DateTime
    {
        return $this->dateofcreate;
    }

    public function getDeadline(): \DateTime
    {
        return $this->deadline;
    }

    public function __construct() {
        $this->users = new ArrayCollection();
    }

    /**
     * @return Collection
     */
    public function getUsers(): Collection
    {
        return $this->users;
    }

    /**
     * @param ArrayCollection $users
     */
    public function setUsers(ArrayCollection $users): void
    {
        $this->users = $users;
    }

    public function addUser(Client $client)
    {
        $this->users->add($client);
        return $this;
    }

    public function toDto(): AbstractDto
    {
        $toDtoUser = new TaskDto();
        $toDtoUser->id = $this->getId();
        $toDtoUser->name = $this->getName();
        $toDtoUser->dateofcreate = $this->getDateOfCreate()->format('d.m.Y');
        $toDtoUser->deadline = $this->getDeadline()->format('d.m.Y');

        return $toDtoUser;

    }

    public function toDtoWithClients (){
        /** @var TaskWithClientsDto  $taskWithClientsDto  */
        $taskWithClientsDto = $this->toDto();
        /** @var Client $client */
        foreach ($this->getUsers()->getValues() as  $client){
            $taskWithClientsDto->clients[]=$client->toDto();
        }
        return $taskWithClientsDto;
    }


}