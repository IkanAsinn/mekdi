$(document).ready(() => {
    const sections = $('section');
    const navList = $('.navbar ul li');
    let current = '';
    $(window).scroll(() => {
        let windowScroll = $(window).scrollTop();
        sections.each((i, section) => {
            const sectionTop = $(section).offset().top;
            const sectionHeight = $(section).height();
            if (windowScroll >= (sectionTop - sectionHeight / 3)) {
                current = $(section).attr('id');
            }
        });
        if (windowScroll >= $(`#${current}`).offset().top - 400) {
            console.log('ok')
            $(`#${current} .flexbox`).each((i) => {
                setTimeout(() => {
                    $(`#${current} .flexbox`).eq(i).addClass('pop-up');
                }, 200 * i);
            })
        }
        navList.each((i, li) => {
            $(li).removeClass('active');
            if ($(li).hasClass(current)) {
                $(li).addClass('active');
            }
        });
    });
});