// script.js

// Startup Code
console.log("JavaScript loaded"); // Test code to ensure the JavaScript file is loaded

// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', function () {
  const hamburger = document.querySelector('.hamburger');
  const navMenu = document.querySelector('#flexnavbar');

  // Check if the elements exist
  if (hamburger && navMenu) {
    // Toggle the navigation menu when hamburger is clicked
    hamburger.addEventListener('click', function (event) {
      event.stopPropagation(); // Prevent the click event from bubbling up
      navMenu.classList.toggle('show');

      // Update aria-expanded attribute for accessibility
      const expanded = hamburger.getAttribute('aria-expanded') === 'true';
      hamburger.setAttribute('aria-expanded', !expanded);
    });

    // Close menu when clicking outside
    document.addEventListener('click', function (event) {
      const isClickInside =
        navMenu.contains(event.target) || hamburger.contains(event.target);

      if (!isClickInside && navMenu.classList.contains('show')) {
        navMenu.classList.remove('show');
        hamburger.setAttribute('aria-expanded', 'false');
      }
    });
  } else {
    console.error('Hamburger menu or navigation menu not found in the DOM.');
  }
});
