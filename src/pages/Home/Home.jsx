import Banner from "./Banner";
import Category from "./Category";
import Featured from "./Featured";
import PopularMenu from "./PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto">
        <Category></Category>
        <PopularMenu></PopularMenu>
        <Featured></Featured>
      </div>
    </div>
  );
};

export default Home;
