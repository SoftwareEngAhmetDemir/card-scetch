import React from 'react'

function Header() {
  return (
    <header>
      <nav class="navbar navbar-expand-lg bg-white">
        <div class="container">
          <div className='header'>
            <a class="navbar-brand" href="#">
              <img src='./assets/images/logo.svg' />
            </a>
            <button class="navbar-toggler collapsed" type="button" data-bs-toggle="collapse"
              data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown"
              aria-expanded="false" aria-label="Toggle navigation">
            </button>
          </div>
          <div class="collapse navbar-collapse" id="navbarNavDropdown">
            <div className='container'>
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
        </div>
      </nav>
    </header>
  )
}

export default Header