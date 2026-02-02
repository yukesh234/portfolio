// Get current page filename
const currentPage = window.location.pathname.split('/').pop();

// Get all nav links
const navLinks = document.querySelectorAll('.nav-links a');

// Loop through links and add active class to matching one
navLinks.forEach(link => {
    const linkPage = link.getAttribute('href');
    
    // Check if this link matches current page
    if (linkPage === currentPage || 
        (currentPage === '' && linkPage === 'Home.html') ||
        (currentPage === 'index.html' && linkPage === 'Home.html')) {
        link.classList.add('active');
    }
});