import style from './ChatCall.module.css'
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import call from '../../assets/ao.png'
import pic1 from '../../assets/Group 581.png'
import pic2 from '../../assets/Group 580.png'
import pic3 from '../../assets/Group 579.png'
import im from '../../assets/img2.png'
import { useDispatch, useSelector } from 'react-redux'
import {setCall} from "../../store/ShowPopUpSlice"
const ChatCall = () => {
  const { val } = useSelector(store => store.multiple);
  const [timer, setTime] = useState(0);
  const time = useRef();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    time.current = setInterval(() => {
      setTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(time.current); // Cleanup properly
  }, []);

  return (
    <div className={`${style.container} ${val ? style.splitScreen : ''}`}>
      <div className={style.timmer}>{timer} Min</div>

    {val ? (
  <div className={style.splitWrapper}>
    <img className={style.halfImg} src={call} alt="" />
    <img className={style.halfImg} src={call} alt="" />
  </div>
) : (
  <img className={style.img} src={call} alt="" />
)}

<img className={style.caller} src={im} alt="" />


      {/* Control Buttons */}
      <div className={style.lower}>
        <img src={pic1} alt="" />
        <div
          onClick={() => {
            navigate("/meeting/end");
            dispatch(setCall());
          }}
        >
          <img src={pic2} alt="" />
        </div>
        <img src={pic3} alt="" />
      </div>
    </div>
  );
};
export default ChatCall;