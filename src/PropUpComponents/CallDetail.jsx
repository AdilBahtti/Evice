import styles from './CallDetail.module.css'
import { removecall , setRate } from '../store/ShowPopUpSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
const CallDetail=()=>{
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return <>
      

          <div className={styles.modal}>
      <div className={styles.header}>
        <h3>Call Details</h3>
        <span onClick={()=>{ 
          navigate("/DashBoard/Booking")

         }} className={styles.close}>×</span>
      </div>

      <div className={styles.content}>
        <p className={styles.earnedLabel}>Total Earned</p>
        <h1 className={styles.amount}>$250</h1>
        <p className={styles.subtitle}>
          You just finished call with Natalia!
        </p>

        <hr className={styles.divider} />

        <div className={styles.details}>
          <div className={styles.row}>
            <span>Call Duration</span>
            <span>45 Mins</span>
          </div>
          <div className={styles.row}>
            <span>Date</span>
            <span>25 April, 2022</span>
          </div>
          <div className={styles.row}>
            <span>Time</span>
            <span>10:00 PM</span>
          </div>
        </div>

        <button   onClick={()=>{
 dispatch(removecall())
          dispatch(setRate())
          navigate("/meeting/rate")
        }} className={styles.reviewButton}>Give Customer Review</button>
      </div>
    </div>
        
  </>
}
export default CallDetail;