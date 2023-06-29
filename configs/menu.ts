import { IoDocumentText, IoHelpCircle, IoRocket , IoGlobeOutline } from "react-icons/io5";
import { RiAppsFill } from "react-icons/ri";
import {AiOutlineQuestionCircle} from "react-icons/ai";

export const submenu = [
    {
        title: "Dashboard",
        href: "/dashboard",
        icon: RiAppsFill,
        disabled: false
    },
    {
        title: "Community",
        href: "/community",
        icon: IoGlobeOutline,
        disabled: false
    },
    {
        title: "Support",
        href: "/support",
        icon: AiOutlineQuestionCircle,
        disabled: false
    }
];

export const publicMenu = [
  {
    title: "Explore",
    href: "/",
  },
  {
    title: "Launchpad",
    href: "/launchpad",
    icon: IoRocket
  },
  {
    title: "Projects",
    href: "/projects",
    disabled: false
  },
  // {
  //   title: "Power Pools",
  //   href: "/power-pools",
  //   disabled: true
  // },
  // {
  //   title: "Grants",
  //   href: "/grants",
  //   disabled: true
  // },
  {
    title: "DAOs",
    href: "/daos",
    disabled: false
  },
  // {
  //   title: "News",
  //   href: "/news",
  //   disabled: true
  // }
];
