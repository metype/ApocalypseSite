<!-- C:\\Users\\Metype\\Desktop\\StuffIDontWantOnTheDesktop\\php\\php.exe -S localhost:8000 -->

<script>
var args=<?php echo json_encode($_GET);?>;
var type=args.page;
var validPages=<?php echo json_encode(file("validPages.txt"));?>;
var description=<?php echo json_encode(file("description.txt"));?>;
</script>

<html>
    <head>
        <link rel="icon" href="favicon.png"></link>
        <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
        <link href="https://fonts.googleapis.com/css2?family=Sen:wght@700&display=swap" rel="stylesheet">
        <style><?php include 'style.css'; ?></style>
        <title class="title"></title>
    </head>
    <body>
        <nav class="navbar">

        </nav>
        <div class="main"></div>
        <script><?php include 'index.js'; ?></script>
    </body>
</html>