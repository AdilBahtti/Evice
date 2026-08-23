import style from './Side.module.css';

// Import images from assets
import logo from '../../assets/logo2.png';
import fb from '../../assets/az (1).png';
import insta from '../../assets/az (2).png';
import twit from '../../assets/az (3).png';
import utube from '../../assets/az (4).png';
import { useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

const Side = ({index}) => {
  const navgate=useNavigate()
  return (
    <>
      <div className={style.container}>
        <img className={style.logo} src={logo} alt="Logo" />

    
{


  index ?  
     <div className={style.middle}>
  <NavLink 

  
    to="/Clientmeeting/chat" 
    className={({ isActive }) => 
      `${style.iconLink} ${isActive ? style.active : ""}`
    }
  >
    <img src={fb} alt="Facebook" className={`${style.fb} ${style.icon}`} />
  </NavLink>
   
    <NavLink 
    to="/Clientmeeting/participents" 
    className={({ isActive }) => 
      `${style.iconLink} ${isActive ? style.active : ""}`
    }
  >
    <img src={utube} alt="YouTube" className={`${style.utube} ${style.icon}`} />
  </NavLink>

  

      
         
  <NavLink 
    to="/Clientmeeting/setting" 
    className={({ isActive }) => 
      `${style.iconLink} ${isActive ? style.active : ""}`
    }
  >
    <img src={insta} alt="Instagram" className={`${style.insta} ${style.icon}`} />
  </NavLink>

 

 
</div>
  :
  
<div className={style.middle}>
  <NavLink 

  
    to="/meeting/chat" 
    className={({ isActive }) => 
      `${style.iconLink} ${isActive ? style.active : ""}`
    }
  >
    <img src={fb} alt="Facebook" className={`${style.fb} ${style.icon}`} />
  </NavLink>
   
    <NavLink 
    to="/meeting/participents" 
    className={({ isActive }) => 
      `${style.iconLink} ${isActive ? style.active : ""}`
    }
  >
    <img src={utube} alt="YouTube" className={`${style.utube} ${style.icon}`} />
  </NavLink>

  

       <NavLink 
    to="/meeting/request" 
    className={({ isActive }) => 
      `${style.iconLink} ${isActive ? style.active : ""}`
    }
  >
    <img src={twit} alt="Twitter" className={`${style.twit} ${style.icon}`} />
  </NavLink>
         
  <NavLink 
    to="/meeting/setting" 
    className={({ isActive }) => 
      `${style.iconLink} ${isActive ? style.active : ""}`
    }
  >
    <img src={insta} alt="Instagram" className={`${style.insta} ${style.icon}`} />
  </NavLink>

 

 
</div>
  }

      </div>
    </>
  );
};

export default Side;
