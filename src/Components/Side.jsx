import style from './Side.module.css';

// Import images from assets
import logo from '../assets/logo.png';
import fb from '../assets/fb.png';
import insta from '../assets/insta.png';
import twit from '../assets/twit.png';
import utube from '../assets/utube.png';
import { useNavigate } from 'react-router-dom';

const Side = () => {
  const navigate = useNavigate()
  return (
    <>
      <div className={style.container}>
        <img onClick={()=>{ navigate("/")}} className={style.logo} src={logo} alt="Logo" />

        <div className={style.middle}>
          <img src={fb} alt="Facebook" className={`${style.fb} ${style.icon}`} />
          <img src={insta} alt="Instagram" className={`${style.insta} ${style.icon}`} />
          <img src={twit} alt="Twitter" className={`${style.twit} ${style.icon}`} />
          <img src={utube} alt="YouTube" className={`${style.utube} ${style.icon}`} />
        </div>
      </div>
    </>
  );
};

export default Side;
