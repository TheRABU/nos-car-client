import { Outlet } from "react-router-dom";
import Header from "../shared/header/Header";
import Footer from "../shared/footer/Footer";

const RootLayout = () => {
  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Header />
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default RootLayout;
