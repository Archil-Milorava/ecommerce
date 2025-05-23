import Footer from "@/features/footer/Footer";
import MarqueeIntroText from "@/features/navbar/MarqueeIntroText";
import Navbar from "@/features/navbar/Navbar";

const ContactPage = () => {
  return (
    <div className="h-auto flex flex-col font-Garamond">
      <MarqueeIntroText />
      <div className="sticky top-0 z-50 bg-white lg:block">
        <Navbar />
      </div>
      <div className="bg-[#F9F5EB] text-4xl h-[10rem] flex items-center justify-center">
        CONTACT
      </div>
      <div className="h-[35rem] w-full overflow-hidden">
        <div className="flex flex-col px-4 gap-8 items-center justify-center text-center h-full">
          <h1 className="text-6xl">
            This Ecomerrce website is built by{" "}
            <a href="https://github.com/Archil-Milorava" target="blank">
              Archil Milorava
            </a>
          </h1>
          <p className="text-xl">The Tecth stack is React + Express and Postgresql DB</p>
          <p className="text-xl">
            If you would like to have a website with such beautiful animation
            and colors contact me
          </p>
          <p className="text-xl">achimilorava16@gmail.com</p>
          <p className="text-xl">+995 595 09 66 92</p>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default ContactPage;
