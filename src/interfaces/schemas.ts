import * as Yup from "yup";

export const signUpSchema = Yup.object({
  name: Yup.string().required("Không được để trống!"),
  email: Yup.string()
    .email("Email không đúng định dạng!")
    .required("Không được để trống!"),
  phoneNumber: Yup.string()
    .required("Không được để trống!")
    .min(10, "Số điện thoại phải đủ 10 số!")
    .max(10, "Số điện thoại phải đủ 10 số!"),
  password: Yup.string()
    .required("Không được để trống!")
    .min(6, "Mật khẩu phải từ 6 ký tự!"),
  confirmPassword: Yup.string().oneOf(
    [Yup.ref("password")],
    "Mật khẩu không khớp!"
  ),
});

export type SignupForm = Yup.InferType<typeof signUpSchema>;

export const loginSchema = Yup.object({
  email: Yup.string()
    .email("Email không đúng định dạng!")
    .required("Không được để trống!"),
  password: Yup.string()
    .required("Không được để trống!")
    .min(6, "Mật khẩu phải từ 6 ký tự!"),
});

export type LoginForm = Yup.InferType<typeof loginSchema>;

export const productSchema = Yup.object().shape({
  name: Yup.string().required("Không được để trống!"),
  image: Yup.mixed().required("Không được để trống!"),
  price: Yup.string().required("Không được để trống!"),
  original_price: Yup.string().required("Không được để trống!"),
  brand: Yup.string().oneOf(["Samsung", "Apple"], "Hãy chọn 1 trường!"),
  description: Yup.string()
    .min(20, "Phải nhiều hơn 20 ký tự")
    .required("Không được để trống!"),
});

export type ProductForm = Yup.InferType<typeof productSchema>;

export const userSchema = Yup.object({
  name: Yup.string().required("Không được để trống!"),
  email: Yup.string().required("Không được để trống!"),
  phoneNumber: Yup.string().required("Không được để trống!"),
  role: Yup.string().oneOf(["admin", "member"], "Hãy chọn 1 trường!"),
});

export type UserForm = Yup.InferType<typeof userSchema>;
