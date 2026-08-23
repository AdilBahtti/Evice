import style from './LoginPop.module.css'
import { MdOutlineCancel } from "react-icons/md";
import {useDispatch} from "react-redux"
const PopHead=({name , action})=>{

  const dispatch =useDispatch()
  return <>
     <div className={style.head}>
             <div className={style.name}>

              {name}
             </div>
              
               <MdOutlineCancel onClick={()=>{dispatch(action())}} size={23}></MdOutlineCancel>


            </div>
  </>
}
export default PopHead;