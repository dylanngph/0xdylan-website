import { IoDocumentText, IoHelpCircle, IoRocket , IoGlobeOutline } from "react-icons/io5";
import { RiAppsFill } from "react-icons/ri";
import {AiOutlineQuestionCircle , AiFillGithub} from "react-icons/ai";

export const publicMenu = [
  {
    title: "Explore",
    href: "/",
  },
  {
    title: "Works",
    href: "/works",
  },
  // {
  //   title: "Blog",
  //   href: "/blog",
  //   disabled: false
  // },
  {
    title: "Join my DEX",
    href: "https://bionswap.com",
  },
  {
    title: "Source",
    href: "https://github.com/dylanngph",
    icon: AiFillGithub,
  },
  {
    title: "My resume",
    href: "/resume/resume.pdf",
    download: true,
  }
];
