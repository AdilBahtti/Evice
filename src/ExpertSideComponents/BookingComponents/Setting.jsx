import style from "./Setting.module.css"
import ChatCall from './ChatCall';
import Member from './Member';
const Setting=()=>{
  return <>
   <div className={style.parti}>
    <ChatCall ></ChatCall>
    <Member  name={"Setting"}></Member>
   </div>
     
  </>
}
export default Setting;