import foodTruk from "../../../img/food-truck 1.png";
import coffe from "../../../img/coffee-cup 2.png";
import coffe2 from "../../../img/image.png";

const CardKecil = ({ gambar, title, subtitle }) => {
  return (
    <div>
      <img className="w-20   m-auto" src={gambar} alt="" />
      <h1 className="font-black text-center">{title}</h1>
      <p className="font-thin">{subtitle}</p>
    </div>
  );
};
const Service = () => {
  return (
    <div className="md:mx-40">
      <h1 className="mt-20 md:mx-20 text-center  font-bold">
        How To Use Delivery Service
      </h1>
      <div className="md:flex text-center justify-evenly md:mt-10 m-2">
        <CardKecil
          gambar={coffe2}
          title={"Enjoy Your Coffee"}
          subtitle={"there are 20+ coffees for you"}
        ></CardKecil>
        <CardKecil
          gambar={foodTruk}
          title={"Choose Your Coffee"}
          subtitle={"Choose delivery service"}
        ></CardKecil>{" "}
        <CardKecil
          gambar={coffe}
          title={"Choose Your Coffee"}
          subtitle={"Choose delivery service"}
        ></CardKecil>
      </div>
    </div>
  );
};

export default Service;
