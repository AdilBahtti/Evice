import style from './Hero.module.css'
import { navLight } from '../store/themeToggleSlice';
import SearchBar from './SearchBar';
import CategoryButtons from './CategoryButton';
import ActionButtons from './ActionButton';
import CategoryButtonContainer from './CategoryButtonContainer';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
const Hero = () => {
  const dispatch =useDispatch()

          useEffect(()=>{
            dispatch(navLight())
          } ,[])
  return <>
    <div className={`${style.container}`}>
    
    
    
    
    
      <div className={`${style.left}`}>

        <img src="./images/line.png" alt="" />
        <img className={`${style.vector}`} src="./images/Vector.png" alt="" />

      
      
      
        <div className={`${style.line1}`}>
          <div className={`${style.circle}`}></div>
        </div>


        <div className={`${style.text}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, quis reprehenderit quae molestias dolore quam. Odio eius repellendus natus et
        </div>




        
        <div className={style.grp}>


          <SearchBar></SearchBar>
          
              <CategoryButtonContainer>

            <CategoryButtons OnClick={() => { alert("hello") }}>Photographer</CategoryButtons>
            <CategoryButtons>Musician</CategoryButtons>
            <CategoryButtons>Consultants</CategoryButtons>
            <CategoryButtons>Designers</CategoryButtons>
            <CategoryButtons>Teachers</CategoryButtons>
            <CategoryButtons>Sportsman</CategoryButtons>


              </CategoryButtonContainer>
          


        </div>


          <ActionButtons></ActionButtons>
      


                

      </div>
      
      
      <div className={`${style.right}`}>

        <img className={style.heropic} src="./images/right.png" alt="" />
      </div>
          


    </div>
        <div className={style.end}></div>

  </>
}
export default Hero;