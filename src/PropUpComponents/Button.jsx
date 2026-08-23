import { useDispatch } from 'react-redux'
import style from './LoginPop.module.css'
import { useState } from 'react'
import { setChange ,removepass ,removeLoginpopup } from '../store/ShowPopUpSlice'
import { useNavigate } from 'react-router-dom'
const Button=({action , handlePass , name})=>{
  const dispatch =useDispatch()

  const [second , setSecond]=useState(false)
   const navigate = useNavigate()
    return <>
    <div className={style.btnCont}>

      <button onClick={()=>{dispatch(action())}} className={style.btn1}> Cancel</button>
      <button   onClick={()=>{ if(name.toLowerCase() == "forget password" && second) { 
                dispatch(setChange())
                dispatch(removepass())
                setSecond(false)
        } 
      else if(name.toLowerCase()== "email confermation"){
        dispatch(removeLoginpopup())
          dispatch(setChange())
      }
      else if(name.toLowerCase() == "login confermation"){
                 navigate("/DashBoard")
      }
      else{  handlePass();
       setSecond(true) 
       }}} className={style.btn2}> Continue</button>
    </div>
    
    </>
}
export default Button;