<?php
require_once 'connection.php';
date_default_timezone_set('Asia/Makassar');

$sql = 'SELECT * FROM random_number';
$data = mysqli_fetch_all(mysqli_query($conn, $sql), MYSQLI_ASSOC);
?>


<!DOCTYPE html>
<html lang="id">
 <head>
    <title>Cron Job Test</title>
    <meta charset="UTF-8"/>
    <meta name="author" content="Rochmad Nurul Fahmi"/>
 </head>
 <body>
     <h1>Data</h1>
     <table border="1" cellspacing="2" cellpadding="15">
         <thead>
             <th>#</th>
             <th>Random Number</th>
             <th>Time (WITA)</th>
         </thead>
         <tbody>
             <?php $no = 1; foreach($data as $item) : ?>
                <tr>
                    <td><?= $no++;?></td>
                    <td><?= $item['digit'];?></td>
                    <td><?= date("d-m-Y H:i:s", $item['time']);?></td>
                </tr>
             <?php endforeach; ?>
         </tbody>
     </table>
     <script>
         window.addEventListener('load', (event) => {
            document.querySelector('.disclaimer').remove();
        });
     </script>
 </body>
</html>
