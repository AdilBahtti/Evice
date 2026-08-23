import Hero from "../DarkHomeComponents/Hero";
import Category from "../DarkHomeComponents/Category";
import Banner from "../DarkHomeComponents/Banner";
import Explore from "../DarkHomeComponents/Explore";
import Offers from "../DarkHomeComponents/Offers";
import Feedback from "../DarkHomeComponents/Feddback";
import SubscriptionArea from '../DarkHomeComponents/SubscriptionArea'
import Footer from"../LightHomeComponents/Footer";
const DarkHome=()=>{
  return <>
        <Hero></Hero>
        <Category></Category>
         <Banner></Banner>

         <Explore text={"Explore Experts"}></Explore>

         <Offers></Offers>
         <Explore text={"Top Rated"}></Explore>
         <Feedback></Feedback>
         <SubscriptionArea></SubscriptionArea>
         <Footer></Footer>

  </>
}
export default DarkHome;