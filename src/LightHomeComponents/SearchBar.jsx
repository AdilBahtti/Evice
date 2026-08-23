import { CiSearch } from "react-icons/ci";
import style from './Hero.module.css';
import { request } from "../store/expertsSlice";
import { useDispatch } from "react-redux";
const SearchBar = ({handleCount}) => {
  const dispatch = useDispatch()


 
return <>
  <div className={style.searchWrap}>
    <div className={style.search}>
      <CiSearch color='#999999' size={20} />
      <input  onKeyDown={(e)=>{dispatch(request(e.target.value))}} onChange={(e)=>{handleCount(e.target.value)}} type="text" placeholder='Search Experts By Name Or Keywords' />
    </div>
    <button className={style.btn}>
      <CiSearch size={23} color='white' />
    </button>
  </div>
</>

}
export default SearchBar;
