<?php

$userAgent = $_SERVER["HTTP_USER_AGENT"];

var_dump($userAgent);
echo "<br/>";
var_dump(md5($userAgent));

?>

<html>

<head>
    <title>Test</title>
</head>

<body>
    <div>
        <p>User Device Information: <span><?= $userAgent ?></span></p>
        <p>User Device Resolution: [Lebar: <span id="lebar"></span> | Tinggi: <span id="tinggi"></span>]</p>
    </div>

    <script>
        window.addEventListener("load", () => {
            document.getElementById("lebar").textContent = window.screen.width;
            document.getElementById("tinggi").textContent = window.screen.height;
        });
    </script>
</body>

</html>