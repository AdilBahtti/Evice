import styles from './SubscrOption.module.css'
const SubscrOption=({Package ,pic})=>{
   return <>
    <div className={styles.container}>
                <div className={styles.icon}>
                     <img src={pic} alt="" />


                <div className={styles.level}>
                  {Package}
                </div>
                <div className={styles.prize}>
                  $25
                       <div className={styles.discount}>
                        15% Discount
                       </div>


                </div>
                       <button className={styles.btn}>Get This Plan</button>



                </div>


                <div className={styles.line}></div>


                <div className={styles.cont}>
                  <div className={styles.h}>
                                This Plan Includes
                  </div>
                         <div className={styles.l}><img src="./images/tick.png" alt="" /> Lorem ipsum dolor sit amet </div>
                      <div className={styles.l}><img src="./images/tick.png" alt="" /> Lorem ipsum dolor sit amet </div>
                       <div className={styles.l}><img src="./images/tick.png" alt="" /> Lorem ipsum dolor sit amet </div>
                </div>

    </div>
   </>
}
export default SubscrOption;