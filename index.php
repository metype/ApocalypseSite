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
            <ul class="navbar-nav">
                <li class="nav-item">
                    <a href="?page=home">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" class="fa-primary"></path></svg>
                        <span class="link-text">Aliens</span>
                    </a>
                </li>
            </ul>
        </nav>
        <div class="main"></div>
        <script><?php include 'index.js'; ?></script>
    </body>
</html>