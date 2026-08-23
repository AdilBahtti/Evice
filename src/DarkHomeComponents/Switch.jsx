import style from './Switch.module.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { light } from '../store/themeToggleSlice';
import { useDispatch } from 'react-redux';
const Switch = () => {
  const dispatch = useDispatch()
  return (
    <div className={style.container}>
      <button onClick={()=>{ dispatch(light())}} className={style.leftBtn}>
        <FaArrowLeft />
      </button>
      <button className={style.rightBtn}>
        <FaArrowRight color='white' />
      </button>
    </div>
  );
};

export default Switch;
