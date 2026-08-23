import Mem from './Mem';
import style from './Member.module.css'
import { IoIosMore } from "react-icons/io";
import Sett from './Sett';


const Member=({name })=>{

  return <>
    <div className={style.container}>
      <div className={style.head}>
        {name}      <IoIosMore color={"white"}></IoIosMore>
      </div>
      <div className={style.chat}>
          {
            name =="Setting" ?
                   <>
                    <Sett name={"Accept Requests automatically if someone requests to join the call"}></Sett>
                    <Sett name={"Accept Requests automatically if someone requests to join the call"}></Sett>
                    <Sett name={"Accept Requests automatically if someone requests to join the call"}></Sett>
                    <Sett name={"Accept Requests automatically if someone requests to join the call"}></Sett>
                    <Sett name={"Accept Requests automatically if someone requests to join the call"}></Sett>
                   </>
                   
                   
                   
                   
                   :
            <>
            
            
            <Mem  name={name}></Mem>
            <Mem  name={name}></Mem>
            <Mem  name={name}></Mem> 
            </>
            
            
          
          }


      </div>
      {
        name == "Request to join" &&
        <div className={style.btnCont}>
          <button className={style.btn1}>Decline All</button>
          <button className={style.btn2}>Accept All</button>
        </div>


      }

    </div>
  
  
  </>
}
export default Member;