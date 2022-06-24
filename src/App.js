import logo from './logo.svg';
import './App.css';
import React from 'react';
import Cswiper from './components/Cswiper';
import Video from './components/Video';
import Header from './components/Header';
import Banner from './components/Banner';

function App() {

  return (
    <div className="App">



      <Header />


      <Banner />

          <Cswiper />
      
      <div>
        <Video />
      </div>
    </div>
  );
}

export default App;
