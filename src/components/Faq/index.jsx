import { useState } from "react";
import faqData from "../../constant/faq.constant";
import FaqCard from "./FaqCard";

const Faq = () => {
  const [activeFaq, setActiveFaq] = useState(1);
  return (
    <section className="">
      <div className="mt-24 md:mt-32 mb-20 md:mb-52 max-w-5xl mx-auto px-5 2xl:px-5">
        <h2 className="text-[#0A2C8C] font-bold font-inter text-4xl md:text-5xl text-center">
          Frequently Asked Questions
        </h2>
        <div className="mt-10 space-y-5">
          {faqData.map((question) => (
            <FaqCard
              key={question?.id}
              {...question}
              activeFaq={activeFaq}
              setActiveFaq={setActiveFaq}
            />
          ))}
        </div>
      </div>
    </section>
  );
};
export default Faq;
