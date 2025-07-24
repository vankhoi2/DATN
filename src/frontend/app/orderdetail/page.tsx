'use client';

import React from 'react';
import Link from 'next/link';
import './orderdetail.css'; // hoặc đường dẫn đúng với file CSS

const OrderDetailPage = () => {
  return (
    <div className="container">
      <h1>Chi tiết đơn hàng</h1>
      <div className="order-info">
        <p><strong>Mã đơn hàng:</strong> #DH001</p>
        <p><strong>Người nhận:</strong> Võ Tuấn</p>
        <p><strong>Số điện thoại:</strong> 0912345678</p>
        <p><strong>Địa chỉ giao hàng:</strong> 115/47 Lê Đức Thọ, Gò Vấp, TP.HCM</p>
        <p><strong>Ngày đặt hàng:</strong> 01/01/2025</p>
        <p><strong>Phương thức thanh toán:</strong> MoMo</p>
      </div>

      <div className="product-info">
        <h3>Sản phẩm đã đặt</h3>
        <div className="product-box">
          <img src="/images/login-bg.jpg" alt="Áo A" />
          <div>
            <p><strong>Tên sản phẩm:</strong> Áo A</p>
            <p><strong>Số lượng:</strong> 1</p>
            <p><strong>Giá:</strong> 119.000 VNĐ</p>
          </div>
        </div>
      </div>

      <Link className="back-btn" href="/orders">
        <i className="fas fa-arrow-left" /> Quay lại đơn hàng
      </Link>
    </div>
  );
};

export default OrderDetailPage;
