import axios from "axios";

const axiosPublic = axios.create({
  baseURL: "https://module-64-bistro-boss-restaurant-server.vercel.app",
});

const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
