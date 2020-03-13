<!-- C:\\Users\\Metype\\Desktop\\StuffIDontWantOnTheDesktop\\php\\php.exe -S localhost:8000 -->

<script>
var args=<?php echo json_encode($_GET);?>;
var type=args.page;
if(type==undefined){
    window.location.href = '?page=home';
}
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
        <nav class='navbar'>
            <ul class="navbar-nav">
                <li class="logo">
                    <span class="link-text">The Apocalypse: First Blood</span>
                    <span class="logo-text">T A:</span>
                    <span class="logo-text">F B</span>
                </li>
                <li class="nav-item">
                    <a href="?page=home" class="nav-link">
                        <svg aria-hidden="true" focusable="false" data-prefix="fas" data-icon="home" class="svg-inline--fa fa-home fa-w-18" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path fill="currentColor" d="M280.37 148.26L96 300.11V464a16 16 0 0 0 16 16l112.06-.29a16 16 0 0 0 15.92-16V368a16 16 0 0 1 16-16h64a16 16 0 0 1 16 16v95.64a16 16 0 0 0 16 16.05L464 480a16 16 0 0 0 16-16V300L295.67 148.26a12.19 12.19 0 0 0-15.3 0zM571.6 251.47L488 182.56V44.05a12 12 0 0 0-12-12h-56a12 12 0 0 0-12 12v72.61L318.47 43a48 48 0 0 0-61 0L4.34 251.47a12 12 0 0 0-1.6 16.9l25.5 31A12 12 0 0 0 45.15 301l235.22-193.74a12.19 12.19 0 0 1 15.3 0L530.9 301a12 12 0 0 0 16.9-1.6l25.5-31a12 12 0 0 0-1.7-16.93z" class="fa-primary"></path></svg>
                        <span class="link-text">Home</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="?page=contact" class="nav-link">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="phone" class="svg-inline--fa fa-phone fa-w-16" role="img" viewBox="0 0 512 512"><path class="fa-primary" fill="currentColor" d="M493.4 24.6l-104-24c-11.3-2.6-22.9 3.3-27.5 13.9l-48 112c-4.2 9.8-1.4 21.3 6.9 28l60.6 49.6c-36 76.7-98.9 140.5-177.2 177.2l-49.6-60.6c-6.8-8.3-18.2-11.1-28-6.9l-112 48C3.9 366.5-2 378.1.6 389.4l24 104C27.1 504.2 36.7 512 48 512c256.1 0 464-207.5 464-464 0-11.2-7.7-20.9-18.6-23.4z"/></svg>    
                        <span class="link-text">Contact</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="?page=about" class="nav-link">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="book" class="svg-inline--fa fa-book fa-w-14" role="img" viewBox="0 0 448 512"><path class=fa-primary" fill="currentColor" d="M448 360V24c0-13.3-10.7-24-24-24H96C43 0 0 43 0 96v320c0 53 43 96 96 96h328c13.3 0 24-10.7 24-24v-16c0-7.5-3.5-14.3-8.9-18.7-4.2-15.4-4.2-59.3 0-74.7 5.4-4.3 8.9-11.1 8.9-18.6zM128 134c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm0 64c0-3.3 2.7-6 6-6h212c3.3 0 6 2.7 6 6v20c0 3.3-2.7 6-6 6H134c-3.3 0-6-2.7-6-6v-20zm253.4 250H96c-17.7 0-32-14.3-32-32 0-17.6 14.4-32 32-32h285.4c-1.9 17.1-1.9 46.9 0 64z"/></svg>
                        <span class="link-text">About</span>
                    </a>
                </li>
                <li class="nav-item">
                    <a href="?page=attributions" class="nav-link">
                        <svg xmlns="http://www.w3.org/2000/svg" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="info-circle" class="svg-inline--fa fa-info-circle fa-w-16" role="img" viewBox="0 0 512 512"><path class=fa-primary" fill="currentColor" d="M256 8C119.043 8 8 119.083 8 256c0 136.997 111.043 248 248 248s248-111.003 248-248C504 119.083 392.957 8 256 8zm0 110c23.196 0 42 18.804 42 42s-18.804 42-42 42-42-18.804-42-42 18.804-42 42-42zm56 254c0 6.627-5.373 12-12 12h-88c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h12v-64h-12c-6.627 0-12-5.373-12-12v-24c0-6.627 5.373-12 12-12h64c6.627 0 12 5.373 12 12v100h12c6.627 0 12 5.373 12 12v24z"/></svg>
                        <span class="link-text">Attributions</span>
                    </a>
                </li>
            </ul>
        </nav>
        <div class="footer">"The Apocalypse: First Blood" is owned and maintained by NWG Games with minor assistance from 1Maker Studios, please do not redistribute copies of "The Apocalypse: First Blood" or create any modifications to the game that bypass restrctions against playing multiplayer with said clients. Thank you.</div>
        <div class="main"></div>
        <script><?php include 'index.js'; ?></script>
    </body>
</html>