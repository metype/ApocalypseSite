String.prototype.capitalizeFirstLetter = function () {
    return this.charAt(0).toUpperCase() + this.slice(1);
}



$('<h1/>').addClass('title').attr("style", "text-align:center").appendTo($('div.header'));
$('h1.title').text(type.split('/')[1].capitalizeFirstLetter());
if (validPages.indexOf(type.split('/')[1] + "\r\n") > -1) {
    $('title.title').text('The Apocalypse: First Blood - ' + type.split('/')[1].capitalizeFirstLetter());
} else {
    $('<h3/>').addClass('error').attr("style", "text-align:center").appendTo($('div.main'));
    $('title.title').text('The Apocalypse: First Blood - Error');
    $('h3.error').text("404 Error, unable to find page : " + type.split('/')[1].toUpperCase()).addClass("error")
}