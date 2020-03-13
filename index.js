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

if (validPages.indexOf(type + "\n") > -1 || validPages.indexOf(type + "\r\n") > -1) {
    $('title.title').text('The Apocalypse: First Blood - ' + type.capitalizeFirstLetter());
    window[type]();
} else {
    $('<div/>').addClass('error').appendTo($('div.main'));
    $('<h3/>').addClass('error').attr("style", "text-align:center").appendTo($('div.error'));
    $('<svg/>').addClass('error').attr("style", "text-align:center").appendTo($('div.error'));
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
    let info = $('<div/>').addClass('info').appendTo($('div.main'))
    let gallery = $('<div/>').addClass('info').appendTo($('div.main'));
    $('<h3/>').text("The Apocalypse: First Blood").appendTo(info);
    $('<p/>').html(description).addClass("homePageParagraph1").attr('style', 'font-size:20').appendTo(info);
    $('<h3/>').text("Gallery").appendTo(gallery);
}

function about() {
    $('<div/>').addClass('info').appendTo($('div.main'));
    $('<h3/>').text("About").appendTo("div.info");
    $('<p/>').html("Nothing yet.").addClass("aboutParagraph1").attr('style', 'font-size:20').appendTo('div.info');
}

function attributions() {
    let infoTwo = $('<div/>').addClass('info').appendTo($('div.main'));
    $('<h3/>').text("Attributions").appendTo(infoTwo);
    $('<p/>').html("Here's a list of all Font Awesome icons used in this site:").addClass("attributions").attr('style', 'font-size:20').appendTo(infoTwo);
    $('<a/>').attr('href', 'https://fontawesome.com/icons/book?style=solid').attr('target', '_blank').html("Book Solid : https://fontawesome.com/icons/book?style=solid</br>").addClass("attributions").attr('style', 'font-size:20').appendTo(infoTwo);
    $('<a/>').attr('href', 'https://fontawesome.com/icons/phone?style=solid').attr('target', '_blank').html("Phone Solid : https://fontawesome.com/icons/phone?style=solid</br>").addClass("attributions").attr('style', 'font-size:20').appendTo(infoTwo);
    $('<a/>').attr('href', 'https://fontawesome.com/icons/info-circle?style=solid').attr('target', '_blank').html("Info Circle Solid : https://fontawesome.com/icons/info-circle?style=solid</br>").addClass("attributions").attr('style', 'font-size:20').appendTo(infoTwo);
    $('<a/>').attr('href', 'https://fontawesome.com/icons/home?style=solid').attr('target', '_blank').html("Home Solid : https://fontawesome.com/icons/home?style=solid</br>").addClass("attributions").attr('style', 'font-size:20').appendTo(infoTwo);
    $('<a/>').attr('href', 'https://fontawesome.com/license').attr('target', '_blank').html("Font Awesome Pro License : https://fontawesome.com/license</br>").addClass("attributions").attr('style', 'font-size:20').appendTo(infoTwo);
    $('<p/>').html('NWG Games and 1Maker Studios are in no way affiliated with \"Font Awesome\". "Font Awesome" in no way endorses our product(s) or our use of their icons.').addClass("affiliation").attr('style', 'font-size:15').appendTo(infoTwo);

}

function contact() {
    $('<div/>').addClass('info').attr('style', 'background-color:#FFFFF').appendTo($('div.main'));
    $('<h3/>').text("Here's some ways you can get in touch!").appendTo("div.info");
    $('<a/>').attr('href', 'https://discord.gg/UmrZT3').attr('style', 'height:100px,float:right').attr('target', '_blank').addClass("discordLink").appendTo('div.info');
    $('<img/>').attr('style', 'height:100px;padding:25px').addClass("discordLogo").attr("src", 'Discord-Logo+Wordmark-Color.png').appendTo("a.discordLink");
    $('<a/>').attr('href', 'https://twitter.com/GamesNwg').attr('style', 'height:100px,float:left').attr('target', '_blank').addClass("twitterLink").appendTo('div.info');
    $('<img/>').attr('style', 'height:100px;padding:25px').addClass("twitterLogo").attr("src", 'Twitter_Logo_Blue.png').appendTo("a.twitterLink");
    $('<p/>').text("nwggamestudios@gmail.com").addClass("gmailAdress").appendTo('div.info');
}