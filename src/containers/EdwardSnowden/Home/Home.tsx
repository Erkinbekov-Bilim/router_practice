import type { IEdwardSnowdenInfo } from '../../../types';
import './Home.css';
import HomeInfo from '../../../components/RenderPage/RenderPage';

interface IHomeProps {
  overview: IEdwardSnowdenInfo[];
}

const Home: React.FC<IHomeProps> = ({ overview }) => {
  return (
    <>
      <section className="home">
        <div className="home-content">
          <div className="home-image">
            <img src="/src/assets/photos/snowden-home.png" alt="snowden" />
          </div>
          <div className='home-content-info'>
            {overview.map((info) => (
              <HomeInfo info={info} key={info.id} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
