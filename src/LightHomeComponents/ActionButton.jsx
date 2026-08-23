import style from './Hero.module.css';

const ActionButtons = () => (
  <div className={style.btn2Container}>
    <button className={style.btn2}>Start Free Trial</button>
    <button className={style.btn3}>
      Learn more <img src="./images/learn.png" alt="" />
    </button>
  </div>
);
export default ActionButtons;
