const overlayMenu = document.querySelector('#overlay-menu');
const showMenuButton = document.querySelector('#show-menu-button');
const closeMenuButton = document.querySelector('#close-menu-button');
const overlayMenuItems = document.querySelectorAll('.overlay-menu__item');
const body = document.body;

showMenuButton.addEventListener('click', function() {
    overlayMenu.classList.add('show-menu');
    body.style.overflowY = "hidden";
});

function closeMenu(element) {
    element.addEventListener('click', function(){
        overlayMenu.classList.remove('show-menu');
        body.style.removeProperty('overflow-y');
    });
}

closeMenu(closeMenuButton);

overlayMenuItems.forEach(item => {
    closeMenu(item);
})