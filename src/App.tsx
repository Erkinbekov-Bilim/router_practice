import './App.css';
import Header from './components/Header/Header';
import Home from './containers/EdwardSnowden/Home/Home';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <>
      <Header/>
      <main className="container">
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
