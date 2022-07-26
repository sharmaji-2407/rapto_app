import React from 'react'
import '../css/Header.css'
import home from '../media/home.png'
import connect from '../media/connect.png'
import plan from '../media/plan.png'
import gallery from '../media/gallery.png'


  
const Header = ({ pageSelector }) => {


  return (
    <div className="header">
      <h1 className="logo">rapto</h1>
      <hr />
      <div className="navbar">
        <ul>
          <li onClick={() => pageSelector("home")}>
            <img src={home} alt="" width="30px" />
            <span>Home</span>
          </li>
          <li onClick={() => pageSelector("plan")}>
            <img src={plan} alt="" width="30px" />
            <span>Services</span>
          </li>
          <li onClick={() => pageSelector("gallery")}>
            <img src={gallery} alt="" width="25px" />
            <span>Gallery</span>
          </li>
          <li onClick={() => pageSelector("connect")}>
            <img src={connect} alt="" width="25px" />
            <span>Connect with us</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header