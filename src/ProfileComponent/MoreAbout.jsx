import styles from './MoreAbout.module.css';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const MoreAbout = () => {
  return (
    <div className={styles.moreAbout}>
      <h3 className={styles.heading}>More About Jack</h3>

      <div className={styles.item}>
        <span className={styles.label}>Location</span>
        <span className={styles.value}>
          <img src="/images/Group.png" alt="UK Flag" className={styles.flag} />
          London, United Kingdom
        </span>
      </div>

      <div className={styles.item}>
        <span className={styles.label}>Age</span>
        <span className={styles.value}>21 years</span>
      </div>

      <div className={styles.item}>
        <span className={styles.label}>Email</span>
        <span className={styles.value}>jackalice@gmail.com</span>
      </div>

      <div className={styles.item}>
        <span className={styles.label}>Joined On</span>
        <span className={styles.value}>20 Aug, 2021</span>
      </div>

      <div className={styles.item}>
        <span className={styles.label}>Social Media</span>
        <div className={styles.socialIcons}>
          <FaFacebookF />
          <FaInstagram />
          <FaTwitter />
        </div>
      </div>

      <div className={styles.item1}>
        <span className={styles.label}>Skills</span>
        <div className={styles.skills}>
          <div className={styles.skill}>BusinessSkills</div>
          <div className={styles.skill}>BusinessDevelopment</div>
          <div className={styles.skill}>Business</div>
        </div>
      </div>
    </div>
  );
};

export default MoreAbout;
