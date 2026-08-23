import Card from "../ExpertSideComponents/DashBoardComponent/Card";
import style from "./Dash.module.css"
import back from '../assets/www (1).png'
import bk from '../assets/www (2).png'
import graph from '../assets/gra.png'
import CallCard from "../ExpertSideComponents/DashBoardComponent/CallCard";
import ppp from '../assets/img2.png'
const Dash = () => {
  return <>
    <div className={style.container}>
      <div className={style.upper}>
        <div className={style.left}>
          <Card name={"INCOME"} pers={+15} amount={"$100000"} hidden={false}></Card>
          <Card name={"UPCOMMING BOOKINGS"} pers={+15} amount={"15"} hidden={false}></Card>
          <Card name={"CALLS THIS MONTH"} pers={-15} amount={"250"} hidden={false}></Card>
          <Card name={"ACTIVE SUBSCRIPTION"} pers={+15} amount={"Node"} hidden={true}></Card>
        </div>
        <div className={style.right}>
          <img className={style.backg} src={back} alt="" />
          <div className={style.cont}>
            <div className={style.l}>
              <div className={style.txt}>Buy Subscriptions today and increase your earning on
                Evice.</div>
              <button className={style.btn}>Buy Now</button>
            </div>
            <div className={style.r}>
              <img src={bk} alt="" />
            </div>
          </div>
        </div>
      </div>




      <div className={style.lower}>
        <div className={style.ll}>
          <div className={style.cc}>

            INCOME HISTORY
            <div className={style.graph}>
              <img src={graph} alt="" />
            </div>

          </div>

        </div>

        <div className={style.rr}><div className={style.kk}>
          RECENT CALLS

          <div className={style.rec}>

            <CallCard
              name="Chris Cornell"
              date="March 25, 2023"
              time="2:46 PM"
              miles="3.6 Miles"
              price={35.55}
              image={ppp}
            />

            <CallCard
              name="Chris Cornell"
              date="March 25, 2023"
              time="2:46 PM"
              miles="3.6 Miles"
              price={35.55}
              image={ppp}
            />
            <CallCard
              name="Chris Cornell"
              date="March 25, 2023"
              time="2:46 PM"
              miles="3.6 Miles"
              price={35.55}
              image={ppp}
            />

            <CallCard
              name="Chris Cornell"
              date="March 25, 2023"
              time="2:46 PM"
              miles="3.6 Miles"
              price={35.55}
              image={ppp}
            />
            <CallCard
              name="Chris Cornell"
              date="March 25, 2023"
              time="2:46 PM"
              miles="3.6 Miles"
              price={35.55}
              image={ppp}
            />



          </div>
        </div>


        </div>
      </div>
    </div>
  </>
}
export default Dash;