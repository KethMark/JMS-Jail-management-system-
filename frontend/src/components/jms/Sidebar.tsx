import { PanelsTopLeft } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "../ui/button";
import Menu from "./menu";
import { cn } from "../../lib/utils";

const Sidebar = () => {
  return (
    <aside
      className={cn(
        "fixed top-0 left-0 z-20 h-screen w-72 -translate-x-full lg:translate-x-0 transition-[width] ease-in-out duration-300"
      )}
    >
      <div className="relative h-full flex flex-col px-3 py-4 overflow-y-auto shadow-md dark:shadow-zinc-800">
        <Button
          className={cn(
            "transition-transform ease-in-out duration-300 mb-1 translate-x-0"
          )}
          variant="link"
          asChild
        >
          <Link to="/" className="flex items-center gap-2">
            <PanelsTopLeft className="w-6 h-6 mr-1" />
            <h1
              className={cn(
                "font-bold text-lg whitespace-nowrap transition-[transform,opacity,display] ease-in-out duration-300 translate-x-0 opacity-100"
              )}
            >
              JMS
            </h1>
          </Link>
        </Button>
        <Menu />
      </div>
    </aside>
  );
};

export default Sidebar;
