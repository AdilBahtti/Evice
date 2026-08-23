import style from './Sett.module.css'
import sw from '../../assets/vb.png'
const Sett=({name})=>{
  return <>
   <div className={style.container}>
    <div className={style.name}>{name}</div>
        <img src={sw} alt="" />
   </div>
  </>
}
export default Sett;