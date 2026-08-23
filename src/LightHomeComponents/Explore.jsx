import style from './Explore.module.css'
import CategoryButtons from './CategoryButton'
import CategoryButtonContainer from './CategoryButtonContainer';
import Switch from './Switch';
import ExploreBody from './ExploreBody';
import { all,photoGrapher ,musician ,businessConsultant ,designer , teacher,sportsman} from '../store/expertsSlice';
import { useDispatch } from 'react-redux';
const Explore=({text})=>{
    const dispatch =useDispatch()
    return <>
        
        <div className={style.container}>

             <div className={style.head}>


               <div className={style.leftContainer}>
                {text}

                <CategoryButtonContainer>

                    <CategoryButtons OnClick={()=>{ dispatch(all())}}>All</CategoryButtons>
                     <CategoryButtons OnClick={()=>{ dispatch(photoGrapher())}}>Photographer</CategoryButtons>
                     <CategoryButtons OnClick={()=>{ dispatch(musician())}}>Musicains</CategoryButtons>
                     <CategoryButtons OnClick={()=>{ dispatch(businessConsultant())}}>Consultants</CategoryButtons>
                     <CategoryButtons OnClick={()=>{ dispatch(designer())}}>Desigeners</CategoryButtons>
                     <CategoryButtons OnClick={()=>{ dispatch(teacher())}}>Teachers</CategoryButtons>
                     <CategoryButtons OnClick={()=>{ dispatch(sportsman())}}>Sportsman</CategoryButtons>
                </CategoryButtonContainer>

               </div>
               <div className={style.switch}>
                           <div className={style.space}></div>
                          <Switch></Switch>
               </div>
             </div>

              <div className={style.body}>
                    <ExploreBody></ExploreBody>

              </div>




        </div>
    
    
    </>
}
export default Explore;