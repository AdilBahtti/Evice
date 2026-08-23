import style from './Request.module.css'
import ChatCall from './ChatCall';
import Member from './Member';

const Request=()=>{
    
  return <>
     <div className={style.parti}>
    <ChatCall ></ChatCall>
    <Member  name={"Request to join"}></Member>
   </div>
  </>
}
export default Request;