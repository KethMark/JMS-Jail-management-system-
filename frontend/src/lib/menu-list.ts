import {
    Tag,
    Settings,
    Bookmark,
    SquarePen,
    LayoutGrid
  } from "lucide-react";
  
  type Submenu = {
    href: string;
    label: string;
    active: boolean;
  };
  
  type Menu = {
    href: string;
    label: string;
    active: boolean;
    icon: any;
    submenus: Submenu[];
  }
  
  type Group = {
    groupLabel: string;
    menus: Menu[];
  }
  
  export function adminMenuList(pathname: string): Group[] {
    return [
      {
        groupLabel: "",
        menus: [
          {
            href: "/dashboard",
            label: "Dashboard",
            active: pathname.includes("/dashboard"),
            icon: LayoutGrid,
            submenus: []
          }
        ]
      },
      {
        groupLabel: "Contents",
        menus: [
          {
            href: "/user",
            label: "User",
            active: pathname.includes("/user"),
            icon: SquarePen,
            submenus: [
              // {
              //   href: "/example",
              //   label: "Example",
              //   active: pathname === "/example"
              // },
              // {
              //   href: "/example/new",
              //   label: "Example",
              //   active: pathname === "/example/new"
              // }
            ]
          },
          {
            href: "/inmates",
            label: "Inmates",
            active: pathname.includes("/inmates"),
            icon: Bookmark,
            submenus: []
          },
          {
            href: "/visitors",
            label: "Visitors",
            active: pathname.includes("/visitors"),
            icon: Tag,
            submenus: []
          }
        ]
      },
      {
        groupLabel: "Settings",
        menus: [
          {
            href: "/account",
            label: "Account",
            active: pathname.includes("/account"),
            icon: Settings,
            submenus: []
          }
        ]
      }
    ];
  }