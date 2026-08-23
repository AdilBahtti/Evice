import style from './Days.module.css'
import off from '../assets/a (1).png'
import on from '../assets/a (2).png'
import time from "../assets/t.png"
import {  useState } from 'react'
const Days=({name})=>{

     const [ava , setAva] = useState([])
   const [active , setActive] =useState(false)
      
    return  <>
        <div className={style.container}>

                {
                  active ?
               <div className={style.head}>
                {name}       <img onClick={()=>{setActive(false)  } } src={on} alt="" />
               </div> : 
                 <div className={style.head2}>
                {name}       <img onClick={()=>{setActive(true)  }  }  src={off} alt="" />
               </div>

                }

                {
                  active ? 

                  <div className={style.start}>9 : 00 AM  <img src={time} alt="" /></div> : ''
                  
                  
                }
                {
                  active &&
                <div className={style.start}>19 : 00 PM  <img src={time} alt="" /></div> 
                }

        </div>
    
    
    </>
}
export default Days;