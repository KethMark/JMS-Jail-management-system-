import { Link, useLocation } from "react-router-dom";
import { adminMenuList } from "../../lib/menu-list";
import { ScrollArea } from "../ui/scroll-area";
import { Button } from "../ui/button";
import { LogOut } from "lucide-react";
import { cn } from "../../lib/utils";
import { CollapseMenuButton } from "./collapsed-menu-button";

const Menu = () => {
  const location = useLocation();
  const adminList = adminMenuList(location.pathname);

  return (
    <ScrollArea className="[&>div>div[style]]:!block">
      <nav className="mt-8 h-full w-full">
        <ul className="flex flex-col min-h-[calc(100vh-48px-36px-16px-32px)] lg:min-h-[calc(100vh-32px-40px-32px)] items-start space-y-1 px-2">
          {adminList.map(({ groupLabel, menus }, index) => (
            <li className={cn("w-full", groupLabel ? "pt-5" : "")} key={index}>
              {groupLabel && (
                <p className="text-sm font-medium text-muted-foreground px-4 pb-2 max-w-[248px] truncate">
                  {groupLabel}
                </p>
              )}
              {menus.map(
                ({ href, label, icon: Icon, active, submenus }, index) =>
                  submenus.length === 0 ? (
                    <div className="w-full" key={index}>
                      <Button
                        variant={active ? "secondary" : "ghost"}
                        className="w-full justify-start h-10 mb-1"
                        asChild
                      >
                        <Link to={href}>
                          <span className="mr-4">
                            <Icon size={18} />
                          </span>
                          <p className="max-w-[200px] truncate translate-x-0 opacity-100">
                            {label}
                          </p>
                        </Link>
                      </Button>
                    </div>
                  ) : (
                    <div className="w-full" key={index}>
                      <CollapseMenuButton
                        icon={Icon}
                        label={label}
                        active={active}
                        submenus={submenus}
                        isOpen={true}
                      />
                    </div>
                  )
              )}
            </li>
          ))}
          <li className="w-full grow flex items-end">
            <Button
              onClick={() => {}}
              variant="outline"
              className="w-full justify-center h-10 mt-5"
            >
              <span className="mr-4">
                <LogOut size={18} />
              </span>
              <p className="whitespace-nowrap opacity-100">Sign out</p>
            </Button>
          </li>
        </ul>
      </nav>
    </ScrollArea>
  );
};

export default Menu;
