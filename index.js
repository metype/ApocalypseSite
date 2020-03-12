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
    $('<div/>').addClass('info').attr('style', 'height:1000').appendTo($('div.main'));
    $('<h3/>').text("The Apocalypse: First Blood").appendTo("div.info");
    $('<p/>').text(description).addClass("homePageParagraph1").attr('style', 'font-size:10').appendTo('div.info');
}

function contact() {
    $('<div/>').addClass('info').attr('style', 'background-color:#FFFFF').appendTo($('div.main'));
    $('<a/>').attr('href', 'https://discord.gg/UmrZT3').attr('style', 'height:100px,float:right').attr('target', '_blank').addClass("discordLink").appendTo('div.info');
    $('<img/>').attr('style', 'height:100px;padding:25px').addClass("discordLogo").attr("src", 'Discord-Logo+Wordmark-Color.png').appendTo("a.discordLink");
    $('<a/>').attr('href', 'https://twitter.com/GamesNwg').attr('style', 'height:100px,float:left').attr('target', '_blank').addClass("twitterLink").appendTo('div.info');
    $('<img/>').attr('style', 'height:100px;padding:25px').addClass("twitterLogo").attr("src", 'Twitter_Logo_Blue.png').appendTo("a.twitterLink");
    $('<p/>').text("nwggamestudios@gmail.com").addClass("gmailAdress").appendTo('div.info');
}