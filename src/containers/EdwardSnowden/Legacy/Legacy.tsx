import React from 'react';
import './Legacy.css';
import type { IEdwardSnowdenInfo } from '../../../types';
import RenderPage from '../../../components/RenderPage/RenderPage';

interface ILegacyProps {
  legacy: IEdwardSnowdenInfo[];
}

const Legacy: React.FC<ILegacyProps> = ({ legacy }) => {
  return (
    <>
      <section className="legacy">
        <h2 className='page-title'>legacy</h2>
        <div className="legacy-content">
          <div className="legacy-image">
            <img
              src="/src/data/edwardSnowden/images/legacy/snowden_book_img.png"
              alt="snowden"
            />
            <img
              src="/src/data/edwardSnowden/images/legacy/snowden_movie_img.png"
              alt="snowden"
            />
          </div>
          <div className="legacy-content-info">
            {legacy.map((info) => (
              <RenderPage info={info} key={info.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Legacy;
