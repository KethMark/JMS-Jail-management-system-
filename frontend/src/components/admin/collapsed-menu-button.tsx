import { ChevronDown, Dot, LucideIcon } from "lucide-react";
import { useState } from "react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "../ui/collapsible";
import { Button } from "../ui/button";
import { Link } from "react-router-dom";

type Submenu = {
    href: string;
    label: string;
    active: boolean;
  };
  
  interface CollapseMenuButtonProps {
    icon: LucideIcon;
    label: string;
    active: boolean;
    submenus: Submenu[];
    isOpen: boolean | undefined;
  }
  
  export function CollapseMenuButton({
    icon: Icon,
    label,
    active,
    submenus,
  }: CollapseMenuButtonProps) {
    const isSubmenuActive = submenus.some((submenu) => submenu.active);
    const [isCollapsed, setIsCollapsed] = useState<boolean>(isSubmenuActive);
  
    return (
      <Collapsible
        open={isCollapsed}
        onOpenChange={setIsCollapsed}
        className="w-full"
      >
        <CollapsibleTrigger
          className="[&[data-state=open]>div>div>svg]:rotate-180 mb-1"
          asChild
        >
          <Button
            variant={active ? "secondary" : "ghost"}
            className="w-full justify-start h-10"
          >
            <div className="w-full items-center flex justify-between">
              <div className="flex items-center">
                <span className="mr-4">
                  <Icon size={18} />
                </span>
                <p className="max-w-[150px] truncate translate-x-0 opacity-100">
                  {label}
                </p>
              </div>
              <div className="whitespace-nowrap translate-x-0 opacity-100">
                <ChevronDown
                  size={18}
                  className="transition-transform duration-200"
                />
              </div>
            </div>
          </Button>
        </CollapsibleTrigger>
        <CollapsibleContent className="overflow-hidden data-[state=closed]:animate-collapsible-up data-[state=open]:animate-collapsible-down">
          {submenus.map(({ href, label, active }, index) => (
            <Button
              key={index}
              variant={active ? "secondary" : "ghost"}
              className="w-full justify-start h-10 mb-1"
              asChild
            >
              <Link to={href}>
                <span className="mr-4 ml-2">
                  <Dot size={18} />
                </span>
                <p className="max-w-[170px] truncate translate-x-0 opacity-100">
                  {label}
                </p>
              </Link>
            </Button>
          ))}
        </CollapsibleContent>
      </Collapsible>
    );
  }
  