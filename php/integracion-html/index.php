<?php
    $se_hablo_de_bruno = true;

?>


<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <h1>HOLA MUNDO </h1>
    <?php echo "<p>hola este es php</p>"  ?>
    <?= "<i> Esta es otra forma </i>" ?>



    <!-- condicionales  -->

    <?php if ($se_hablo_de_bruno) { ?>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQocJ5pZ_TN9hVhQiFLAK21u1ISHheOxvaYKWtkmmXelYqTFMQfJThUJ_jvovRKaKnn79I&usqp=CAU' alt='bruno sorprendido'/>
    
    <?php }else { ?>

        <img src='https://studiosol-a.akamaihd.net/letras/215x215/fotos/e/0/a/f/e0af6a91973bbef6efcd9a426414c910.jpg' alt='bruno contento'/>
    
    <?php } ?>


    <!-- este es mejor hacer -->

    <?php if ($se_hablo_de_bruno): ?>
        <img src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQocJ5pZ_TN9hVhQiFLAK21u1ISHheOxvaYKWtkmmXelYqTFMQfJThUJ_jvovRKaKnn79I&usqp=CAU' alt='bruno sorprendido'/>
    
    <?php else: ?>

        <img src='https://studiosol-a.akamaihd.net/letras/215x215/fotos/e/0/a/f/e0af6a91973bbef6efcd9a426414c910.jpg' alt='bruno contento'/>
    
    <?php endif; ?>
    <!-- esta es la mejor manera así no quedan llaves sueltas -->


    <!-- ciclos -->
    <h2>Las tablas de multiplicar:</h2>
  <table>
    <tr>
      <th>X</th>
      <?php for ($i = 1; $i <= 10; $i++) : ?>

        <th><?= $i ?></th>

      <?php endfor; ?>
    </tr>
    <?php for ($j = 1; $j <= 10; $j++) : ?>
      <tr>
        <td><b><?= $j ?></b></td>
        <?php for ($k = 1; $k <= 10; $k++) : ?>
          <td><?= $j *  $k ?></td>
        <?php endfor; ?>
      </tr>
    <?php endfor; ?>
    <table>

    <?php $i = 1; ?>
    <?php while ($i <= 5): ?>
        <p>Iteración número: <?= $i ?></p>
        <?php $i++; ?>
    <?php endwhile; ?>
    
</body>
</html>