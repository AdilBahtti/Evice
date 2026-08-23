import style from './BookingPop.module.css'
import { MdOutlineCancel } from "react-icons/md";
import tick from '../assets/Group 289.png'
import { useDispatch } from 'react-redux';
import { removeBooking } from '../store/ShowPopUpSlice';



const BookingPop=()=>{
  const dispatch =useDispatch()
  
 
   return   <>
      <div className={style.container}>
       <div className={style.cross}> <MdOutlineCancel onClick={()=>{ dispatch(removeBooking())}}  size={24}></MdOutlineCancel></div>

            <img  className={style.pic} src={tick} alt="" />
          
          <div className={style.head}>Booking Confermed</div>
             <div className={style.subhead}>You have sucessfully booked a slot</div>
            


            <button   className={style.btn1}>Countinue</button>
            <button className={style.btn2}> Got to Home</button>
      </div>
   
   
   </>
}
export default BookingPop;