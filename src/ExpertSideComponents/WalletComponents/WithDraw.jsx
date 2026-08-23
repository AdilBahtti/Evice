import style from './Summery.module.css';

const WithDraw = () => {
  const data = [
    { tID: '#W1001', amount: '$1,200', date: '01 Sep, 2022', bank: 'Bank of America', iban: 'US29 BOFA 1234 5678 9012', status: 'Processed' },
    { tID: '#W1002', amount: '$850', date: '03 Sep, 2022', bank: 'Chase Bank', iban: 'US44 CHAS 5678 1234 9012', status: 'Processing' },
    { tID: '#W1003', amount: '$540', date: '04 Sep, 2022', bank: 'Wells Fargo', iban: 'US65 WFBI 9012 3456 7890', status: 'Processed' },
    { tID: '#W1004', amount: '$980', date: '05 Sep, 2022', bank: 'Citi Bank', iban: 'US11 CITI 4321 8765 0987', status: 'Processed' },
    { tID: '#W1005', amount: '$1,500', date: '06 Sep, 2022', bank: 'HSBC', iban: 'US88 HSBC 5678 4321 1098', status: 'Processing' },
    { tID: '#W1006', amount: '$760', date: '07 Sep, 2022', bank: 'TD Bank', iban: 'US55 TDBK 7654 3210 9876', status: 'Processed' },
    { tID: '#W1007', amount: '$640', date: '08 Sep, 2022', bank: 'PNC Bank', iban: 'US22 PNCB 2345 6789 0123', status: 'Processing' },
    { tID: '#W1008', amount: '$900', date: '09 Sep, 2022', bank: 'Capital One', iban: 'US33 CAPO 9876 5432 1098', status: 'Processed' },
    { tID: '#W1009', amount: '$1,050', date: '10 Sep, 2022', bank: 'US Bank', iban: 'US77 USBK 4567 8901 2345', status: 'Processed' },
    { tID: '#W1010', amount: '$430', date: '11 Sep, 2022', bank: 'Regions Bank', iban: 'US99 REGB 0987 6543 2109', status: 'Processing' }
  ];

  return (
    <>
      <table className={style.table}>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Amount</th>
            <th>Date</th>
            <th>Bank</th>
            <th>IBAN</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {data.map((row, i) => (
            <tr key={i}>
              <td>{row.tID}</td>
              <td>{row.amount}</td>
              <td>{row.date}</td>
              <td>{row.bank}</td>
              <td>{row.iban}</td>
              <td className={row.status === 'Processing' ? style.processing : style.processed}>
                {row.status}
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

export default WithDraw;
