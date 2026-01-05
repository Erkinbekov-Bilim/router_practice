import React from 'react';
import './Exile.css';
import type { IEdwardSnowdenInfo } from '../../../types';
import RenderPage from '../../../components/RenderPage/RenderPage';

interface IExileProps {
  exile: IEdwardSnowdenInfo[];
}

const Exile: React.FC<IExileProps> = ({ exile }) => {
  return (
    <>
      <section className="exile">
        <div className="exile-content">
          <div className="exile-image">
            <img
              src="/src/data/edwardSnowden/images/snowden_exile_img.png"
              alt="snowden"
            />
          </div>
          <div className="exile-content-info">
            {exile.map((info) => (
              <RenderPage info={info} key={info.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Exile;
