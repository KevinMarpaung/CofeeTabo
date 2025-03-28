import CardMenu from "../CardMenu";
import { useLocation, useNavigate } from "react-router-dom";

const SpecialMenu = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const formData = location.state || {
    nama: "tidak ada",
    kategori: "tidak ada",
  };
  return (
    <div className="mt-20 flex-wrap  md:grid md:grid-cols-3 grid grid-cols-2 gap-6 md:mx-60  mx-10">
      <CardMenu />
      <CardMenu />
      <CardMenu />
      <CardMenu />
      <CardMenu />
      <CardMenu />
    </div>
  );
};

export default SpecialMenu;
