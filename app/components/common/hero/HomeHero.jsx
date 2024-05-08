

const HomeHero = () => {
  return (
    <div className="lg:h-[70rem]  mx-auto max-w-7xl 2xl:container relative">
      <div className="lg:h-3/4 bg-[#0D121F] flex justify-center ">
        <div className="pt-12 lg:pt-32  lg:w-3/5 w-11/12">
          <h1 className="text-white font-semibold text-4xl lg:text-6xl  text-center mb-4 ">
            Providing Quality solutions for your business.
          </h1>
          <p className="text-[#90A3BF] text-center">
            We understand the product quality is prime for the business and
            consumers. Our test suites are designed to provide 360 views for all
            quality activities.
          </p>
          <div className=" flex justify-center mt-6 mb-12 lg:mb-0">
            <button className="px-6 py-1 lg:py-2 bg-white hover:bg-black hover:text-white text-black rounded-sm font-semibold">Take a tour</button>
          </div>
        </div>
      </div>

      <div className=" absolute bottom-28 right-48 hidden lg:block">
        <img className="w-11/12" src="/Images/Homehero_img.png" alt="" />
      </div>
    </div>
  );
}

export default HomeHero