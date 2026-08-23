import { useState } from 'react';
import BookingDetails from '../ExpertSideComponents/BookingComponents/BookingDetails';
import Card from '../ExpertSideComponents/BookingComponents/Card';
import Clender from '../ExpertSideComponents/BookingComponents/Clender';
import style from './ClientBooking.module.css';
import { useSelector } from 'react-redux';
import ClientBookDetails from '../ClientComponents/BookingComponents/ClientBookDetails';

const ClientBooking = () => {

  const {approve} = useSelector(store => store.popUp)
  const today = new Date();
  const formattedDate = today.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "short",
    year: "numeric",
  });

  // Card arrays
  const upcomingBookings = [
    { name: "Tom Curren", time: "10:00 - 10:45 AM", details: "Upcoming" },
    { name: "Tom Curren", time: "11:00 - 11:45 AM", details: "Upcoming" },
  ];

  const pendingBookings = [
    { name: "Tom Curren", time: "12:00 - 12:45 PM", details: "Pending" },
    { name: "Tom Curren", time: "01:00 - 01:45 PM", details: "Pending" },
    { name: "Tom Curren", time: "02:00 - 02:45 PM", details: "Pending" },
    { name: "Tom Curren", time: "03:00 - 03:45 PM", details: "Pending" },
  ];

  const completedBookings = [
    { name: "Tom Curren", time: "04:00 - 04:45 PM", details: "Completed" },
    { name: "Tom Curren", time: "05:00 - 05:45 PM", details: "Completed" },
    { name: "Tom Curren", time: "06:00 - 06:45 PM", details: "Completed" },
    { name: "Tom Curren", time: "07:00 - 07:45 PM", details: "Completed" },
  ];
    const declineedBookings = [
    { name: "Tom Curren", time: "04:00 - 04:45 PM", details: "Decline" },
    { name: "Tom Curren", time: "05:00 - 05:45 PM", details: "Decline" },
    { name: "Tom Curren", time: "06:00 - 06:45 PM", details: "Decline" },
    { name: "Tom Curren", time: "07:00 - 07:45 PM", details: "Decline" },
  ];

  // Track selected booking
  const [selectedBooking, setSelectedBooking] = useState(null);

  // Handle card click
  const handleCardClick = (booking) => {
    setSelectedBooking(booking);
  };

  return (
    <div className={`${style.container} ${approve && style.hiden}`}>
      <Clender name={"Booking"} />
      <div className={style.cont}>
        Bookings on {formattedDate}
        <div className={style.cardContContainer}>
          <div className={style.cardContainer}>

            {/* Approved Bookings */}
            <div className={style.cardss}>
              <div className={style.heading}>Upcoming Bookings</div>
              <div className={style.book}>
                {upcomingBookings.map((booking, index) => (
                  <Card
                    key={index}
                    name={booking.name}
                    time={booking.time}
                    onClick={() => handleCardClick(booking)}
                  />
                ))}
              </div>
            </div>

            {/* Pending Bookings */}
            <div className={style.cardss}>
              <div className={style.heading}>Pending Bookings</div>
              <div className={style.book}>
                {pendingBookings.map((booking, index) => (
                  <Card
                    key={index}
                    name={booking.name}
                    time={booking.time}
                    onClick={() => handleCardClick(booking)}
                  />
                ))}
              </div>
            </div>

            {/* Completed Bookings */}
            <div className={style.cardss}>
              <div className={style.heading}>Completed Bookings</div>
              <div className={style.book}>
                {completedBookings.map((booking, index) => (
                  <Card
                    key={index}
                    name={booking.name}
                    time={booking.time}
                    onClick={() => handleCardClick(booking)}
                  />
                ))}
              </div>
            </div>


              <div className={style.cardss}>
              <div className={style.heading}>Declined Bookings</div>
              <div className={style.book}>
                {declineedBookings.map((booking, index) => (
                  <Card
                    key={index}
                    name={booking.name}
                    time={booking.time}
                    onClick={() => handleCardClick(booking)}
                  />
                ))}
              </div>
            </div>

            <button className={style.btn}>Set Availability</button>
          </div>

          {/* Show selected booking details */}
          <div className={style.cardInfo}>
            {selectedBooking ? (
              <ClientBookDetails booking={selectedBooking} />
            ) : (
              <p>Select a booking to see details</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClientBooking;
