const findBlockByAlias = (alias) => {
    return $('.reviews__list-item').filter((ndx, item) => {
        return $(item).attr('data-review') == alias;
    });
};

$('.interactive-avatar__link').click((e) => {
    e.preventDefault();

    const $this = $(e.currentTarget);
    const target = $this.attr('data-switcher');
    
    const itemToShow = findBlockByAlias(target);
    const curItem = $this.closest('.reviews__switcher-item');

    itemToShow.addClass('reviews__list-item--active').siblings().removeClass('reviews__list-item--active');
    curItem.addClass('interactive-avatar--active').siblings().removeClass('interactive-avatar--active'); 
});