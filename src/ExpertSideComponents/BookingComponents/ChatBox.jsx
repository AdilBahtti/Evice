import style from './ChatBox.module.css'
import { IoIosMore } from "react-icons/io";
import ee from "../../assets/ee.png"
import Message from './Message';
import pic from '../../assets/img2.png'
const ChatBox = () => {
  return <>
    <div className={style.container}>
      <div className={style.head}>
        Session Chat       <IoIosMore color={"white"}></IoIosMore>
      </div>
      <div className={style.chat}>

        <div className={style.msgCont}>
          <img src={pic} alt="" />  <Message name={"Bhatti"} msg={"i want you help"}></Message>
        </div>
        <div className={style.msgCont}>
          <img src={pic} alt="" />    <Message name={"Me"} msg={"How can i help you"}></Message>
        </div>
        


      </div>
      <div className={style.input}>

        <input type="text" placeholder='Type message here' />
        <img src={ee} alt="" />
      </div>

    </div>
  </>
}
export default ChatBox;