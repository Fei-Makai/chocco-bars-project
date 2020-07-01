const overlay = document.getElementById('overlay');

document.getElementById('show-menu-button') .addEventListener('click', function() {
    overlay.classList.add('show-menu');
});

document.getElementById('close-menu').addEventListener('click', function(){
    overlay.classList.remove('show-menu')
});

document.querySelectorAll('.overlay-menu__item').forEach(item => {
    item.addEventListener('click', function(){
        overlay.classList.remove('show-menu')
    })
})