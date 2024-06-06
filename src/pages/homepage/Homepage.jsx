import Aboutsection from "./Aboutsection";
import Banner from "./Banner";

const Homepage = () => {
  return (
    <>
      <div className="mt-10">
        <Banner />
      </div>
      <div className="mt-20">
        <Aboutsection />
      </div>
    </>
  );
};

export default Homepage;
