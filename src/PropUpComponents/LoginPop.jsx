import style from './LoginPop.module.css'
import PopHead from './PopHead'

import Button from './Button'
import Body from './Body'
import { useState } from 'react'
import InputBody from './InputBody'
const LoginPop=({name , action})=>{
          const [newPass , setNewPass]=useState(false)
                const handlePass=()=>{
                         setNewPass(true)
                }

    return <>
          <div className={style.container}>
                <PopHead name={name}  action={action}></PopHead>

        {
          (newPass && name.toLowerCase() == "forget password") ? 
              <InputBody></InputBody>
          : <Body></Body>
        }




               <Button name={name} action={action} handlePass={handlePass}></Button>

          </div>
    
    </>
}
export default LoginPop