import style from './NavBar.module.css'
import {NavLink, useNavigate} from "react-router-dom"
import img  from  '../assets/pp.png'
import img2 from '../assets/ab.png'
import langIcon from '../assets/lang.png';
import prof from '../assets/pro.png'
import logo from '../assets/logo.png'
import { useState } from 'react';
import { CgProfile } from "react-icons/cg";
import { CiSettings } from "react-icons/ci";
import { PiSignOut } from "react-icons/pi";
import { HiMenu, HiX } from "react-icons/hi";
import useCanHover from '../hooks/useCanHover';
import Card from '../ExpertSideComponents/NotificationComponent/Card';
const NavBar=()=>{

  const [profile , setProf] =useState(false)
  const [noti , setNoti] =useState(false)
  const [open , setOpen] =useState(false)
  const canHover = useCanHover()

  const navigate= useNavigate()
  const close = () => setOpen(false)

  return <>
       <div className={style.nav}>

  {/* Mobile header row: logo + hamburger */}
  <div className={style.mobileBar}>
    <img className={style.brand} src={logo} alt="Evice" onClick={()=>{ close(); navigate("/Client") }} />
    <button
      className={style.burger}
      aria-label="Toggle menu"
      aria-expanded={open}
      onClick={()=>{ setOpen(o=>!o) }}
    >
      {open ? <HiX/> : <HiMenu/>}
    </button>
  </div>

  <div className={`${style.links} ${open ? style.open : ''}`}>
  <NavLink to="/Client" end onClick={close} className={({ isActive }) => (isActive ? style.active : '')}>
    DashBoard
  </NavLink>

  <NavLink to="/Client/Booking" onClick={close} className={({ isActive }) => (isActive ? style.active : '')}>
    Bookings
  </NavLink>
  <NavLink to="/Client/Browse-Experts" onClick={close} className={({ isActive }) => (isActive ? style.active : '')}>
    Browse Experts 
  </NavLink>
  <NavLink to="/Client/Favourite" onClick={close} className={({ isActive }) => (isActive ? style.active : '')}>
    Favourite
  </NavLink>
  <NavLink to="/Client/Call" onClick={close} className={({ isActive }) => (isActive ? style.active : '')}>
    Calls
  </NavLink>
  <NavLink to="/Client/Contact-Us" onClick={close} className={({ isActive }) => (isActive ? style.active : '')}>
    Contact Us
  </NavLink>
  <NavLink to="/Client/FAQs" onClick={close} className={({ isActive }) => (isActive ? style.active : '')}>
    FAQs
  </NavLink>
</div>



        <div className={`${style.right} ${open ? style.open : ''}`}>

               <div className={style.con}>
                <img onClick={()=>{ close(); navigate("/DashBoard")}} src={img} alt="" />
                switch to Expert side
               </div>
               <img
                 className={style.bell}
                 onClick={()=>{setNoti(n=>!n)}}
                 onMouseEnter={canHover ? ()=>{setNoti(true)} : undefined}
                 onMouseLeave={canHover ? ()=>{ setNoti(false)} : undefined}
                 src={img2}
                 alt=""
               />
      



                         <div className={style.lang}>
                           <img src={langIcon} alt="Language" />
                           <select name="lang">
                             <option value="Eng">Eng</option>
                           </select>
                         </div>
<img
  onClick={() => setProf(p => !p)}
  onMouseEnter={canHover ? () => setProf(true) : undefined}
  onMouseLeave={canHover ? () => setProf(false) : undefined}
  className={style.prof}
  src={prof}
  alt=""
/>

 {
        noti &&
               <div  onMouseEnter={canHover ? ()=>{setNoti(true)} : undefined} onMouseLeave={canHover ? ()=>{ setNoti(false)} : undefined}  className={style.notification}>
                <div className={style.header}>

                <div className={style.name}>Notification</div>      <button className={style.btn}>Mark All Read</button>

                </div>

                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
                <Card></Card>
               </div>
      }


{
  profile  &&

   <div  onMouseEnter={canHover ? () => setProf(true) : undefined}
  onMouseLeave={canHover ? () => setProf(false) : undefined} className={style.drop}>
    <NavLink  to={"/DashBoard/Profile"} onClick={close} >  <CgProfile></CgProfile> Profile</NavLink>
    <NavLink to={"/DashBoard/Setting"} onClick={close} >  <CiSettings></CiSettings>  Setting</NavLink>
    <NavLink  to={"/"} onClick={close} >  <PiSignOut></PiSignOut>  Signout</NavLink>
   </div>
}
        </div>


       </div>
  </>
}
export default NavBar;
