import Categories from "../../components/categories/categories";
import Contact from "../../components/contact/contact";
import FeatureProducts from "../../components/featureProducts/featureProducts";
import Slider from "../../components/slider/slider";
import "./home-style.scss";

const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeatureProducts type="featured" />
      <Categories />
      <FeatureProducts type="trending" />
      <Contact />
    </div>
  );
};

export default Home;
