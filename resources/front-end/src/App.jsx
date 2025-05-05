import SideBar from "./components/common/sidebar/SideBar.jsx";
import Dashboard from "./components/common/dashboard/Dashboard.jsx";
import axios from "axios";

axios.defaults.baseURL= import.meta.env.VITE_API_BASE_URL
axios.defaults.headers.post["Content-Type"] = "application/json"
axios.defaults.headers.post["Accept"] = "application/json"
const App = () => {

  return (
      <>
          <SideBar/>
          <Dashboard/>
       </>
  )
}

export default App
