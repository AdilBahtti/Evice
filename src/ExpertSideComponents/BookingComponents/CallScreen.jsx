import style from './CallScreen.module.css'
import call from '../../assets/ao.png'
import pic1 from '../../assets/Group 581.png'
import pic2 from '../../assets/Group 580.png'
import pic3 from '../../assets/Group 579.png'
import im from '../../assets/img2.png'
import { useNavigate } from 'react-router-dom'
import { useEffect, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
const CallScreen = () => {

  
       const [timer , setTime] =useState(0)
      const time= useRef()
      
  useEffect(()=>{
   time.current=  setInterval(()=>{
            
          setTime((prev)=> prev+1)

         return ()=>{
             clearInterval(time.current)
         }   
    } , 1000)
  }, [])



  

  const navigate = useNavigate()
  return <>
    <div className={style.container}>
          <div className={style.timmer}>{timer}  MIn</div>
      <img className={style.img} src={call} alt="" />
      <img  className={style.caller} src={im} alt="" />


      <div className={style.lower}>
        <img src={pic1} alt="" />
        <div onClick={() => { navigate("/meeting/end") }}>
          <img src={pic2} alt="" />

        </div>
        <img src={pic3} alt="" />
      </div>
    </div>
  </>
}
export default CallScreen;