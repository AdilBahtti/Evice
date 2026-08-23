import style from './Call.module.css'
import Card from "../ExpertSideComponents/DashBoardComponent/Card";
import CallSummary from '../ExpertSideComponents/CallComponents/CallSummary';
const Call=()=>{
  return <>
        <div className={style.container}>
            <div className={style.name}>
              Calls
            </div>
                   <div className={style.cont}>
                    <Card name={"OverAll Calls"} amount={"250"} pers={-15}></Card>
                    <Card name={"Calls This Month"} amount={"25"} pers={-15}></Card>
                    <Card name={"Calls This Year"} amount={"250"} pers={-15}></Card>
                   </div>

                   <div className={style.low}>
                    <div className={style.head}>
                      <span>All Call Records</span>
                      <span>Select Date</span>
                    </div>
                    <CallSummary></CallSummary>
                   </div>
        </div>
  </>
}
export default Call;