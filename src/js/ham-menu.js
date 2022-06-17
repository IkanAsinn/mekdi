const ham = $('#hamburger-menu');
const ul = $('header ul');

ham.click(() => {
    ham.toggleClass('bx-x');
    ul.toggleClass('active');
})

$(window).scroll(() => {
    ham.removeClass('bx-x');
    ul.removeClass('active');
})