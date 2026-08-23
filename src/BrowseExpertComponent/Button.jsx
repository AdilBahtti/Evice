import style from './Button.module.css'
const Button =({text})=>{
   return <>
        
        <div className={style.container}>

          <select name="" id="">

            <option value="budget">{text}</option>
          
          </select>
        </div>
   
   </>
}
export default Button;