import { Footer, CostCalculator, HeroLayout } from "../components";
import Navbar from "../components/header/Navbarr";

function HomePage() {
  return (
    <>
      <Navbar />
      <HeroLayout />
      <CostCalculator />
      <Footer />
    </>
  );
}

export default HomePage;
