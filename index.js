String.prototype.capitalizeFirstLetter = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}

let timer = 5;
let error;

$('<h1/>').addClass('title').attr("style", "text-align:center").appendTo($('div.header'));
$('h1.title').text(type.split('/')[1].capitalizeFirstLetter());
if (validPages.indexOf(type.split('/')[1] + "\r\n") > -1) {
    $('title.title').text('The Apocalypse: First Blood - ' + type.split('/')[1].capitalizeFirstLetter());
} else {
    $('<h3/>').addClass('error').attr("style", "text-align:center").appendTo($('div.main'));
    $('title.title').text('The Apocalypse: First Blood - Error');
    $('h3.error').text("404 Error, unable to find page : " + type.split('/')[1].toUpperCase() + "\n Redirecting to Home in : " + timer).addClass("error");
    error = window.setInterval(function () { errorHandler(404, " unable to find page : " + type.split('/')[1].toUpperCase()); }, 1000);
}

function errorHandler(type, err) {
    timer--;
    $('h3.error').text(type + " Error," + err).append("\nRedirecting to Home in : " + timer);
    if (timer == 0) {
        window.location.href = 'home';
        clearInterval(error);
        timer = 5;
    }
}