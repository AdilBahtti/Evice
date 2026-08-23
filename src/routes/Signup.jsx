import Header from '../LoginSignupComponents/Header';
import Button from '../LoginSignupComponents/Button';
import styles from './Signup.module.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setLoginpopup } from '../store/ShowPopUpSlice';
const Signup=()=>{

  const dispatch=useDispatch()
   return <>
          <div className={styles.conatiner}>
        <Header></Header>
              <input
          type="text"
          name="username"
          placeholder="Full Name"
          className={styles.input}
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          className={styles.input}
        />
           <input
          type="Password"
          name="password"
          placeholder="Password"
          className={styles.input}
        />
        

      

        <Button  action={()=>{ dispatch(setLoginpopup())}} text={"Signup"}></Button>


        <div className={styles.foot}>
          Already have an account ? <Link to={"/Login"}>Login</Link>
        </div>
      </div>
    </>
   
   
   
  
} 
export default Signup;