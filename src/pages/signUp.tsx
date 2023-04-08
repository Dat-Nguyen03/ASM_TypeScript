import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema, SignupForm } from "../interfaces/schemas";
import { signup } from "../api/user";
import { useState } from "react";

const SignUp = () => {
  const navigate = useNavigate();
  const [error, setError] = useState(null);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupForm>({
    resolver: yupResolver(signUpSchema),
  });
  const onHandleSubmit = async (data: any) => {
    try {
      data.confirmPassword = undefined;
      const { data: user } = await signup({ ...data, role: "member" });
      navigate("/login");
    } catch (error: any) {
      console.log(error.response.data);
      setError(error.response.data);
    }
  };
  console.log(error);

  return (
    <section className="h-[100%] flex items-center justify-center">
      <div className="layout-container w-[800px] mx-auto rounded-[20px] shadow-xl flex">
        <div className="left-content w-[500px] px-[45px] py-[60px]">
          <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
            <div className="form-group flex flex-col mb-[18px]">
              <label htmlFor="name" className="text-[18px] mb-[9px]">
                Name
              </label>
              <input
                type="text"
                {...register("name")}
                id="name"
                className="border border-[#C7C7C7] outline-none w-[410px] h-[48px] text-[20px] pl-2"
              />
              <span className="text-red-600 text-sm mt-2">
                {errors.name && errors.name.message}
              </span>
            </div>
            <div className="form-group flex flex-col mb-[18px]">
              <label htmlFor="email" className="text-[18px] mb-[9px]">
                Email
              </label>
              <input
                type="email"
                {...register("email")}
                id="email"
                className="border border-[#C7C7C7] outline-none w-[410px] h-[48px] text-[20px] pl-2"
              />
              <span className="text-red-600 text-sm mt-2">
                {errors.email && errors.email.message}
                {error && "Email đã tồn tại"}
              </span>
            </div>
            <div className="form-group flex flex-col mb-[18px]">
              <label htmlFor="phoneNumber" className="text-[18px] mb-[9px]">
                Số điện thoại
              </label>
              <input
                type="text"
                {...register("phoneNumber")}
                id="phoneNumber"
                className="border border-[#C7C7C7] outline-none w-[410px] h-[48px] text-[20px] pl-2"
              />
              <span className="text-red-600 text-sm mt-2">
                {errors.phoneNumber && errors.phoneNumber.message}
              </span>
            </div>
            <div className="form-group flex flex-col mb-[18px]">
              <label htmlFor="pass" className="text-[18px] mb-[9px]">
                Mật khẩu
              </label>
              <input
                type="password"
                {...register("password")}
                id="pass"
                className="border border-[#C7C7C7] outline-none w-[410px] h-[48px] text-[20px] pl-2"
              />
              <span className="text-red-600 text-sm mt-2">
                {errors.password && errors.password.message}
              </span>
            </div>
            <div className="form-group flex flex-col mb-[18px]">
              <label htmlFor="confirmpass" className="text-[18px] mb-[9px]">
                Xác nhận Mật khẩu
              </label>
              <input
                type="password"
                {...register("confirmPassword")}
                id="confirmpass"
                className="border border-[#C7C7C7] outline-none w-[410px] h-[48px] text-[20px] pl-2"
              />
              <span className="text-red-600 text-sm mt-2">
                {errors.confirmPassword && errors.confirmPassword.message}
              </span>
            </div>
            <div className="form-group">
              <button className="w-[410px] h-[49px] bg-[#FF424E] text-white text-[18px] rounded">
                Đăng ký
              </button>
            </div>
          </form>
          <div className="login-with-socials mt-[50px]">
            <h3 className="text-center mb-4 text-[18px]">
              Hoặc đăng nhập bằng
            </h3>
            <div className="socials flex gap-x-4 items-center justify-center">
              <a href="#">
                <img
                  className="object-cover w-[58px] h-[58px] max-w-[58px]"
                  src="/fb.png"
                  alt=""
                />
              </a>
              <a href="#">
                <img
                  className="object-cover w-[58px] h-[58px] max-w-[58px]"
                  src="/google.png"
                  alt=""
                />
              </a>
            </div>
          </div>
        </div>
        <div className="right-content bg-[#F8F8F8] w-[300px] flex items-center justify-center">
          <img
            src="/logo.png"
            alt=""
            className="w-[185px] h-[162px] object-cover"
          />
        </div>
      </div>
    </section>
  );
};

export default SignUp;
