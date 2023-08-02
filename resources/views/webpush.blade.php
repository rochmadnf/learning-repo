<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Kirim Kirim</title>
</head>

<body>
    <h1>Building with Love and Sebel</h1>

    <form action="{{ route('sendPush') }}" method="post"
        style="width:40%; justify-content:center; align-items:center; display: flex; flex-direction: column; gap: 1em;">
        @csrf
        <div>
            <input style="width: 100%;" type="text" name="title" placeholder="title">

        </div>
        <div>
            <textarea name="description" cols="30" rows="10">
            {{ old('description') }}
            </textarea>
        </div>

        <button type="submit">Kirim</button>
    </form>
</body>

</html>
