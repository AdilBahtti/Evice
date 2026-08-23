import { useState } from "react";
import Header from "../LoginSignupComponents/Header";
import styles from "./Login.module.css";
import { Link } from "react-router-dom";
import Button from "../LoginSignupComponents/Button";
import { setLoginpopup , setpass } from "../store/ShowPopUpSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const dispatch=useDispatch()
  return (
    <>
  

    
      <div className={styles.conatiner}>
        <Header></Header>

        <input
          type="email" 
          name="email"
          placeholder="Email"
          className={styles.input}
        />

        <div className={styles.passwordWrapper}>
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            placeholder="Password"
            className={`${styles.input} ${styles.i}`}
          />
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className={`${styles.toggleBtn} ${showPassword ? styles.activeBtn : ""}`}
          >
            {showPassword ? "Hide Password" : "Show Password"}
          </button>
        </div>

        <div className={styles.cont}>
          <div className={styles.left}>
            <input type="checkbox" /> Remember me
          </div>
          <div className={styles.right}>
            <Link  onClick={()=>{ dispatch(setpass())}}>Forget Password</Link>
          </div>
        </div>

        <Button action={()=>{ dispatch(setLoginpopup())}} text={"Login"}></Button>


        <div className={styles.foot}>
          Do you have and account ? <Link to={"/Signup"}>Signup</Link>
        </div>
      </div>
    
    </>
  );
};

export default Login;
