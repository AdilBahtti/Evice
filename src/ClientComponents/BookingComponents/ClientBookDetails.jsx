import React from "react";
import { FaCalendarAlt, FaClock, FaVideo } from "react-icons/fa";
import styles from "./ClientBookDetails.module.css";
import pic from '../../assets/img2.png'
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setApprove } from "../../store/ShowPopUpSlice";
const ClientBookDetails = ({booking}) => {
  const navigate = useNavigate()
  const dispatch =useDispatch()
  return (
    <div className={styles.card}>
      {/* Header Section */}
      <div className={styles.header}>
        <div className={styles.avatar}>
          <img src={pic} alt="" />
          
          </div> {/* Placeholder for image */}
        <div className={styles.info}>
          <h3 className={styles.name}>Tom Carmin</h3>
          <p className={styles.email}>Tomcarmin@gmail.com</p>
        </div>
        <div className={styles.more}>...</div>
      </div>

      {/* Date and Time */}
      <div className={styles.dateTime}>
        <span className={styles.iconText}>
          <FaCalendarAlt /> 14 July, 2023 - Monday
        </span>
        <span className={styles.iconText}>
          <FaClock /> 10:00 - 10:45 AM
        </span>
      </div>

      {/* Discussion Question */}
      <h4 className={styles.question}>What do you want to discuss during our call?</h4>
      <p className={styles.description}>
        As a graphic designer looking to transition into the freelance world,
        you may feel uncertain about where to begin. However, taking the leap
        can lead to exciting opportunities. Start by building a strong portfolio,
        establishing an online presence, networking, and researching freelance
        platforms. Embrace the freedom and flexibility that freelancing offers,
        and embrace the journey ahead.
      </p>

      <hr className={styles.divider} />

        {/* Conditional Sections */}
      {booking.details === "Upcoming" && (
        <button
          onClick={() => navigate("/ClientCalling")}
          className={styles.callButton}
        >
          <FaVideo /> Join The Call
        </button>
      )}

      {booking.details === "Pending" && (
        <div className={styles.pendingActions}>
        
          <button className={styles.decline}>Decline</button>
        </div>
      )}

      {booking.details === "Completed" && (
        <div className={styles.completedDetails}>
          {/* Lower Part UI based on provided image */}
          <div className={styles.sessionInfo}>
            <div>
              <p>Session Time</p>
              <span>45 Mins</span>
            </div>
            <div>
              <p>Video Call Time</p>
              <span>12 Mins</span>
            </div>
            <div>
              <p>Audio Call Time</p>
              <span>33 Mins</span>
            </div>
          </div>

          <div className={styles.priceInfo}>
            <p>Video Call / Min Price <span>$12</span></p>
            <p>Audio Call / Min Price <span>$7</span></p>
          </div>

          <div className={styles.totalPrice}>
            <p>Total Price</p>
            <span>$400</span>
          </div>

          <button className={styles.refundButton}>
            Initiate Refund
          </button>
        </div>
      )}


      {
        booking.details =='Decline' &&
           
         <div className={styles.cancelBox}>
      <p className={styles.title}>Cancellation Reason</p>
      <p className={styles.reason}>
        Not available at the slot you selected please try another slot.
      </p>

      <button className={styles.btn}>Book Again</button>
    </div>
      }


    </div>
  );
};

export default ClientBookDetails;
