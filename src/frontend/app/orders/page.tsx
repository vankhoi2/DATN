'use client';

import React from 'react';
import Link from 'next/link';
import './orders.css';

const OrdersPage = () => {
  return (
    <>
      {/* BREADCRUMB */}
      <div className="breadcrumb-wrapper">
        <div className="breadcrumb">
          <Link href="/">Trang chủ</Link> / Đơn hàng của bạn
        </div>
      </div>

      {/* ACCOUNT CONTENT */}
      <main className="account-container">
        <div className="account-wrapper">
          {/* Sidebar */}
          <aside className="account-sidebar">
            <h3>Trang tài khoản</h3>
            <p>
              Xin chào, <strong style={{ color: 'red' }}>Tuấn Võ!</strong>
            </p>
            <ul>
              <li>
                <Link href="/account">Thông tin tài khoản</Link>
              </li>
              <li>
                <Link className="active" href="/orders">Đơn hàng của bạn</Link>
              </li>
              <li>
                <Link href="/changepassword">Đổi mật khẩu</Link>
              </li>
              <li>
                <Link href="/address">Địa chỉ</Link>
              </li>
            </ul>
          </aside>

          {/* Danh sách đơn hàng */}
          <section className="account-orders">
            <h2>Đơn hàng của bạn</h2>
            <table className="orders-table">
              <thead>
                <tr>
                  <th>Mã đơn hàng</th>
                  <th>Tên sản phẩm</th>
                  <th>Ảnh</th>
                  <th>Ngày đặt</th>
                  <th>Giá trị</th>
                  <th>Trạng thái</th>
                  <th>Chi tiết</th>
                  <th>Hành động</th>
                </tr>
              </thead>
              <tbody>
                  {Array.from({ length: 7 }, (_, i) => (
                    <tr key={i}>
                      <td>#DH00{i + 1}</td>
                      <td>Áo {String.fromCharCode(65 + i)}</td>
                      <td><img src="/images/login-bg.jpg" alt="product" /></td>
                      <td>{`01/0${i + 1}/2025`}</td>
                      <td>119.000 VNĐ</td>
                      <td className="status done">Đã hoàn thành</td>
                      <td className="view-detail"><Link href="/orderdetail">Xem chi tiết</Link></td>
                      <td className="action">
                        <span className="review">Đánh giá</span> | <span className="buy-again">Mua lại</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            <div className="pagination" />
          </section>
        </div>
      </main>
    </>
  );
};

export default OrdersPage;
