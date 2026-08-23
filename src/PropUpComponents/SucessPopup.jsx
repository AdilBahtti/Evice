import style from './SucessPopup.module.css'
import sucess from '../assets/Group 562.png'
import { useDispatch } from 'react-redux'
import { removeProfile } from '../store/ShowPopUpSlice'
import { useNavigate } from 'react-router-dom'
const SucessPopup=()=>{
  const dispatch=useDispatch()
   const navigate= useNavigate()
  return <>
  <div className={style.container}>

         <img src={sucess} alt="" />
         <div className={style.cont}>
          Your profile was setup sucessfully!
         </div>

         <button onClick={()=>{  dispatch(removeProfile())   
            navigate("/DashBoard") }} className={style.btn}>Go to Dashboard</button>
  </div>
  </>
}
export default SucessPopup;