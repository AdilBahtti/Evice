import style from './Switch.module.css'
const Switch=()=>{
  return <>
       <div className={style.container}>

           <button className={style.btn1}>Expert</button>
           <button className={style.btn2}>Client</button>
       </div>
  </>
}
export default Switch;