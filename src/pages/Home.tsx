import BestSelling from "../components/Home/BestSelling";
import HeroSection from "../components/Home/HeroSection";
import LatestProducts from "../components/Home/LatestProducts";
import OfferProducts from "../components/Home/OfferProducts";
import SEOSection from "../components/Home/SEOSection";


const Home = () => {
  return (
    <>
      <HeroSection />
      <BestSelling />
      <LatestProducts />
      <OfferProducts />
      <SEOSection />
    </>
  )
}

export default Home;