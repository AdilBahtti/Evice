import style from './LoginPop.module.css'
const Body=()=>{
     return <>
     
     
         <div className={style.body}>
                 <div className={style.msg}>

                  An OTP has been sent on your email ada*****@gmail.com Please enter the OTP in below field.
                 </div>
                   <input type="text" placeholder='Enter 6 digit Code' className={style.input} />

               </div>

               <div className={style.resend}>

                <span>resent Code </span>  After 0.56 sec
               </div>

     </>
}
export default Body;