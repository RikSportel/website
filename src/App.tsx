import React from 'react';
import './App.css';
import Icons, { Icon } from './Icons';
import githubLogo from './github-mark.svg';
import linkedinLogo from './LinkedIn_icon.svg';

function App() {
  return (
    <div className="App">
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
          src={githubLogo}
          alt="GitHub"
        />
      </Icons>
    </div>
  );
}

export default App;
