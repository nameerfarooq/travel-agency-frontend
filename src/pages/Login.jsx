import { useState } from "react";

const Login = () => {
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const doLogin = async () => {
    console.log("LOGIN");
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
            Login
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
