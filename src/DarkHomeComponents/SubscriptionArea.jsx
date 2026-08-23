import Plan from './Plan';
import style from './SubscriptionArea.module.css'
import SubscrOption from './SubscrOption';
const SubscriptionArea=()=>{
  return<>


     <div className={style.container}>
       <Plan></Plan>
             <div className={style.optionCont}>

              <SubscrOption Package={"Bacis"} pic={"cube1"}></SubscrOption>
              <SubscrOption Package={"Pro"} pic={"cube2"}></SubscrOption>
              <SubscrOption Package={"Premium"} pic={"cube3"}></SubscrOption>
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