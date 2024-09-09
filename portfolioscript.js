// Simple animation when scrolling into view
document.addEventListener('DOMContentLoaded', function () {
    const portfolioItems = document.querySelectorAll('.portfolio-item');

    // Add scroll event listener
    window.addEventListener('scroll', function () {
        portfolioItems.forEach(item => {
            const rect = item.getBoundingClientRect();
            if (rect.top >= 0 && rect.bottom <= window.innerHeight) {
                item.classList.add('visible');
            } else {
                item.classList.remove('visible');
            }
        });
    });
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    if (name && email && message) {
        alert('Thank you, ' + name + '! Your message has been sent.');
    } else {
        alert('Please fill in all fields.');
    }
});

