<?php

namespace App\Livewire\Forms;

use Livewire\Attributes\Validate;
use Livewire\Form;

class BookForm extends Form
{
    #[Validate(rule: ['required', 'min:5'], message: ['required' => ':attribute is required'], as: 'Title of the book')]
    public string $title = '';

    #[Validate(rule: ['required', 'min:5'], message: ['required' => ':attribute is required'], as: 'Author of the book')]
    public string $author = '';

    public function create()
    {
        $this->validate();

        auth()->user()->books()->create([
            'title' => $this->title,
            'author' => $this->author,
        ]);

        $this->reset();
    }
}
