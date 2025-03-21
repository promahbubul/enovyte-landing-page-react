import { supportLinks } from "../../../constant/footerLinks.constant";
import { FooterLinkHeading } from "../../ui";
import FooterLink from "../FooterLink";

const FooterLinkThree = () => {
  return (
    <div className="w-full  text-center md:text-left">
      <FooterLinkHeading>Support</FooterLinkHeading>
      <div className="flex flex-col text-white mt-5 space-y-2 ">
        {supportLinks.map(({ id, link, title }) => (
          <FooterLink key={id} link={link} title={title} />
        ))}
      </div>
    </div>
  );
}
export default FooterLinkThree