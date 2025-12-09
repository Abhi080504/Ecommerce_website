import React from "react";
import { Divider, ListItemIcon, ListItemText } from "@mui/material";
import { useLocation, useNavigate } from "react-router-dom";

interface menuItem {
  name: string;
  path: string;
  icon: React.ReactNode;
  activeIcon?: React.ReactNode;
}

interface DrawerListProp {
  menu: menuItem[];
  menu2: menuItem[];
  toggleDrawer?: () => void;
}

const DrawerList = ({ menu, menu2 }: DrawerListProp) => {
  const location = useLocation();
  const navigate = useNavigate();
  const isActive = (path: string) => path === location.pathname;

  return (
    <div className="h-full w-[300px] bg-[#0f1111] text-[#9ee9dd]">
      {/* Sidebar container */}
      <div className="flex flex-col justify-between h-full py-6 px-4">
        {/* top menu */}
        <div className="space-y-4">
          {menu.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.path)}
              className="cursor-pointer"
            >
              <div
                className={`flex items-center gap-4 py-3 pl-4 pr-6 rounded-r-[999px] transition-all duration-150
                  ${isActive(item.path) ? "bg-[#0f9f8f] text-white" : "text-[#66ead7] hover:bg-white/5"}
                `}
              >
                <ListItemIcon
                  className={`min-w-[40px] flex justify-center items-center ${
                    isActive(item.path) ? "text-white" : "text-[#66ead7]"
                  }`}
                >
                  {isActive(item.path) && item.activeIcon ? item.activeIcon : item.icon}
                </ListItemIcon>

                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{
                    className: `text-sm ${isActive(item.path) ? "font-medium" : "font-normal"}`
                  }}
                />
              </div>
            </div>
          ))}
        </div>

        <Divider className="border-[#222] my-4" />

        {/* bottom menu */}
        <div className="space-y-4">
          {menu2.map((item, index) => (
            <div
              key={index}
              onClick={() => navigate(item.path)}
              className="cursor-pointer"
            >
              <div
                className={`flex items-center gap-4 py-3 pl-4 pr-6 rounded-r-[999px] transition-all duration-150
                  ${isActive(item.path) ? "bg-[#0f9f8f] text-white" : "text-[#66ead7] hover:bg-white/5"}
                `}
              >
                <ListItemIcon
                  className={`min-w-[40px] flex justify-center items-center ${
                    isActive(item.path) ? "text-white" : "text-[#66ead7]"
                  }`}
                >
                  {isActive(item.path) && item.activeIcon ? item.activeIcon : item.icon}
                </ListItemIcon>

                <ListItemText
                  primary={item.name}
                  primaryTypographyProps={{
                    className: `text-sm ${isActive(item.path) ? "font-medium" : "font-normal"}`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default DrawerList;
