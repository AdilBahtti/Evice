import style from "./Mem.module.css"
import pic from '../../assets/img2.png'
import pic1 from '../../assets/111 (1).png'
import pic2 from '../../assets/111 (2).png'
import {toggleSwitch} from '../../store/multipleCallSlice'
import { useDispatch } from "react-redux"
const Mem=({name })=>{
      

       const dispatch =useDispatch()
        return <>
  <div className={style.container}>

  <div className={style.cont}>
     <img src={pic} alt="" />
     <div className={style.info}>
      <div className={style.name}>Adil</div>
      <div className={style.time}> { name == "Request to join" ? ` request to join` : 'joined at 9:45 AM' }</div>
     </div>
  </div>
    
   <div className={style.btnCont}>

    {
      name == "Request to join" ?
      <>
      <button className={style.btn1}>Decline</button>
      <button onClick={()=>{   console.log("hello")
      dispatch(toggleSwitch()) 
        }} className={style.btn2}>Accept</button> 
      </>
    : 
        <>
          <img src={pic1} alt="" />
          <img src={pic2} alt="" />
        
        </>
    }
   </div>
  </div>
  </>
}
export default Mem;