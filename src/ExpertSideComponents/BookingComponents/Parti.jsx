import ChatCall from './ChatCall';
import Member from './Member';
import style from './Parti.module.css'
const Parti=()=>{
  return <>
   <div className={style.parti}>
    <ChatCall></ChatCall>
    <Member name={"Participents"}></Member>
   </div>
  </>
}
export default Parti;