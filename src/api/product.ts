import instance from ".";
import { IProduct } from "../interfaces/product";
import { ProductForm } from "../interfaces/schemas";

export const getAllProducts = () => {
  return instance.get("/products");
};
export const getOneProduct = (id: number | string) => {
  return instance.get(`/products/${id}`);
};
export const addProduct = (data: IProduct) => {
  return instance.post("/products", data);
};
export const updateProduct = (id: number | string, data: ProductForm) => {
  return instance.patch(`/products/${id}`, data);
};
export const removeProduct = (id: number | string) => {
  return instance.delete(`/products/${id}`);
};
