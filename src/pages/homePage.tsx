import { useEffect, useState } from "react";
import Products from "../components/product";
import Slider from "../components/slider";
import { IProduct } from "../interfaces/product";
import { getAllProducts } from "../api/product";

const HomePage = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        const { data } = await getAllProducts();
        // console.log(data);
        setProducts(data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <section className="w-[90%] mx-auto">
      {isLoading ? (
        <div className="loader-container flex items-center justify-center h-[100vh] ">
          <div className="spinner loading animation"></div>
        </div>
      ) : (
        <div>
          <Slider />
          <div className="layout-container mb-[150px]">
            <h1 className="text-[22px]">ĐIỆN THOẠI NỔI BẬT NHẤT</h1>
            <div className="mt-[11px] grid grid-cols-5 gap-x-6 gap-y-[100px]">
              <Products products={products} />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default HomePage;
