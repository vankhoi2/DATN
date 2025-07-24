'use client';

import React, { useRef } from 'react';
import Link from 'next/link';
import './account.css'; // Đảm bảo bạn đã tạo file CSS tương ứng

const AccountPage: React.FC = () => {
  const avatarRef = useRef<HTMLImageElement>(null);

  const previewAvatar = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && avatarRef.current) {
      avatarRef.current.src = URL.createObjectURL(file);
    }
  };

  return (
    <>
      {/* BREADCRUMB */}
      <div className="breadcrumb-wrapper">
        <div className="breadcrumb">
          <Link href="/">Trang chủ</Link> / Trang khách hàng
        </div>
      </div>

      {/* ACCOUNT CONTENT */}
      <main className="account-container">
        <div className="account-wrapper">
          {/* Sidebar */}
          <aside className="account-sidebar">
            <h3>Trang tài khoản</h3>
            <p>Xin chào, <strong style={{ color: 'red' }}>Tuấn Võ!</strong></p>
            <ul>
              <li><Link className="active" href="/account">Thông tin tài khoản</Link></li>
              <li><Link href="/orders">Đơn hàng của bạn</Link></li>
              <li><Link href="/changepassword">Đổi mật khẩu</Link></li>
              <li><Link href="/address">Địa chỉ</Link></li>
            </ul>
          </aside>

          {/* Thông tin tài khoản + Avatar */}
          <section className="account-details">
            <div className="account-info">
              <h2>Thông Tin Tài Khoản</h2>
              <p><strong>Họ tên:</strong> Tuấn Võ</p>
              <p><strong>Email:</strong> tu****@gmail.com</p>
              <p><strong>SDT:</strong> 0944****152</p>
              <p><strong>Địa chỉ:</strong> Khánh Hòa, Ninh Hòa</p>
            </div>

            <div className="avatar-box">
              <img
                ref={avatarRef}
                src="/images/avatar-default.jpg"
                alt="Avatar"
                id="avatarPreview"
              />
              <br />
              <label htmlFor="avatarInput">Chọn ảnh</label>
              <input
                type="file"
                id="avatarInput"
                accept="image/*"
                onChange={previewAvatar}
              />
            </div>
          </section>
        </div>
      </main>
    </>
  );
};

export default AccountPage;
