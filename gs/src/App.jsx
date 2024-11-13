import { Outlet } from "react-router-dom"
import Header from "./components/Header"

function App() {

  return (
    <>
    <div className="relative">
      <div className="">
        <Header/>
      </div>
      <div>
        <Outlet/>
      </div>
    </div>
      
      
    </>
  )
}

export default App
