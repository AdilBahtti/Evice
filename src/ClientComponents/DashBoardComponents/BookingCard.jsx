import React from "react";
import styles from "./BookingCard.module.css";
import { FaStar, FaBriefcase, FaClock, FaCalendarAlt, FaDollarSign } from "react-icons/fa";
import img from '../../assets/img5.png'

const BookingCard = ({ 
  name, 
  role, 
  rating, 
  reviews, 
  time, 
  duration, 
  date, 
  price, 
  type 
}) => {
  return (
    <div className={styles.card}>
      {/* Profile & Title */}
      <div className={styles.header}>
        <img 
          src={img} 
          alt={name} 
          className={styles.avatar} 
        />
        <div>
          <h4 className={styles.name}>{name}</h4>
          <p className={styles.role}><FaBriefcase className={styles.icon}/> {role}</p>
          <p className={styles.rating}><FaStar className={styles.star}/> {rating} ({reviews})</p>
        </div>
      </div>

      {/* Booking Info */}
      <div className={styles.details}>
        <p><FaClock className={styles.icon}/> {time} - {duration}</p>
        <p><FaCalendarAlt className={styles.icon}/> {date}</p>
        <p><FaDollarSign className={styles.icon}/> {price}</p>
      </div>

      {/* Footer */}
      <div className={styles.footer}>
        <span 
          className={`${styles.view} ${type === "upcoming" ? styles.purple : styles.green}`}
        >
          View Details
        </span>
      </div>
    </div>
  );
};

export default BookingCard;
