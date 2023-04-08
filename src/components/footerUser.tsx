type Props = {};

const FooterUser = (props: Props) => {
  return (
    <footer className="bg-white">
      <div className="layout-container w-[80%] mx-auto">
        <div className="footer-top flex gap-x-[60px]">
          <div className="footer-item flex flex-col w-[400px] gap-y-[5px]">
            <h2 className="text-[16px]">Tìm cửa hàng</h2>
            <span className="text-[12px]">Tìm cửa hàng gần nhất</span>
            <span className="text-[12px]">Mua hàng từ xa</span>
            <span className="text-[12px] text-[#FF0000]">
              Gặp trực tiếp cửa hàng gần nhất (Zalo hoặc gọi điện)
            </span>
            <h2>Phương thức thanh toán</h2>
            <div className="payment mt-[18px] flex flex-wrap gap-4">
              <img src="/citi.png" alt="" className="object-contain" />
              <img src="/moca.png" alt="" className="object-contain" />
              <img src="/redivo.png" alt="" className="object-contain" />
              <img src="/vnpay.png" alt="" className="object-contain" />
              <img src="/vpbank.png" alt="" className="object-contain" />
            </div>
          </div>
          <div className="footer-item flex flex-col w-[400px] gap-y-[5px]">
            <span className="text-[12px]">
              Gọi mua hàng: 1800.2044 (8h00 - 22h00)
            </span>
            <span className="text-[12px]">
              Gọi khiếu nại: 1800.2063 (8h00 - 21h30)
            </span>
            <span className="text-[12px]">
              Gọi bảo hành: 1800.2064 (8h00 - 21h00)
            </span>
            <div className="mt-[15px]">
              <h2 className="text-[16px]">Đối tác dịch vụ bảo hành</h2>
              <span className="text-[12px]">Điện Thoại - Máy tính</span>
              <h2 className="text-[16px] mt-[18px] mb-[5px]">
                Trung tâm bảo hành uỷ quyền Apple
              </h2>
              <img
                src="/dienthoaivui.png"
                alt=""
                className="w-[216px] h-10 max-w-[216px]"
              />
            </div>
          </div>
          <div className="footer-item flex flex-col w-[400px] gap-y-[5px]">
            <span className="text-[12px]">Mua hàng và thanh toán Online</span>
            <span className="text-[12px]">Mua hàng trả góp Online</span>
            <span className="text-[12px]">Tra thông tin đơn hàng</span>
            <span className="text-[12px]">Tra điểm Smember</span>
            <span className="text-[12px]">Tra thông tin bảo hành</span>
            <span className="text-[12px]">Tra cứu hoá đơn VAT điện tử</span>
            <span className="text-[12px]">Trung tâm bảo hành chính hãng</span>
            <span className="text-[12px]">
              Quy định về việc sao lưu dữ liệu
            </span>
            <span className="text-[12px] text-[#D70018]">
              Dịch vụ bảo hành điện thoại
            </span>
          </div>
          <div className="footer-item flex flex-col w-[400px] gap-y-[5px]">
            <span className="text-[12px]">Quy chế hoạt động</span>
            <span className="text-[12px]">Chính sách Bảo hành</span>
            <span className="text-[12px]">Liên hệ hợp tác kinh doanh</span>
            <span className="text-[12px]">Khách hàng doanh nghiệp (B2B)</span>
            <span className="text-[12px] text-[#D70018]">
              Ưu đãi thanh toán
            </span>
            <span className="text-[12px]">Tuyển dụng</span>
          </div>
        </div>
      </div>
      <div className="layout-container bg-[#F8F8F8] mt-[60px] pt-[15px] pb-[60px]">
        <div className="footer-bottom mt-[60px] w-[80%] mx-auto flex items-center gap-x-[60px]">
          <div className="footer-item flex flex-col gap-y-[10px]">
            <span className="text-[12px]">
              Điện thoại iPhone 13 Điện thoại iPhone 12 Điện thoại iPhone 11
            </span>
            <span className="text-[12px]">
              Điện thoại iPhone 13 Pro Max - Điện thoại iPhone 11 Pro Max
            </span>
            <span className="text-[12px]">
              iPhone cũ giá rẻ - iPhone 13 cũ - iPhone 12 cũ - iPhone 11 cũ
            </span>
          </div>
          <div className="footer-item flex flex-col gap-y-[10px]">
            <span className="text-[12px]">
              Điện thoại iPhone Điện thoại Samsung Điện thoại Samsung A
            </span>
            <span className="text-[12px]">
              Điện thoại OPPO - Điện thoại Xiaomi - Điện thoại Vivo - Điện thoại
              Nokia
            </span>
            <span className="text-[12px]">
              Samsung Fold 3 - Samsung S22 - Samsung A73 - Samsung A53
            </span>
          </div>
          <div className="footer-item flex flex-col gap-y-[10px]">
            <span className="text-[12px]">
              Laptop Laptop HP Laptop Dell Laptop Acer
            </span>
            <span className="text-[12px]">
              Microsoft Surface - Laptop Lenovo - Laptop Asus
            </span>
            <span className="text-[12px]">
              Máy tính để bàn - Màn hình máy tính - Camera - Camera hành trình
            </span>
          </div>
        </div>
        <div className="footer-address w-[80%] mx-auto mt-[20px]">
          <p className="text-[10px] text-[rgba(0, 0, 0, 0.5)] text-center">
            Công ty TNHH Thương mại và dịch vụ kỹ thuật DIỆU PHÚC - GPĐKKD:
            0316172372 do sở KH & ĐT TP. HCM cấp ngày 02/03/2020. Địa chỉ:
            350-352 Võ Văn Kiệt, Phường Cô Giang, Quận 1, Thành phố Hồ Chí Minh,
            Việt Nam. Điện thoại: 028.7108.9666.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default FooterUser;
