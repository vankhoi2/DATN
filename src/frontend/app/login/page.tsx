'use client';

import React from 'react';
import Link from 'next/link';
import './login.css';

const LoginPage = () => {
  return (
    <section className="auth-container">
      {/* Cột bên trái: Đăng ký */}
      <div className="form-right">
        <h2>CHƯA CÓ TÀI KHOẢN?</h2>
        <p>Đăng ký tài khoản để sử dụng tất cả các tính năng của trang web</p>
        <Link href="/register">
          <button id="registerBtn">Đăng Ký</button>
        </Link>
      </div>

      {/* Cột bên phải: Đăng nhập */}
      <div className="form-left">
        <h2>ĐĂNG NHẬP</h2>
        <form>
          <input type="text" placeholder="Email hoặc tên đăng nhập" required />
          <input type="password" placeholder="Mật khẩu" required />

          <div className="forgot-password">
            <Link href="/forgot-password">Quên mật khẩu?</Link>
          </div>

          <button type="submit">Đăng Nhập</button>
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
    </section>
  );
};

export default LoginPage;
