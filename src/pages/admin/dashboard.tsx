import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { IProduct } from "../../interfaces/product";
import { getAllProducts, removeProduct } from "../../api/product";

const DashBoard = () => {
  const [products, setProducts] = useState<IProduct[]>([]);
  useEffect(() => {
    (async () => {
      const { data } = await getAllProducts();
      setProducts(data);
    })();
  }, []);
  // console.log(products);

  const onHandleRemove = async (id: number | string) => {
    try {
      const isConfirm = confirm("Are you sure?");
      if (isConfirm) {
        await removeProduct(id);
        const newProducts = products.filter((item) => item.id !== id);
        setProducts(newProducts);
      }
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
      <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              #
            </th>
            <th scope="col" className="px-6 py-3">
              Product name
            </th>
            <th scope="col" className="px-6 py-3">
              Product image
            </th>
            <th scope="col" className="px-6 py-3">
              Price
            </th>
            <th scope="col" className="px-6 py-3">
              Original Price
            </th>
            <th scope="col" className="px-6 py-3">
              Brand
            </th>
            <th scope="col" className="px-6 py-3">
              Description
            </th>
            <th scope="col" className="px-6 py-3">
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr
              key={index}
              className="bg-white border-b dark:bg-gray-900 dark:border-gray-700"
            >
              <th
                scope="row"
                className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
              >
                {index + 1}
              </th>
              <td className="px-6 py-4">{item.name}</td>
              <td className="px-6 py-4">
                <img src={item.images[0].base_url} alt="" />
              </td>
              <td className="px-6 py-4">
                {Number(item.price).toLocaleString()}đ
              </td>
              <td className="px-6 py-4">
                {Number(item.original_price).toLocaleString()}đ
              </td>
              <td className="px-6 py-4">{item.brand}</td>
              <td className="px-6 py-4 w-[300px] break-word">
                {item.description}
              </td>
              <td className="px-6 py-4">
                <Link
                  to={`/admin/product/update/${item.id}`}
                  className="font-medium bg-green-400 px-4 py-2 text-white block text-center mb-4"
                >
                  Edit
                </Link>
                <button
                  onClick={() => onHandleRemove(item.id)}
                  className="font-medium bg-red-500 px-4 py-2 text-white "
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashBoard;
