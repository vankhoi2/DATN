// "use client";
// import React, { useState } from "react";
// import HeartButton from "./HeartButton";

// const ProductTabs = () => {
//   // Tab sản phẩm mới/bán chạy
//   const [tab, setTab] = useState<"new" | "hot">("new");
//   // Tab áo thun/polo
//   const [tabAo, setTabAo] = useState<"aothun" | "aopolo">("aothun");
//   // Tab quần short/jean
//   const [tabQuan, setTabQuan] = useState<"quanshort" | "quanjean">("quanshort");

//   return (
//     <>
//       {/* Tabs sản phẩm mới/bán chạy */}
//       <div className="product-tabs">
//         <div id="tab-new" className={`tab-item left-icon ${tab === "new" ? "active" : ""}`} onClick={() => setTab("new")}>
//           <div className="tab-line"></div>
//           <div className="tab-icon"></div>
//           <span className="tab-label">SẢN PHẨM MỚI</span>
//         </div>
//         <span style={{ padding: "0px 0px 10px 0px" }}> |</span>
//         <div id="tab-hot" className={`tab-item right-icon ${tab === "hot" ? "active" : ""}`} onClick={() => setTab("hot")}>
//           <span className="tab-label">SẢN PHẨM BÁN CHẠY</span>
//           <div className="tab-icon"></div>
//           <div className="tab-line"></div>
//         </div>
//       </div>

//       {/* Nội dung hai tab */}
//       <div id="box-new" className={`product-box ${tab === "new" ? "" : "hidden"}`}>
//         {/* Bạn thêm sản phẩm mới ở đây */}
//         <div className="row-3">
//           <div className="col-5-sp">
//             <div className="img-sp"><img src="/images/sp2.jpg" alt="" /></div>
//             <div className="text-sp">
//               <div className="left-sp">
//                 <p className="name-sp">Áo thun Friends Tee</p>
//                 <p style={{ color: "#cd1919", fontSize: 16, fontWeight: 550, marginBottom: 7 }}>119.000₫ <del style={{ color: "#979797", fontSize: 14 }}>139.000 ₫</del></p>
//                 <a href="">Mua ngay</a>
//               </div>
//               <div className="right-sp">
//                 <HeartButton />
//                 <button><i className="fa-solid fa-cart-plus"></i></button>
//               </div>
//             </div>
//           </div>
//           {/* ...thêm các sản phẩm khác */}
//         </div>
//       </div>
//       <div id="box-hot" className={`product-box ${tab === "hot" ? "" : "hidden"}`}>
//         {/* Bạn thêm sản phẩm bán chạy ở đây */}
//       </div>

//       {/* Tab áo thun/polo */}
//       <div className="tabs">
//         <span id="tab-aothun" className={tabAo === "aothun" ? "active" : ""} onClick={() => setTabAo("aothun")}>Áo thun</span>
//         <span id="tab-aopolo" className={tabAo === "aopolo" ? "active" : ""} onClick={() => setTabAo("aopolo")}>Áo polo</span>
//       </div>
//       <div className={`product-box ${tabAo === "aothun" ? "" : "hidden"}`} id="box-aothun">
//         {/* ... */}
//       </div>
//       <div className={`product-box ${tabAo === "aopolo" ? "" : "hidden"}`} id="box-aopolo">
//         {/* ... */}
//       </div>

//       {/* Tab quần short/jean */}
//       <div className="tabs">
//         <span id="tab-quanshort" className={tabQuan === "quanshort" ? "active" : ""} onClick={() => setTabQuan("quanshort")}>Quần Short</span>
//         <span id="tab-quanjean" className={tabQuan === "quanjean" ? "active" : ""} onClick={() => setTabQuan("quanjean")}>Quần Jean</span>
//       </div>
//       <div className={`product-box ${tabQuan === "quanshort" ? "" : "hidden"}`} id="box-quanshort">
//         {/* ... */}
//       </div>
//       <div className={`product-box ${tabQuan === "quanjean" ? "" : "hidden"}`} id="box-quanjean">
//         {/* ... */}
//       </div>
//     </>
//   );
// };
// export default ProductTabs;
