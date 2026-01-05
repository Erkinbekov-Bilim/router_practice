import React from 'react';
import './Biography.css';
import type { IEdwardSnowdenInfo } from '../../../types';
import RenderPage from '../../../components/RenderPage/RenderPage';

interface IBiographyProps {
  biography: IEdwardSnowdenInfo[];
}

const Biography: React.FC<IBiographyProps> = ({ biography }) => {
  return (
    <>
      <section className="biography">
        <h2 className='page-title'>biography</h2>
        <div className="biography-content">
          <div className="biography-image">
            <img
              src="/src/data/edwardSnowden/images/snowden_biography_img.png"
              alt="snowden"
            />
          </div>
          <div className="home-content-info">
            {biography.map((info) => (
              <RenderPage info={info} key={info.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Biography;
