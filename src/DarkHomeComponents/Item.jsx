import style from './Offers.module.css'
const Item=({name , path})=>{
     return<>

<div className={style.item}>
    <img src={path} alt="" />

    <div className={style.cate}>
      {name}
    </div>

</div>

     </>

    
}
export default Item;