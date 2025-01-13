// Function to handle page scaling based on screen width
function handleResize() {
    const width = window.innerWidth;
    const body = document.body;

    // Reset scaling
    body.classList.remove('shrink-90', 'shrink-80', 'shrink-75', 'shrink-50');

    if (width >= 992 && width <= 1600) {
        body.classList.add('shrink-90');
    } else if (width >= 700 && width <= 767) {
        body.classList.add('shrink-80');
    } else if (width >= 600 && width < 700) {
        body.classList.add('shrink-75');
    } else if (width <= 600) {
        body.classList.add('shrink-50');
    }
}

// Event listener for window resizing
window.addEventListener('resize', handleResize);

// Initial call to handleResize on page load
handleResize();

// Toggle menu on smaller screens
const menuToggle = document.getElementById('menu-toggle');
const leftMenu = document.getElementById('left-menu');

menuToggle.addEventListener('click', () => {
    leftMenu.classList.toggle('active');
});
