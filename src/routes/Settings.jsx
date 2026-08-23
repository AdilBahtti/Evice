import style from './Settings.module.css';
import { FaLock, FaEnvelope, FaPhone } from "react-icons/fa";
import { MdPayment, MdAccountCircle, MdSubscriptions } from "react-icons/md";
import { setpass } from '../store/ShowPopUpSlice';
import { useDispatch } from 'react-redux';
import { setLoginpopup } from '../store/ShowPopUpSlice';
import { setEmail } from '../store/ShowPopUpSlice';

const Settings = () => {
  const dispatch = useDispatch()
  return (
    <div className={style.settingsContainer}>
      <h2>Settings</h2>
      <p>You can change your settings and update it.</p>

      <div className={style.cardContainer}>
        {/* Security Section */}
        <div className={style.card}>
          <h3>Security</h3>
          <div className={style.item}>
            <FaLock />
            <div>
              <span>Password</span>
              <p>***********</p>
            </div>
            <button onClick={()=>{ dispatch(setpass())}} className={style.changeBtn}>Change</button>
          </div>

          <div className={style.item}>
            <FaEnvelope />
            <div>
              <span>Email</span>
              <p>adamsmith@gmail.com</p>
            </div>
            <button onClick={()=>{ dispatch(setEmail())}} className={style.changeBtn}>Change</button>
          </div>

          <div className={style.item}>
            <FaPhone />
            <div>
              <span>Phone No</span>
              <p>9442352525255</p>
            </div>
            <button className={style.changeBtn}>Change</button>
          </div>

        
        </div>

        {/* Payments Info Section */}
        <div className={style.card}>
          <h3>Payments Info</h3>
          <div className={style.item}>
            <div className={style.i}>
            <MdPayment />
            <div>
              <span>Card Details</span>
              <p>3456 **** **** ****</p>
            </div>
            </div>
              
          <div className={style.btnCont}>

            <button className={style.removeBtn}>Remove</button>
            <button className={style.changeBtn}>Upgrade</button>
            </div>
          </div>

          <div className={style.item}>
            <div className={style.i}>

          
            <MdAccountCircle />
            <div>
              <span>Account Details</span>
              <p>Adam Smith</p>
            </div>
              </div>
            <div className={style.btnCont}>

            <button className={style.removeBtn}>Remove</button>
            <button className={style.changeBtn}>Upgrade</button>
            </div>
          </div>

          <div className={style.item}>
            <div className={style.i}>

            <MdSubscriptions />
            <div>
              <span>Subscription</span>
              <p>Basic - Monthly</p>
            </div>
            </div>
            <div className={style.btnCont}>

            <button className={style.removeBtn}>Remove</button>
            <button className={style.changeBtn}>Upgrade</button>
            </div>
          </div>

        </div>
      </div>
            <button className={style.deleteAccountBtn}>Delete your account</button>
    </div>
  );
};

export default Settings;
