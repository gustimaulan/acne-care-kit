import ProductCard from "../components/ProductCard";
// import ProductDetail from "../components/ProductDetail";
import CTA from "../components/CTA";
import FAQ from "../components/FAQ";
import Footer from "../components/Footer";
import Facebook from "../tracking/facebook";
import TikTok from "../tracking/tiktok";

const HomePage = () => {
  return (
    <div className="bg-white">
      <ProductCard />
      {/* <ProductDetail /> */}
      <CTA />
      <FAQ />
      <img src="/asakami-front.jpg" alt="asakami" />
      <Footer />
      <Facebook />
      <TikTok />
    </div>
  );
};

export default HomePage;
