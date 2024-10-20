document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("theme-toggle");
    const icon = toggleButton.querySelector("i");
    const body = document.body;

    // Check localStorage for theme preference
    const currentTheme = localStorage.getItem("theme");
    if (currentTheme === "light") {
        body.classList.add("light-theme");
        icon.classList.replace("fa-sun", "fa-moon");
    }

    // Toggle the theme when the button is clicked
    toggleButton.addEventListener("click", function () {
        body.classList.toggle("light-theme");
        if (body.classList.contains("light-theme")) {
            icon.classList.replace("fa-sun", "fa-moon");
            localStorage.setItem("theme", "light"); // Save the theme preference
        } else {
            icon.classList.replace("fa-moon", "fa-sun");
            localStorage.setItem("theme", "dark"); // Save the theme preference
        }
    });
});
