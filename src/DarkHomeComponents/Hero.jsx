import ActionButtons from '../DarkHomeComponents/ActionButton';
import CategoryButtons from '../DarkHomeComponents/CategoryButton';
import CategoryButtonContainer from '../DarkHomeComponents/CategoryButtonContainer';
import SearchBar from '../DarkHomeComponents/SearchBar';
import style from './Hero.module.css'
import { navDark } from '../store/themeToggleSlice';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
const Hero=()=>{
  const dispatch= useDispatch();


    useEffect(()=>{
        dispatch(navDark())

    } ,[] )
  
  return   <>
    <div className={`${style.container}`}>
    
    
    
    
    
      <div className={`${style.left}`}>

        <img src="./images/line2.png" alt="" />
        <img className={`${style.vector}`} src="./images/Vector2.png" alt="" />

      
      
      
    


        <div className={`${style.text}`}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, quis reprehenderit quae molestias dolore quam. Odio eius repellendus natus et
        </div>




        
        <div className={style.grp}>


          <SearchBar></SearchBar>
          
              <CategoryButtonContainer>
              <div className={style.popular}>Popular:</div>
            <CategoryButtons OnClick={() => { alert("hello") }}>Photographer</CategoryButtons>
            <CategoryButtons>Musician</CategoryButtons>
            <CategoryButtons>Consultants</CategoryButtons>
            <CategoryButtons>Designers</CategoryButtons>
            <CategoryButtons>Teachers</CategoryButtons>
            


              </CategoryButtonContainer>
          


        </div>


          <ActionButtons></ActionButtons>
      






               <div className={style.more}>

                <div>Know more about us</div>
                <span>
                  Learn more
                  </span>  
                <img src="./images/learn2.png" alt="" />
               </div>
                

      </div>
      
      
      <div className={`${style.right}`}>

        <div className={style.post1}>

          <img className={style.i1} src="./images/Rectangle1.png" alt="" />
          
          <img className={style.i2} src="./images/Frame3.png" alt="" />
        </div>

        
         <div className={style.post2}>

          <img className={style.i3} src="./images/Rectangle2.png" alt="" />
          
          <img className={style.i4} src="./images/Frame4.png" alt="" />
         </div>

        <img className={style.heropic} src="./images/man.png" alt="" />
      </div>
          


    </div>
        <div className={style.end}></div>
  
  </>
}
export default Hero;