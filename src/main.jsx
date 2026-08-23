import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import LightHome from './routes/LightHome.jsx'
import DarkHome from './routes/DarkHome.jsx'
import BrowseExpert from './routes/BrowseExpert.jsx'
import DarkBrowseExpert from './routes/DarkBrowseExpert.jsx'
import Contactus from './routes/Contactus.jsx'
import Profile from './routes/Profile.jsx'
import About from './ProfileComponent/About.jsx'
import ReviewContainer from './ProfileComponent/ReviewContainer.jsx'
import BookingContainer from './ProfileComponent/BookingContainer.jsx'
import { Provider } from 'react-redux';
import store from './store/Index.js'
import { useSelector } from 'react-redux'
import Login from './routes/Login.jsx'
import Signup from './routes/Signup.jsx'
import Fade from './Components/Fade.jsx'
import SetupAccount from './routes/SetupAccount.jsx'
import PerInfo from './SetupProfileComponent/PerInfo.jsx'
import BookingRates from './SetupProfileComponent/BookingRates.jsx'
import BookingTime from './SetupProfileComponent/BookingTime.jsx'
import SelectPlan from './SetupProfileComponent/SelectPlan.jsx'
import CardInfo from './SetupProfileComponent/CardInfo.jsx'
import DashBoard from './routes/DashBoard.jsx'
import Dash from './routes/Dash.jsx'
import FAQs from './ExpertSideComponents/FAQs.jsx'
import Booking from './routes/Booking.jsx'
import Calling from './ExpertSideComponents/BookingComponents/Calling.jsx'
import Meeting from './routes/Meeting.jsx'
import CallScreen from './ExpertSideComponents/BookingComponents/CallScreen.jsx'
import Chat from './ExpertSideComponents/BookingComponents/Chat.jsx'
import Parti from './ExpertSideComponents/BookingComponents/Parti.jsx'
import Request from './ExpertSideComponents/BookingComponents/Request.jsx'
import Setting from './ExpertSideComponents/BookingComponents/Setting.jsx'
import Wallet from './routes/Wallet.jsx'
import Earing from './ExpertSideComponents/WalletComponents/Earing.jsx'
import WithDraw from './ExpertSideComponents/WalletComponents/WithDraw.jsx'
import Call from './routes/Call.jsx'
import Settings from './routes/Settings.jsx'
import Client from './routes/Client.jsx'
import ClientDash from './routes/ClientDash.jsx'
import ClientBooking from './routes/ClientBooking.jsx'
import Callings from './ClientComponents/BookingComponents/Callings.jsx'
import Favour from './routes/Favour.jsx'
import Hire from './routes/Hire.jsx'
import Review from './ClientComponents/BookingComponents/Review.jsx'

const ThemeHandler = () => {
  const profiles = useSelector((store)=> store.experts.profile)
  const toggle = useSelector(store => store.themeToggle.toggle)
  const { loginPopup, Forgetpass, booking , profile, changed, calldetail, rate, approve , email } = useSelector(store => store.popUp)
  console.log(toggle)
  const Router = createBrowserRouter([
    {
      path: "/", element: <App></App>,
      children: [
        { path: "/", element: toggle ? <DarkHome /> : <LightHome /> },
        { path: "/Browse-Expert", element: toggle ? <DarkBrowseExpert /> : <BrowseExpert /> },
        { path: "/Contact-us", element: <Contactus></Contactus> },
        {
          path: "/Profile", element: <Profile></Profile>,
          children: [
            { path: "/Profile/About", element: <About></About> },
            { path: "/Profile/Review", element: <ReviewContainer></ReviewContainer> },
            { path: "/Profile/BookingRates", element: <BookingContainer name={"Booking Rates"}></BookingContainer> }
          ]
        }
      ]
    },
    {
      path: "/Login", element:
        <>
          <Fade head={"Password Changed!"} subhead={"Password was changed sucessfully"} pname={"Login Confermation"} changed={changed} Forgetpass={Forgetpass} showPopUp={loginPopup}>
            <Login></Login>

          </Fade>
        </>
    },

    {
      path: "/Signup", element: <Fade head={"Email Verified"} subhead={"you signup was login sucessfull new use our app"} pname={"email Confermation"} changed={changed} showPopUp={loginPopup}>

        <Signup></Signup>
      </Fade>
    },
    {
      path: "/Setup-Profile", element: <SetupAccount></SetupAccount>,

      children: [
        { path: "/Setup-Profile/Personal-Information", element: <PerInfo></PerInfo> },
        { path: "/Setup-Profile/Booking-Rates", element: <BookingRates></BookingRates> },
        { path: "/Setup-Profile/Booking-Time", element: <BookingTime></BookingTime> },
        { path: "/Setup-Profile/Select-Plan", element: <SelectPlan></SelectPlan> },
        {
          path: "/Setup-Profile/Card-Information", element:
            <Fade profile={profile} >

              <CardInfo></CardInfo>

            </Fade>
        }
      ]
    },
    {
      path: "/DashBoard", element: <DashBoard></DashBoard>,
      children: [
        { path: "/DashBoard", element: <Dash></Dash> },
        {
          path: "/DashBoard/Booking", element:
            <Fade approve={approve}>
              <Booking></Booking>

            </Fade>
        },
          { path: "/DashBoard/Wallet", element: <Wallet></Wallet> ,
            children:[
              {path : "/DashBoard/Wallet" , element : <Earing></Earing>},
              {path : "/DashBoard/Wallet/WithDraws" , element : <WithDraw></WithDraw>}
            ]

          },
          {path : "/DashBoard/Call" , element : <Call></Call>},
        { path: "/DashBoard/Contact-Us", element: <Contactus></Contactus> },
        { path: "/DashBoard/FAQs", element: <FAQs></FAQs> },
        {path : "/DashBoard/Profile" , element : <Profile index={true}></Profile>,
            children: [
            { path: "/DashBoard/Profile/About", element: <About></About> },
            { path: "/DashBoard/Profile/Review", element: <ReviewContainer></ReviewContainer> },
            { path: "/DashBoard/Profile/BookingRates", element: <BookingContainer name={"Booking Rates"}></BookingContainer> }
          ]
        },
        {path : "/DashBoard/Setting" ,  element : 
        <Fade changed={changed}  Forgetpass={Forgetpass} head={"Password Changed!"} subhead={"Password was changed sucessfully"} pname={"Login Confermation"} emailChange={email} head1={"Email Verified"} pname1={"Email Confermation"}  subhead1={"Email was changed sucessfully"}>

          <Settings></Settings>
        </Fade>
          }
      ]
    },
    { path: "/calling", element: <Calling></Calling> },
    {
      path: "/meeting", element: <Meeting></Meeting>,
      children: [
        { path: "/meeting", element: <CallScreen></CallScreen> },
        { path: "/meeting/chat", element: <Chat></Chat> },
        { path: '/meeting/participents', element: <Parti></Parti> },
        { path: "/meeting/request", element: <Request></Request> },
        { path: "/meeting/setting", element: <Setting></Setting> },
        {
          path: "/meeting/end", element: <Fade calldetail={calldetail}>
            <CallScreen></CallScreen>
          </Fade>
        },
        {
          path: "/meeting/rate", element: <Fade rate={rate}>
            <CallScreen></CallScreen>
          </Fade>
        }
      ]
    },
    
    {path : "/Client" , element : <Client></Client> , 
      children :[
        {path : "/Client" , element : <ClientDash></ClientDash>},
        {path : "/Client/Booking" , element : <ClientBooking></ClientBooking>},
        {path : "/Client/Call" , element :  <Call></Call>},
        {path : "/Client/FAQs" , element : <FAQs></FAQs>},
        {path : "/Client/Contact-Us" , element : <Contactus></Contactus>},
        {path : "/Client/Browse-Experts" , element  :  <DarkBrowseExpert />},
        {
          path : "/Client/Favourite" , element :<Favour></Favour>
        },
        {path : "/Client/Hire" , element :  <Hire profiles={profiles}></Hire>},
        {path: "/Client/Review" , element : 
          <Fade booking={booking}>

            <Review></Review>
          </Fade>
      }
      ]
    },
    {path :"/ClientCalling" , element : <Callings ></Callings>},

    {
      path: "/Clientmeeting", element: <Meeting index={true}></Meeting>,
      children: [
        { path: "/Clientmeeting", element: <CallScreen></CallScreen> },
        { path: "/Clientmeeting/chat", element: <Chat></Chat> },
        { path: '/Clientmeeting/participents', element: <Parti></Parti> },
        { path: "/Clientmeeting/setting", element: <Setting></Setting> },
        {
          path: "/Clientmeeting/end", element: <Fade calldetail={calldetail}>
            <CallScreen></CallScreen>
          </Fade>
        },
        {
          path: "/Clientmeeting/rate", element: <Fade rate={rate}>
            <CallScreen></CallScreen>
          </Fade>
        }
      ]
    }



  ])


  return <RouterProvider router={Router} />;


}


createRoot(document.getElementById('root')).render(
  <StrictMode>

    <Provider store={store}>
      <ThemeHandler></ThemeHandler>

    </Provider>
  </StrictMode>,
)
