<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>formulario get</title>
</head>
<body>
    <!-- <form action="./server.php" method="get">
        <label for="nombre">nombre</label>
        <input type="text" name="nombre" id="nombre">
        <label for="edad">edad</label>
        <input type="text" name="edad" id="edad">

        <button type="submit">enviar</button>
    </form> -->


    <!-- <form action="./post.php" method="post">
        <label for="nombre">nombre</label>
        <input type="text" name="nombre" id="nombre">
        <label for="edad">edad</label>
        <input type="text" name="edad" id="edad">

        <button type="submit">enviar</button>
    </form>  -->

<!-- PARA IMAGENES-->

    <form action="./file.php" method="post" enctype="multipart/form-data">
        <label for="nombre">nombre</label>
        <input type="text" name="nombre" id="nombre">
        <label for="image">edad</label>
        <input type="file" name="image" id="image">

        <button type="submit">enviar</button>
    </form> 

</body>
</html> 