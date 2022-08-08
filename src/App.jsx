// React
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Provider } from 'react-redux';

// Components & elements
import Header from './Components/header/Header';
import { Sprite } from 'Components/sprite/Sprite';
import Footer from './Components/footer/Footer';
import ScrollButton from 'Elements/scrollButton/ScrollButton';
import { store } from './redux';


// Pages
import MainPage from 'Pages/Main';
import Benefits from 'Pages/Benefits';
import About from './Pages/About';
import Conatcts from 'Pages/Contacts';
import Pricing from 'Components/pricing/Pricing';

// Style
import './styles/index.scss';
import Market from 'Components/market/Market';
import Headermr from 'Components/headermr/Headermr';
import GamePage from 'Components/gamePagemr/GamePage';

const App = () => {
  return (
    <Provider store={ store }>
      <div className='App'>
        {/* SVG */}
        <Sprite />
        {/*header */}
        <Headermr />
        <Routes>
          <Route path='/market' element={<Market />} />
          <Route path='/app/:title' element={<GamePage />} />
        </Routes>
        {/* <Header />
  
        <div className='Content'>
          <Routes>
            <Route path='/' element={<MainPage />} />
            <Route path='/market' element={<Market />} />
            <Route path='/benefits' element={<Benefits />} />
            <Route path='/about' element={<About />} />
            <Route path='/contacts' element={<Conatcts />} />
            <Route path='/pricing' element={<Pricing />} />
          </Routes>
        </div>y
        <ScrollButton />
        <Footer /> */}
      </div>
    </Provider>
  );
};

export default App;
