const popUp = document.querySelector('#composition-pop-up');
const popUpIcon = document.querySelector('#composition__icon-button');
const popUpList = document.querySelector('#composition-list');

popUpIcon.addEventListener('mouseenter', e => {
    popUp.classList.add('show-pop-up');
    popUpIcon.style.boxShadow = "0 0 11px #61c4d9";
});

popUpIcon.addEventListener('mouseleave', e => {
    if (e.relatedTarget != popUpList) {
        popUp.classList.remove('show-pop-up');
        popUpIcon.style.removeProperty('box-shadow');
    } else if (e.relatedTarget == popUpList) {
        popUpIcon.style.boxShadow = "0 0 11px #61c4d9";
    }
});

popUpList.addEventListener('mouseleave', e => {
    if (e.relatedTarget != popUpIcon) {
        popUp.classList.remove('show-pop-up');
        popUpIcon.style.removeProperty('box-shadow');
    }
})