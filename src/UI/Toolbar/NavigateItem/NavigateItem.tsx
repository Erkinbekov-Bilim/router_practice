import React from 'react';
import './NavigateItem.css';
import { NavLink } from 'react-router-dom';
import type { INavigateItem } from '../../../types';
import { motion } from 'framer-motion';

interface INavigateItemProps {
  link: INavigateItem;
}

const NavigateItem: React.FC<INavigateItemProps> = ({ link }) => {
  
  console.log("rebder");
  

  const animationForNav = {
    initial: {
      scale: 1,
      color: '#15082e',
      background: '#ffffff',
    },
    whileHover: {
      scale: 1.15,
      color: '#fff',
      background: '#131314ff',
    },
    whileTap: {
      scale: 0.95
    }
  };

  return (
    <>
      <motion.li className="nav-item" {...animationForNav}>
        <NavLink to={link.to}>{link.name}</NavLink>
      </motion.li>
    </>
  );
};

export default NavigateItem;
