import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const [loading, setloading] = useState(false);
  const navigate = useNavigate();
  const doLogin = async () => {
    setloading(true);
    try {
      const res = await axios.post(
        `${import.meta.env.VITE_APP_BACKEND_BASE_URL}/user/login`,
        {
          email,
          password,
        }
      );
      console.log("res user: ", res.data.existingUser);
      console.log("res token: ", res.data.token);
      localStorage.setItem("user", JSON.stringify(res.data.existingUser));
      localStorage.setItem("token", res.data.token);
      toast.success("Success");
      navigate("/dashboard");
    } catch (error) {
      console.log("doLogin :", error);
      setloading(false);
      toast.error("Something went wrong");
    }
    setloading(false);
  };
  return (
    <div className="flex justify-center items-center">
      <div className="flex min-w-[280px] w-[90%] sm:w-[40%] my-[30px] mx-auto flex-col gap-[30px] bg-white rounded-lg shadow-2xl p-[20px]">
        <p className="text-center text-2xl font-black italic bg-gradient-to-r from-blue-500 via-blue-700 to-blue-950 bg-clip-text text-transparent">
          Login as Admin
        </p>
        <form className="flex flex-col gap-[20px]">
          <div className="flex flex-col gap-[10px]">
            <p className="font-bold">Email</p>
            <input
              type="email"
              placeholder="Enter your email"
              className="bg-sky-100 py-[10px] px-[15px] outline-none"
              value={email}
              onChange={(e) => {
                setemail(e.target.value);
              }}
            />
          </div>
          <div className="flex flex-col gap-[10px]">
            <p className="font-bold">Password</p>
            <input
              type="text"
              placeholder="Enter your password"
              className="bg-sky-100 py-[10px] px-[15px] outline-none"
              value={password}
              onChange={(e) => {
                setpassword(e.target.value);
              }}
            />
          </div>
          <p
            onClick={doLogin}
            className="rounded-full bg-gradient-to-r from-blue-700 to-blue-950  text-center py-[5px] px-[20px]  text-white font-bold cursor-pointer w-max mx-auto"
          >
            {loading ? "loading..." : "Login"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
