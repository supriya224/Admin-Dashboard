import React from "react";
import { IoIosArrowForward } from "react-icons/io";
import {
  Briefcase,
  Codesandbox,
  Cpu,
  HelpCircle,
  Speaker,
  User,
} from "react-feather";

const MenuItems = () => {
  return [
    {
      label: "Dashboard",
      icon: <Speaker size={20} />,
      img:<IoIosArrowForward size={20} />,
      key: "1",
    },
    {
      label: "Product",
      icon: <Cpu size={20} />,
      img:<IoIosArrowForward size={20} />,
      key: "2",
    },
    {
      label: "Customers",
      icon: <User size={20} />,
      img:<IoIosArrowForward size={20} />,
      key: "3",
    },
    {
      label: "Income",
      icon: <Briefcase size={20} />,
      img:<IoIosArrowForward size={20} />,
      key: "4",
    },
    {
      label: "Promote",
      icon: <Codesandbox size={20} />,
      img:<IoIosArrowForward size={20} />,
      key: "5",
    },
    {
      label: "Help",
      icon: <HelpCircle size={20} />,
      img:<IoIosArrowForward size={20} />,
      key: "6",
    }
  ];
};

export default MenuItems;
