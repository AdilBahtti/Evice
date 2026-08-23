import { useNavigate } from 'react-router-dom';
import ClientCard from '../ClientComponents/BookingComponents/ClientCard';
import Clender from '../ExpertSideComponents/BookingComponents/Clender';
import BookingContainer from '../ProfileComponent/BookingContainer';
import style from './Hire.module.css'
const Hire=({profiles})=>{
  const navigate=useNavigate()
  return <>
     <div className={style.container}>
      <div className={style.title}>
        Hire Expert
      </div>
      <div className={style.sub}>Fill in details for hiring the expert.</div>

        <ClientCard profiles={profiles}></ClientCard>
          
         <div className={style.book}>
        <BookingContainer name={"Select Type of Call"}></BookingContainer>

         </div>

         <div className={style.cont}>
          <Clender name={"Select date & time"}></Clender>
         </div>

           
      {/* Available Slots */}
      <div className={style.section}>
        <p className={style.label}>
          Available Slots on <span className={style.date}>Thu 17 May</span>
        </p>
        <div className={style.slots}>
          <button className={`${style.slotBtn} ${style.active}`}>10:00 PM</button>
          <button className={style.slotBtn}>11:00 PM</button>
          <button className={style.slotBtn}>12:00 PM</button>
        </div>
      </div>

      {/* Call Details */}
      <div className={style.section}>
        <p className={style.label}>Call Details</p>
        <select className={style.dropdown}>
          <option>Select No of Participants</option>
          <option>1</option>
          <option>2</option>
          <option>3+</option>
        </select>
        <p className={style.subText}>
          Complete the info so expert can be ready for your call.
        </p>
        <textarea
          className={style.textarea}
          placeholder="What do you want to discuss on the call?"
        />
      </div>

      {/* Payment Details */}
      <div className={style.section}>
        <p className={style.label}>Payment Details</p>
        <div className={style.paymentRow}>
          <div className={style.cardBox}>
            <span className={style.cardIcon}>💳</span>
            <span>4563 **** **** 2235</span>
          </div>
          <button className={style.addBtn}>+ Add Another</button>
        </div>
      </div>

      {/* Action Buttons */}
      <div className={style.actions}>
        <button className={style.cancelBtn}>Cancel</button>
        <button onClick={()=>{navigate("/Client/Review")}} className={style.reviewBtn}>Review</button>
      </div>
    </div>

    
  </>
}
export default Hire;