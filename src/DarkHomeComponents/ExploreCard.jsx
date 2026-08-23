import style from './ExploreCard.module.css'
import { IoBag } from "react-icons/io5";
import { CiHeart } from "react-icons/ci";
import { IoLocationSharp } from "react-icons/io5";
import { useNavigate } from 'react-router-dom';
import { addFav } from '../store/expertsSlice';
import { useDispatch } from 'react-redux';
import { getProfile } from '../store/expertsSlice';
 const ExploreCard=({experts})=>{
     const dispatch =useDispatch()
     const navigate=useNavigate()
      return <>
        <div className={style.card}>
             <div className={style.head}>

                <img src={experts.profileImage} alt="" />
                     <div className={style.cont}>
                         <div className={style.name}>
                              {experts.name}
                         </div>

                         <div className={style.rate}>
                              <img src="./images/Star.png" alt="" />
                              {experts.rating} <span>(13)</span>
                         </div> 



                     </div>
                         <div className={style.like}>
                                <CiHeart onClick={()=>{
                                   dispatch( addFav({id : experts.id}))
                                   
                                }} size={25}></CiHeart>
                         </div>
             </div>
             <div className={style.l}></div>


             <div className={style.body}>


               <div className={style.type}><IoBag/> {experts.category}</div>
               <div className={style.place}> <IoLocationSharp></IoLocationSharp>   {experts.location.city},{experts.location.country} </div>
             </div>


                  <button onClick={()=>{  dispatch(getProfile(experts.id))
                     navigate("/Client/Hire")}} className={style.btn}>Hire Now</button>
        </div>
      
      </>
 }
 export default ExploreCard;