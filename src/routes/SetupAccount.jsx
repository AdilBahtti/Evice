import { Outlet } from 'react-router-dom';
import Side from '../Components/Side';
import Navbar from '../SetupProfileComponent/Navbar';
import style from './SetupAccount.module.css'

const SetupAccount=()=>{
    return <>
    <div className={style.layout}>

         <div className={style.sidebar}>
            <Side></Side>
         </div>
         <div className={style.mainContent}>

            <Navbar></Navbar>

            <div className={style.contentArea}>
                    <Outlet></Outlet>
                
            </div>

         </div>


    </div>
    
        
    
    </>
}
export default SetupAccount;