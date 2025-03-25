
import { Route, Routes } from "react-router-dom"
import HomePage from "./pages/home/HomePage"
import AuthCallBack from "./pages/auth-callback/AuthCallBack"
import { AuthenticateWithRedirectCallback } from "@clerk/clerk-react"
import MainLayout from "./layout/MainLayout"
import ChatPage from "./pages/chat/ChatPage"




function App() {
  

  return (
    <>
   <Routes>

<Route path="/sso-callback" element={<AuthenticateWithRedirectCallback signUpForceRedirectUrl={"/auth-callback"}/>}/>
<Route path="/auth-callback" element={<AuthCallBack/>} />
<Route element={<MainLayout/>}>
<Route path="/" element={<HomePage />} />
<Route path="/chat" element={<ChatPage />} />
</Route>
   </Routes>
    </>
  )
}

export default App
