import style from './Client.module.css'
import Side from '../Components/Side'
import Navbar from '../ExpertSideComponents/NavBar';
import { Outlet } from 'react-router-dom';
import NavBar from '../ClientComponents/NavBar';
const Client=()=>{
     return <>
     
        <div className={style.container}>

          <div className={style.side}>
                <Side></Side>
               
                    </div>
          <div className={style.content}>
               <div className={style.nav}>
               <NavBar></NavBar>

               </div>
               <div className={style.cont}>

                    <Outlet></Outlet>
               </div>
          </div>
        </div>
         
     </>
}
export default Client;