import React from 'react';
import './Disclosures.css';
import type { IEdwardSnowdenInfo } from '../../../types';
import RenderPage from '../../../components/RenderPage/RenderPage';

interface IDisclosuresProps {
  disclosures: IEdwardSnowdenInfo[];
}

const Disclosures: React.FC<IDisclosuresProps> = ({ disclosures }) => {
  return (
    <section className="disclosures">
      <div className="disclosures-content">
        <div className="disclosures-image">
          <img src="/src/data/edwardSnowden/images/image_programs/prism.png" alt="prsim" />
          <img src="/src/data/edwardSnowden/images/image_programs/upstream.png" alt="upstream" />
          <img src="/src/data/edwardSnowden/images/image_programs/x_keyscore.png" alt="x_keyscore." />
        </div>
        <div className="home-content-info">
          {disclosures.map((info) => (
            <RenderPage info={info} key={info.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Disclosures;
