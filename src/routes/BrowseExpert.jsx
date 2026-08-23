import Button from '../BrowseExpertComponent/Button';
import SearchBar from '../LightHomeComponents/SearchBar';
import ExploreCard from '../LightHomeComponents/ExploreCard';
import PageCount from '../BrowseExpertComponent/PageCount';
import style from './BrowseExpert.module.css';
import { count } from '../store/expertsSlice';
import { useRef, useState } from 'react';
import {useSelector , useDispatch} from 'react-redux'
const BrowseExpert = () => {
       const dispatch =useDispatch()
  const {experts , expertsCount ,requested } =useSelector((store) => store.experts)
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

  const countRef=useRef();


        const handleCount = (input) => {
    dispatch(count({input}))
  
    countRef.current.classList.remove(style.hidden);
  };
      



         


  return (
    <>
      <div className={style.BrowseContainer}>

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
          Pages: 
           {
          [...Array(totalPage)].map((_, i) => (
  <PageCount onClick={page} key={i} num={i + 1} />
))
           }
          <img src="./images/arr.png" alt="" />
        </div>

      </div>
    </>
  );
}

export default BrowseExpert;
