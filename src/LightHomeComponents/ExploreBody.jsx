import style  from './ExploreBody.module.css'
import ExploreCard from './ExploreCard';

import { useSelector } from 'react-redux';
const ExploreBody=()=>{

   const { experts ,categorySearch} =useSelector(store => store.experts)
   return <>   
   <div className={style.container}>
        {
              (categorySearch.length > 0)?

         categorySearch.slice(0,8).map((e)=>(
            <ExploreCard experts={e}></ExploreCard>
 
         )) :
         experts.map((e)=>(
            <ExploreCard experts={e}></ExploreCard>
         ))
        }
   
   </div>

   </>
}
export default ExploreBody;