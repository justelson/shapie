document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const body = document.body;

    // Function to set the theme
    const setTheme = (theme) => {
        if (theme === 'dark') {
            body.classList.add('dark-mode');
            themeToggle.innerHTML = '<span class="icon">☀️</span>'; // Sun icon for light mode
        } else {
            body.classList.remove('dark-mode');
            themeToggle.innerHTML = '<span class="icon">🌙</span>'; // Moon icon for dark mode
        }
        localStorage.setItem('theme', theme);
    };

    // Get saved theme from local storage or default to system preference
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
        setTheme(savedTheme);
    } else if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
        setTheme('dark');
    } else {
        setTheme('light');
    }

    // Toggle theme on button click
    themeToggle.addEventListener('click', () => {
        if (body.classList.contains('dark-mode')) {
            setTheme('light');
        } else {
            setTheme('dark');
        }
    });
});