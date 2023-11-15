import { FaGoogle } from "react-icons/fa6";
import useAuth from "../hooks/useAuth";
import useAxiosPublic from "../hooks/useAxiosPublic";
import { useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { googleSingin } = useAuth();
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleSingin().then((result) => {
      console.log(result.user);
      const userInfo = {
        name: result.user?.displayName,
        email: result.user?.email,
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate("/");
      });
    });
  };

  return (
    <div className="text-center">
      <button className="btn" onClick={handleGoogleLogin}>
        <FaGoogle />
        Login with google
      </button>
    </div>
  );
};

export default SocialLogin;
