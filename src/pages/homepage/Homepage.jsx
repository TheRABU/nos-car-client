import Aboutsection from "./Aboutsection";
import Banner from "./Banner";
import Services from "./services/Services";

const Homepage = () => {
  return (
    <>
      <div className="mt-10">
        <Banner />
      </div>
      <div className="mt-20">
        <Aboutsection />
      </div>
      <div>
        <Services />
      </div>
    </>
  );
};

export default Homepage;
