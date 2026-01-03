import './App.css';
import Header from './components/Header/Header';
import Home from './containers/EdwardSnowden/Home/Home';
import Biography from './containers/EdwardSnowden/Biography/Biography';
import Disclosures from './containers/EdwardSnowden/Disclosures/Disclosures';
import Exile from './containers/EdwardSnowden/Exile/Exile';
import Legacy from './containers/EdwardSnowden/Legacy/Legacy';
import { Routes, Route } from 'react-router-dom';
import NotFound from './containers/NotFound/NotFound';

const App = () => {
  return (
    <>
      <Header />
      <main className="main">
        <div className='container'>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/biography" element={<Biography />} />
            <Route path="/disclosures" element={<Disclosures />} />
            <Route path="/exile" element={<Exile />} />
            <Route path="/legacy" element={<Legacy />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </div>
      </main>
    </>
  );
};

export default App;
