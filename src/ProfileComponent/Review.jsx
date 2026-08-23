import style from './Review.module.css'
import star from "../assets/Star.png";
import man from "../assets/man (2).png";
const Review=()=>{
    return <>
    <div className={style.container}>
              
              
                <div className={style.cont}>
             <img  className={style.man} src={man} alt="" />

               <div className={style.info}>
             <div className={style.name}>
                Adam Smith

             </div>
             <div className={style.rateCont}>

                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
                <img src={star} alt="" />
             </div>

               </div>
</div>


               <div className={style.description}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ullam harum debitis minima suscipit similique natus ad, deserunt, eos repellat dolor nihil provident possimus pariatur veniam quibusdam atque enim accusantium.</div>

               <div className={style.date}> 12.Aug-2025</div>

    </div>
         
    
    </>
}
export default Review;