import style from './SubscriptionArea.module.css'

const Plan=()=>{
    return <>
         <div className={style.cont}>
              <div className={style.head}>
                Evice Plan
              </div>
              <div className={style.btnCont}>
                <button className={style.btn1}>Anually</button>
                <button className={style.btn2}>Monthly</button>
              </div>

         </div>
    
    </>
}
export default Plan;