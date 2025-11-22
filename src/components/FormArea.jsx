export const FormArea = () => {
  return (
    <div className=" w-full md:w-[50%] flex justify-center items-center p-4 ">
      <div
        className="w-full  lg:w-[60%] shadow rounded-2xl p-8 flex flex-col gap-2 border border-gray-400 "
        style={{ backgroundColor: "#6657B0" }}
      >
        <p className="text-white text-2xl font-bold mb-5">
          Log In to Lucy<sup>TM</sup>
        </p>

        <form className=" flex flex-col text-white gap-5 font-medium ">
          <label htmlFor="mail">Your Email</label>
          <input
            type="email"
            name="mail"
            id="mail"
            placeholder="Enter your Mail"
            className="border border-gray-300 rounded-md px-4 py-2 "
          />

          <label htmlFor="password">Your Password</label>
          <input
            type="password"
            name="password"
            id="password"
            placeholder="Enter your Password"
            className="border border-gray-300 rounded-md px-4 py-2 "
          />

          <div className="flex flex-wrap justify-between">
            <div className="flex items-center space-x-2">
              <input
                type="checkbox"
                id="remember"
                name="remember"
                className="w-4 h-4 border-2 border-gray-400 "
                style={{ accentColor: "#6657B0" }}
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
          >
            Log in
          </button>

          <div className=" flex flex-col items-center mt-8 gap-3">
            <p className="text-sm font-medium">Don't have a account</p>
            <button className="py-3 shadow-2xl border-3 border-gray-400 rounded-md text-sm w-full">
              Sign up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
