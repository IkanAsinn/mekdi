$(document).ready(() => {
    const categories = $('section');
    const navbar = $('.navbar ul li');
    let curr = '';
    $(window).scroll(() => {
        let windowScroll = $(window).scrollTop();
        categories.each((i, e) => {
            const top = $(e).offset().top;
            const height = $(e).height();
            if (windowScroll >= (top - height / 3)) {
                curr = $(e).attr('id');
            }
        });
        if (windowScroll >= $(`#${curr}`).offset().top - 400) {
            $(`#${curr} .flexbox`).each((i) => {
                setTimeout(() => {
                    $(`#${curr} .flexbox`).eq(i).addClass('pop-up');
                }, 250 * i);
            })
        }
        navbar.each((e) => {
            $(e).removeClass('active');
            if ($(e).hasClass(curr)) {
                $(e).addClass('active');
            }
        });
    });
});