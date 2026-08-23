import styles from './Header.module.css'
import logo from "../assets/logo.png"
import wel from "../assets/wel.png"
import goo from "../assets/Group 17.png"
import line from "../assets/Group 471.png"
const Header=()=>{
   return <>
    
             <img src={logo} alt="" />

             <div className={styles.welcome}>

              Welcome User  <img src={wel} alt="" />
             </div>
             <div className={styles.subhead}>
              Enter your Login deatil to Login
             </div>
             <button className={styles.google}>
                <img src={goo} alt="" />   Login with Google
             </button>

             <img className={styles.line} src={line} alt="" />

   </>
}
export default Header;