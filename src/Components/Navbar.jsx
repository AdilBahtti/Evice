import { NavLink, useNavigate } from 'react-router-dom';
import style from './Navbar.module.css';
import { CiSearch } from "react-icons/ci";
import { HiMenu, HiX } from "react-icons/hi";
import { useState } from 'react';
import {useSelector} from 'react-redux'
// Import images from assets
import langIcon from '../assets/lang.png';
import logo from '../assets/logo.png';

const Navbar = () => {

  const toggle =  useSelector( store => store.themeToggle.navToggle)
  const [open, setOpen] = useState(false)
  const navigate = useNavigate()

  const close = () => setOpen(false)

  return (
    <>

    <div className={`${style.nav}   ${toggle ? style.dark : ''}`}>

        {/* Logo — only visible on mobile, where the side strip is hidden */}
        <img
          className={style.brand}
          src={logo}
          alt="Evice"
          onClick={() => { close(); navigate("/") }}
        />

        {/* Left side navigation */}
        <div className={`${style.left} ${open ? style.open : ''}`}>
          <NavLink
            to="/"
            onClick={close}
            className={({ isActive }) =>
              `${style.item} ${isActive ? style.active : ''}`
            }
          >
            Home
          </NavLink>

          <NavLink
            to="/Browse-Expert"
            onClick={close}
            className={({ isActive }) =>
              `${style.item} ${isActive ? style.active : ''}`
            }
          >
            Browse Experts
          </NavLink>

          <NavLink
            to="/Contact-us"
            onClick={close}
            className={({ isActive }) =>
              `${style.item} ${isActive ? style.active : ''}`
            }
          >
            Contact Us
          </NavLink>

          <NavLink
            to="/h"
            onClick={close}
            className={({ isActive }) =>
              `${style.item} ${isActive ? style.active : ''}`
            }
          >
            How it works
          </NavLink>
        </div>

        {/* Right side actions */}
        <div className={`${style.right} ${open ? style.open : ''}`}>
          <div className={style.wrap}>
            <div className={style.icon}>
              <CiSearch style={{ color: toggle ? "#000000" : "#FFFFFF" }} />



            </div>
            <input type="text" placeholder="Search" />
          </div>

          <NavLink onClick={close} className={style.login} to="/Login">Login</NavLink>

          <div className={style.lang}>
            <img src={langIcon} alt="Language" />
            <select name="lang">
              <option value="Eng">Eng</option>
            </select>
          </div>
        </div>

        {/* Hamburger — only rendered on mobile through CSS */}
        <button
          className={style.burger}
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen(o => !o)}
        >
          {open ? <HiX /> : <HiMenu />}
        </button>
      </div>
    </>
  );
};

export default Navbar;
