import React from 'react'
import { Link } from 'react-router-dom';
import "../App.css";

const Nav = () => {
  return (
    <div className='nav'>
      <Link to="/">View</Link>
      <Link to="/Add">Add</Link>
    </div>
  )
}

export default Nav
