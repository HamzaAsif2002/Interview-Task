export const LeftArea = () => {
  return (
    <div className="w-full md:w-[50%] flex flex-col ">
      {/* Image section */}
      <div className="w-full">
        <img src="/logo1.png" alt="logo-img" className="h-60 lg:h-80  " />
      </div>

      {/* Text Section */}
      <div className="h-[400px] w-[full] flex flex-col text-white justify-center items-start gap-5 px-4  m-auto ">
        <div className="flex flex-row gap-4 ">
          <img src="/img.png" alt="image" className="w-20 h-20" />

          <div className="flex flex-col gap-1 ">
            <p className="text-3xl sm:text-4xl font-medium ">
              LUCY<sup className="text-sm align-super font-normal">TM</sup>
            </p>
            <p className="font-sm text-sm">Innovation Starts Here</p>
          </div>
        </div>
        <p className="font-sm text-xl sm:text-2xl">
          You will be testing one of Lucy
          <sup className="text-sm align-super font-normal">TM'</sup>s core
          applications: <br />
          LUCYideas<sup className="text-sm align-super font-normal">TM</sup>
        </p>
        {/* button section */}

        <div className="flex flex-row gap-8">
          <button
            className="py-2 px-6 sm:py-4 sm:px-8 border-3 border-gray-400 rounded-xl"
            style={{ backgroundColor: "#6657B0" }}
          >
            What to Expect?
          </button>
          <button>Other future Application</button>
        </div>
      </div>
    </div>
  );
};
