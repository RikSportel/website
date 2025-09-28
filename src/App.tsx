import React, { useEffect, useState } from 'react';
import './App.css';
import Icons, { Icon } from './Icons';
import githubLogo from './github-mark.svg';
import githubLogoWhite from './github-mark-white.svg';
import linkedinLogo from './LinkedIn_icon.svg';
import ThemeToggleButton from './ThemeToggleButton';

const getSystemTheme = () => {
  if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) {
    return 'dark';
  }
  return 'light';
};

function App() {
  const [theme, setTheme] = useState(() => {
    const stored = localStorage.getItem('theme');
    return stored ? stored : getSystemTheme();
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme(prev => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <div className="App">
      <ThemeToggleButton theme={theme === 'dark' ? 'dark' : 'light'} onClick={toggleTheme} />
      <div>
        <h1>Rik Sportel</h1>
      </div>
      <Icons>
        <Icon
          href="https://www.linkedin.com/in/rik-s-21b35954"
          src={linkedinLogo}
          alt="LinkedIn"
        />
        <Icon
          href="https://github.com/RikSportel"
          src={theme === 'dark' ? githubLogoWhite : githubLogo}
          alt="GitHub"
        />
      </Icons>
    </div>
  );
}

export default App;
