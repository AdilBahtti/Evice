
import styles from "./Contactus.module.css";
import { navLight } from "../store/themeToggleSlice";
import { useDispatch } from "react-redux";
import { useEffect } from "react";

const Contactus = () => {

  const dispatch =useDispatch()

  useEffect(()=>{
    dispatch(navLight())
  })
  return (
    <div className={styles.contactContainer}>
      <h2 className={styles.title}>Don’t hesitate to get in touch with Us</h2>
      <p className={styles.subtitle}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec porta auctor
        vehicula. Nam vel tortor tincidunt mauris semper interdum.
      </p>

      <form className={styles.form}>
        <div className={styles.row}>
          <div className={styles.field}>
            <label>First Name</label>
            <input type="text" placeholder="Enter First Name"  />
          </div>
          <div className={styles.field}>
            <label>Last Name</label>
            <input type="text" placeholder="Enter Last Name"  />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label>Email</label>
            <input type="email" placeholder="Enter Email"  />
          </div>
          <div className={styles.field}>
            <label>Phone No</label>
            <input type="text" placeholder="Enter Phone Number"  />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.field}>
            <label>Subject</label>
            <input type="text" placeholder="Enter Subject" />
          </div>
          <div className={styles.field}>
            <label>Category</label>
            <select>
              <option>Select Category</option>
              <option>General Inquiry</option>
              <option>Support</option>
              <option>Feedback</option>
            </select>
          </div>
        </div>

        <div className={styles.field}>
          <label>Message</label>
          <textarea
            rows="4"
            placeholder="Enter your message"
            
          ></textarea>
        </div>

        <button type="submit" className={styles.button}>
          SEND MESSAGE <span className={styles.arrow}>↗</span>
        </button>
      </form>
    </div>
  );
};

export default Contactus;
