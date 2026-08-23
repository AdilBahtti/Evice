import style from './ExpertBanner.module.css'
const ExpertBanner=()=>{
  return <>

     <div className={style.container}>
          <img className={style.back} src="./images/banner.png" alt="" />
                

                <div className={style.section}>
                  <div className={style.head}>
                    Now Enjoy Single Or Group Calls With Your Favourite Experts
                  </div>
                  <div className={style.text}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae similique tempora minima consequatur earum? Sit!
                  </div>
                <button className={style.btn}>Get Start</button>








                
                </div>

                <img className={`${style.im} ${style.i1}`} src="./images/img1.png" alt="" />
                <img className={`${style.im} ${style.i2}`} src="./images/img2.png" alt="" />
                <img className={`${style.im} ${style.i3}`} src="./images/img3.png" alt="" />
                <img className={`${style.im} ${style.i4}`} src="./images/img4.png" alt="" />
                <img className={`${style.im} ${style.i5}`} src="./images/img5.png" alt="" />
                <img className={`${style.im} ${style.i6}`} src="./images/img6.png" alt="" />
                <img className={`${style.im} ${style.i7}`} src="./images/img7.png" alt="" />
                

     </div>

  </>
}
export default ExpertBanner;