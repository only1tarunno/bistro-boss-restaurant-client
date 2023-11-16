import { useForm } from "react-hook-form";
import SharedSectionTitle from "../../../components/SharedSectionTitle";
import { FaUtensils } from "react-icons/fa6";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

// imgbb
const imgbb_key = import.meta.env.VITE_imgbb_key;
const img_hosting_api = `https://api.imgbb.com/1/upload?key=${imgbb_key}`;

const AddItems = () => {
  const { register, handleSubmit } = useForm();
  const axiospublic = useAxiosPublic();
  const axiosSecure = useAxiosSecure();
  const onSubmit = async (data) => {
    // upload img in imgbb then get img url
    // const image = data.image[0];
    // const formData = new FormData();
    // formData.append("image", image);
    // const res = await axiospublic.post(img_hosting_api, formData);
    // console.log(res.data.data.display_url);

    // 2nd method
    const imgfile = { image: data.image[0] };
    const res = await axiospublic.post(img_hosting_api, imgfile, {
      headers: {
        "content-type": "multipart/form-data",
      },
    });
    if (res.data.success) {
      // now send the data in server
      const menuitem = {
        name: data.name,
        price: data.price,
        category: data.category,
        image: res.data.data.display_url,
        recipe: data.recipe,
      };

      const menuRes = await axiosSecure.post("/menu", menuitem);
      console.log(menuRes.data);
    }
  };

  return (
    <div>
      <SharedSectionTitle
        heading={"ADD an Item"}
        subHeading={"---What's New---"}
      ></SharedSectionTitle>
      <div className="max-w-screen-lg mx-auto">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
          <div>
            <label className="label">
              <span className="label-text">Recipe Name*</span>
            </label>
            <input
              type="text"
              placeholder="Recipe Name"
              className="input input-bordered w-full"
              {...register("name")}
            />
          </div>
          <div className="flex items-center flex-col md:flex-row justify-between w-full">
            <div className="w-full md:w-[48%]">
              <label className="label">
                <span className="label-text">Select Category*</span>
              </label>
              <select
                className="select select-bordered w-full"
                {...register("category")}
              >
                <option value="salad">salad</option>
                <option value="pizza">pizza</option>
                <option value="soup">soup</option>
                <option value="desserts">desserts</option>
                <option value="drinks">drinks</option>
              </select>
            </div>
            <div className="w-full md:w-[48%]">
              <label className="label">
                <span className="label-text">Price*</span>
              </label>
              <input
                type="number"
                className="input input-bordered w-full"
                {...register("price")}
              />
            </div>
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text">Recipe Details</span>
            </label>
            <textarea
              className="textarea textarea-bordered h-24"
              placeholder="Recipe Details"
              {...register("recipe")}
            ></textarea>
          </div>
          <div className="form-control w-full max-w-xs">
            <label className="label">
              <span className="label-text">Recipe image</span>
            </label>
            <input
              type="file"
              {...register("image")}
              className="file-input file-input-bordered w-full max-w-xs"
            />
          </div>
          <button className="btn">
            Add item <FaUtensils className="ml-4"></FaUtensils>
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddItems;
