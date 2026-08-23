import style from './Booking.module.css'
import { LuAudioLines } from "react-icons/lu";
const Booking=()=>{
 return <>
             <div className={style.container}>
                   <LuAudioLines size={25}></LuAudioLines>
                   <div className={style.call}>Audio Call</div>
                   <div className={style.amount}>$25</div>
                   <div className={style.member}>For single participent</div>
             </div>
 
 
 </>
}
export default Booking;