import style from './Feedback.module.css'
const Feedback = () => {
  return <>

    <div className={style.container}>
      <div className={style.left}>
        <div className={style.msg}>“Outstanding service! The experts provided invaluable guidance, exceeded expectations, and delivered exceptional solutions. Highly recommended for expert advice.”</div>

        <div className={style.info}>

          <div className={style.name}>Adam Smith <span>,Client</span></div>
          <div className={style.rate}>
            <img src="./images/Star2.png" alt="" />
            <img src="./images/Star2.png" alt="" />
            <img src="./images/Star2.png" alt="" />
            <img src="./images/Star2.png" alt="" />
            <img src="./images/Star2.png" alt="" />
          </div>
        </div>


      </div>
      <div className={style.right}>
        <div className={style.box}>
          <div className={style.circle}></div>
          <div className={style.circle}></div>
          <div className={style.circle}></div>
          <div className={style.circle}></div>
        </div>
      </div>


    </div>
  </>
}
export default Feedback;