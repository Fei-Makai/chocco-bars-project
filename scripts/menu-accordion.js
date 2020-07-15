const measureWidth = item => {
    let reqItemWidth = 0;
    const screenWidth = $(window).width();
    const container = item.closest('.products-menu__list');
    const titlesBlocks = container.find('.products-menu__title');
    const titlesWidth = titlesBlocks.width() * titlesBlocks.length;

    const textContainer = item.find('.products-menu__content-container');
    const paddingLeft = parseInt(textContainer.css('padding-left'));
    const paddingRight = parseInt(textContainer.css('padding-right'));


    const isTablets = window.matchMedia('(max-width: 768px)').matches

    if (isTablets) {
        reqItemWidth = screenWidth - titlesWidth;
    } else {
        reqItemWidth = 520;
    }

    return {
        container: reqItemWidth,
        textContainer: reqItemWidth - paddingLeft - paddingRight
    }
}

const closeEveryItemInContainer = container => {
    const items = container.find('.products-menu__item');
    const content = container.find('.products-menu__content');

    items.removeClass('active');
    content.width(0);
}

const openItem =  item => {
    const hiddenContent = item.find('.products-menu__content');
    const reqWidth = measureWidth(item); 
    const textBlock = item.find('.products-menu__content-container');
    const isMobile = window.matchMedia('(max-width: 480px)').matches

    item.addClass('active');
    hiddenContent.width(reqWidth.container);
    textBlock.width(reqWidth.textContainer);

    // if (isMobile) {
    //     item.addClass('products-menu-mobile');
    //     hiddenContent.addClass('products-menu-mobile');
    //     textBlock.addClass('products-menu-mobile');
    // } else {
    //     item.addClass('active');
    //     hiddenContent.width(reqWidth.container);
    //     textBlock.width(reqWidth.textContainer);
    // }
}

$('.products-menu__title').on('click', e => {
    e.preventDefault();
   
    const $this = $(e.currentTarget);
    const item = $this.closest('.products-menu__item');
    const itemOpened = item.hasClass('active');
    const container = $this.closest('.products-menu__list');

    if (itemOpened) {
        closeEveryItemInContainer(container);
    } else {
        closeEveryItemInContainer(container);
        openItem(item);
    }
});

$('.products-menu__close-btn').on('click', e => {
    e.preventDefault();
    closeEveryItemInContainer($('.products-menu__list'));
})