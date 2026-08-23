import style from './Hero.module.css';
const CategoryButtons = (props) => (
  <button onClick={() => { props.OnClick() }} className={style.btn1}>{props.children}</button>
);
export default CategoryButtons;
