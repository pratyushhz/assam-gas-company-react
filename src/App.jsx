import { Outlet } from "react-router-dom"
import { useState, useEffect } from "react"
import "./assets/css/style-6.css"
import Footer from "./components/common/Footer"
import Header from "./components/common/Header"
import Shimmer from "./components/Shimmer"

function App() {

  const [isLoading, setIsLoading] = useState(true);
  
    useEffect(() => {
      // Simulate API call
      setTimeout(() => {
        setIsLoading(false);
      }, 2000);
    }, []);

  return(
    <div>
      {isLoading ? (
        <Shimmer />
      ) : (
    <>
      <Header/>
      <Outlet/>
      <Footer/>
    </>
    )}
    </div>
  )
}

export default App
