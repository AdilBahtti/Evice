import style from './SucessPop.module.css'
import { MdOutlineCancel } from "react-icons/md";
import tick from '../assets/Group 289.png'
import { removeChange } from '../store/ShowPopUpSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { removepass } from '../store/ShowPopUpSlice';

const SucessPop=({head , subhead})=>{
  const dispatch = useDispatch()
  const navigate=useNavigate()
 
   return   <>
      <div className={style.container}>
       <div className={style.cross}> <MdOutlineCancel onClick={()=>{dispatch(removeChange()
         ); }} size={24}></MdOutlineCancel></div>

            <img  className={style.pic} src={tick} alt="" />
          
          <div className={style.head}>{head}</div>
             <div className={style.subhead}>{subhead}</div>
            


            <button  onClick={()=>{  dispatch(removeChange()
         );
         navigate("/Setup-Profile")
                     
            }} className={style.btn1}>Countinue</button>
            <button className={style.btn2}> Got to Home</button>
      </div>
   
   
   </>
}
export default SucessPop;