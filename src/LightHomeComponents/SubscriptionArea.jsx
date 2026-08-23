import Plan from './Plan';
import style from './SubscriptionArea.module.css'
import SubscrOption from './SubscrOption';
import pic1 from "../assets/cube1.png"
import pic2 from "../assets/cube2.png"
import pic3 from "../assets/cube3.png"
const SubscriptionArea=()=>{
  return<>


     <div className={style.container}>
       <Plan></Plan>
             <div className={style.optionCont}>

              <SubscrOption Package={"Bacic"} pic={pic1}></SubscrOption>
                <SubscrOption Package={"Pro"} pic={pic2}></SubscrOption>
                <SubscrOption Package={"Premium"} pic={pic3}></SubscrOption>
             </div>


             <div className={style.foot}>
                    <div className={style.Heading}>
                      
Discover us today and get to know us!
                    </div>


                    <img className={style.pic} src="./images/arrow.png" alt="" />



             </div>

     </div>
  </>
}
export default SubscriptionArea;