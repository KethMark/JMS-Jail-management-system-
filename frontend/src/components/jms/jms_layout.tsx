import { Navigate, Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";
import { useAuth } from "../../lib/context";

const JMS = () => {
  
  const {token}  = useAuth();
  
  return (
    <>
      <Sidebar />
      <main className=" bg-zinc-50 dark:bg-zinc-900 lg:ml-72 transition-[margin-left] ease-in-out duration-300">
        {token ? <Outlet /> : <Navigate to="/signin" />}
      </main>
    </>
  );
}

export default JMS;