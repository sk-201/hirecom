import CaseStudies from "./components/CaseStudies";
import ClientCarousel from "./components/ClientCarousel";
import Faq from "./components/Faq";
import Footer from "./components/Footer";
import Quote from "./components/Quote";

function App() {
  return (
    <div>
      <ClientCarousel />
      <CaseStudies />
      <div className="flex flex-col    lg:flex-row lg:justify-around lg:items-center  mt-10 mb-10 ">
        <Faq />
        <Quote />
      </div>
      <Footer />{" "}
    </div>
  );
}

export default App;
