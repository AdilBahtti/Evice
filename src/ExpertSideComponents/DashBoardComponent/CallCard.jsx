import React from "react";
import style from "./CallCard.module.css";

const CallCard = ({ name, date, time, miles, price, image }) => {
  return (
    <div className={style.card}>
      <div className={style.left}>
        <img src={image} alt={name} className={style.avatar} />
        <div className={style.details}>
          <h4>{name}</h4>
          <p>{date} | {time} | {miles}</p>
        </div>
      </div>
      <div className={style.price}>${price}</div>
    </div>
  );
};

export default CallCard;
