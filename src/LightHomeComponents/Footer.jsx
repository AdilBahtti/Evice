import style from './Footer.module.css'
const Footer=()=>{
      return <>

      <div className={style.container}>
                <div className={style.left}>
                       <img src="./images/Frame.png" alt="" />
                         <div className={style.text}>Feel free to contact without any hesitation</div>
                </div>
                <div className={style.right}>  

  <div className={style.menu}>
    <div className={style.h}>Menu</div>
    <ul>
      <li>Browse Experts</li>
      <li>Contact Us</li>
      <li>How it works</li>
    </ul>
  </div>


  <div className={style.category}>
    <div className={style.h}>Categories</div>
    <ul>
      <li>Category1</li>
      <li>Category2</li>
      <li>Category3</li>
    </ul>
  </div>

  
  <div className={style.info}>
    <div className={style.h}>Contact Info</div>
    <ul>
      <li>
              <img src="./images/phone.png" alt="" />   9435534343
      </li>
      <li>
      <img src="./images/email.png" />   info@evice.com
      </li>
    </ul>
  </div>
</div>
</div>
                     

                  

    
      </>
}
export default Footer;