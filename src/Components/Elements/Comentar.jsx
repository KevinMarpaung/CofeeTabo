import Comentar1 from "../../img/kometar1.png";
const Comentar = () => {
  return (
    <div className="bg-[url(img/bg-image.png)] mr-90  relative rounded-2xl mt-20  ">
      <div className="flex items-center">
        <div className="mx-20">
          <h1 className="font-bold ">what they say about us</h1>
          <p>
            We always provide the best service and always maintain the quality
            of coffee
          </p>
        </div>
        <div className="flex  items-center gap-10 p-2">
          <img className="h-60 " src={Comentar1} alt="" />
          <img className="h-60" src={Comentar1} alt="" />
          <img className="h-60" src={Comentar1} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Comentar;
