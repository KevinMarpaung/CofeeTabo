import CardMenu from "../../Components/CardMenu";

const MenuPopular = () => {
  return (
    <div className="bg-[#f8d8a9] md:mx-60 md:p-10    md:-mt-10 z-20 mx-2  rounded-2xl md:h-50 ">
      <div className="md:flex md:flex-nowrap flex  p-2 flex-wrap items-center md:-my-25 gap-5 ">
        <CardMenu></CardMenu>
        <CardMenu></CardMenu>
        <CardMenu></CardMenu>
      </div>
    </div>
  );
};

export default MenuPopular;
