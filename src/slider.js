$(document).ready(() => {
    const leftBtn = $('.slider-btn #prev');
    const rightBtn = $('.slider-btn #next');

    setInterval(() => {
        const curr = $('.img-banner .slide.active');
        const currNav = $('.nav-btn .navigate.active');
        const next = curr.next();
        const nextNav = currNav.next();
        curr.removeClass('active');
        currNav.removeClass('active');
        if (next.length == 0) {
            $('.img-banner .slide:first-child').addClass('active');
            $('.nav-btn .navigate:first-child').addClass('active');
        } else {
            next.addClass('active');
            nextNav.addClass('active');
        }
        changeButton();
    }, 5000);

    rightBtn.click(() => {
        const curr = $('.img-banner .slide.active');
        const currNav = $('.nav-btn .navigate.active');
        const next = curr.next();
        const nextNav = currNav.next();
        const prev = curr.prev();
        const prevNav = currNav.prev();

        if (next.length) {
            curr.removeClass('active');
            next.addClass('active');
            currNav.removeClass('active');
            nextNav.addClass('active');
        } else {
            curr.removeClass('active');
            prev.addClass('active');
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
            curr.removeClass('active');
            prev.addClass('active');
            currNav.removeClass('active');
            prevNav.addClass('active');
        } else {
            curr.removeClass('active');
            next.addClass('active');
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