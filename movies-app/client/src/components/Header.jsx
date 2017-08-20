import React from 'react';

const Header = (props) => {
  return (
      <header className="header">
        <div className="logo">Awesome Movie App</div>
        <nav>
          <ul>
            <li className="h-btn" onClick={() => props.setPage('home')}>Home</li>
            <li className="h-btn" onClick={() => props.setPage('movies')}>Movies</li>
            <li className="h-btn" onClick={() => props.setPage('login')}>Log In</li>
            <li className="h-btn" onClick={() => props.setPage('register')}>Register</li>
            <li className="h-btn" onClick={() => props.setPage('user')}>Dashboard</li>
            <li className="h-btn" onClick={props.logOut}>Logout</li>
          </ul>
        </nav>
      </header>
  )
}

export default Header;