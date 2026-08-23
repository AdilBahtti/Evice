import style from './CallSummary.module.css';
import pict from '../../assets/img1.png'
const CallSummary = () => {
  const data = [
    { 
      profile: { img: pict, name: 'John Doe' }, 
      date: '01 Sep, 2022', 
      duration: '45 min', 
      earning: '$120', 
      type: 'Video' 
    },
    { 
      profile: { img: pict, name: 'Jane Smith' }, 
      date: '02 Sep, 2022', 
      duration: '30 min', 
      earning: '$90', 
      type: 'Audio' 
    },
    { 
      profile: { img: pict, name: 'Alex Johnson' }, 
      date: '03 Sep, 2022', 
      duration: '60 min', 
      earning: '$150', 
      type: 'Video' 
    },
    { 
      profile: { img: pict, name: 'Emma Brown' }, 
      date: '04 Sep, 2022', 
      duration: '25 min', 
      earning: '$75', 
      type: 'Audio' 
    }
  ];

  return (
    <>
      <table className={style.table}>
        <thead>
          <tr>
            <th>Profile</th>
            <th>Date</th>
            <th>Duration</th>
            <th>Earning</th>
            <th>Type</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td className={style.profileCell}>
                <img src={row.profile.img} alt={row.profile.name} className={style.profileImg} />
                <span>{row.profile.name}</span>
              </td>
              <td>{row.date}</td>
              <td>{row.duration}</td>
              <td>{row.earning}</td>
              <td className={row.type === 'Video' ? style.video : style.audio}>
                {row.type}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* View More */}
      <div className={style.viewMore}>View More</div>
    </>
  );
};

export default CallSummary;
