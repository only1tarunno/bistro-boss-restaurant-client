import { Helmet } from "react-helmet-async";
import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";
import Testimonial from "./Testimonial";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner></Banner>
      <div className="container mx-auto">
        <Category></Category>
        <PopularMenu></PopularMenu>
        <Featured></Featured>
        <Testimonial></Testimonial>
      </div>
    </div>
  );
};

export default Home;
