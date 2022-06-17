$(document).ready(() => {
    $('#hamburger-menu').click(() => {
        $('#hamburger-menu').toggleClass('bx-x');
        $('header ul').toggleClass('active');
        $('.navbar').toggleClass('static');
    });

    $(window).scroll(() => {
        $('#hamburger-menu').removeClass('bx-x');
        $('header ul').removeClass('active');
        $('.navbar').removeClass('static');
    });
});