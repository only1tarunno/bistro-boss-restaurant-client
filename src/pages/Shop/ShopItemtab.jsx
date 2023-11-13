import Foodcard from "../../components/Foodcard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "./slider.css";
// import required modules
import { Pagination } from "swiper/modules";

const ShopItemtab = ({ items }) => {
  const pagination = {
    clickable: true,
    renderBullet: function (index, className) {
      return '<span class="' + className + '">' + (index + 1) + "</span>";
    },
  };
  return (
    <div>
      <Swiper
        pagination={pagination}
        modules={[Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <div className="grid gap-5 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => (
              <Foodcard key={item._id} item={item}></Foodcard>
            ))}
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ShopItemtab;
