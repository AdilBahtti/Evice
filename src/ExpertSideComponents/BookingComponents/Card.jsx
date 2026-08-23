import { useState } from 'react';
import style from './Card.module.css'
import { CiClock2 } from "react-icons/ci";
const Card=({name , time , onClick})=>{
const [active , setActive ] = useState(false)
  return <>
 <div onClick={()=>{ setActive(!active)
  onClick()
 }} className={`${active ?  style.activee : "" }  ${style.container}`}>
   <div className={style.name}>{name}</div>
   <div className={style.time}> <CiClock2></CiClock2> {time}</div>
 </div>
  </>
}
export default Card;