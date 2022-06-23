import logo from './logo.svg';
import './App.css';
import React from 'react';
import Cswiper from './components/Cswiper';
import Video from './components/Video';

function App() {

  return (
    <div className="App">



      <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <div class="container">
          <a class="navbar-brand" href="#">
            <img src='./assets/images/logo.svg' />
          </a>
          <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
          data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" 
          aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="#">Show All Tyres</a>
              </li>
              <li class="nav-item">
                <a class='nav-link' href="#">Find a Dealer</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Guides & Videos</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Go with</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#">Service & Help</a>
              </li>
              {/* <li class="nav-item dropdown">
                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                  Dropdown link
                </a>
                <ul class="dropdown-menu" aria-labelledby="navbarDropdownMenuLink">
                  <li><a class="dropdown-item" href="#">Action</a></li>
                  <li><a class="dropdown-item" href="#">Another action</a></li>
                  <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
              </li> */}
            </ul>
          </div>
        </div>
      </nav>


      <div className='banner'>
        <img src='./assets/images/banner.svg' />
        <div className='banner-desc'>
          <div className='title'>
            <h1 className='text-white'>Nothing can stop you</h1>
          </div>
          <div className='banner-btn'>
            <button className='btn btn-primary'>FIND OUT MORE</button>
          </div>
        </div>
      </div>
<div style={{background: '#F9F6F6'}} className='p-lg-5'>
      <div className='container custom-swiper'>
        <h2>
          Featured Products
        </h2>

        <Cswiper/>
      </div>
      </div>
      <div>
        <Video/>
      </div>
    </div>
  );
}

export default App;
