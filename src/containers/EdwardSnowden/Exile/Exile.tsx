import React from 'react';
import './Exile.css';
import type { IEdwardSnowdenInfo } from '../../../types';

interface IExileProps {
  exile: IEdwardSnowdenInfo[];
}

const Exile: React.FC<IExileProps> = ({ exile }) => {
  return <div>Exile</div>;
};

export default Exile;
