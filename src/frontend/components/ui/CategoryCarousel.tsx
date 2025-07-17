"use client";
import React, { useEffect, useState } from "react";

const categories = [
  { img: "/images/sp2.jpg", label: "Áo thun" },
  { img: "/images/sp2.jpg", label: "Áo Polo" },
  { img: "/images/sp2.jpg", label: "Áo dài tay" },
  { img: "/images/sp2.jpg", label: "Áo Tanktop" },
  { img: "/images/sp2.jpg", label: "Áo Sơ mi" },
  { img: "/images/sp2.jpg", label: "Quần short" },
  { img: "/images/sp2.jpg", label: "Quần Jogger" },
  { img: "/images/sp2.jpg", label: "Quần Legging (nữ)" },
  { img: "/images/sp2.jpg", label: "Quần Biker Short (nữ)" },
];

export default function CategoryCarousel() {
  const [startIdx, setStartIdx] = useState(0);
  const [slidesPerView, setSlidesPerView] = useState(5);

  useEffect(() => {
    function handleResize() {
      const width = window.innerWidth;
      if (width < 480) setSlidesPerView(2);
      else if (width < 768) setSlidesPerView(3);
      else if (width < 1024) setSlidesPerView(8);
      else setSlidesPerView(8); // Để luôn nhỏ hơn tổng danh mục
    }
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Prev: qua trái 1 ô, vòng qua cuối
  const handlePrev = () => {
    setStartIdx((prev) =>
      (prev - 1 + categories.length) % categories.length
    );
  };
  // Next: qua phải 1 ô, vòng lại đầu
  const handleNext = () => {
    setStartIdx((prev) =>
      (prev + 1) % categories.length
    );
  };

  // Hiển thị đúng số lượng slides, lặp vòng qua mảng
  const visibleCategories = [];
  for (let i = 0; i < slidesPerView; i++) {
    visibleCategories.push(categories[(startIdx + i) % categories.length]);
  }

  return (
    <div className="category-full-row">
      <div className="category-nav-wrapper prev-wrapper">
        <div
          className="swiper-button category-swiper-prev"
          onClick={handlePrev}
          style={{ cursor: "pointer" }}
        >
          <i className="fas fa-chevron-left"></i>
        </div>
      </div>
      <div className="main-carousel-area">
        <div className="carousel-content" style={{ display: "flex", gap: "16px" }}>
          {visibleCategories.map((item, idx) => (
            <div className="col-9" key={idx}>
              <div className="img-cate">
                <img src={item.img} alt={item.label} />
              </div>
              <p>{item.label}</p>
            </div>
          ))}
        </div>
      </div>
      <div className="category-nav-wrapper next-wrapper">
        <div
          className="swiper-button category-swiper-next"
          onClick={handleNext}
          style={{ cursor: "pointer" }}
        >
          <i className="fas fa-chevron-right"></i>
        </div>
      </div>
    </div>
  );
}
