'use client';
import { useState } from 'react';
import './address.css';
import Link from 'next/link'; // Đừng quên import nếu dùng Next.js

interface Address {
  id: number;
  address: string;
  recipient: string;
  phone: string;
  isActive: boolean;
}

export default function AddressPage() {
  const [addresses, setAddresses] = useState<Address[]>([
    {
      id: 1,
      address: '115/47 Lê Đức Thọ, Gò Vấp',
      recipient: 'Võ Tuấn',
      phone: '0912345678',
      isActive: true,
    },
    {
      id: 2,
      address: '25 Trần Hưng Đạo, Quận 1',
      recipient: 'Nguyễn Văn A',
      phone: '0987654321',
      isActive: false,
    },
  ]);

  const [isModalOpen, setModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Thêm địa chỉ');
  const [formData, setFormData] = useState({ address: '', recipient: '', phone: '' });
  const [editId, setEditId] = useState<number | null>(null);

  const openModal = (editAddress?: Address) => {
    if (editAddress) {
      setModalTitle('Sửa địa chỉ');
      setFormData({
        address: editAddress.address,
        recipient: editAddress.recipient,
        phone: editAddress.phone,
      });
      setEditId(editAddress.id);
    } else {
      setModalTitle('Thêm địa chỉ');
      setFormData({ address: '', recipient: '', phone: '' });
      setEditId(null);
    }
    setModalOpen(true);
  };

  const closeModal = () => setModalOpen(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editId !== null) {
      const updated = addresses.map((addr) =>
        addr.id === editId ? { ...addr, ...formData } : addr
      );
      setAddresses(updated);
    } else {
      const newAddress: Address = {
        id: Date.now(),
        ...formData,
        isActive: addresses.length === 0,
      };
      setAddresses([...addresses, newAddress]);
    }
    closeModal();
  };

  const handleDelete = (id: number) => {
    setAddresses(addresses.filter((addr) => addr.id !== id));
  };

  const handleChoose = (id: number) => {
    setAddresses(addresses.map((addr) =>
      addr.id === id ? { ...addr, isActive: true } : { ...addr, isActive: false }
    ));
  };

  return (
    <>
      {/* Breadcrumb */}
      <div className="breadcrumb-wrapper">
        <div className="breadcrumb">
          <Link href="/">Trang chủ</Link> / Đơn hàng của bạn
        </div>
      </div>

      {/* Main layout */}
      <main className="main-container">
        <div className="sidebar">
          <h2>Trang tài khoản</h2>
          <p>Xin chào, <span className="username">Tuấn Võ</span>!</p>
          <ul>
            <li><a href="/account">Thông tin tài khoản</a></li>
            <li><a href="/orders">Đơn hàng của bạn</a></li>
            <li><a href="/changepassword">Đổi mật khẩu</a></li>
            <li className="active"><a href="#">Địa chỉ</a></li>
          </ul>
        </div>

        <div className="content">
          <h2>Địa chỉ của bạn</h2>
          <table>
            <thead>
              <tr>
                <th>STT</th>
                <th>Địa chỉ</th>
                <th>Người nhận</th>
                <th>SĐT</th>
                <th>Trạng thái</th>
                <th>Thao tác</th>
              </tr>
            </thead>
            <tbody>
              {addresses.map((addr, idx) => (
                <tr key={addr.id}>
                  <td>{idx + 1}</td>
                  <td>{addr.address}</td>
                  <td>{addr.recipient}</td>
                  <td>{addr.phone}</td>
                  <td>
                    {addr.isActive ? (
                      <button className="active-btn">Đang sử dụng</button>
                    ) : (
                      <button className="choose-btn" onClick={() => handleChoose(addr.id)}>Chọn</button>
                    )}
                  </td>
                  <td>
                    <button className="btn-edit" onClick={() => openModal(addr)}>Sửa</button>
                    <button className="btn-delete" onClick={() => handleDelete(addr.id)}>Xóa</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <div className="add-address">
            <button onClick={() => openModal()}>Thêm địa chỉ</button>
          </div>
        </div>
      </main>

      {/* Modal */}
      {isModalOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <h3>{modalTitle}</h3>
            <form onSubmit={handleSubmit}>
              <label htmlFor="address">Địa chỉ *</label>
              <input type="text" id="address" value={formData.address} onChange={handleChange} required />
              <label htmlFor="recipient">Người nhận *</label>
              <input type="text" id="recipient" value={formData.recipient} onChange={handleChange} required />
              <label htmlFor="phone">Số điện thoại *</label>
              <input type="tel" id="phone" value={formData.phone} onChange={handleChange} required />

              <div className="modal-actions">
                <button type="button" onClick={closeModal}>Hủy</button>
                <button type="submit">Lưu</button>
              </div>
            </form>
            <span className="modal-close" onClick={closeModal}>×</span>
          </div>
        </div>
      )}
    </>
  );
}
