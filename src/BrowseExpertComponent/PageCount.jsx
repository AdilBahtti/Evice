import './Page.css'
const PageCount=({ onClick,num})=>{
   return <>
        <div onClick={()=> {
          onClick(num)
        }} className="container">


          {num}
        </div>
   
   
   </>
}
export default PageCount;