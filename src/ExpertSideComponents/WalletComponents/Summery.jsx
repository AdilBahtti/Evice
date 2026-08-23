import { NavLink, Outlet } from 'react-router-dom';
import style from './Summery.module.css'
const Summery=()=>{



  return <>
      <div className={style.container}>
      {/* Tabs */}
      <div className={style.tabs}>
        <NavLink to={"/DashBoard/Wallet"} end className={ ({isActive})=> `${style.tab} ${ isActive  && style.active}`}>All Earnings</NavLink>
        <NavLink to={"/DashBoard/Wallet/WithDraws"} className={ ({isActive})=> `  ${style.tab}   ${isActive && style.active} `}>Withdrawals</NavLink>
        <div className={style.dateSelector}>
          <i className="fa fa-calendar"></i> Select Date
        </div>
      </div>

      {/* Table */}
      <Outlet></Outlet>
    </div>
  </>
}
export default Summery;