import style from './Wallet.module.css'
import Card from "../ExpertSideComponents/DashBoardComponent/Card";
import Summery from '../ExpertSideComponents/WalletComponents/Summery';

import gra from '../assets/gra.png'
const Wallet=()=>{
    return <>
        <div className={style.container}>
            <div className={style.name}>
              WALLET
            </div>


            <div className={style.cont}>

              <div className={style.left}>
                <Card name={"Total Balance"} amount={"$100,000"}></Card>
                <Card name={"Avalible For Withdraw"} amount={"$90,000"}></Card>
                <Card name={"Processing"} amount={"$10,000"}></Card>
                <Card name={"Total Withdraw"} amount={"$10,000"}></Card>
              </div>
              <div className={style.right}>
                       <div className={style.n}>Total Avalible</div>
                       <div className={style.prize}>$90,000</div>
                       <button className={style.btn}>Withdraw</button>
                       <div className={style.d}>Note : Withdrawal can take upto 2 or 3 days to process 
depending on your bank services.</div>
              </div>



                  <div className={style.low}>

              <Summery></Summery>
                  </div>

                  <div className={style.graph}>
              <img src={gra} alt="" />

                  </div>
            </div>


          
        </div>
    
    </>
}
export default Wallet