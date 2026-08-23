// BookingRates.jsx
import React, { useState } from "react";
import styles from "./BookingRates.module.css";
import { FaUser, FaUsers, FaPhone, FaVideo } from "react-icons/fa";
import { LuAudioLines } from "react-icons/lu";
import {Bookingrates}  from '../store/SetupProfSlice';
import {useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom";


const BookingRates = () => {
  const dispatch =useDispatch()
  const navigate=useNavigate()
  const [rates, setRates] = useState({
    voiceSingle: "",
    voiceMultiple: "",
    videoSingle: "",
    videoMultiple: "",
  });

  const handleChange = (e) => {
    setRates({ ...rates, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     dispatch(Bookingrates({...rates}))
  };

  return (
    <form className={styles.container} onSubmit={handleSubmit}>
      <div className={styles.secCont}>
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            Set your Voice Call Rates <LuAudioLines   size={25} className={styles.icon} />
          </h3>
          <div className={styles.row}>
            <div className={styles.inputBox}>
              <FaUser className={styles.inputIcon} />
              <label>For Single Participant/Min</label>
              <input
                type="number"
                name="voiceSingle"
                value={rates.voiceSingle}
                onChange={handleChange}
                placeholder="$ ___"
              />
            </div>
            <div className={styles.inputBox}>
              <FaUsers className={styles.inputIcon} />
              <label>For Multiple Participant/Min</label>
              <input
                type="number"
                name="voiceMultiple"
                value={rates.voiceMultiple}
                onChange={handleChange}
                placeholder="$ ___"
              />
            </div>
          </div>
        </div>

        {/* Video Rates */}
        <div className={styles.section}>
          <h3 className={styles.sectionTitle}>
            Set your Video Call Rates <FaVideo className={styles.icon} />
          </h3>
          <div className={styles.row}>
            <div className={styles.inputBox}>
              <FaUser className={styles.inputIcon} />
              <label>For Single Participant/Min</label>
              <input
                type="number"
                name="videoSingle"
                value={rates.videoSingle}
                onChange={handleChange}
                placeholder="$ ___"
              />
            </div>
            <div className={styles.inputBox}>
              <FaUsers className={styles.inputIcon} />
              <label>For Multiple Participant/Min</label>
              <input
                type="number"
                name="videoMultiple"
                value={rates.videoMultiple}
                onChange={handleChange}
                placeholder="$ ___"
              />
            </div>
          </div>
        </div>
      </div>
      {/* Action Buttons */}

      <div className={styles.btnCont}>


        <div className={styles.actions}>
          <button type="button" className={styles.cancelBtn}>
            Cancel
          </button>
          <button type="submit" onClick={()=>{
             navigate("/Setup-Profile/Booking-Time")
          }} className={styles.proceedBtn}>
            Proceed
          </button>
        </div>
      </div>
    </form>
  );
};

export default BookingRates;






















