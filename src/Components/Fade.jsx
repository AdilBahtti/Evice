import LoginPop from '../PropUpComponents/LoginPop';
import style from './Fade.module.css'
import { removeLoginpopup , removepass } from '../store/ShowPopUpSlice';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import SucessPop from '../PropUpComponents/SucessPop';
import SucessPopup from '../PropUpComponents/SucessPopup';
import CallDetail from '../PropUpComponents/CallDetail';
import Rate from '../PropUpComponents/Rate';
import { LuHeading2 } from 'react-icons/lu';
import { removeEamil } from '../store/ShowPopUpSlice';
import DeclineBookingPopup from '../PropUpComponents/DeclineBookingPopup';
import BookingPop from '../PropUpComponents/BookingPop';
const Fade=({children ,profile,  pname , changed , booking , rate, calldetail ,pname1 , head , subhead , showPopUp  , Forgetpass , approve , emailChange})=>{
           console.log(approve)
      
   return <>
         <div className={`${style.container}`}>
                       {children}
                       {emailChange && <div className={style.box}></div> }
                       {emailChange &&  <LoginPop name={pname1}  action={removeEamil}></LoginPop>}
                       
                   {
                    showPopUp ?   <div className={style.box}></div> : null
                   }
                    {
                         showPopUp ?
                         <LoginPop name={pname}  action={removeLoginpopup} ></LoginPop> :
                         null
                    } 
                       {
                    Forgetpass ?   <div className={style.box}></div> : null
                   }
                    {

                        Forgetpass ?  <LoginPop   name={"Forget Password"} action={removepass}></LoginPop> : ""
                    }

                                           {
                    changed ?   <div className={style.box}></div> : null
                   }
                    {
                     changed ?  <SucessPop head={head} subhead={subhead}  ></SucessPop>     :      ''
                    }


                                      {
                    profile ?   <div className={style.box}></div> : null
                   }
                    {
                     profile ?  <SucessPopup></SucessPopup>     :      ''
                    }
                    {calldetail  && <div className={style.box}></div> }
                    {calldetail  &&   <CallDetail></CallDetail>}
                    

                    {rate  && <div className={style.box}></div> }
                    {rate  &&   <Rate></Rate>}

                     {approve  && <div className={style.box}></div> }
                    {approve  &&     <DeclineBookingPopup></DeclineBookingPopup>}

                      {booking  && <div className={style.box}></div> }
                    {booking  &&     <BookingPop></BookingPop>}
                    

         </div>
   </>
}
export default Fade;