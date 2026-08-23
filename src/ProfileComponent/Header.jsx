import style from './Header.module.css';
import { IoBag } from "react-icons/io5";

// Import images from assets
import pback from '../assets/pback.png';
import jack from '../assets/jack.png';
import vector2 from '../assets/Vector (2).png';
import star from '../assets/Star.png';
import frame423 from '../assets/Frame 423.png';

const Header = () => {
  return (
    <>
      <div className={style.container}>
        <img className={style.pic1} src={pback} alt="Background" />
        <img className={style.pic} src={jack} alt="Profile" />

        <div className={style.cont}>
          <div className={style.dataCont}>
            <div className={style.name}>
              Jack Alice
              <img className={style.pic4} src={vector2} alt="Verified" />
            </div>

            <div className={style.datcont}>
              <IoBag size={14} /> Business Consultant
              <img className={style.pic3} src={star} alt="Star" />
              <span>4.9</span>
            </div>
          </div>

          <div className={style.btnCont}>
            <button className={style.btn1}>
              <img className={style.pic5} src={frame423} alt="Message" />
            </button>
            <button className={style.btn2}>Hire</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
