const leftBtn = $('.slider-btn #prev');
const rightBtn = $('.slider-btn #next');

// ===IMAGE CAROUSEL===

const viewSlideShow = () => {
    const slides = $('.img-banner .slide.active');

    addActive(slides);
    animateSlide();
}

const animateSlide = () => {
    const content = $('.content');
    const banner = $('.img-banner');
    const slide = $('.img-banner .slide.active');
    const slideWidth = slide.width();

    const prev = slide.prev();
    if (prev.length) {
        banner.animate({'margin-left': '-=' + slideWidth}, 1000);
    } else {
        banner.animate({'margin-left': 0}, 1000);
    }

    const button = $('.button');
    const btn = button.find('button');
    const link = button.find('a');
    button.fadeOut(0);
    if (content.hasClass('promotion')) {
        if (slide.hasClass('change')) {
            button.addClass('change');
            btn.html('REGISTER NOW!');
            link.attr('href', 'login.html');
        } else {
            button.removeClass('change');
            btn.html('GET YOURS NOW!');
            link.attr('href', 'FoodMenu.html');
        }
    } else if (content.hasClass('home')) {
        const link = button.find('a');
        if (slide.hasClass('change')) {
            link.attr('href', 'beverage.html');
        } else {
            link.attr('href', 'FoodMenu.html');
        }
    }
    button.fadeIn(1500);
}

const addActive = (element) => {
    const currNav = $('.nav-btn .navigate.active');
    const nextNav = currNav.next();
    const prevNav = currNav.prev();
    const next = element.next();
    const prev = element.prev();

    element.removeClass('active');
    currNav.removeClass('active');
    if (next.length) {
        next.addClass('active');
        nextNav.addClass('active');
    } else {
        prev.addClass('active');
        prevNav.addClass('active');
    }
}

setInterval(viewSlideShow, 8000);
leftBtn.click(viewSlideShow);
rightBtn.click(viewSlideShow);

// ===DRAG SLIDER===

let container = $('.slider');
let slider, outset, x;
let isPressed = false;

container.mousedown(e => {
    isPressed = true;
    if (e.target.matches('.promo.slider')) {
        container = $('.promo.slider');
        slider = $('.promotion-imgs');
    } else if (e.target.matches('.menu.slider')) {
        container = $('.menu.slider');
        slider = $('.latest-menu-imgs');
    }
    outset = e.offsetX - slider.offset().left;
    container.css('cursor', 'grabbing');
})

container.mouseenter(() => {
    container.css('cursor', 'grab');
})

container.mouseup(() => {
    container.css('cursor', 'grab');
})

$(window).mouseup(() => {
    isPressed = false;
})

container.mousemove(e => {
    if (!isPressed) return;
    e.preventDefault();
    x = e.offsetX;
    slider.css('left', `${x - outset}px`);
    checkBoundary(container, slider);
})

const checkBoundary = (container, slider) => {
    let parent = container[0].getBoundingClientRect();
    let child = slider[0].getBoundingClientRect();

    if (parseInt(slider.css('left')) > 0) {
        slider.css('left', '0px');
    } else if (child.right < parent.right) {
        slider.css('left', `-${child.width - parent.width}px`);
    }
}