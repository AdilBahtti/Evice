import style from './Summery.module.css'
const Earing=()=>{

  const data = [
  { id: '#1234', client: 'Adam Smith', email: 'adam.smith@gmail.com', amount: '$500', date: '20 Aug, 2022', callTime: '00 : 45 : 56 Hrs', status: 'Processed' },
  { id: '#1235', client: 'Sophia Johnson', email: 'sophia.j@gmail.com', amount: '$750', date: '21 Aug, 2022', callTime: '01 : 10 : 32 Hrs', status: 'Processing' },
  { id: '#1236', client: 'Ethan Brown', email: 'ethan.brown@gmail.com', amount: '$320', date: '22 Aug, 2022', callTime: '00 : 35 : 20 Hrs', status: 'Processed' },
  { id: '#1237', client: 'Olivia Miller', email: 'olivia.miller@gmail.com', amount: '$980', date: '23 Aug, 2022', callTime: '01 : 05 : 45 Hrs', status: 'Processed' },
  { id: '#1238', client: 'Liam Davis', email: 'liam.davis@gmail.com', amount: '$450', date: '24 Aug, 2022', callTime: '00 : 55 : 18 Hrs', status: 'Processing' },
  { id: '#1239', client: 'Isabella Wilson', email: 'isabella.wilson@gmail.com', amount: '$600', date: '25 Aug, 2022', callTime: '00 : 40 : 22 Hrs', status: 'Processed' },
  { id: '#1240', client: 'Noah Martinez', email: 'noah.martinez@gmail.com', amount: '$870', date: '26 Aug, 2022', callTime: '01 : 15 : 14 Hrs', status: 'Processed' },
  { id: '#1241', client: 'Mia Anderson', email: 'mia.anderson@gmail.com', amount: '$530', date: '27 Aug, 2022', callTime: '00 : 48 : 40 Hrs', status: 'Processing' },
  { id: '#1242', client: 'James Taylor', email: 'james.taylor@gmail.com', amount: '$700', date: '28 Aug, 2022', callTime: '01 : 20 : 55 Hrs', status: 'Processed' },
  { id: '#1243', client: 'Emily Thomas', email: 'emily.thomas@gmail.com', amount: '$400', date: '29 Aug, 2022', callTime: '00 : 42 : 12 Hrs', status: 'Processed' }
];

  return <>

  <table className={style.table}>
        <thead>
          <tr>
            <th>ID</th>
            <th>Client</th>
            <th>Email</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Call Time</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td>{row.id}</td>
              <td>{row.client}</td>
              <td>{row.email}</td>
              <td>{row.amount}</td>
              <td>{row.date}</td>
              <td>{row.callTime}</td>
              <td className={(row.status === 'Processing') ? style.processing : style.processed}>
                {row.status}
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* View More */}
      <div className={style.viewMore}>View More</div>
  </>
}
export default Earing;