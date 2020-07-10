const sliderComposition = $('.slider__list').bxSlider({
    pager: false,
    controls: false,
});

$('.arrow-next').click(e => {
    e.preventDefault();
    sliderComposition.goToNextSlide();
});

$('.arrow-prev').click(e => {
    e.preventDefault();
    sliderComposition.goToPrevSlide();
})

