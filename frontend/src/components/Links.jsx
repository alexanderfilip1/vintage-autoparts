import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const links = [
  {
    id: 1,
    text: "Home",
    path: "/",
  },
  {
    id: 2,
    text: "About",
    path: "/about",
  },
  {
    id: 3,
    text: "Parts",
    path: "/parts",
  },
  {
    id: 4,
    text: "Contact",
    path: "/contact",
  },
  {
    id: 5,
    icon: <FontAwesomeIcon icon={faBars} className="burger__menu" />,
  },
];

export default links;
