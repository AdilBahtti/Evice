
import style from './Chat.module.css'
import ChatBox from './ChatBox'
import ChatCall from './ChatCall'

const Chat=()=>{
     
  return <>

      <div className={style.chat}>
            <ChatCall></ChatCall>
              <ChatBox></ChatBox>
      </div>

  </>
}
export default Chat