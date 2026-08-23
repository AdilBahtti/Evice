import { useState } from 'react';
import style from './BookingTime.module.css';
const Button=({name})=>{
   const [act , setAct]= useState(false);

   return <>
         <div onClick={()=>{
          setAct(!act)
         }} className={`${style.tbtn} ${act && style.active}`}>
          {name}
         </div>
   </>
}
export default Button;