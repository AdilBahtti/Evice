import Side from "./Components/Side";
import './index.css'
import Navbar from "./Components/Navbar";
import { Outlet } from "react-router-dom";
const App=()=>{
     return <>
            <div className="layout-container">
  <div className="sidebar">
    <Side />
  </div>

  <div className="main-content">
    <Navbar />
    <div className="content-area">
      <Outlet />
    </div>
  </div>
</div>

     </>
}
export default App;