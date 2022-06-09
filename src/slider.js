$(document).ready(() => {
    const leftBtn = $('.slider-btn #prev');
    const rightBtn = $('.slider-btn #next');

    setInterval(viewSlideShow, 8000);
    leftBtn.click(viewSlideShow);
    rightBtn.click(viewSlideShow);

    dragPromoSlider();
    dragMenuSlider();
})

const dragPromoSlider = () => {
    const slider = $('.promo.slider');
    const innerSlider = $('.promotion-imgs');
    
    let isPressed = false;
    let startX, x;
    
    slider.mousedown(e => {
        isPressed = true;
        startX = e.offsetX - innerSlider.offset().left;
        slider.css('cursor', 'grabbing');
    })
    
    slider.mouseenter(() => {
        slider.css('cursor', 'grab');
    })
    
    slider.mouseup(() => {
        slider.css('cursor', 'grab');
    })
    
    $(window).mouseup(() => {
        isPressed = false;
    })
    
    slider.mousemove(e => {
        if (!isPressed) return;
        e.preventDefault();
        x = e.offsetX;
        innerSlider.css('left', `${x - startX}px`);
        checkBoundary(slider, innerSlider);
    })
}

const dragMenuSlider = () => {
    const slider = $('.menu.slider');
    const innerSlider = $('.latest-menu-imgs');
    
    let isPressed = false;
    let startX, x;
    
    slider.mousedown(e => {
        isPressed = true;
        startX = e.offsetX - innerSlider.offset().left;
        slider.css('cursor', 'grabbing');
    })
    
    slider.mouseenter(() => {
        slider.css('cursor', 'grab');
    })
    
    slider.mouseup(() => {
        slider.css('cursor', 'grab');
    })
    
    $(window).mouseup(() => {
        isPressed = false;
    })
    
    slider.mousemove(e => {
        if (!isPressed) return;
        e.preventDefault();
        x = e.offsetX;
        innerSlider.css('left', `${x - startX}px`);
        checkBoundary(slider, innerSlider);
    })
}

const checkBoundary = (slider, innerSlider) => {
    let outer = slider[0].getBoundingClientRect();
    let inner = innerSlider[0].getBoundingClientRect();

    if (parseInt(innerSlider.css('left')) > 0) {
        innerSlider.css('left', '0px');
    } else if (inner.right < outer.right) {
        innerSlider.css('left', `-${inner.width - outer.width}px`);
    }
}

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