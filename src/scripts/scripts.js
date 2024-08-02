document.addEventListener('DOMContentLoaded', function () {
    const increaseFontBtn = document.getElementById('increase-font');
    const decreaseFontBtn = document.getElementById('decrease-font');
    let fontSize = 16; // Default font size

    increaseFontBtn.addEventListener('click', () => {
        fontSize += 2;
        document.body.style.fontSize = `${fontSize}px`;
    });

    decreaseFontBtn.addEventListener('click', () => {
        fontSize = Math.max(12, fontSize - 2); // Minimum font size of 12px
        document.body.style.fontSize = `${fontSize}px`;
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const lightThemeBtn = document.getElementById('light-theme');
    const darkThemeBtn = document.getElementById('dark-theme');

    lightThemeBtn.addEventListener('click', () => {
        document.body.classList.remove('dark-theme');
        document.body.classList.add('light-theme');
    });

    darkThemeBtn.addEventListener('click', () => {
        document.body.classList.remove('light-theme');
        document.body.classList.add('dark-theme');
    });
});
