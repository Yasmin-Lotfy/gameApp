import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../images/logo.png'
import style from './Navbar.module.scss'

export default function Navbar() {
  return (
    <>
    <nav className={`navbar navbar-expand-lg navbar-dark ${style.navBorder}`}>
  <div className="container">
    <Link className={`navbar-brand ${style.navStyle} ${style.whiteText}`} to=''>
      <img src={logo} className={style.logo} alt="" />
      Game Over
      </Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto ps-md-5 mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${style.whiteText}`} aria-current="page" to=''>Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${style.whiteText}`} to='all'>All</Link>
        </li>
        <li className="nav-item dropdown">
          <Link className={`nav-link dropdown-toggle ${style.whiteText} `} to='plat' role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Platforms
          </Link>
          <ul className="dropdown-menu">
          <li><Link className="dropdown-item" to='pc'>pc</Link></li>
            <li><Link className="dropdown-item"to='browser'>browser</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link className={`nav-link dropdown-toggle ${style.whiteText} `} to='sort' role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Sort-by
          </Link>
          <ul className="dropdown-menu">
          <li><Link className="dropdown-item" to=''>Action</Link></li>
            <li><Link className="dropdown-item"to=''>Another action</Link></li>
          </ul>
        </li>

        <li className="nav-item dropdown">
          <Link className={`nav-link dropdown-toggle ${style.whiteText} `} to='cat' role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Categories
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to=''>Action</Link></li>
            <li><Link className="dropdown-item"to=''>Another action</Link></li>
          </ul>
        </li>
      </ul>
      <form className="d-flex" role="search">
        <Link className="btn btn-outline-info mx-2" to='log' >Log In</Link>
        <Link className="btn btn-outline-info" to='reg'>Join Free</Link>
      </form>
    </div>
  </div>
</nav>

    </>
  )
}
