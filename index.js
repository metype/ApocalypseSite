String.prototype.capitalizeFirstLetter = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}
let timer = 5;
let error;
for (let i in validPages) {
    $('<button/>').addClass('button').attr("onClick", "window.location.href='?page=" + validPages[i].split("\n")[0].split("\r")[0] + "'").text(validPages[i].split("\n")[0].split("\r")[0].capitalizeFirstLetter()).appendTo($('div.header'));
}
$('<h1/>').addClass('title').attr("style", "text-align:center").appendTo($('div.header'));
$('h1.title').text(type.capitalizeFirstLetter());

if (validPages.indexOf(type + "\n") > -1) {
    $('title.title').text('The Apocalypse: First Blood - ' + type.capitalizeFirstLetter());
    window[type]();
} else {
    $('<h3/>').addClass('error').attr("style", "text-align:center").appendTo($('div.main'));
    $('title.title').text('The Apocalypse: First Blood - Error');
    $('h3.error').text("404 Error, unable to find page : " + type.toUpperCase() + "\n Redirecting to Home in : " + timer).addClass("error");
    error = window.setInterval(function () { errorHandler(404, " unable to find page : " + type.toUpperCase()); }, 1000);
}

function errorHandler(errnum, err) {
    timer--;
    $('h3.error').text(errnum + " Error," + err).append("\nRedirecting to Home in : " + timer);
    if (timer == 0) {
        window.location.href = '?page=home';
        clearInterval(error);
        timer = 5;
    }
}

function home() {
    $('<div/>').addClass('info').appendTo($('div.main'));
    $('<h3/>').text("The Apocalypse: First Blood").attr('style', 'height:1000').appendTo("div.info");
}

function contact() {
    $('<div/>').addClass('info').attr('style', 'background-color:#7289DA').appendTo($('div.main'));
    $('<img/>').attr('style', 'height:100').addClass("discordLogo").attr("src", 'Discord-Logo+Wordmark-Color.png').appendTo("div.info");
    $('<a/>').attr('href', 'https://discord.gg/UmrZT3').text("https://discord.gg/UmrZT3").appendTo('div.info');

}