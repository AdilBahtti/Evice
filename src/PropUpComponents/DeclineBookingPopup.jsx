import React, { useState } from "react";
import styles from "./DeclineBookingPopup.module.css";
import { removeApprove } from "../store/ShowPopUpSlice";
import { useDispatch } from "react-redux";

const DeclineBookingPopup = ({ onClose }) => {
  const [reason, setReason] = useState("");
  const [selectedOption, setSelectedOption] = useState(null);
      const dispatch = useDispatch()
  const handleContinue = () => {
    console.log("Reason:", reason || selectedOption);
    onClose();
  };

  return (
    <div className={styles.overlay}>
      <div className={styles.popup}>
        <button className={styles.closeBtn} onClick={onClose}>×</button>
        <h2 className={styles.title}>Decline Booking</h2>
        <p className={styles.subtitle}>
          Please provide your reason for declining the booking. We will share the reason with Adam,
        </p>

        <textarea
          className={styles.textarea}
          placeholder="Type Reason Here"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
        />

        <p className={styles.orText}>Or select any of these options</p>

        <div className={styles.options}>
          {[
            "Not available, select another slot.",
            "I’m not expert about the topic you chose",
            "Not available select other slot.",
            "Something personal."
          ].map((option, index) => (
            <label key={index} className={styles.option}>
              <input
                type="radio"
                name="reason"
                checked={selectedOption === option}
                onChange={() => setSelectedOption(option)}
              />
              <span className={styles.radio}></span>
              {option}
            </label>
          ))}
        </div>

        <div className={styles.actions}>
          <button className={styles.cancelBtn} onClick={onClose}>Cancel</button>
          <button onClick={()=>{dispatch(removeApprove())}} className={styles.continueBtn} >Continue</button>
        </div>
      </div>
    </div>
  );
};

export default DeclineBookingPopup;
