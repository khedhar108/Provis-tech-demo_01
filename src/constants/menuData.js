import { LuUserPlus2 } from "react-icons/lu";
import { SlLocationPin } from "react-icons/sl";
import { TfiLightBulb } from "react-icons/tfi";

const menuItems = [
  {
    id: 1,
    title: "Company",
    path: "/company",

    subMenu: [
      {
        id: 3,
        title: "About Us",
        description: "Learn more about our mission, vision, and values.",
        // icon: <LuUserPlus2 size={20} />, //! causing broswer error
        icon: LuUserPlus2,
        path: "/company/about",
      },
      {
        id: 2,
        title: "Services",
        path: "/services",
      },

      {
        id: 4,
        title: "Partner With Us",
        description: "Explore partnership opportunities and grow with us.",
        icon: SlLocationPin,
        path: "/company/team",
      },
      {
        id: 5,
        title: "Careers",
        description: "Join our team and help us make a difference.",
        icon: TfiLightBulb,

        path: "/company/careers",
      },
    ],
  },
  {
    id: 6,
    title: "Solutions",
    path: "/solutions",
  },
  {
    id: 7,
    title: "Industries",
    path: "/industries",
  },
  {
    id: 8,
    title: "Insights",
    path: "/insights",
  },
  {
    id: 9,
    title: "News",
    path: "/news-and-media",
  },
];

export { menuItems };
