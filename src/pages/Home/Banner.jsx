import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import img1 from "../../assets/home/b1.jpg";
import img2 from "../../assets/home/b2.jpg";
import img3 from "../../assets/home/b3.png";
import img4 from "../../assets/home/b4.jpg";
import img5 from "../../assets/home/b5.png";
import img6 from "../../assets/home/b6.png";

const Banner = () => {
  return (
    <Carousel>
      <div>
        <img src={img1} />
      </div>
      <div>
        <img src={img2} />
      </div>
      <div>
        <img src={img3} />
      </div>
      <div>
        <img src={img4} />
      </div>
      <div>
        <img src={img5} />
      </div>
      <div>
        <img src={img6} />
      </div>
    </Carousel>
  );
};

export default Banner;
