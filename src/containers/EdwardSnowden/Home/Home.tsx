import type { IEdwardSnowdenInfo } from '../../../types';
import './Home.css';

interface IHomeProps {
  overview: IEdwardSnowdenInfo[];
}

const Home: React.FC<IHomeProps> = ({ overview }) => {
  return (
    <>
      <div></div>
    </>
  );
};

export default Home;
