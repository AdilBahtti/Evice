
import { useSelector } from 'react-redux';
import ExploreCard from '../DarkHomeComponents/ExploreCard';
import style from './Favour.module.css'
const Favour=()=>{
    const {Fav} =useSelector((store) => store.experts)
  return <>

  <div className={style.container}>
       <div className={style.name}>My Favourite Experts</div>
       <div className={style.sub}>The Experts You liked!</div>


       <div className={style.cont}>

        {
          Fav.map((exp)=>(
            <ExploreCard experts={exp}></ExploreCard>

          ))
        }
       </div>
  </div>
  </>
}
export default Favour;