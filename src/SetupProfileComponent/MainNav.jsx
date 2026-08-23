import style from './MainNav.module.css'
import {NavLink} from 'react-router-dom'
const MainNav=()=>{
    return <>
       <div className={style.container}>

<div className={style.left}>
  <NavLink
    to="/Setup-Profile/Personal-Information"
    className={({ isActive }) =>

      `${style.it} ${isActive ? style.active : ''}`
    
              }

  >
    Personal Information
  </NavLink>

  <NavLink
    to="/Setup-Profile/Booking-Rates"
  className={({ isActive }) =>
              `${style.it} ${isActive ? style.active : ''}`
            }

  >
    Booking Rates
  </NavLink>

  <NavLink
    to="/Setup-Profile/Booking-Time"
    className={({ isActive }) =>
                `${style.it} ${isActive ? style.active : ''}`
              }
  >
    Booking Time
  </NavLink>

  <NavLink
    to="/Setup-Profile/Select-Plan"
    className={({ isActive }) =>
                `${style.it} ${isActive ? style.active : ''}`
              }

  >
    Select Plan
  </NavLink>

  <NavLink
    to="/Setup-Profile/Card-Information"
  className={({ isActive }) =>
              `${style.it} ${isActive ? style.active : ''}`
            }

  >
    Card Information
  </NavLink>
</div>

        <div className={style.right}>

          <button className={style.btn}>Skip</button>
        </div>
       </div>
    
    </>
}
export default MainNav;