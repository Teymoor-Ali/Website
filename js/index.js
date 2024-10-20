document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("theme-toggle");
  const icon = toggleButton.querySelector("i");
  const body = document.body;

  // Function to safely get and set localStorage
  function safeLocalStorage(action, key, value) {
      try {
          if (action === "get") {
              return localStorage.getItem(key);
          } else if (action === "set") {
              localStorage.setItem(key, value);
          }
      } catch (e) {
          console.warn("LocalStorage is not supported, theme preference will not persist.");
          return null;
      }
  }

  // Check for theme preference in localStorage
  const currentTheme = safeLocalStorage("get", "theme");
  if (currentTheme === "light") {
      body.classList.add("light-theme");
      icon.classList.replace("fa-sun", "fa-moon");
  }

  // Toggle the theme when the button is clicked
  toggleButton.addEventListener("click", function () {
      body.classList.toggle("light-theme");
      if (body.classList.contains("light-theme")) {
          icon.classList.replace("fa-sun", "fa-moon");
          safeLocalStorage("set", "theme", "light"); // Save the theme preference
      } else {
          icon.classList.replace("fa-moon", "fa-sun");
          safeLocalStorage("set", "theme", "dark"); // Save the theme preference
      }
  });
});
