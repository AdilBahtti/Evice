import React from "react";
import styles from "./Review.module.css";
import { FaStar, FaBriefcase } from "react-icons/fa";
import oo from '../../assets/img2.png'
import { useDispatch } from "react-redux";
import { setBooking } from "../../store/ShowPopUpSlice";
const Review = () => {
  const dispatch =useDispatch()
  return (
    <div className={styles.container}>
      <h2 className={styles.heading}>Review Booking</h2>
      <p className={styles.subheading}>Review your booking before confirming</p>

      <div className={styles.card}>
        {/* Left Section */}
        <div className={styles.left}>
          <div className={styles.profile}>
            <img
              src={oo}
              alt="profile"
              className={styles.avatar}
            />
            <div>
              <h3 className={styles.name}>Adam Smith</h3>
              <div className={styles.rating}>
                <FaStar className={styles.starIcon} />
                <span>4.9 (13)</span>
              </div>
              <p className={styles.role}>
                <FaBriefcase className={styles.icon} /> Business Consultant
              </p>
            </div>
          </div>

          <div className={styles.info}>
            <div>
              <h4>Call Type</h4>
              <p>Audio call $30/Min/Participant</p>
            </div>
            <div>
              <h4>Date & Time</h4>
              <p>18 May, 2023 - 10:00 PM</p>
            </div>
            <div>
              <h4>No of Participants</h4>
              <p>3</p>
            </div>

            <div>
              <h4>Participant Emails</h4>
              <div className={styles.emails}>
                <span>Adamsmith@gmail.com</span>
                <span>Adamsmffffffth@gmail.com</span>
                <span>Adamsmfffffith@gmail.com</span>
              </div>
            </div>

            <div>
              <h4>What do you want to discuss on the call?</h4>
              <p className={styles.desc}>
                As a graphic designer looking to transition into the freelance
                world, you may feel uncertain about where to begin. However,
                taking the leap can lead to exciting opportunities. Start by
                building a strong portfolio, establishing an online presence,
                networking, and researching freelance platforms. Embrace the
                freedom and flexibility that freelancing offers, and embrace the
                journey ahead.
              </p>
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className={styles.right}>
          <h4 className={styles.rightTitle}>Card Details</h4>
          <p className={styles.cardDetails}>
            <span className={styles.mastercard}></span> Mastercard 4545 **** ****
            ****
          </p>

          <div className={styles.paymentBox}>
            <p>
              Call Charges <span>$260</span>
            </p>
            <p>
              Service Fee <span>8%</span>
            </p>
            <hr />
            <p className={styles.total}>
              Total Payment <span>$300</span>
            </p>
          </div>

          <div className={styles.actions}>
            <button className={styles.backBtn}>Go Back</button>
            <button onClick={()=>{ dispatch(setBooking()) }} className={styles.confirmBtn}>Confirm Booking</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Review;
