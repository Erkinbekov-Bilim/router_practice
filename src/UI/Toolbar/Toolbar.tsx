import React from 'react';
import './Toolbar.css';
import type { INavigateItem } from '../../types';
import NavigateItem from './NavigateItem/NavigateItem';
import { NavLink } from 'react-router-dom';

interface IToolbarProps {
  navLogo: string;
  navLinks: INavigateItem[];
}

const Toolbar: React.FC<IToolbarProps> = ({ navLogo, navLinks }) => {
  return (
    <div className="container">
      <nav className="nav">
        <div className="nav-logo">
          <NavLink className="nav-logo-content" to={'/'}>
            {navLogo}
          </NavLink>
        </div>

        <ul className="nav-list">
          {navLinks.map((link, index) => (
            <NavigateItem link={link} key={link.name + index}/>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Toolbar;
