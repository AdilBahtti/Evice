import style from './Card.module.css'
import pic from '../../assets/img4.png'
import arrow from '../../assets/arro.png'
const Card = () => {
  return <>
    <div className={style.container}>



      <div className={style.cont}>



        <img className={style.pic} src={pic} alt="" />
        <div className={style.info}>
          <div className={style.upper}><strong>David</strong>   send you a request</div>
          <div className={style.time}>3 min ago</div>
        </div>
      </div>


      <img className={style.arrow} src={arrow} alt="" />
    </div>

  </>
}
export default Card;