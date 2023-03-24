console.log('This town ain\'t big \'nuff for the two\'a us. ');

const links = document.querySelectorAll('.navbar-link');


links.forEach((link) => {
    link.addEventListener('click', () => {
        
        links.forEach((link) => {
        link.className = 'navbar-link';
        });
        link.classList.add('change');
        
        subLinks.previousElementSibling.classList.add('previousElement');
        subLinks.nextElementSibling.classList.add('nextElement');
    });
});
