import { SignedOut } from "@clerk/clerk-react";
import { LayoutDashboardIcon } from "lucide-react";
import { Link } from "react-router-dom";


const Topbar = () => {
    const isAdmin =false;
  return (
   <div className="flex items-center justify-betweenp-4 sticky top-0 bg-zinc-900/75
   backdrop-clur-md z-10">
    <div className="fex gap-2 items-center">
        EchoTune
    </div>
    <div className="flex items-center gap-4">
      {isAdmin &&(
        <Link to={"/admin"}>
            <LayoutDashboardIcon className="size-4 mr-2"/>
        </Link>
      )}
      <SignedOut>
        <SignInOAuthButtons/>
      </SignedOut>
    </div>
   </div>
  )
}

export default Topbar