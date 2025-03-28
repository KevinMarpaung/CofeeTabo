import coffe3 from "../../img/cofee3.png";

const About = () => {
  return (
    <div className="bg-[url(/img/bg-image.png)] mt-40 relative  ">
      <div className="md:flex  md:mx-30 md:pb-10">
        <div className="w-60 -mt-10 flex m-auto p-1 bg-white shadow  rounded-md">
          <img src={coffe3} className="    bg-cover" alt="" />
        </div>
        <div className="m-auto md:w-[40%] ">
          <h1 className="font-bold text-2xl mt-10">About Us</h1>
          <p className="font-bold my-5">
            We provide quality coffee, <br /> and ready to deliver.
          </p>
          <p>
            We are a company that makes and distributes delicious drinks. our
            main product is made with a secret recipe and available in stores
            worldwide.
          </p>
          <button className="bg-black rounded-2xl text-orange-400 p-1 px-4">
            Get your coffee
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
