import { Link } from "react-router-dom";

const FooterLink = ({ link, title }) => {
  return (
    <Link
      className="hover:text-orange font-roboto text-base font-normal text-white"
      to={link}
    >
      {title}
    </Link>
  );
};
export default FooterLink;
