import Item from './Item'
import style from './Offers.module.css'
const Offers=()=>{
    return <>
       <div className={style.container}>
        
             <div className={style.head}>
              We offer alot on Evice
             </div>

              <div className={style.cont}>

                    <Item name={"Teacher"}  path={"./images/o1.png"}></Item>
                     <Item name={"Musician"}  path={"./images/o3.png"}></Item>
                     <Item name={"Scientist"}  path={"./images/o4.png"}></Item>
                     <Item name={"Suppoetsman"}  path={"./images/o5.png"}></Item>
                     <Item name={"Coding Expert"}  path={"./images/o6.png"}></Item>
                     <Item name={"Grapgic Designer"}  path={"./images/o2.png"}></Item>
                     <Item name={"Teacher"}  path={"./images/o1.png"}></Item>
                     <Item name={"Musician"}  path={"./images/o3.png"}></Item>
                     <Item name={"Scientist"}  path={"./images/o4.png"}></Item>
                     <Item name={"Suppoetsman"}  path={"./images/o5.png"}></Item>
                     <Item name={"Coding Expert"}  path={"./images/o6.png"}></Item>
                     <Item name={"Grapgic Designer"}  path={"./images/o2.png"}></Item>
              </div>

       </div>
    </>
}
export default Offers