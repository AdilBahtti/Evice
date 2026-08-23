
import Hero from '../LightHomeComponents/Hero';

import ExpertBanner from '../LightHomeComponents/ExpertBanner';
import Explore from '../LightHomeComponents/Explore';
import Feedback from '../LightHomeComponents/Feddback';
import Category from '../LightHomeComponents/Category';
import SubscriptionArea from '../LightHomeComponents/SubscriptionArea';
import Footer from '../LightHomeComponents/Footer';
const LightHome=()=>{
 return   <>
 
        <Hero></Hero>
        <Explore text={"Explore Experts"}></Explore>
        <ExpertBanner></ExpertBanner>
        <Explore text={"Most Popular"}></Explore>
        <Feedback></Feedback>
        <Category></Category>
        <SubscriptionArea></SubscriptionArea>
        <Footer></Footer>
 </>
}
export default LightHome;