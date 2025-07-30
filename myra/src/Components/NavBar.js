import React from 'react';
import pic1 from '../Asserts/MainLogo.png'
import {Link} from 'react-router-dom'
import '../App.css';

const NavBar = () => {
  return (
    <>
        <section className='section-type'>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
  <div className="container-fluid">
   <Link to={'/'}> <img src={pic1} alt={"Img not found"} style={{width:"100px",height:"88px" }}/></Link>
    {/* <a className="navbar-brand fw-bold" >Myra Foods</a> */}
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarTogglerDemo02">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link to="/" className="nav-link listItem">Home</Link>
        </li>
         <li className="nav-item">
         <Link to={'/about'} className="nav-link  listItem">About</Link>
        </li>
        <li className="nav-item">
         <Link to={'/likes'}className="nav-link  listItem" >Favriotes</Link>
        </li>
        <li className="nav-item">
        <Link to={'/about'}className="nav-link  listItem" >My Orders</Link>
        </li>
        <li className="nav-item">
          <Link to={'/cart'} className="nav-link listItem" >Cart</Link>
        </li>
      </ul>
      <form className="d-flex">
        <input className="form-control me-2 px-4" type="search" placeholder="Search" aria-label="Search"/>
      </form>
    </div>
    <div>
        <i className="fa-regular fa-heart fw-bold text-danger fs-2 p-1"></i>
        <i className="fa-solid fa-cart-shopping fw-bold fs-2 p-1 text-primary"></i>
    </div>
  </div>
</nav>
</section>
    </>
  );
};

export default NavBar;
