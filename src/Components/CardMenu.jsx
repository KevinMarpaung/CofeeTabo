import Coffe1 from "../img/img_product.png";

const CardMenu = () => {
  return (
    <div className="bg-white w-52 hover:bg-transparent rounded-md p-1 shadow-md ">
      <div className="p-4">
        <img src={Coffe1} alt="" />
        <div className="flex justify-between">
          <h1 className="font-bold">vanilla latte</h1>
          <h2 className="font-bold">21K</h2>
        </div>
        <div className="flex justify-between">
          <h2 className="border-2 border-[#ff902a] text-[#ff902a] rounded-md px-2">
            Hot
          </h2>
          <h2 className="border-2 border-orange-200 rounded-md px-2">Cold</h2>
          <h2>logo</h2>
        </div>
      </div>
    </div>
  );
};

export default CardMenu;
