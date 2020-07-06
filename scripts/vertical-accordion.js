const memberName = document.querySelectorAll('.team-member__name');
const firstMember = document.querySelector('#first-member');
const positionActive = 'team-member__position--active';

console.log(window.innerWidth);

if(window.innerWidth < 769) {
    firstMember.classList.add(positionActive);
}

memberName.forEach(item => {
    item.addEventListener('click', function() {

        if (item.nextElementSibling.classList.contains(positionActive)) {
            for (i = 0; i < memberName.length; i++) {
                memberName[i].nextElementSibling.classList.remove(positionActive);
                memberName[i].lastElementChild.style.removeProperty('transform');
                memberName[i].previousElementSibling.style.removeProperty('display');
            };
        } else {
            for (i = 0; i < memberName.length; i++) {
                memberName[i].nextElementSibling.classList.remove(positionActive);
                memberName[i].lastElementChild.style.removeProperty('transform');
                memberName[i].previousElementSibling.style.removeProperty('display');
            };
            item.nextElementSibling.classList.add(positionActive);
            item.lastElementChild.style.transform = 'rotate(-90deg)';
            item.previousElementSibling.style.display = 'block';
        }
    });
});