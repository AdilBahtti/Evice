import { useState } from "react";
import styles from "./Rate.module.css"
import { useNavigate } from "react-router-dom";
const Rate=()=>{

  const [rating, setRating] = useState(4);
  const [review, setReview] = useState("Adam Smith was so gentle.");
  const navigate =useNavigate()

  return (
    <div className={styles.modal}>
      <div className={styles.header}>
        <h3>Review</h3>
        <span onClick={()=>{navigate("/Client/Booking")}} className={styles.close}>×</span>
      </div>

      <p className={styles.title}>Write a review about your customer</p>

      <div className={styles.stars}>
        {[1, 2, 3, 4, 5].map((star) => (
          <span
            key={star}
            className={`${styles.star} ${rating >= star ? styles.active : ""}`}
            onClick={() => setRating(star)}
          >
            ★
          </span>
        ))}
      </div>

      <textarea
        className={styles.textarea}
        value={review}
        onChange={(e) => setReview(e.target.value)}
      />

      <button onClick={()=>{   
              navigate("/DashBoard/Booking")
      }} className={styles.doneButton}>Done</button>
    </div>
  );

 
}
export default Rate