import style from './Switch.module.css';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import { dark} from '../store/themeToggleSlice';
import { useDispatch } from 'react-redux';

const Switch = () => {

  const dispatch=useDispatch();
  return (
    <div className={style.container}>
      <button className={style.leftBtn}>
        <FaArrowLeft />
      </button>
      <button onClick={()=>{ dispatch(dark()) }} className={style.rightBtn}>
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Switch;
