<!-- C:\\Users\\Metype\\Desktop\\StuffIDontWantOnTheDesktop\\php\\php.exe -S localhost:8000 -->

<script>
var args=<?php echo json_encode($_GET);?>;
var type=args.page;
var validPages=<?php echo json_encode(file("validPages.txt"));?>;
</script>

<html>
    <head>
        <link rel="icon" href="favicon.png"></link>
        <script src="https://code.jquery.com/jquery-3.4.1.js"></script>
        <style><?php include 'style.css'; ?></style>
        <title class="title"></title>
    </head>
    <body>
        <div class="header"></div>
        <div class="main"></div>
        <script src="index.js"></script>
    </body>
</html>