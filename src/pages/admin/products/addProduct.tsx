import { useNavigate } from "react-router-dom";
import axios from "axios";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { ProductForm, productSchema } from "../../../interfaces/schemas";
import { addProduct } from "../../../api/product";
import { IProduct } from "../../../interfaces/product";

const AddProduct = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ProductForm>({
    resolver: yupResolver(productSchema),
  });

  const onHandleSubmit = async (data: any) => {
    const url_image = await upLoadFile(data.image[0]);
    const productObj = {
      ...data,
      images: [
        {
          base_url: `${url_image}`,
          is_gallery: true,
          label: null,
          large_url:
            "https://salt.tikicdn.com/cache/w1200/ts/product/43/35/ca/4630727d5a4eee189dc3dacae0bf39d7.jpg",
          medium_url:
            "https://salt.tikicdn.com/cache/w300/ts/product/43/35/ca/4630727d5a4eee189dc3dacae0bf39d7.jpg",
          position: null,
          small_url:
            "https://salt.tikicdn.com/cache/200x280/ts/product/43/35/ca/4630727d5a4eee189dc3dacae0bf39d7.jpg",
          thumbnail_url:
            "https://salt.tikicdn.com/cache/200x280/ts/product/43/35/ca/4630727d5a4eee189dc3dacae0bf39d7.jpg",
        },
        {
          base_url: `${url_image}`,
          is_gallery: true,
          label: null,
          large_url:
            "https://salt.tikicdn.com/cache/w1200/ts/product/6e/44/b5/04d9e0950060436a08e391205e25ea4c.png",
          medium_url:
            "https://salt.tikicdn.com/cache/w300/ts/product/6e/44/b5/04d9e0950060436a08e391205e25ea4c.png",
          position: null,
          small_url:
            "https://salt.tikicdn.com/cache/200x280/ts/product/6e/44/b5/04d9e0950060436a08e391205e25ea4c.png",
          thumbnail_url:
            "https://salt.tikicdn.com/cache/200x280/ts/product/6e/44/b5/04d9e0950060436a08e391205e25ea4c.png",
        },
      ],
      specifications: [
        {
          name: "Content",
          attributes: [
            {
              code: "battery_capacity",
              name: "Dung lượng pin",
              value: "5000 mAh",
            },
            {
              code: "bluetooth",
              name: "Bluetooth",
              value: "v5.3",
            },
            {
              code: "brand",
              name: "Thương hiệu",
              value: "Samsung",
            },
            {
              code: "brand_country",
              name: "Xuất xứ thương hiệu",
              value: "Hàn Quốc",
            },
            {
              code: "camera_sau",
              name: "Camera sau",
              value: "Chính 200 MP & Phụ 12 MP, 10 MP, 10 MP",
            },
            {
              code: "camera_truoc",
              name: "Camera trước",
              value: "12 MP",
            },
            {
              code: "cart_slot",
              name: "Hỗ trợ thẻ nhớ ngoài",
              value: "Không",
            },
            {
              code: "chip_do_hoa",
              name: "Chip đồ họa (GPU)",
              value: "Adreno 740",
            },
            {
              code: "chip_set",
              name: "Chip set",
              value: "Snapdragon 8 Gen 2 8 nhân",
            },
            {
              code: "chuc_nang_khac",
              name: "Chức năng khác",
              value: "Sạc siêu nhanh 2.0 45W, Chia sẻ pin không dây",
            },
            {
              code: "connect_nfc",
              name: "NFC",
              value: "Có",
            },
            {
              code: "cpu_speed",
              name: "Tốc độ CPU",
              value: "1 nhân 3.36 GHz, 4 nhân 2.8 GHz & 3 nhân 2 GHz",
            },
            {
              code: "den_flash",
              name: "Đèn Flash",
              value: "Có",
            },
            {
              code: "dimensions",
              name: "Kích thước",
              value: "Dài 163.4 mm - Ngang 78.1 mm - Dày 8.9 mm",
            },
            {
              code: "display_type",
              name: "Loại/ Công nghệ màn hình",
              value: "Infinity-O, Dynamic AMOLED 2X (1~120Hz)",
            },
            {
              code: "gps",
              name: "GPS",
              value: "GPS\n-\nGLONASS\n-\nGALILEO\n-\nBEIDOU",
            },
            {
              code: "ho_tro_4g",
              name: "Hỗ trợ 4G",
              value: "Có",
            },
            {
              code: "ho_tro_5g",
              name: "Hỗ trợ 5G",
              value: "Có",
            },
            {
              code: "included_accessories",
              name: "Phụ kiện đi kèm",
              value: "Cáp Type C, Cây lấy sim, Hộp, Sách hướng dẫn",
            },
            {
              code: "item_model_number",
              name: "Model",
              value: "Galaxy S23 Ultra 5G",
            },
            {
              code: "jack_headphone",
              name: "Jack tai nghe",
              value: "Type-C",
            },
            {
              code: "khe_sim",
              name: "Số sim",
              value: "2",
            },
            {
              code: "loai_pin",
              name: "Loại pin",
              value: "Li-Ion",
            },
            {
              code: "loai_sim",
              name: "Loại Sim",
              value: "2 Nano SIM hoặc 1 Nano SIM + 1 eSIM",
            },
            {
              code: "material",
              name: "Chất liệu",
              value: "Khung nhôm & Mặt lưng kính cường lực",
            },
            {
              code: "nghe_nhac",
              name: "Nghe nhạc",
              value: "WAV\n-\nAAC\n-\nOGG\n-\nMP3\n-\nAMR\n-\nMidi\n-\nM4A",
            },
            {
              code: "origin",
              name: "Xuất xứ",
              value: "Việt Nam",
            },
            {
              code: "pin_co_the_thao_roi",
              name: "Pin có thể tháo rời",
              value: "Pin liền thân máy",
            },
            {
              code: "port_sac",
              name: "Cổng sạc",
              value: "Type-C",
            },
            {
              code: "product_weight",
              name: "Trọng lượng sản phẩm",
              value: "223 g",
            },
            {
              code: "quay_phim",
              name: "Quay phim",
              value:
                "FullHD 1080p@240fps\n-\nFullHD 1080p@60fps\n-\nFullHD 1080p@30fps\n-\n4K 2160p@30fps\n-\n4K 2160p@60fps\n-\n8K 4320p@30fps\n-\nHD 720p@960fps",
            },
            {
              code: "ram",
              name: "RAM",
              value: "8GB",
            },
            {
              code: "resolution",
              name: "Độ phân giải",
              value: " 2K+ (1440 x 3088 Pixels)",
            },
            {
              code: "rom",
              name: "ROM",
              value: "256GB",
            },
            {
              code: "screen_size",
              name: "Kích thước màn hình",
              value: "6.8 inch",
            },
            {
              code: "tinh_nang_camera",
              name: "Tính năng camera",
              value:
                "Quay Siêu chậm (Super Slow Motion)\n-\nChuyên nghiệp (Pro)\n-\nTự động lấy nét (AF)\n-\nHDR\n-\nToàn cảnh (Panorama)\n-\nẢnh Raw\n-\nBan đêm (Night Mode)\n-\nZoom quang học\n-\nLàm đẹp\n-\nLive Photo\n-\nBộ lọc màu\n-\nTrôi nhanh thời gian (Time Lapse)\n-\nGóc siêu rộng (Ultrawide)\n-\nGóc rộng (Wide)\n-\nQuay chậm (Slow Motion)\n-\nXóa phông\n-\nZoom kỹ thuật số\n-\nChống rung quang học (OIS)",
            },
            {
              code: "video_call",
              name: "Video call",
              value: "Gọi qua ứng dụng Zalo, Messenger,…",
            },
            {
              code: "wifi",
              name: "Wifi",
              value:
                "Wi-Fi Direct\n-\nDual-band (2.4 GHz/5 GHz)\n-\nWi-Fi 802.11 a/b/g/n/ac/ax\n-\n6 GHz",
            },
            {
              code: "xem_phim",
              name: "Xem phim",
              value: "MP4\n-\n3GP\n-\nAVI\n-\nMKV\n-\nFLV",
            },
          ],
        },
        {
          name: "Operation",
          attributes: [
            {
              code: "vat_taxable",
              name: "Có thuế VAT",
              value: "Có",
            },
          ],
        },
      ],
    };
    await addProduct(productObj);
    // const file = data.image;
    // console.log(file.name);
    // console.log(file.type);
    // console.log(file.size);
    console.log(data.image[0]);

    navigate("/admin/dashboard");
  };

  const upLoadFile = async (file: File) => {
    const CLOUD_NAME = "deopy6zgw";
    const PRESET_NAME = "upload-img";
    const FOLDER_NAME = "Typescript";

    const api = `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`;
    const formData = new FormData();
    formData.append("upload_preset", PRESET_NAME);
    formData.append("folder", FOLDER_NAME);
    formData.append("file", file);
    const response = await axios.post(api, formData, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
    const {
      data: { secure_url },
    } = response;
    return secure_url;
  };

  return (
    <form onSubmit={handleSubmit(onHandleSubmit)}>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="text"
          {...register("name")}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <span className="text-red-500 text-sm block my-2">
          {errors.name && errors.name.message}
        </span>
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Product Name
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <input
          type="file"
          {...register("image")}
          className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
          placeholder=" "
        />
        <span className="text-red-500 text-sm block my-2"></span>
        <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
          Image
        </label>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <label
          htmlFor="countries"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Select an option
        </label>
        <select
          id="countries"
          {...register("brand")}
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        >
          <option value="">Choose a brand</option>
          <option value="Samsung">Samsung</option>
          <option value="Apple">Apple</option>
        </select>
        <span className="text-red-500 text-sm block my-2">
          {errors.brand && errors.brand.message}
        </span>
      </div>
      <div className="grid md:grid-cols-2 md:gap-6">
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="number"
            {...register("price")}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <span className="text-red-500 text-sm block my-2">
            {errors.price && errors.price.message}
          </span>
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Price
          </label>
        </div>
        <div className="relative z-0 w-full mb-6 group">
          <input
            type="number"
            {...register("original_price")}
            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
            placeholder=" "
          />
          <span className="text-red-500 text-sm block my-2">
            {errors.original_price && errors.original_price.message}
          </span>
          <label className="peer-focus:font-medium absolute text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
            Original Price
          </label>
        </div>
      </div>
      <div className="relative z-0 w-full mb-6 group">
        <label
          htmlFor="message"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
        >
          Description
        </label>
        <textarea
          id="message"
          {...register("description")}
          className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
          placeholder="Write here..."
          rows={10}
        ></textarea>
        <span className="text-red-500 text-sm block my-2">
          {errors.description && errors.description.message}
        </span>
      </div>

      <button
        type="submit"
        className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Submit
      </button>
    </form>
  );
};

export default AddProduct;
