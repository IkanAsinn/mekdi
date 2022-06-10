// const sections = document.querySelectorAll('section');
// const navList = document.querySelectorAll('.navbar ul li');

// window.addEventListener('scroll', () => {
//     let current = '';
//     sections.forEach(section => {
//         const sectionTop = section.offsetTop;
//         const sectionHeight = section.clientHeight;
//         console.log(sectionTop, sectionHeight);
//         if (scrollY >= (sectionTop - sectionHeight / 3)) {
//             current = section.getAttribute('id');
//         }
//     })
//     navList.forEach(li => {
//         li.classList.remove('active');
//         if (li.classList.contains(current)) {
//             li.classList.add('active');
//         }
//     })
// })

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