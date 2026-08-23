import style from './Banner.module.css'
 const Banner=()=>{
     return <>
     
          <div className={style.container}>
                  <img className={style.pic} src="./images/back.png" alt="" />
                  <div className={style.box}></div>


                   <div className={style.cont}>

                  <div className={style.line}>
                    Hire highly Rated Musicians on Evice.
                  </div>
                  <div className={style.p}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure nobis libero debitis reiciendis iusto vitae culpa!</div>
               <button className={style.btn}>Explore Musician</button>
          </div>

                   </div>

     
     </>
 }
 export default Banner;
