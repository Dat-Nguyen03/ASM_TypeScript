import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { useLocalStorage } from "../hook";
import { yupResolver } from "@hookform/resolvers/yup";
import { LoginForm, loginSchema } from "../interfaces/schemas";
import { login } from "../api/user";

const Login = () => {
  const navbigate = useNavigate();
  const [error, setError] = useState(null);
  const [userLocalStorage, setUserLocalStorage] = useLocalStorage("user", null);
  if (userLocalStorage) {
    navbigate("/");
  }
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginForm>({
    resolver: yupResolver(loginSchema),
  });

  const onHandleSubmit = async (data: LoginForm) => {
    try {
      const {
        data: { accessToken, user },
      } = await login(data);

      setUserLocalStorage({ accessToken, ...user });

      // console.log(user.role);
      user.role === "admin" ? navbigate("/admin/dashboard") : navbigate("/");

      // localStorage.setItem("user", JSON.stringify(user));
    } catch (error: any) {
      console.log(error);

      setError(error);
    }
  };

  return (
    <section className="h-[600px] flex items-center justify-center my-[30px]">
      <div className="layout-container w-[800px] mx-auto rounded-[20px] shadow-xl flex">
        <div className="left-content w-[500px] px-[45px] py-[60px]">
          <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
            <div className="form-group flex flex-col mb-[18px]">
              <label htmlFor="" className="text-[18px] mb-[9px]">
                Email
              </label>
              <input
                type="email"
                {...register("email")}
                className="border border-[#C7C7C7] outline-none w-[410px] h-[48px] text-[20px] pl-2"
              />
              <span className="text-red-600 text-sm mt-2">
                {errors.email && errors.email.message}
                {error && "Email hoặc mật khẩu không chính xác!"}
              </span>
            </div>
            <div className="form-group flex flex-col mb-[18px]">
              <label htmlFor="" className="text-[18px] mb-[9px]">
                Mật khẩu
              </label>
              <input
                type="password"
                {...register("password")}
                className="border border-[#C7C7C7] outline-none w-[410px] h-[48px] text-[20px] pl-2"
              />
              <span className="text-red-600 text-sm mt-2">
                {errors.password && errors.password.message}
                {error && "Email hoặc mật khẩu không chính xác!"}
              </span>
            </div>
            <div className="form-group">
              <button className="w-[410px] h-[49px] bg-[#FF424E] text-white text-[18px] rounded">
                Đăng nhập
              </button>
            </div>
          </form>
          <div className="signUp-link mt-2">
            <div className="text-center">
              Bạn chưa có tài khoản?{" "}
              <Link to="/signup" className="text-[#FF424E]">
                Đăng ký tại đây.
              </Link>
            </div>
          </div>
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
export default Login;
