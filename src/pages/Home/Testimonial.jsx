import SharedSectionTitle from "../../components/SharedSectionTitle";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
import { Rating } from "@smastrom/react-rating";
import "@smastrom/react-rating/style.css";

const Testimonial = () => {
  const [reviews, setreviviews] = useState([]);

  useEffect(() => {
    fetch("reviews.json")
      .then((res) => res.json())
      .then((data) => setreviviews(data));
  }, []);

  return (
    <section className="py-16">
      {" "}
      <SharedSectionTitle
        heading={"TESTIMONIALS"}
        subHeading={"---What Our Clients Say---"}
      ></SharedSectionTitle>
      <div className="mt-10">
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {reviews.map((review) => (
            <SwiperSlide key={review._id}>
              <div className="mx-24 flex flex-col items-center justify-center text-center gap-2">
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <p className="max-w-3xl ">{review.details}</p>
                <h3 className="text-2xl text-[#CD9003]">{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonial;
