import style from './Button.module.css'
const Button =({text , action})=>{
    
   return <>
       <button onClick={action } className={style.conatiner}>

           {text}

 

       </button>
   </>
}
export default Button;