import style from './Card.module.css';
import ii from '../../assets/Polygon 34.png';

const Card = ({ name, pers, amount, hidden }) => {
  return (
    <div className={style.container}>
      <div className={style.cat}>
        {name}
        {!hidden && pers !== null && pers !== undefined && pers !== '' && (
          <div className={`${style.pers} ${pers < 0 ? style.red : ''}`}>
            {pers} %
          </div>
        )}
      </div>

      <div className={style.main}>{amount}</div>

      {hidden && (
        <div className={style.up}>
          upgrade <img src={ii} alt="" />
        </div>
      )}
    </div>
  );
};

export default Card;
