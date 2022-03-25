<?php

namespace dto\task;

use dto\AbstractDto;

class TaskDto extends AbstractDto
{
    public $id;

    public $name;

    public $dateOfCreate;

    public $deadline;
}