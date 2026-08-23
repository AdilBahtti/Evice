import style from './ClientCard.module.css'
import pis from '../../assets/img1.png'
import { IoBag } from "react-icons/io5";
import star from '../../assets/Star.png'
const ClientCard=({profiles})=>{
  console.log(profiles)
  return <>
     <div className={style.container}>
      <img src={profiles.profileImage} alt="" />

      <div className={style.info}>
        <div className={style.name}>{profiles.name}</div>
        <div className={style.prof}> <IoBag></IoBag> {profiles.category}</div>
      </div>


      <div className={style.rating}>
        <img src={star} alt="" />
        {profiles.rating} (13)
      </div>
     </div>
  </>
}
export default ClientCard;