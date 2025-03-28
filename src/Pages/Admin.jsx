import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Admin = () => {
  const [label, setLabel] = useState("nama makanan");
  const [form, setForm] = useState({ nama: "", kategori: "makanan" });
  const navigate = useNavigate();

  const handleOnclick = (e) => {
    e.preventDefault();
    console.log(form);
    navigate("/", { state: form });
  };

  const handleInput = (e) => {
    setForm({ ...form, nama: e.target.value, kategori: label });
  };

  const handleChange = (e) => {
    const selectValue = e.target.value;
    setLabel(selectValue === "minuman" ? "nama minuman" : "nama makanan");
    setForm({ ...form, kategori: selectValue });
  };
  return (
    <div className=" h-screen flex justify-center items-center  text-white">
      <div className="flex flex-col  h-80 bg-blue-800  w-4/12 justify-center items-center ">
        <form className="flex flex-col  " action="">
          <select onChange={handleChange}>
            <option value="makanan">makanan</option>
            <option value="minuman">minuman</option>
          </select>

          <label>{label}</label>
          <input onChange={handleInput} type="text" className="border" />
          <button
            type="submit"
            className="mt-2 bg-blue-400 "
            onClick={handleOnclick}
          >
            kirim
          </button>
        </form>
      </div>
    </div>
  );
};

export default Admin;
