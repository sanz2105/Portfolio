const toggleButton = document.getElementById('theme-toggle');
const body = document.body;
const themeIcon = document.getElementById('theme-icon');

toggleButton.addEventListener('click', () => {
    body.classList.toggle('light-mode');
    // Toggle icon between sun and moon
    if (body.classList.contains('light-mode')) {
        themeIcon.classList.replace('fa-sun', 'fa-moon');
    } else {
        themeIcon.classList.replace('fa-moon', 'fa-sun');
    }
});
