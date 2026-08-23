import Button from '../BrowseExpertComponent/Button';
import SearchBar from '../DarkHomeComponents/SearchBar';
import ExploreCard from '../DarkHomeComponents/ExploreCard';
import PageCount from '../BrowseExpertComponent/PageCount';
import TopButton from '../BrowseExpertComponent/TopButton';
import style from './DarkBrowseExpert.module.css';
import { useSelector } from 'react-redux';
import { count } from '../store/expertsSlice';
import { useEffect, useRef , useState } from 'react';

import { useDispatch } from 'react-redux';
import { navLight } from '../store/themeToggleSlice';

const DarkBrowseExpert = () => {


      const {experts , expertsCount ,requested} =useSelector((store) => store.experts)
   const dispatch=useDispatch()

          const [currentPage , setCurrentPage]=useState(1)
              const itemPerPage =20
            let totalPage =1
              if(requested.length >0){
               if (requested.length < 20){
                 totalPage =1
               }
               else {
   
                 totalPage =Math.ceil(requested.length / itemPerPage)
               }
              }
              else {
               if(experts.length < 20){
                 totalPage =1;
               }
                    else {
   
                      totalPage =Math.ceil(experts.length / itemPerPage)
                    }
              }
   
          const startIndex = (currentPage -1)  * itemPerPage;
          const endIndex = (startIndex +itemPerPage)
   
          const page=(p)=>{
                         setCurrentPage(p)
          }

   useEffect(()=>{
    dispatch(navLight())
   } ,[])
  
  const countRef=useRef();
  

    const handleCount=(input)=>{
             dispatch(count({input}))
        

      countRef.current.classList.remove(style.hidden)
    }


  return (
    <>
      <div className={style.BrowseContainer}>
        
        <div className={style.topButton}>
          <TopButton text={"Graphic Expert"} />
          <TopButton text={"Teacher"} />
          <TopButton text={"Sports man"} />
          <TopButton text={"Photographer"} />
          <TopButton text={"Musicians"} />
          <TopButton text={"Actors"} />
        </div>

        <div className={style.title}>Browse & Find Experts</div>

        <div className={style.searchcont}>
          <SearchBar handleCount={handleCount} />
        </div>

        <div className={style.btnContainer}>
          <Button text={"Budget"} />
          <Button text={"Category"} />
          <Button text={"Country"} />
          <Button text={"Rating"} />
        </div>


            <div ref={countRef} className={`${style.count} ${style.hidden}`}>
          
                      {expertsCount} Experts Avalible
                    </div>

        <div className={style.cardContainer}>


          {

              (requested.length >0)?
             
            requested.slice(startIndex,endIndex).map((e)=>(
              <ExploreCard experts={e} ></ExploreCard>
            )) :
          
          experts.slice(startIndex,endIndex).map((e)=>(
            <ExploreCard  experts={e} />

            ))
          }
          
        </div>

        <div className={style.pageContainer}>
          Pages: {
          [...Array(totalPage)].map((_, i) => (
  <PageCount onClick={page} key={i} num={i + 1} />
))
           }
          <img src="./images/arr.png" alt="" />
        </div>

      </div>
    </>
  );
};

export default DarkBrowseExpert;
