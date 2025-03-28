import Navbar from "../Components/Elements/Navbar";
import GambarCoffe from "../../img/img-hero.png";
import bghero from "../../img/bg.png";

const Main = () => {
  return (
    <div className=" bg-[#f6ebda] relative -z-10">
      <Navbar />
      <div className="flex flex-row mx-20  z-20">
        <div className="absolute right-0 top-2 -z-20 ">
          <img src={bghero} alt="" />
        </div>
        <div className="basis-1/2  m-auto mb-10">
          <h1 className="text-3xl font-bold mb-4 tracking-[4px]">
            Enjoy Your <span className=" text-[#FF902B]">Coffee</span>
            <br />
            before your activity
          </h1>
          <p className="mb-8 ">
            Boost your productivity and build your <br /> mood with a glass of
            coffee in the morning{" "}
          </p>
          <div>
            <button className="bg-black text-white rounded-xl px-5 py-1 ">
              Order Now
            </button>
          </div>
        </div>
        <div className="basis-1/2 mt-12">
          <img src={GambarCoffe} alt="" />
        </div>
      </div>
      <div className="flex -mt-3  ">
        <img className=" rotate-180 " src={bghero} alt="" />
      </div>
    </div>
  );
};

export default Main;
