import './Header.css';
import Toolbar from '../../UI/Toolbar/Toolbar';
import type { INavigateItem } from '../../types';

const Header = () => {
  const navLinks: INavigateItem[] = [
    {
      to: '/',
      name: 'home',
    },
    {
      to: '/biography',
      name: 'biography',
    },
    {
      to: '/disclosures',
      name: 'disclosures',
    },
    {
      to: '/life_in_exile',
      name: 'exile',
    },
    {
      to: '/legacy',
      name: 'legacy',
    },
  ];

  return (
    <header className="header">
      <Toolbar navLogo="Edward Snowden" navLinks={navLinks} />
    </header>
  );
};

export default Header;
