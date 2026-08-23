

import BookingCard from '../ClientComponents/DashBoardComponents/BookingCard';
import Card from '../ExpertSideComponents/DashBoardComponent/Card';
import style from './Clientdash.module.css'
const ClientDash=()=>{
  return <>
  <div className={style.container}>
      <div className={style.upper}>

        <Card name={"SPENT"} amount={"$100,000"} pers={15}></Card>
        <Card name={"UPCOMING BOOKING"} amount={"6"} pers={15}></Card>
        <Card name={"CALLS THIS MONTH"} amount={"250"} pers={-15}></Card>
      </div>
         <div className={style.title}
         >
          UPCOMING BOOKINGS</div>  
      <div className={style.upcoming}>
        <BookingCard 
        name="Adam Smith"
        role="Business Consultant"
        rating="4.9"
        reviews="13"
        time="10:00 PM"
        duration="45 Mins"
        date="20 April, 2023"
        price="$350"
        type="upcoming"   // upcoming | recent
      />
        <BookingCard 
        name="Adam Smith"
        role="Business Consultant"
        rating="4.9"
        reviews="13"
        time="10:00 PM"
        duration="45 Mins"
        date="20 April, 2023"
        price="$350"
        type="upcoming"   // upcoming | recent
      />
        <BookingCard 
        name="Adam Smith"
        role="Business Consultant"
        rating="4.9"
        reviews="13"
        time="10:00 PM"
        duration="45 Mins"
        date="20 April, 2023"
        price="$350"
        type="upcoming"   // upcoming | recent
      />
        <BookingCard 
        name="Adam Smith"
        role="Business Consultant"
        rating="4.9"
        reviews="13"
        time="10:00 PM"
        duration="45 Mins"
        date="20 April, 2023"
        price="$350"
        type="upcoming"   // upcoming | recent
      />
      <BookingCard 
        name="Adam Smith"
        role="Business Consultant"
        rating="4.9"
        reviews="13"
        time="10:00 PM"
        duration="45 Mins"
        date="20 April, 2023"
        price="$350"
        type="upcoming"   // upcoming | recent
      />
      <BookingCard 
        name="Adam Smith"
        role="Business Consultant"
        rating="4.9"
        reviews="13"
        time="10:00 PM"
        duration="45 Mins"
        date="20 April, 2023"
        price="$350"
        type="upcoming"   // upcoming | recent
      />
      <BookingCard 
        name="Adam Smith"
        role="Business Consultant"
        rating="4.9"
        reviews="13"
        time="10:00 PM"
        duration="45 Mins"
        date="20 April, 2023"
        price="$350"
        type="upcoming"   // upcoming | recent
      />

      
      </div>


         <div className={style.title}
         >
          RECENT BOOKINGS</div> 
       <div className={style.recent}>

        <BookingCard 
        name="Adam Smith"
        role="Business Consultant"
        rating="4.9"
        reviews="13"
        time="10:00 PM"
        duration="45 Mins"
        date="20 April, 2023"
        price="$350"
        type="recent"
      />
        <BookingCard 
        name="Adam Smith"
        role="Business Consultant"
        rating="4.9"
        reviews="13"
        time="10:00 PM"
        duration="45 Mins"
        date="20 April, 2023"
        price="$350"
        type="recent"
      />
        <BookingCard 
        name="Adam Smith"
        role="Business Consultant"
        rating="4.9"
        reviews="13"
        time="10:00 PM"
        duration="45 Mins"
        date="20 April, 2023"
        price="$350"
        type="recent"
      />
        <BookingCard 
        name="Adam Smith"
        role="Business Consultant"
        rating="4.9"
        reviews="13"
        time="10:00 PM"
        duration="45 Mins"
        date="20 April, 2023"
        price="$350"
        type="recent"
      />
        <BookingCard 
        name="Adam Smith"
        role="Business Consultant"
        rating="4.9"
        reviews="13"
        time="10:00 PM"
        duration="45 Mins"
        date="20 April, 2023"
        price="$350"
        type="recent"
      />
       </div>
  </div>
  </>
}
export default ClientDash;