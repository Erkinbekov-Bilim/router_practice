import './global.css';
import './App.css';
import Header from './components/Header/Header';
import Home from './containers/EdwardSnowden/Home/Home';
import Biography from './containers/EdwardSnowden/Biography/Biography';
import Disclosures from './containers/EdwardSnowden/Disclosures/Disclosures';
import Exile from './containers/EdwardSnowden/Exile/Exile';
import Legacy from './containers/EdwardSnowden/Legacy/Legacy';
import { Routes, Route } from 'react-router-dom';
import NotFound from './containers/NotFound/NotFound';
import type { IEdwardSnowden } from './types';
import { useCallback, useEffect, useState } from 'react';
import axios from 'axios';

const App = () => {
  const [snowdenInfo, setSnowdenInfo] = useState<IEdwardSnowden | null>(null);

  const getDataEdwardSnowden = useCallback(async (): Promise<void> => {
    try {
      const { data } = await axios.get<IEdwardSnowden>(
        '/src/data/edwardSnowden/edwardSnowden.json'
      );
      setSnowdenInfo(data);
    } catch (error) {
      console.log(error);
      throw new Error('Failed to load Edward Snowden data');
    }
  }, []);

  useEffect(() => {
    getDataEdwardSnowden();
  }, [getDataEdwardSnowden]);

  return (
    <>
      <Header />
      <main className="main">
        <div className="container">
          {snowdenInfo && (
            <Routes>
              <Route
                path="/"
                element={<Home overview={snowdenInfo.overview} />}
              />
              <Route
                path="/biography"
                element={<Biography biography={snowdenInfo.biography} />}
              />
              <Route
                path="/disclosures"
                element={<Disclosures disclosures={snowdenInfo.disclosures} />}
              />
              <Route
                path="/life_in_exile"
                element={<Exile exile={snowdenInfo.exile} />}
              />
              <Route
                path="/legacy"
                element={<Legacy legacy={snowdenInfo.legacy} />}
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          )}
        </div>
      </main>
    </>
  );
};

export default App;
