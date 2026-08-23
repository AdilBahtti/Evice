
import { Outlet } from 'react-router-dom';
import Side from '../ExpertSideComponents/BookingComponents/Side';
import style from './Meeting.module.css'
const Meeting=({index})=>{
  return <>
      <div className={style.layout}>


        <div className={style.side}>
        <Side index={index}></Side>

        </div>
        <div className={style.main}>
              <Outlet></Outlet>

        </div>
      </div>
  </>
}
export default Meeting;