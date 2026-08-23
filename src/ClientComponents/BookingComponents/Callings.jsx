import style from './Callings.module.css'
import girl from '../../assets/girl.png'
import {useNavigate} from 'react-router-dom'

const Callings =()=>{
  const navigator =useNavigate()





  return <>
     <div className={style.container}>

      <div className={style.cont}>
          <div className={style.upper}>
            <img className={style.avatar} src={girl} alt="" />
            <div onClick={()=>  navigator("/Clientmeeting")} className={style.join}>Request to join</div>
          </div>



          <div className={style.lower}>
                  
          </div>
          </div>
     </div>
  </>
}
export default Callings;