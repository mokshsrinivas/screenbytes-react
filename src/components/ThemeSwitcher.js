import React from 'react';

const ThemeSwitcher = () => {
    const switchTheme = (theme) => {
        document.body.classList.remove('light-theme', 'dark-theme');
        document.body.classList.add(theme);
    };

    return (
        <div className="theme-switcher">
            <button onClick={() => switchTheme('light-theme')} className="btn btn-light">Light Theme</button>
            <button onClick={() => switchTheme('dark-theme')} className="btn btn-dark">Dark Theme</button>
        </div>
    );
};

export default ThemeSwitcher;
