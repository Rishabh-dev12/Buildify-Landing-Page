import Header from "../components/Header";
import Footer from "../components/Footer";
import Snowfall from "react-snowfall";
import AnimatedOutlet from "../components/AnimatedOutlet";

const MainLayout = () => {
  return (
    <div className="min-h-screen flex flex-col bg-blue-100">
      <Snowfall color="white" />

      <Header />

      <main className="flex-1">
        <AnimatedOutlet />
      </main>

      <Footer />
    </div>
  );
};

export default MainLayout;
