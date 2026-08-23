import style from './DashBoard.module.css'
import Side from '../Components/Side'
import Navbar from '../ExpertSideComponents/NavBar';
import { Outlet } from 'react-router-dom';
const DashBoard=()=>{
     return <>
     
        <div className={style.container}>

          <div className={style.side}>
                <Side></Side>
               
                    </div>
          <div className={style.content}>
               <div className={style.nav}>
               <Navbar></Navbar>

               </div>
               <div className={style.cont}>

                    <Outlet></Outlet>
               </div>
          </div>
        </div>
         
     </>
}
export default DashBoard;