<?php

namespace App\Livewire;

use App\Livewire\Forms\BookForm;
use Livewire\Component;

class CreateBook extends Component
{
    public BookForm $form;

    public function submit()
    {
        $this->form->create();
        $this->dispatch('book.created');
    }

    public function render()
    {
        return view('livewire.create-book');
    }
}
