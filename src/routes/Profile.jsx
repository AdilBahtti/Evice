import styles from './Profile.module.css';
import Header from "../ProfileComponent/Header";
import MoreAbout from "../ProfileComponent/MoreAbout";
import { NavLink, Outlet } from 'react-router-dom'
import { navLight } from '../store/themeToggleSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';

const Profile = ({ index }) => {

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(navLight())
  })
  return (

    <div className={styles.profileContainer}>
      <Header />



      {index ? 
          <div className={styles.navBar}>

        <NavLink
          to="/DashBoard/Profile/About"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/DashBoard/Profile/Review"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
        >
          Review
        </NavLink>

        <NavLink
          to="/DashBoard/Profile/BookingRates"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
        >
          Booking rates
        </NavLink>

      </div> :
      <div className={styles.navBar}>

        <NavLink
          to="/Profile/About"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
        >
          About
        </NavLink>

        <NavLink
          to="/Profile/Review"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
        >
          Review
        </NavLink>

        <NavLink
          to="/Profile/BookingRates"
          className={({ isActive }) =>
            `${styles.link} ${isActive ? styles.active : ""}`
          }
        >
          Booking rates
        </NavLink>

      </div>  
    }

      <div className={styles.profileBody}>
        <div className={styles.section}>
          <Outlet></Outlet>
        </div>


        <MoreAbout />
      </div>
    </div>
  );
};

export default Profile;
