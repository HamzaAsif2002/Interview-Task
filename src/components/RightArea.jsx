import { Eye, EyeOff, UserRound } from "lucide-react";
import { useState } from "react";

export const RightArea = () => {
  const [showPassword, setShowPassword] = useState(false);

  const [data, setData] = useState({
    mail: "",
    password: "",
  });

  // handle Input data.
  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Email:", data.mail);
    console.log("Password:", data.password);
    setData({
      mail: "",
      password: "",
    });
  };

  return (
    <div className=" w-full md:w-[50%] flex justify-center items-center p-4 ">
      <div
        className="w-full  lg:w-[60%] shadow rounded-2xl p-8 flex flex-col gap-2 border border-gray-400 "
        style={{ backgroundColor: "#6657B0" }}
      >
        <p className="text-white text-2xl sm:text-3xl font-medium mb-5">
          Log In to Lucy
          <sup className="text-sm align-middle">TM</sup>
        </p>

        <form
          onSubmit={handleSubmit}
          className=" flex flex-col text-white/80 gap-5 font-medium "
        >
          <div className="relative w-full">
            <label htmlFor="mail" className="block mb-1">
              Your Email
            </label>
            <div className="flex items-center justify-between border border-gray-300 rounded-md px-3 py-2">
              <input
                type="email"
                name="mail"
                id="mail"
                placeholder="Enter your Email"
                value={data.mail}
                onChange={handleChange}
                className="w-full outline-none"
              />
              <UserRound className="w-5 h-5 text-white/80 mr-2" />
            </div>
          </div>

          <div className="relative w-full">
            <label htmlFor="password" className="block mb-1">
              Your Password
            </label>
            <div className="flex items-center justify-between border border-gray-300 rounded-md px-3 py-2">
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                id="password"
                placeholder="Enter your Password"
                value={data.password}
                onChange={handleChange}
                className="w-full outline-none"
              />
              {/* for show and hide icon */}
              <div
                onClick={() => setShowPassword(!showPassword)}
                className="cursor-pointer"
              >
                {showPassword ? (
                  <Eye className="w-5 h-5 text-white/80 mr-2" /> // show icon
                ) : (
                  <EyeOff className="w-5 h-5 text-white/80 mr-2" /> // hide icon
                )}
              </div>
            </div>
          </div>

          <div className="flex flex-wrap justify-between mb-4">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="w-4 h-4 border-2 border-gray-400 appearance-none rounded-sm accent-[#6657B0] "
              />
              <label htmlFor="remember" className="font-sm text-sm">
                Remember
              </label>
            </div>

            <p className="font-sm text-sm">Forgotten?</p>
          </div>

          <button
            className="py-3 rounded-md text-black text-sm"
            style={{ backgroundColor: "#A3C8D9" }}
            type="submit"
          >
            Log in
          </button>

          <div className=" flex flex-col items-center mt-8 gap-3">
            <p className="text-sm font-medium">Don't have a account</p>
            <button
              type="button"
              className="py-3 shadow-2xl border-3 border-gray-400 rounded-md text-sm w-full"
            >
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
