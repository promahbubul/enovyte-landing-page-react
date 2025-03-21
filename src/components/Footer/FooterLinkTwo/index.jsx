import { learnMoreLinks } from "../../../constant/footerLinks.constant";
import { FooterLinkHeading } from "../../ui";
import FooterLink from "../FooterLink";

const FooterLinkTwo = () => {
  return (
    <div
      className="w-full
     md:w-2/12 text-center md:text-left"
    >
      <FooterLinkHeading>Learn More</FooterLinkHeading>
      <div className="flex flex-col text-white mt-5 space-y-2 ">
        {learnMoreLinks.map(({ id, link, title }) => (
          <FooterLink key={id} link={link} title={title} />
        ))}
      </div>
    </div>
  );
}
export default FooterLinkTwo