import {
  ClientReview,
  ContactForm,
  DigitalServices,
  Faq,
  Footer,
  Header,
  Hero,
  HowWeWork,
  MoreDetails,
  Portfolio,
  Team,
} from "../../components";

const Home = () => {
  return (
    <div>
      <Header />
      <DigitalServices />
      <MoreDetails />
      <Portfolio />
      <HowWeWork />
      {/* <ClientReview /> */}
      <Team />
      <Faq />
      <section className="pt-20  md:pt-36 bg-[#001655] ">
        <ContactForm />
        <Footer />
        {/* Elliple */}
      </section>
    </div>
  );
};
export default Home;
