import style from './Hero.module.css'
const CategoryButtonContainer=({children})=>{
       return<>
        <div className={style.btnContainer}>{children}</div>
       
       
       
       </>
}
export default CategoryButtonContainer;