'use client';
import React, { useState } from 'react';
import './changepassword.css';

const ChangePasswordPage = () => {
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError('');

    if (newPassword.length < 8) {
      setError('Mật khẩu mới phải có ít nhất 8 kí tự.');
      return;
    }
    if (newPassword !== confirmPassword) {
      setError('Mật khẩu xác nhận không khớp.');
      return;
    }

    // Gửi dữ liệu đến backend tại đây
    console.log({ oldPassword, newPassword });
    alert('Mật khẩu đã được đổi thành công!');
  };

  return (
    <>
      <div className="breadcrumb">
        <a href="/">Trang chủ</a> / Trang khách hàng
      </div>

      <main className="account-container">
        <div className="account-sidebar">
          <h3>Trang tài khoản</h3>
          <p>
            Xin chào, <span className="username">Tuấn Võ</span>!
          </p>
          <ul>
            <li><a href="/account">Thông tin tài khoản</a></li>
            <li><a href="/orders">Đơn hàng của bạn</a></li>
            <li><a href="#" className="active">Đổi mật khẩu</a></li>
            <li><a href="/address">Địa chỉ</a></li>
          </ul>
        </div>

        <div className="account-details">
          <h2>Đổi mật khẩu</h2>
          <p>Vui lòng đặt mật khẩu với ít nhất 8 kí tự.</p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="old-password">
              Mật khẩu cũ <span className="required">*</span>
            </label>
            <input
              type="password"
              id="old-password"
              value={oldPassword}
              onChange={(e) => setOldPassword(e.target.value)}
              required
            />

            <label htmlFor="new-password">
              Mật khẩu mới <span className="required">*</span>
            </label>
            <input
              type="password"
              id="new-password"
              value={newPassword}
              onChange={(e) => setNewPassword(e.target.value)}
              required
            />

            <label htmlFor="confirm-password">
              Xác nhận lại mật khẩu <span className="required">*</span>
            </label>
            <input
              type="password"
              id="confirm-password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />

            {error && <p className="error">{error}</p>}

            <button type="submit">Đặt lại mật khẩu</button>
          </form>
        </div>
      </main>
    </>
  );
};

export default ChangePasswordPage;
