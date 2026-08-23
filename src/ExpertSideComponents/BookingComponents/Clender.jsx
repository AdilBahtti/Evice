import React, { useState } from "react";
import dayjs from "dayjs";
import styles from "./Clender.module.css";

const Clender = ({name}) => {
  const [selectedDate, setSelectedDate] = useState(dayjs());
  const startDate = dayjs(); // start from today
  const daysToShow = 20; // number of days to show

  const daysArray = Array.from({ length: daysToShow }, (_, i) =>
    startDate.add(i, "day")
  );

  return (
    <div className={styles.container}>
      <h3 className={styles.heading}>{name}</h3>
      <div className={styles.dateRow}>
        {daysArray.map((date) => (
          <div
            key={date.format("YYYY-MM-DD")}
            className={`${styles.dateBox} ${
              selectedDate.isSame(date, "day") ? styles.active : ""
            }`}
            onClick={() => setSelectedDate(date)}
          >
            <span className={styles.day}>{date.format("ddd").toUpperCase()}</span>
            <span className={styles.date}>{date.format("DD")}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Clender;
