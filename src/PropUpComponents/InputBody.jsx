import style from './LoginPop.module.css'
const InputBody=()=>{
   return  <>
          <div className={style.inputcont}>
                 <div className={style.inputhead}>
                        You are about to change your password
            
          </div>
               <input type="text" placeholder='Enter new password' className={style.input} />
                <input type="text" placeholder='Conferm password' className={style.input} />
          </div>
   </>
}
export default InputBody;