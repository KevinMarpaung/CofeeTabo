const Footer = () => {
  return (
    <>
      <div className=" bg-[url(img/bg-footer.png)] bg-cover h-72 mx-20 rounded-xl text-center justify-center items-center flex  my-20">
        <div className=" flex-col  ">
          <h1 className=" text-white font-bold my-2">
            Subscribe to get 50% discount price
          </h1>
          <input
            type="text"
            className="bg-white rounded-2xl px-4 p-1 "
            placeholder="Email Addres"
          />
        </div>
      </div>
    </>
  );
};

export default Footer;
