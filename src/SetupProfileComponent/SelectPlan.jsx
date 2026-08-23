
import SubscrOption from '../LightHomeComponents/SubscrOption';
import style from './SelectPlan.module.css'
import pic1 from "../assets/cube1.png"
import pic2 from "../assets/cube2.png"
import pic3 from "../assets/cube3.png"
import free from "../assets/Group 509.png"
import { useNavigate } from 'react-router-dom';
const SelectPlan=()=>{
  const navigate=useNavigate()
  return <>
      <div className={style.optionCont}>

                  <SubscrOption Package={"Bacic"} pic={pic1}></SubscrOption>
                <SubscrOption Package={"Pro"} pic={pic2}></SubscrOption>
                <SubscrOption Package={"Premium"} pic={pic3}></SubscrOption>
                <div className={style.container}>

                   <img src={free} alt="" />
                   <div className={style.text}> 30 Days Free Trail</div>
                     <button className={style.btn} onClick={()=>{ navigate("/Setup-Profile/Card-Information") }}>Free Trail</button>
                </div>
             </div>
  </>
} 
export default SelectPlan;