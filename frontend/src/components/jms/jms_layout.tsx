import { Outlet } from "react-router-dom";
import Sidebar from "./Sidebar";

const JMS = () => {
  return (
    <>
      <Sidebar />
      <main className=" bg-zinc-50 dark:bg-zinc-900 lg:ml-72 transition-[margin-left] ease-in-out duration-300">
        <Outlet/>
      </main>
    </>
  );
};

export default JMS;
