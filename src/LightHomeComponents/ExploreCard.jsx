import style from './ExploreCard.module.css'
import { IoBag } from "react-icons/io5";
import {useNavigate} from 'react-router-dom'
 const ExploreCard=({experts})=>{

     const navigate = useNavigate()

      return <>
        <div className={style.card}>
             <div className={style.head}>

                  <div className={style.rating}>
                       <img src="./images/Star.png" alt="" />
                             {experts.rating}
                    </div>


                   <img src={experts.backgroundImage}alt="" />
                   <img src={experts.profileImage} alt="" className={style.profile} />
             </div>

             <div className={style.middle}>
                 <div className={style.name}>
                     {experts.name}
                 </div>

                 <div className={style.charges}>

                      ${experts.bookingRates[0].price}
                        <span >/Hours</span>

                 </div>

             </div>

                 <div className={style.category}>
                       <IoBag></IoBag> {experts.category}
                 </div>


                 <button  onClick={()=>{ navigate("/Profile")}}   className={style.btn}>Hire Now</button>
        </div>
      
      </>
 }
 export default ExploreCard;