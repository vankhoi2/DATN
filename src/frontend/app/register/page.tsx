'use client';

import React from 'react';
import Link from 'next/link';
import './register.css';

const RegisterPage = () => {
  return (
    <section className="auth-container">
      {/* Cột bên trái: Form đăng ký */}
      <div className="form-left">
        <h2>ĐĂNG KÝ TÀI KHOẢN</h2>
        <form>
          <input type="text" placeholder="Họ và tên" required />
          <input type="email" placeholder="Email" required />
          <input type="tel" placeholder="Số điện thoại" required />
          <input type="password" placeholder="Mật khẩu" required />
          <input type="password" placeholder="Nhập lại mật khẩu" required />
          <button type="submit">Đăng Ký</button>
        </form>

        <div className="social-login">
          <button className="facebook-btn">
            <i className="fab fa-facebook-f" /> Facebook
          </button>
          <button className="google-btn">
            <i className="fab fa-google" /> Google
          </button>
        </div>
      </div>

      {/* Cột bên phải: Lời chào + quay về đăng nhập */}
      <div className="form-right">
        <h2>CHÀO MỪNG TRỞ LẠI !</h2>
        <p>Nhập thông tin cá nhân của bạn để sử dụng tất cả các tính năng của trang web</p>
        <Link href="/login">
          <button>Đăng Nhập</button>
        </Link>
      </div>
    </section>
  );
};

export default RegisterPage;
