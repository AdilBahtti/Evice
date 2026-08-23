import Booking from './Booking';
import './style.css'
const BookingContainer=({name})=>{
   return   <>
         <div className="bookingContainer">
          <div className="bbbb">{name}</div>
          <div className="bookingBody">
      <Booking></Booking>
      <Booking></Booking>
      <Booking></Booking>
      <Booking></Booking>

          </div>
         </div>
   
   
   </>
}
export default BookingContainer;