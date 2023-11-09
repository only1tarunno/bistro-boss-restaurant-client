import Banner from "./Banner";
import Category from "./Category";
import PopularMenu from "./PopularMenu";

const Home = () => {
  return (
    <div>
      <Banner></Banner>
      <div className="container mx-auto">
        <Category></Category>
        <PopularMenu></PopularMenu>
      </div>
    </div>
  );
};

export default Home;
