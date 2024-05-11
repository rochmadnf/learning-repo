<?php

namespace App\Livewire;

use Livewire\Component;

class Example extends Component
{
    public int $counter = 0;

    public function render()
    {
        return view('livewire.example');
    }
}
