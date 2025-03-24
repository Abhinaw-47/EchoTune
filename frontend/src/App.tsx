
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/home/HomePage"
import AuthCallBack from "./pages/auth-callback/AuthCallBack"




function App() {
  

  return (
    <>
   <Routes>
<Route path="/" element={<HomePage />} />
<Route path="/auth-callback" element={<AuthCallBack/>} />
   </Routes>
    </>
  )
}

export default App
