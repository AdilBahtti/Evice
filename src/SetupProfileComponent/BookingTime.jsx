import { useNavigate } from 'react-router-dom';
import style from './BookingTime.module.css'
import Button from './Button';
import Days from './Days';
const BookingTime=()=>{

  const navigate = useNavigate()
  return <>
  


  <div className={style.container}>

    <div className={style.title}>Select day for your avalibility</div>
    <div className={style.cont}>

      <Days name={"Monday"}></Days>
      <Days name={"Tuesday"}></Days>
      <Days name={"Wednesday"}></Days>
      <Days name={"Thursday"}></Days>
      <Days name={"Friday"}></Days>
      <Days name={"Saturday"}></Days>
      <Days name={"Sunday"}></Days>
    </div>
  </div>

  <div className={style.container2}>
        <div className={style.title}>Set session time</div>

        <div className={style.btnCont}>
          <Button name={"15 Mins"}></Button>

          <Button name={"30 Mins"}></Button>
          <Button name={"45 Mins"}></Button>
          <Button name={"1 Hour"}></Button>
        </div>
  </div>

       <div className={style.btnCont}>
     
     
             <div className={style.actions}>
               <button type="button" className={style.cancelBtn}>
                 Cancel
               </button>
               <button type="submit" onClick={()=>{
                  navigate("/Setup-Profile/Select-Plan")
               }} className={style.proceedBtn}>
                 Proceed
               </button>
             </div>
           </div>
  </>
}
export default BookingTime;