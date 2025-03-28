import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

const myScema = z.object({
  nama: z.string().min(2, { message: "nama harus lebihb dua cuyy" }),
  email: z.string().email(),
  password: z
    .string()
    .min(8, { message: "password minimal 8 " })
    .regex(/[A-Z]/, { message: "password harus ada huruf besar" })
    .regex(/[a-z]/, { message: "password harus ada huruf kecil" })
    .regex(/[0-9]/, { message: "password harus ada angka" }),
});

const LoginAdmin = () => {
  const navigate = useNavigate();

  const [data, seData] = useState([]);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(myScema),
  });

  const handleKlik = (data) => {
    seData((prevData) => [...prevData, data]);
    navigate("/home");
  };

  return (
    <div className="bg-white h-screen flex  flex-col justify-center items-center ">
      <div className="  flex  justify-center items-center    h-96 text-yellow-200    w-1/2    bg-[#f6ebda]    rounded-xl ">
        <form onSubmit={handleSubmit(handleKlik)}>
          <label className="flex flex-col text-black  gap-2 ">
            nama:
            <input {...register("nama")} className="bg-white rounded-md p-1 " />
            {errors.nama && <p>{`${errors.nama.message}`}</p>}
          </label>
          <label className="flex flex-col gap-2 text-black ">
            email:
            <input {...register("email")} className="bg-white rounded-md p-1" />
            {errors.email && <p>{`${errors.email.message}`}</p>}
          </label>
          <label className="flex flex-col gap-2 text-black">
            password:
            <input
              {...register("password")}
              className="bg-white rounded-md p-1"
            />
            {errors.password && <p>{`${errors.password.message}`}</p>}
          </label>
          <button className="bg-amber-200 text-black p-1  rounded-md w-full mt-4">
            Kirim
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginAdmin;
