import { Parallax } from "react-parallax";

const SubpageCover = ({ img, heading, subheading }) => {
  return (
    <Parallax
      blur={{ min: -20, max: 20 }}
      bgImage={img}
      bgImageAlt="the menu img"
      strength={-200}
    >
      <div className="hero h-[500px]">
        <div className="hero-content text-center text-neutral-content bg-[#15151599]  w-3/4 mx-auto h-[300px]">
          <div className="max-w-3xl">
            <h2 className="mb-5 text-5xl font-bold uppercase">{heading}</h2>
            <p className="mb-5">{subheading}</p>
          </div>
        </div>
      </div>
    </Parallax>
  );
};

export default SubpageCover;
