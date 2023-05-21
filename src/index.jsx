import React, { useState } from 'react';
import { createRoot } from 'react-dom/client';
import './style.css';

const MenuItem = ({ text, onSelect }) => {
  const handleClick = () => {
    onSelect(text);
  };

  return (
    <a href="#" className="menu-item" onClick={handleClick}>
      {text}
    </a>
  );
};

const App = () => {

  const [menuOpened, setMenuOpened] = useState(false)
  const [pageTitle, setPageTitle] = useState('Domu')

  const handleOnClick = () => {
    setMenuOpened(!menuOpened)
  }

  const handleSelectItem = (page) => {
    setMenuOpened(false);
    setPageTitle(page)
  };



  const menuClassName = menuOpened ? 'menu' : 'menu menu--closed';


  return (
    <>
      <header>
        <div className={menuClassName}>
          <button className="menu__btn" onClick={handleOnClick}></button>
          <div className="menu__items">
            <MenuItem text="Domů" onSelect={handleSelectItem} />
            <MenuItem text="Naše nabídka" onSelect={handleSelectItem} />
            <MenuItem text="Náš tým" onSelect={handleSelectItem} />
            <MenuItem text="Blog" onSelect={handleSelectItem} />
            <MenuItem text="Kontakt" onSelect={handleSelectItem} />
          </div>
        </div>
      </header>
      <main>
        <h1>{pageTitle}</h1>
      </main>
    </>
  );
};

createRoot(document.querySelector('#app')).render(<App />);
