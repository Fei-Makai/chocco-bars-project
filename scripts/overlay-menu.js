const overlay = document.getElementById('overlay');
const closeMenu = document.getElementById('close-menu');


document.getElementById('show-menu-button') .addEventListener('click', function() {
    overlay.classList.add('show-menu');
});

document.getElementById('close-menu').addEventListener('click', function(){
    overlay.classList.remove('show-menu')
})