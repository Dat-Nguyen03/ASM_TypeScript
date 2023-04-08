import { useEffect, useState } from "react";
import Description from "../components/description";
import Feature from "../components/feature";
import ProductInfo from "../components/productInfo";
import { useParams } from "react-router-dom";
import { IProduct } from "../interfaces/product";
import { getOneProduct } from "../api/product";

const DetailPage = () => {
  // console.log(useParams());
  const { id } = useParams();

  const [product, setProduct] = useState<IProduct>({} as IProduct);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  useEffect(() => {
    (async () => {
      try {
        setIsLoading(true);
        if (id) {
          const { data } = await getOneProduct(id);
          setProduct(data);
          setIsLoading(false);
        }
      } catch (error) {
        console.log(error);
      }
    })();
  }, []);

  return (
    <div className="w-[80%] mx-auto mb-[228px]">
      {isLoading ? (
        <div className="loader-container flex items-center justify-center h-[100vh] ">
          <div className="spinner loading animation"></div>
        </div>
      ) : (
        <>
          <ProductInfo product={product} />
          <Feature feature={product.specifications} />
          <Description description={product.description} />
        </>
      )}
    </div>
  );
};

export default DetailPage;
