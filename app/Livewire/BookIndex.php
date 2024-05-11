<?php

namespace App\Livewire;

use App\Livewire\Forms\BookForm;
use Livewire\Component;

class BookIndex extends Component
{

    public BookForm $form;

    public function submit()
    {
        $this->form->create();
    }

    public function render()
    {
        return view('livewire.book-index', [
            'books' => auth()->user()->books()->latest()->get(),
        ]);
    }
}
