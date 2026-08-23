import style from './Message.module.css'
const Message=({name , msg})=>{
  return <>
      <div className={`${style.container} ${name == "Me" && style.bg}`}>
           <div className={style.name}>{name}</div>
               <div className={style.msg}>{msg}</div>
      </div>
  </>
}
export default Message;