const popUp = document.getElementById('composition-pop-up-button');

document.getElementById('composition__icon-button').addEventListener('click', function() {
    if (popUp.classList.contains('show-pop-up')) {
        popUp.classList.remove('show-pop-up');
    } else {
        popUp.classList.add('show-pop-up');
    }
});