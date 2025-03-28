import Logo from "../../../img/Logo.png";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Navbar = () => {
  return (
    <div className="flex justify-between mx-20 p-4 items-center">
      <div>
        <img className="w-1/2" src={Logo} alt="" />
      </div>
      <div>
        <ul className="flex gap-10 text-sm cursor-pointer ">
          <li className="active:text-orange-400">About us</li>
          <li className="active:text-orange-400">Our Product </li>
          <li className="active:text-orange-400">Delivery</li>
        </ul>
      </div>
      <div className="flex gap-5">
        <div className="relative w-[80%]">
          <FontAwesomeIcon
            color="black"
            icon={faSearch}
            className="absolute left-3 top-1/2 transform -translate-y-1/2 "
          />
          <input
            type="text"
            placeholder="Cari..."
            className="w-full pl-8 bg-white rounded-2xl border border-gray-300 p-1 focus:outline-none"
            aria-label="Search"
          />
        </div>
        <div className="cursor-pointer">
          <FontAwesomeIcon icon={faCartShopping} />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
