<div class="space-y-2 ">
    <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
        <div class="p-6 text-gray-900">
            <form wire:submit.prevent='submit' class="flex items-start gap-x-3">
                <div class="grow">
                    <label for="title" class="sr-only">Book title</label>
                    <input type="text" wire:model.blur='form.title' id="title" placeholder="Book title"
                        class="w-full border border-slate-300 rounded-lg">
                    @error('form.title')
                        <div class="mt-1 text-red-500">{{ $message }}</div>
                    @enderror
                </div>
                <div class="grow">
                    <label for="author" class="sr-only">Book author</label>
                    <input type="text" wire:model.blur='form.author' id="author" placeholder="Book author"
                        class="w-full border border-slate-300 rounded-lg">
                    @error('form.author')
                        <div class="mt-1 text-red-500">{{ $message }}</div>
                    @enderror
                </div>
                <button type="submit"
                    class="bg-blue-500 text-white py-2 px-4 rounded-lg font-medium disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer">
                    <span wire:loading.delay.long>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                            class="size-5 fill-white animate-spin mx-auto">
                            <path
                                d="M256 116a52 52 0 1 1 0-104 52 52 0 1 1 0 104zm0 364a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM448 288a32 32 0 1 1 0-64 32 32 0 1 1 0 64zM32 256a32 32 0 1 1 64 0 32 32 0 1 1 -64 0zm399.4-96.2A56 56 0 1 1 352.2 80.6a56 56 0 1 1 79.2 79.2zM97.6 414.4a32 32 0 1 1 45.3-45.3A32 32 0 1 1 97.6 414.4zm271.5 0a32 32 0 1 1 45.3-45.3 32 32 0 1 1 -45.3 45.3zM86.3 86.3a48 48 0 1 1 67.9 67.9A48 48 0 1 1 86.3 86.3z" />
                        </svg>
                    </span>
                    <span wire:loading.remove.delay.long>Submit</span>
                </button>
            </form>
        </div>
    </div>
    <div class="space-y-2">
        @foreach ($books as $book)
            <livewire:book-item :book="$book" wire:key="{{ $book->id }}" />
        @endforeach
    </div>
</div>
