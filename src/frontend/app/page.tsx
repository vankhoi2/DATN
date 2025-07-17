"use client";

import "./trangchu.css";
import BannerSlider from "../components/ui/BannerSlider";
import CategoryCarousel from "../components/ui/CategoryCarousel";
import HeartLikeBtn from "../components/ui/HeartLikeBtn";

export default function Home() {
  return (
    <>
  <BannerSlider />
  <main>
    <div className="row-1 mgtb-10">
      <div className="col-4">
        <div className="icon-ship">
          <img src="images/icon-ship1.webp" alt="" />
        </div>
        <div className="text-ship">
          <p>Miễn phí vận chuyển</p>
          <span style={{ fontSize: 15, fontWeight: 400 }}>
            Đơn hàng từ 250k
          </span>
        </div>
      </div>
      <div className="col-4">
        <div className="icon-ship">
          <img src="images/icon-ship2.webp" alt="" />
        </div>
        <div className="text-ship">
          <p>Miễn phí vận chuyển</p>
          <span style={{ fontSize: 15, fontWeight: 400 }}>
            Đơn hàng từ 250k
          </span>
        </div>
      </div>
      <div className="col-4">
        <div className="icon-ship">
          <img src="images/icon-ship3.webp" alt="" />
        </div>
        <div className="text-ship">
          <p>Miễn phí vận chuyển</p>
          <span style={{ fontSize: 15, fontWeight: 400 }}>
            Đơn hàng từ 250k
          </span>
        </div>
      </div>
      <div className="col-4">
        <div className="icon-ship ship" style={{ width: 60, height: 60 }}>
          <i className="fa-solid fa-phone-volume" />
        </div>
        <div className="text-ship">
          <p>Miễn phí vận chuyển</p>
          <span style={{ fontSize: 15, fontWeight: 400 }}>
            Đơn hàng từ 250k
          </span>
        </div>
      </div>
    </div>

    <h1 style={{ textAlign: "center", fontSize: 32, margin: 0 }}>
      DANH MỤC SẢN PHẨM
    </h1>
    <CategoryCarousel />
    <div className="col-5">
      <div className="voucher">
        <div className="text-voucher">
          <p>VOUCHER</p>
          <p>Tối đa 10k</p>
        </div>
        <h3>Giảm 10%</h3>
        <div className="ma-voucher">
          <p>Nhập mã: MAX10</p>
          <button>
            <a href="">Nhận</a>
          </button>
        </div>
      </div>
      <div className="voucher">
        <div className="text-voucher">
          <p>VOUCHER</p>
          <p>Tối đa 10k</p>
        </div>
        <h3>Giảm 10%</h3>
        <div className="ma-voucher">
          <p>Nhập mã: MAX10</p>
          <button>
            <a href="">Nhận</a>
          </button>
        </div>
      </div>
      <div className="voucher">
        <div className="text-voucher">
          <p>VOUCHER</p>
          <p>Tối đa 10k</p>
        </div>
        <h3>Giảm 10%</h3>
        <div className="ma-voucher">
          <p>Nhập mã: MAX10</p>
          <button>
            <a href="">Nhận</a>
          </button>
        </div>
      </div>
      <div className="voucher">
        <div className="text-voucher">
          <p>VOUCHER</p>
          <p>Tối đa 10k</p>
        </div>
        <h3>Giảm 10%</h3>
        <div className="ma-voucher">
          <p>Nhập mã: MAX10</p>
          <button>
            <a href="">Nhận</a>
          </button>
        </div>
      </div>
      <div className="voucher">
        <div className="text-voucher">
          <p>VOUCHER</p>
          <p>Tối đa 10k</p>
        </div>
        <h3>Giảm 10%</h3>
        <div className="ma-voucher">
          <p>Nhập mã: MAX10</p>
          <button>
            <a href="">Nhận</a>
          </button>
        </div>
      </div>
    </div>
    <section className="sale">
      <div className="title-sale">
        <div className="left-sale">
          <h2>MÙA HÈ, DEAL NÓNG </h2>
          <p>Giảm 8% cho đơn hàng từ 499k</p>
        </div>
        <div className="right-sale">
          <h4>Kết Thúc sau:</h4>
          <div className="time-sale">
            <p style={{ fontSize: 20 }}>12</p>
            <p style={{ fontSize: 14 }}>giờ</p>
          </div>
          <div className="time-sale">
            <p style={{ fontSize: 20 }}>32</p>
            <p style={{ fontSize: 14 }}>phút</p>
          </div>
          <div className="time-sale">
            <p style={{ fontSize: 20 }}>58</p>
            <p style={{ fontSize: 14 }}>giây</p>
          </div>
        </div>
      </div>
      <div className="row-2">
        <div className="col-5-sp">
          <div className="img-sp">
            <img src="images/sp2.jpg" alt="" />
          </div>
          <div className="text-sp">
            <div className="left-sp">
              <p className="name-sp">Áo thun Friends Tee</p>
              <p
                style={{
                  color: "#cd1919",
                  fontSize: 16,
                  fontWeight: 550,
                  marginBottom: 7
                }}
              >
                119.000₫{" "}
                <del style={{ color: "#979797", fontSize: 14 }}>139.000 ₫</del>
              </p>
              <a href="">Mua ngay</a>
            </div>
            <div className="right-sp">
              <button className="heart-btn">
                <i className="fa fa-heart" />
              </button>
              <button>
                <i className="fa-solid fa-cart-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-5-sp">
          <div className="img-sp">
            <img src="images/sp2.jpg" alt="" />
          </div>
          <div className="text-sp">
            <div className="left-sp">
              <p className="name-sp">Áo thun Friends Tee</p>
              <p
                style={{
                  color: "#cd1919",
                  fontSize: 16,
                  fontWeight: 550,
                  marginBottom: 7
                }}
              >
                119.000₫{" "}
                <del style={{ color: "#979797", fontSize: 14 }}>139.000 ₫</del>
              </p>
              <a href="">Mua ngay</a>
            </div>
            <div className="right-sp">
              <button className="heart-btn">
                <i className="fa fa-heart" />
              </button>
              <button>
                <i className="fa-solid fa-cart-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-5-sp">
          <div className="img-sp">
            <img src="images/sp2.jpg" alt="" />
          </div>
          <div className="text-sp">
            <div className="left-sp">
              <p className="name-sp">Áo thun Friends Tee</p>
              <p
                style={{
                  color: "#cd1919",
                  fontSize: 16,
                  fontWeight: 550,
                  marginBottom: 7
                }}
              >
                119.000₫{" "}
                <del style={{ color: "#979797", fontSize: 14 }}>139.000 ₫</del>
              </p>
              <a href="">Mua ngay</a>
            </div>
            <div className="right-sp">
              <button className="heart-btn">
                <i className="fa fa-heart" />
              </button>
              <button>
                <i className="fa-solid fa-cart-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-5-sp">
          <div className="img-sp">
            <img src="images/sp2.jpg" alt="" />
          </div>
          <div className="text-sp">
            <div className="left-sp">
              <p className="name-sp">Áo thun Friends Tee</p>
              <p
                style={{
                  color: "#cd1919",
                  fontSize: 16,
                  fontWeight: 550,
                  marginBottom: 7
                }}
              >
                119.000₫{" "}
                <del style={{ color: "#979797", fontSize: 14 }}>139.000 ₫</del>
              </p>
              <a href="">Mua ngay</a>
            </div>
            <div className="right-sp">
              <button className="heart-btn">
                <i className="fa fa-heart" />
              </button>
              <button>
                <i className="fa-solid fa-cart-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-5-sp">
          <div className="img-sp">
            <img src="images/sp2.jpg" alt="" />
          </div>
          <div className="text-sp">
            <div className="left-sp">
              <p className="name-sp">Áo thun Friends Tee</p>
              <p
                style={{
                  color: "#cd1919",
                  fontSize: 16,
                  fontWeight: 550,
                  marginBottom: 7
                }}
              >
                119.000₫{" "}
                <del style={{ color: "#979797", fontSize: 14 }}>139.000 ₫</del>
              </p>
              <a href="">Mua ngay</a>
            </div>
            <div className="right-sp">
              <button className="heart-btn">
                <i className="fa fa-heart" />
              </button>
              <button>
                <i className="fa-solid fa-cart-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  </main>
  <section className="banner2">
    <img src="images/banner2.png" alt="" />
  </section>
  <div className="product-title">
    <div className="line" />
    <div className="diamond left" />
    <div className="title-text">SẢN PHẨM DÀNH CHO BẠN</div>
    <div className="diamond right" />
    <div className="line" />
  </div>
  <div className="row-3">
  {[1,2,3,4,5].map(num => (
    <div className="col-5-sp" key={num}>
      <div className="img-sp">
        <img src="images/sp2.jpg" alt="" />
      </div>
      <div className="text-sp">
        <div className="left-sp">
          <p className="name-sp">Áo thun Friends Tee</p>
          <p style={{
            color: "#cd1919",
            fontSize: 16,
            fontWeight: 550,
            marginBottom: 7
          }}>
            119.000₫ <del style={{ color: "#979797", fontSize: 14 }}>139.000 ₫</del>
          </p>
          <a href="">Mua ngay</a>
        </div>
        <div className="right-sp">
          <HeartLikeBtn itemKey={"sp" + num} />
          <button>
            <i className="fa-solid fa-cart-plus" />
          </button>
        </div>
      </div>
    </div>
  ))}
</div>
  <div className="new-sp">
    {/* Tabs */}
    <div className="product-tabs">
      <div id="tab-new" className="tab-item active left-icon">
        <div className="tab-line" />
        <div className="tab-icon" />
        <span className="tab-label">SẢN PHẨM MỚI</span>
      </div>
      <span style={{ padding: "0px 0px 10px 0px" }}> |</span>
      <div id="tab-hot" className="tab-item right-icon">
        <span className="tab-label">SẢN PHẨM BÁN CHẠY</span>
        <div className="tab-icon" />
        <div className="tab-line" />
      </div>
    </div>
    {/* Box sản phẩm mới */}
    <div id="box-new" className="product-box">
      <div className="row-3" id="product-new">
        <div className="col-5-sp" id="new-sp1">
          <div className="hangmoi">
            <h1>HÀNG MỚI</h1>
            <a href="">Xem ngay</a>
          </div>
          <img src="images/new-sp.png" alt="" />
        </div>
        <div className="col-5-sp">
          <div className="img-sp">
            <img src="images/sp2.jpg" alt="" />
          </div>
          <div className="text-sp">
            <div className="left-sp">
              <p className="name-sp">Áo thun Friends Tee</p>
              <p
                style={{
                  color: "#cd1919",
                  fontSize: 16,
                  fontWeight: 550,
                  marginBottom: 7
                }}
              >
                119.000₫{" "}
                <del style={{ color: "#979797", fontSize: 14 }}>139.000 ₫</del>
              </p>
              <a href="">Mua ngay</a>
            </div>
            <div className="right-sp">
              <button className="heart-btn">
                <i className="fa fa-heart" />
              </button>
              <button>
                <i className="fa-solid fa-cart-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-5-sp">
          <div className="img-sp">
            <img src="images/sp2.jpg" alt="" />
          </div>
          <div className="text-sp">
            <div className="left-sp">
              <p className="name-sp">Áo thun Friends Tee</p>
              <p
                style={{
                  color: "#cd1919",
                  fontSize: 16,
                  fontWeight: 550,
                  marginBottom: 7
                }}
              >
                119.000₫{" "}
                <del style={{ color: "#979797", fontSize: 14 }}>139.000 ₫</del>
              </p>
              <a href="">Mua ngay</a>
            </div>
            <div className="right-sp">
              <button className="heart-btn">
                <i className="fa fa-heart" />
              </button>
              <button>
                <i className="fa-solid fa-cart-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-5-sp">
          <div className="img-sp">
            <img src="images/sp2.jpg" alt="" />
          </div>
          <div className="text-sp">
            <div className="left-sp">
              <p className="name-sp">Áo thun Friends Tee</p>
              <p
                style={{
                  color: "#cd1919",
                  fontSize: 16,
                  fontWeight: 550,
                  marginBottom: 7
                }}
              >
                119.000₫{" "}
                <del style={{ color: "#979797", fontSize: 14 }}>139.000 ₫</del>
              </p>
              <a href="">Mua ngay</a>
            </div>
            <div className="right-sp">
              <button className="heart-btn">
                <i className="fa fa-heart" />
              </button>
              <button>
                <i className="fa-solid fa-cart-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-5-sp">
          <div className="img-sp">
            <img src="images/sp2.jpg" alt="" />
          </div>
          <div className="text-sp">
            <div className="left-sp">
              <p className="name-sp">Áo thun Friends Tee</p>
              <p
                style={{
                  color: "#cd1919",
                  fontSize: 16,
                  fontWeight: 550,
                  marginBottom: 7
                }}
              >
                119.000₫{" "}
                <del style={{ color: "#979797", fontSize: 14 }}>139.000 ₫</del>
              </p>
              <a href="">Mua ngay</a>
            </div>
            <div className="right-sp">
              <button className="heart-btn">
                <i className="fa fa-heart" />
              </button>
              <button>
                <i className="fa-solid fa-cart-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="product-top">
        <a href="/san-pham-moi" className="view-all-btn">
          Xem tất cả <i className="fa-solid fa-angles-right" />
        </a>
      </div>
    </div>
    {/* Box sản phẩm bán chạy */}
    <div id="box-hot" className="product-box hidden">
      <div className="row-3" id="product-hot">
        <div className="col-5-sp" id="new-sp1">
          <div className="hangmoi">
            <h1>HÀNG BÁN CHẠY</h1>
            <button>
              <a href="">Xem ngay</a>
            </button>
          </div>
          <img src="images/new-sp.png" alt="" />
        </div>
        <div className="col-5-sp">
          <div className="img-sp">
            <img src="images/sp2.jpg" alt="" />
          </div>
          <div className="text-sp">
            <div className="left-sp">
              <p className="name-sp">Áo thun Friends Tee</p>
              <p
                style={{
                  color: "#cd1919",
                  fontSize: 16,
                  fontWeight: 550,
                  marginBottom: 7
                }}
              >
                119.000₫{" "}
                <del style={{ color: "#979797", fontSize: 14 }}>139.000 ₫</del>
              </p>
              <a href="">Mua ngay</a>
            </div>
            <div className="right-sp">
              <button className="heart-btn">
                <i className="fa fa-heart" />
              </button>
              <button>
                <i className="fa-solid fa-cart-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-5-sp">
          <div className="img-sp">
            <img src="images/sp2.jpg" alt="" />
          </div>
          <div className="text-sp">
            <div className="left-sp">
              <p className="name-sp">Áo thun Friends Tee</p>
              <p
                style={{
                  color: "#cd1919",
                  fontSize: 16,
                  fontWeight: 550,
                  marginBottom: 7
                }}
              >
                119.000₫{" "}
                <del style={{ color: "#979797", fontSize: 14 }}>139.000 ₫</del>
              </p>
              <a href="">Mua ngay</a>
            </div>
            <div className="right-sp">
              <button className="heart-btn">
                <i className="fa fa-heart" />
              </button>
              <button>
                <i className="fa-solid fa-cart-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-5-sp">
          <div className="img-sp">
            <img src="images/sp2.jpg" alt="" />
          </div>
          <div className="text-sp">
            <div className="left-sp">
              <p className="name-sp">Áo thun Friends Tee</p>
              <p
                style={{
                  color: "#cd1919",
                  fontSize: 16,
                  fontWeight: 550,
                  marginBottom: 7
                }}
              >
                119.000₫{" "}
                <del style={{ color: "#979797", fontSize: 14 }}>139.000 ₫</del>
              </p>
              <a href="">Mua ngay</a>
            </div>
            <div className="right-sp">
              <button className="heart-btn">
                <i className="fa fa-heart" />
              </button>
              <button>
                <i className="fa-solid fa-cart-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-5-sp">
          <div className="img-sp">
            <img src="images/sp2.jpg" alt="" />
          </div>
          <div className="text-sp">
            <div className="left-sp">
              <p className="name-sp">Áo thun Friends Tee</p>
              <p
                style={{
                  color: "#cd1919",
                  fontSize: 16,
                  fontWeight: 550,
                  marginBottom: 7
                }}
              >
                119.000₫{" "}
                <del style={{ color: "#979797", fontSize: 14 }}>139.000 ₫</del>
              </p>
              <a href="">Mua ngay</a>
            </div>
            <div className="right-sp">
              <button className="heart-btn">
                <i className="fa fa-heart" />
              </button>
              <button>
                <i className="fa-solid fa-cart-plus" />
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="product-top">
        <a href="/san-pham-ban-chay" className="view-all-btn">
          Xem tất cả <i className="fa-solid fa-angles-right" />
        </a>
      </div>
    </div>
  </div>
  <div className="banner-3">
    <img src="images/banner3.png" alt="" />
  </div>
  {/* áo thun */}
  <div className="new-sp">
    <div className="tabs">
      <span id="tab-aothun" className="active">
        Áo thun
      </span>
      <span id="tab-aopolo">Áo polo</span>
    </div>
    <div className="product-box" id="box-aothun">
      <div className="row-3" id="product-hot">
        <div className="col-5-sp">
          <div className="img-sp">
            <img src="images/sp2.jpg" alt="" />
          </div>
          <div className="text-sp">
            <div className="left-sp">
              <p className="name-sp">Áo thun Friends Tee</p>
              <p
                style={{
                  color: "#cd1919",
                  fontSize: 16,
                  fontWeight: 550,
                  marginBottom: 7
                }}
              >
                119.000₫{" "}
                <del style={{ color: "#979797", fontSize: 14 }}>139.000 ₫</del>
              </p>
              <a href="">Mua ngay</a>
            </div>
            <div className="right-sp">
              <button className="heart-btn">
                <i className="fa fa-heart" />
              </button>
              <button>
                <i className="fa-solid fa-cart-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-5-sp">
          <div className="img-sp">
            <img src="images/sp2.jpg" alt="" />
          </div>
          <div className="text-sp">
            <div className="left-sp">
              <p className="name-sp">Áo thun Friends Tee</p>
              <p
                style={{
                  color: "#cd1919",
                  fontSize: 16,
                  fontWeight: 550,
                  marginBottom: 7
                }}
              >
                119.000₫{" "}
                <del style={{ color: "#979797", fontSize: 14 }}>139.000 ₫</del>
              </p>
              <a href="">Mua ngay</a>
            </div>
            <div className="right-sp">
              <button className="heart-btn">
                <i className="fa fa-heart" />
              </button>
              <button>
                <i className="fa-solid fa-cart-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-5-sp">
          <div className="img-sp">
            <img src="images/sp2.jpg" alt="" />
          </div>
          <div className="text-sp">
            <div className="left-sp">
              <p className="name-sp">Áo thun Friends Tee</p>
              <p
                style={{
                  color: "#cd1919",
                  fontSize: 16,
                  fontWeight: 550,
                  marginBottom: 7
                }}
              >
                119.000₫{" "}
                <del style={{ color: "#979797", fontSize: 14 }}>139.000 ₫</del>
              </p>
              <a href="">Mua ngay</a>
            </div>
            <div className="right-sp">
              <button className="heart-btn">
                <i className="fa fa-heart" />
              </button>
              <button>
                <i className="fa-solid fa-cart-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-5-sp">
          <div className="img-sp">
            <img src="images/sp2.jpg" alt="" />
          </div>
          <div className="text-sp">
            <div className="left-sp">
              <p className="name-sp">Áo thun Friends Tee</p>
              <p
                style={{
                  color: "#cd1919",
                  fontSize: 16,
                  fontWeight: 550,
                  marginBottom: 7
                }}
              >
                119.000₫{" "}
                <del style={{ color: "#979797", fontSize: 14 }}>139.000 ₫</del>
              </p>
              <a href="">Mua ngay</a>
            </div>
            <div className="right-sp">
              <button className="heart-btn">
                <i className="fa fa-heart" />
              </button>
              <button>
                <i className="fa-solid fa-cart-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-5-sp" id="new-sp1">
          <div className="hangmoi">
            <h1>ÁO THUN</h1>
            <button>
              <a href="">Xem ngay</a>
            </button>
          </div>
          <img src="images/banner-aothun.png" alt="" />
        </div>
      </div>
    </div>
    {/* áo polo */}
    <div className="product-box hidden" id="box-aopolo">
      <div className="row-3" id="product-hot">
        <div className="col-5-sp">
          <div className="img-sp">
            <img src="images/sp2.jpg" alt="" />
          </div>
          <div className="text-sp">
            <div className="left-sp">
              <p className="name-sp">Áo thun Friends Tee</p>
              <p
                style={{
                  color: "#cd1919",
                  fontSize: 16,
                  fontWeight: 550,
                  marginBottom: 7
                }}
              >
                119.000₫{" "}
                <del style={{ color: "#979797", fontSize: 14 }}>139.000 ₫</del>
              </p>
              <a href="">Mua ngay</a>
            </div>
            <div className="right-sp">
              <button className="heart-btn">
                <i className="fa fa-heart" />
              </button>
              <button>
                <i className="fa-solid fa-cart-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-5-sp">
          <div className="img-sp">
            <img src="images/sp2.jpg" alt="" />
          </div>
          <div className="text-sp">
            <div className="left-sp">
              <p className="name-sp">Áo thun Friends Tee</p>
              <p
                style={{
                  color: "#cd1919",
                  fontSize: 16,
                  fontWeight: 550,
                  marginBottom: 7
                }}
              >
                119.000₫{" "}
                <del style={{ color: "#979797", fontSize: 14 }}>139.000 ₫</del>
              </p>
              <a href="">Mua ngay</a>
            </div>
            <div className="right-sp">
              <button className="heart-btn">
                <i className="fa fa-heart" />
              </button>
              <button>
                <i className="fa-solid fa-cart-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-5-sp">
          <div className="img-sp">
            <img src="images/sp2.jpg" alt="" />
          </div>
          <div className="text-sp">
            <div className="left-sp">
              <p className="name-sp">Áo thun Friends Tee</p>
              <p
                style={{
                  color: "#cd1919",
                  fontSize: 16,
                  fontWeight: 550,
                  marginBottom: 7
                }}
              >
                119.000₫{" "}
                <del style={{ color: "#979797", fontSize: 14 }}>139.000 ₫</del>
              </p>
              <a href="">Mua ngay</a>
            </div>
            <div className="right-sp">
              <button className="heart-btn">
                <i className="fa fa-heart" />
              </button>
              <button>
                <i className="fa-solid fa-cart-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-5-sp">
          <div className="img-sp">
            <img src="images/sp2.jpg" alt="" />
          </div>
          <div className="text-sp">
            <div className="left-sp">
              <p className="name-sp">Áo thun Friends Tee</p>
              <p
                style={{
                  color: "#cd1919",
                  fontSize: 16,
                  fontWeight: 550,
                  marginBottom: 7
                }}
              >
                119.000₫{" "}
                <del style={{ color: "#979797", fontSize: 14 }}>139.000 ₫</del>
              </p>
              <a href="">Mua ngay</a>
            </div>
            <div className="right-sp">
              <button className="heart-btn">
                <i className="fa fa-heart" />
              </button>
              <button>
                <i className="fa-solid fa-cart-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-5-sp" id="new-sp1">
          <div className="hangmoi">
            <h1>ÁO POLO</h1>
            <button>
              <a href="">Xem ngay</a>
            </button>
          </div>
          <img src="images/new-sp.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  {/* quần short */}
  <div className="new-sp">
    <div className="tabs">
      <span id="tab-quanshort" className="active">
        Quần Short
      </span>
      <span id="tab-quanjean">Quần Jean</span>
    </div>
    <div className="product-box" id="box-quanshort">
      <div className="row-3" id="product-hot">
        <div className="col-5-sp">
          <div className="img-sp">
            <img src="images/sp2.jpg" alt="" />
          </div>
          <div className="text-sp">
            <div className="left-sp">
              <p className="name-sp">Áo thun Friends Tee</p>
              <p
                style={{
                  color: "#cd1919",
                  fontSize: 16,
                  fontWeight: 550,
                  marginBottom: 7
                }}
              >
                119.000₫{" "}
                <del style={{ color: "#979797", fontSize: 14 }}>139.000 ₫</del>
              </p>
              <a href="">Mua ngay</a>
            </div>
            <div className="right-sp">
              <button className="heart-btn">
                <i className="fa fa-heart" />
              </button>
              <button>
                <i className="fa-solid fa-cart-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-5-sp">
          <div className="img-sp">
            <img src="images/sp2.jpg" alt="" />
          </div>
          <div className="text-sp">
            <div className="left-sp">
              <p className="name-sp">Áo thun Friends Tee</p>
              <p
                style={{
                  color: "#cd1919",
                  fontSize: 16,
                  fontWeight: 550,
                  marginBottom: 7
                }}
              >
                119.000₫{" "}
                <del style={{ color: "#979797", fontSize: 14 }}>139.000 ₫</del>
              </p>
              <a href="">Mua ngay</a>
            </div>
            <div className="right-sp">
              <button className="heart-btn">
                <i className="fa fa-heart" />
              </button>
              <button>
                <i className="fa-solid fa-cart-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-5-sp">
          <div className="img-sp">
            <img src="images/sp2.jpg" alt="" />
          </div>
          <div className="text-sp">
            <div className="left-sp">
              <p className="name-sp">Áo thun Friends Tee</p>
              <p
                style={{
                  color: "#cd1919",
                  fontSize: 16,
                  fontWeight: 550,
                  marginBottom: 7
                }}
              >
                119.000₫{" "}
                <del style={{ color: "#979797", fontSize: 14 }}>139.000 ₫</del>
              </p>
              <a href="">Mua ngay</a>
            </div>
            <div className="right-sp">
              <button className="heart-btn">
                <i className="fa fa-heart" />
              </button>
              <button>
                <i className="fa-solid fa-cart-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-5-sp">
          <div className="img-sp">
            <img src="images/sp2.jpg" alt="" />
          </div>
          <div className="text-sp">
            <div className="left-sp">
              <p className="name-sp">Áo thun Friends Tee</p>
              <p
                style={{
                  color: "#cd1919",
                  fontSize: 16,
                  fontWeight: 550,
                  marginBottom: 7
                }}
              >
                119.000₫{" "}
                <del style={{ color: "#979797", fontSize: 14 }}>139.000 ₫</del>
              </p>
              <a href="">Mua ngay</a>
            </div>
            <div className="right-sp">
              <button className="heart-btn">
                <i className="fa fa-heart" />
              </button>
              <button>
                <i className="fa-solid fa-cart-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-5-sp" id="new-sp1">
          <div className="hangmoi">
            <h1>ÁO THUN</h1>
            <button>
              <a href="">Xem ngay</a>
            </button>
          </div>
          <img src="images/banner-aothun.png" alt="" />
        </div>
      </div>
    </div>
    {/* quan jean */}
    <div className="product-box hidden" id="box-quanjean">
      <div className="row-3" id="product-hot">
        <div className="col-5-sp">
          <div className="img-sp">
            <img src="images/sp2.jpg" alt="" />
          </div>
          <div className="text-sp">
            <div className="left-sp">
              <p className="name-sp">Áo thun Friends Tee</p>
              <p
                style={{
                  color: "#cd1919",
                  fontSize: 16,
                  fontWeight: 550,
                  marginBottom: 7
                }}
              >
                119.000₫{" "}
                <del style={{ color: "#979797", fontSize: 14 }}>139.000 ₫</del>
              </p>
              <a href="">Mua ngay</a>
            </div>
            <div className="right-sp">
              <button className="heart-btn">
                <i className="fa fa-heart" />
              </button>
              <button>
                <i className="fa-solid fa-cart-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-5-sp">
          <div className="img-sp">
            <img src="images/sp2.jpg" alt="" />
          </div>
          <div className="text-sp">
            <div className="left-sp">
              <p className="name-sp">Áo thun Friends Tee</p>
              <p
                style={{
                  color: "#cd1919",
                  fontSize: 16,
                  fontWeight: 550,
                  marginBottom: 7
                }}
              >
                119.000₫{" "}
                <del style={{ color: "#979797", fontSize: 14 }}>139.000 ₫</del>
              </p>
              <a href="">Mua ngay</a>
            </div>
            <div className="right-sp">
              <button className="heart-btn">
                <i className="fa fa-heart" />
              </button>
              <button>
                <i className="fa-solid fa-cart-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-5-sp">
          <div className="img-sp">
            <img src="images/sp2.jpg" alt="" />
          </div>
          <div className="text-sp">
            <div className="left-sp">
              <p className="name-sp">Áo thun Friends Tee</p>
              <p
                style={{
                  color: "#cd1919",
                  fontSize: 16,
                  fontWeight: 550,
                  marginBottom: 7
                }}
              >
                119.000₫{" "}
                <del style={{ color: "#979797", fontSize: 14 }}>139.000 ₫</del>
              </p>
              <a href="">Mua ngay</a>
            </div>
            <div className="right-sp">
              <button className="heart-btn">
                <i className="fa fa-heart" />
              </button>
              <button>
                <i className="fa-solid fa-cart-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-5-sp">
          <div className="img-sp">
            <img src="images/sp2.jpg" alt="" />
          </div>
          <div className="text-sp">
            <div className="left-sp">
              <p className="name-sp">Áo thun Friends Tee</p>
              <p
                style={{
                  color: "#cd1919",
                  fontSize: 16,
                  fontWeight: 550,
                  marginBottom: 7
                }}
              >
                119.000₫{" "}
                <del style={{ color: "#979797", fontSize: 14 }}>139.000 ₫</del>
              </p>
              <a href="">Mua ngay</a>
            </div>
            <div className="right-sp">
              <button className="heart-btn">
                <i className="fa fa-heart" />
              </button>
              <button>
                <i className="fa-solid fa-cart-plus" />
              </button>
            </div>
          </div>
        </div>
        <div className="col-5-sp" id="new-sp1">
          <div className="hangmoi">
            <h1>ÁO POLO</h1>
            <button>
              <a href="">Xem ngay</a>
            </button>
          </div>
          <img src="images/new-sp.png" alt="" />
        </div>
      </div>
    </div>
  </div>
  <div className="banner-4">
    <img src="images/banner4.png" alt="" />
  </div>
  {/* combo mix */}
  <h1 style={{ fontSize: 30, textAlign: "center", marginTop: 30 }}>
    Combo Mix &amp; Match
  </h1>
  <div className="row-4">
    <div className="col-4">
      <img src="images/combo1.png" alt="" />
    </div>
    <div className="col-4">
      <img src="images/combo2.png" alt="" />
    </div>
    <div className="col-4">
      <img src="images/combo3.png" alt="" />
    </div>
    <div className="col-4">
      <img src="images/combo4.png" alt="" />
    </div>
  </div>
  <div className="blog">
    <hr style={{ width: 1240 }} />
    <h1 style={{ fontSize: 30, textAlign: "center", marginTop: 30 }}>
      Bài viết
    </h1>
    <div className="row-5">
      <div className="col-3">
        <div className="img-title">
          <div className="title">
            <p>Tip</p>
            <div className="title-3">
              <h4 style={{ marginBottom: 5, fontSize: 17 }}>
                MÀU NÀO HẤP THỤ NHIỆT NHIỀU NHẤT ?
              </h4>
              <p style={{ fontSize: 15, marginTop: 5 }}>
                CƠ CHẾ HẤP THỤ NHIỆT CỦA MÀU SẮC
              </p>
            </div>
            <h5 style={{ fontSize: 14 }}>Dravik Store</h5>
          </div>
          <img src="images/title4.webp" alt="" />
        </div>
        <div className="noidung">
          <h4>
            Màu nào hấp thụ nhiệt nhiều nhất? Cơ thể hấp thụ nhiệt của màu sắc
          </h4>
          <p style={{ fontSize: 14, color: "#979797", margin: "10px 0px" }}>
            20/05/2025
          </p>
          <p style={{ fontSize: 16 }}>
            Bạn đã bao giờ thắc mắc vì sao vào mùa hè, mặc áo đen lại khiến bạn
            cảm thấy nóng hơn so với áo trắng? Tất cả đều liên quan đến cách ...
          </p>
        </div>
      </div>
      <div className="col-3">
        <div className="img-title">
          <div className="title">
            <p>Tip</p>
            <div className="title-3">
              <h4 style={{ marginBottom: 5, fontSize: 17 }}>
                MÀU NÀO HẤP THỤ NHIỆT NHIỀU NHẤT ?
              </h4>
              <p style={{ fontSize: 15, marginTop: 5 }}>
                CƠ CHẾ HẤP THỤ NHIỆT CỦA MÀU SẮC
              </p>
            </div>
            <h5 style={{ fontSize: 14 }}>Dravik Store</h5>
          </div>
          <img src="images/title4.webp" alt="" />
        </div>
        <div className="noidung">
          <h4>
            Màu nào hấp thụ nhiệt nhiều nhất? Cơ thể hấp thụ nhiệt của màu sắc
          </h4>
          <p style={{ fontSize: 14, color: "#979797", margin: "10px 0px" }}>
            20/05/2025
          </p>
          <p style={{ fontSize: 16 }}>
            Bạn đã bao giờ thắc mắc vì sao vào mùa hè, mặc áo đen lại khiến bạn
            cảm thấy nóng hơn so với áo trắng? Tất cả đều liên quan đến cách ...
          </p>
        </div>
      </div>
      <div className="col-3">
        <div className="img-title">
          <div className="title">
            <p>Tip</p>
            <div className="title-3">
              <h4 style={{ marginBottom: 5, fontSize: 17 }}>
                MÀU NÀO HẤP THỤ NHIỆT NHIỀU NHẤT ?
              </h4>
              <p style={{ fontSize: 15, marginTop: 5 }}>
                CƠ CHẾ HẤP THỤ NHIỆT CỦA MÀU SẮC
              </p>
            </div>
            <h5 style={{ fontSize: 14 }}>Dravik Store</h5>
          </div>
          <img src="images/title4.webp" alt="" />
        </div>
        <div className="noidung">
          <h4>
            Màu nào hấp thụ nhiệt nhiều nhất? Cơ thể hấp thụ nhiệt của màu sắc
          </h4>
          <p style={{ fontSize: 14, color: "#979797", margin: "10px 0px" }}>
            20/05/2025
          </p>
          <p style={{ fontSize: 16 }}>
            Bạn đã bao giờ thắc mắc vì sao vào mùa hè, mặc áo đen lại khiến bạn
            cảm thấy nóng hơn so với áo trắng? Tất cả đều liên quan đến cách ...
          </p>
        </div>
      </div>
    </div>
  </div>
</>

  );
}
