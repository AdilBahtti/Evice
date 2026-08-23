import style from './Category.module.css'
import CatgoryCard from './CatgoryCard';
import Switch from './Switch';
const Category=()=>{
     return <>

       <div className={style.container}>
                <div className={style.head}>
                   Popular Categories
                       
                       <Switch></Switch>
                </div>

                <div className={style.main}>

                    <CatgoryCard cate={"Musicain"} img={"./images/c2.png"}></CatgoryCard>
                   <CatgoryCard cate={"Photographer"} img={"./images/c3.png"}></CatgoryCard>
                   <CatgoryCard cate={"Scientist"} img={"./images/c4.png"}></CatgoryCard>
                   <CatgoryCard cate={"Sportsman"} img={"./images/c1.png"}></CatgoryCard>
                   <CatgoryCard cate={"Enginners"} img={"./images/c5.png"}></CatgoryCard>
                </div>
        
        </div>         
     
     
     </>
}
export default Category;