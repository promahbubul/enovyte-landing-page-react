import moreDetails from "../../constant/moreDetails.constant";
import { Button, SectionHeading } from "../ui";
import Card from "./Card";
import shape1 from "../../assets/images/bg-1.png";

const MoreDetails = () => {
  return (
    <section id="aboutus" className="relative border-2 border-red-500">
      <div className="max-w-6xl px-5 md:px-0 mx-auto text-center pt-20 z-10 relative">
        <SectionHeading
          title={"MORE DETAILS"}
          titleClassName={"!text-[#0C89FF]"}
          description={"Get Your Answers"}
          descriptionClassName={"!text-[#0A2C8C]"}
        />
        <div className="flex flex-col md:flex-row h-full mb-9">
          {moreDetails.map(
            ({ category, description, id, image, title, background }) => (
              <div key={id}  className="">
                <Card
                  background={background}
                  category={category}
                  description={description}
                  image={image}
                  title={title}
                />
              </div>
            )
          )}
        </div>
        <Button className={"py-4 px-12"}>See Pricing</Button>
      </div>
      {/* Shape */}
      <div className="absolute -bottom-[60%] z-0 inset-x-0 w-full">
        <img src={shape1} className="w-full" />
      </div>
    </section>
  );
};
export default MoreDetails;
