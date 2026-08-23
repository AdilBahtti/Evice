import style from './CatgoryCard.module.css'
const CatgoryCard=({img , cate})=>{
     return <>
        <div className={style.container}>
                <img src={img} alt="" />

       <div className={style.box}></div>
                    <div className={style.category}>
                      {cate}
                    </div>
        </div>
     
     
     </>
}
export default CatgoryCard;