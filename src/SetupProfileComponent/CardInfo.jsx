import { useState } from "react";
import styles from "./CardInfo.module.css";
import { Payment } from "../store/SetupProfSlice";
import {useDispatch} from 'react-redux'
import { setProfile } from "../store/ShowPopUpSlice";

const CardInfo = () => {

   const dispatch= useDispatch()
  
  const [formData, setFormData] = useState({
    cardName: "",
    cardNumber: "",
    expiry: "",
    cvc: ""
  });

  const handleChange = (e) => {
    const { name , value } = e.target;
    setFormData({ ...formData , [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
     dispatch(Payment({...formData}))

  
  };

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Enter your credit card information</h2>
      <form className={styles.form} onSubmit={handleSubmit}>
        <div className={styles.row}>
          <div className={styles.inputGroup}>
            
            <input
              type="text"
              name="cardName"
              value={formData.cardName}
              onChange={handleChange}
              placeholder="Card Holder Name"
              required
            />
          </div>
          <div className={styles.inputGroup}>
            
            <input
              type="text"
              name="cardNumber"
              value={formData.cardNumber}
              onChange={handleChange}
              placeholder="Card No"
              required
            />
          </div>
        </div>

        <div className={styles.row}>
          <div className={styles.inputGroup}>
            
            <input
              type="text"
              name="expiry"
              value={formData.expiry}
              onChange={handleChange}
              placeholder="Expiry"
              required
            />
          </div>
          <div className={styles.inputGroup}>
          
            <input
              type="text"
              name="cvc"
              value={formData.cvc}
              onChange={handleChange}
              placeholder="CVC"
              required
            />
          </div>
        </div>

        <div className={styles.actions}>
          <button type="button"  className={styles.cancelBtn}>Cancel</button>
          <button type="submit" onClick={()=>{   dispatch(setProfile())
                    
          }} className={styles.finishBtn}>Finish</button>
        </div>
      </form>
    </div>
  );
};
export default CardInfo;