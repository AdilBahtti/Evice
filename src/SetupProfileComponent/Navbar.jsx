import style from './Navbar.module.css'
import langIcon from '../assets/lang.png';
import pic from '../assets/pro.png'
import Switch from './Switch';
import MainNav from './MainNav';
const Navbar = () => {
  return <>

    <div className={style.container}>

      <div className={style.title}>Let’s setup your account!</div>




      <div className={style.right}>
        <div className={style.lang}>
          <img src={langIcon} alt="Language" />
          <select name="lang">
            <option value="Eng">Eng</option>
          </select>
        </div>
      <img className={style.pic} src={pic} alt="" />
      </div>

    </div>

        <Switch></Switch>

        <MainNav></MainNav>
  </>
}
export default Navbar;