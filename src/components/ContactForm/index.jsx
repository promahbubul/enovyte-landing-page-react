import { Input, TextArea } from "../ui";
import contactData from "../../constant/contact.constant";
import Card from "./Card";
import { FaArrowRight } from "react-icons/fa";

const ContactForm = () => {
  return (
    <div className="max-w-6xl px-5  2xl:px-5 mx-auto flex flex-col md:flex-row gap-8 relative">
      {/* Left */}
      <div className="p-8 rounded-lg border border-[#E1E4ED]/15 bg-[#0A2C8C]/20 z-20 relative w-full md:w-1/2 ">
        <form className="grid grid-cols-2 gap-6">
          <Input
            label={"Name"}
            placeholder={"Your Name"}
            className={"col-span-2 md:col-span-1"}
          />
          <Input
            label={"Email"}
            placeholder={"support@envobyte.com"}
            className={"col-span-2 md:col-span-1"}
          />
          <Input
            label={"Phone"}
            placeholder={"+1 (667) 777 2477"}
            className={"col-span-2 md:col-span-1"}
          />
          <Input
            label={"Company"}
            placeholder={"Envobyte"}
            className={"col-span-2 md:col-span-1"}
          />
          {/* <Input
            label={"Name"}
           
            
          /> */}
          <TextArea
            label={"Message"}
            className={"col-span-2"}
            placeholder={"Type your message here..."}
          />
        </form>
        <button className="mt-6 py-4 px-5 w-full md:w-auto justify-center rounded bg-white/10 border border-[#F1F3F7]/30 text-white font-semibold text-sm font-inter flex flex-row items-center gap-1">
          Send message
          <FaArrowRight />
        </button>
      </div>
      {/* Right */}
      <div className="text-white w-full md:w-1/2 relative z-20">
        <h1 className="text-4xl md:text-5xl max-w-lg text-center md:text-left font-extrabold leading-none">
          Let us know what you think!
        </h1>
        <p className="mt-10 text-center md:text-left font-inter text-base font-normal">
          Got something on your mind? Share it with us! Drop a message, and
          we’ll respond quickly to assist you
        </p>
        <div className="mt-8">
          {contactData?.map(({ id, image, info, title }) => (
            <Card key={id} image={image} info={info} title={title} />
          ))}
        </div>
      </div>
      <div
        className="md:w-[369px] h-[530px] bg-[#0A3CCA]/50 rounded-[100%] blur-3xl absolute -top-5 z-0 -left-20
      "
      ></div>
      <div
        className="w-80 md:w-[369px] h-[530px] bg-[#0A3CCA]/40  rounded-[100%] blur-3xl absolute -bottom-[200px]  xl:-bottom-[400px] z-10 right-20 xl:-right-20
      "
      ></div>
    </div>
  );
};
export default ContactForm;
