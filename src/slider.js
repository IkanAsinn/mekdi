$(document).ready(() => {
    const leftBtn = $('.slider-btn #prev');
    const rightBtn = $('.slider-btn #next');

    rightBtn.click(() => {
        const curr = $('.img-banner .slide.active');
        const currNav = $('.nav-btn .navigate.active');
        const next = curr.next();
        const nextNav = currNav.next();
        const prev = curr.prev();
        const prevNav = currNav.prev();

        if (next.length) {
            curr.removeClass('active').css('z-index', '-1');
            next.addClass('active').css('z-index', '1');
            currNav.removeClass('active');
            nextNav.addClass('active');
        } else {
            curr.removeClass('active').css('z-index', '-1');
            prev.addClass('active').css('z-index', '1');
            currNav.removeClass('active');
            prevNav.addClass('active');
        }

        changeButton();
    })

    leftBtn.click(() => {
        const curr = $('.img-banner .slide.active');
        const currNav = $('.nav-btn .navigate.active');
        const next = curr.next();
        const nextNav = currNav.next();
        const prev = curr.prev();
        const prevNav = currNav.prev();

        if (prev.length) {
            curr.removeClass('active').css('z-index', '-1');
            prev.addClass('active').css('z-index', '1');
            currNav.removeClass('active');
            prevNav.addClass('active');
        } else {
            curr.removeClass('active').css('z-index', '-1');
            next.addClass('active').css('z-index', '1');
            currNav.removeClass('active');
            nextNav.addClass('active');
        }

        changeButton();
    })
})

const changeButton = () => {
    const currentImg = $('.img-banner .slide.active');
    const button = $('.img-header .button');
    const btnContent = $('.img-header .button button')
    if (currentImg.hasClass('change')) {
        button.addClass('change');
        btnContent.html('REGISTER NOW!');
    } else {
        button.removeClass('change');
        btnContent.html('GET YOURS NOW!');
    }
}