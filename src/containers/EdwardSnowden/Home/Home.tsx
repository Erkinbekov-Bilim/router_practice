import type { IEdwardSnowdenInfo } from '../../../types';
import './Home.css';
import RenderPage from '../../../components/RenderPage/RenderPage';

interface IHomeProps {
  overview: IEdwardSnowdenInfo[];
}

const Home: React.FC<IHomeProps> = ({ overview }) => {
  return (
    <>
      <section className="home">
        <div className="home-content">
          <div className="home-image">
            <img
              src="/src/data/edwardSnowden/images/snowden_home_img.png"
              alt="snowden"
            />
          </div>
          <div className="home-content-info">
            {overview.map((info) => (
              <RenderPage info={info} key={info.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
