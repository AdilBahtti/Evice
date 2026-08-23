import style from './Calling.module.css'
import girl from '../../assets/girl.png'
import pic1 from '../../assets/Group 581.png'
import pic2 from '../../assets/Group 580.png'
import pic3 from '../../assets/Group 579.png'
import {useNavigate} from 'react-router-dom'

const Calling =()=>{
  const navigator =useNavigate()




  setTimeout(()=>{
       navigator("/meeting")
  }, 5000)
  return <>
     <div className={style.container}>

      <div className={style.cont}>
          <div className={style.upper}>
            <img className={style.avatar} src={girl} alt="" />
            <div className={style.name}> Natalia Adam</div>
            <div className={style.status}>Ringing....</div>
          </div>



          <div className={style.lower}>
                  <img src={pic1} alt="" />
                    <div>
                       <img   src={pic2} alt="" />
                      
                      </div> 
                      <img src={pic3} alt="" />
          </div>
          </div>
     </div>
  </>
}
export default Calling;