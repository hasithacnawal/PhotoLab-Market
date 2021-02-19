import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import { BsFillChatSquareDotsFill } from "react-icons/bs";
import * as IoIcons from "react-icons/io";

export const SidenavData = [
  {
    title: "Home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    className: "nav-text",
  },
  {
    title: "Products",
    path: "/products",
    icon: <FaIcons.FaCartPlus />,
    className: "nav-text",
  },
  {
    title: "Orders",
    path: "/orders",
    icon: <IoIcons.IoIosPaper />,
    className: "nav-text",
  },
  {
    title: "Contact",
    path: "/contact",
    icon: <BsFillChatSquareDotsFill />,
    className: "nav-text",
  },
  {
    title: "Support",
    path: "/support",
    icon: <IoIcons.IoMdHelpCircle />,
    className: "nav-text",
  },
];
