"use client";
import React, { useEffect } from "react";
import Link from "next/link";

const Header = () => {
  useEffect(() => {
    const mobileMenuBtn = document.querySelector('.menu-icon');
    const mobileMenu = document.getElementById('mobileMenu');
    const menuOverlay = document.getElementById('menuOverlay');
    const closeBtn = document.getElementById('closeMobileMenu');

    function openMenu() {
      mobileMenu?.classList.add('open');
      menuOverlay?.classList.add('open');
    }
    function closeMenu() {
      mobileMenu?.classList.remove('open');
      menuOverlay?.classList.remove('open');
    }

    mobileMenuBtn?.addEventListener('click', openMenu);
    closeBtn?.addEventListener('click', closeMenu);
    menuOverlay?.addEventListener('click', closeMenu);

    return () => {
      mobileMenuBtn?.removeEventListener('click', openMenu);
      closeBtn?.removeEventListener('click', closeMenu);
      menuOverlay?.removeEventListener('click', closeMenu);
    };
    
  }, []);

  return (
    <>
      {/* HEADER */}
      <header>
        <div className="header-main">
          <div className="img-logo">
            <img src="/images/logo.png" alt="Dravik Store" />
          </div>
          <div className="header-nav">
            <div className="header-search">
              <div className="search">
                <input type="text" placeholder="Nhập sản phẩm cần tìm kiếm ..." />
                <button className="icon-search"><i className="fas fa-search"></i></button>
              </div>
              <div className="nav-top">
                <a href=""><i className="fas fa-file-alt"></i><p>Đơn hàng </p></a>
                <a href=""><i className="fas fa-heart"></i><p>Yêu thích </p></a>
                <a href=""><i className="fas fa-user"></i><p>Tài khoản </p></a>
                <a href="" className="cart"><i className="fas fa-shopping-cart"></i><p>Giỏ hàng </p><span className="badge">3</span></a>
              </div>
            </div>
            <div className="nav-bottom">
              <a href="./">Trang chủ</a>
              <a href="">Giới thiệu</a>
              <a href="">Sản phẩm </a>
              <a href="">Tin tức </a>
              <a href="">Hàng mới </a>
              <Link href="/contact">Liên hệ</Link>
              <a href="">Sản phẩm giảm giá  </a>
            </div>
          </div>
        </div>
      </header>

      {/* HEADER MOBILE */}
      <div className="mobile-header">
        <span className="menu-icon"><i className="fas fa-bars"></i></span>
        <div className="img-logo"><img src="/images/logo.png" alt="Dravik Store" /></div>
        <div className="icon-group">
          <span><i className="fas fa-search"></i></span>
          <span className="cart"><i className="fas fa-shopping-cart"></i><span className="badge">3</span></span>
        </div>
      </div>
      {/* SIDEBAR/OFFCANVAS MENU */}
      <div id="mobileMenu" className="mobile-offcanvas">
        <div className="mobile-menu-header">
          <span className="close-btn" id="closeMobileMenu">&times;</span>
          <img src="/images/logo.png" alt="Dravik Store" className="offcanvas-logo" />
        </div>
        <nav className="mobile-menu-nav">
          <a href="#">Trang chủ</a>
          <a href="#">Giới thiệu</a>
          <a href="#">Sản phẩm</a>
          <a href="#">Tin tức</a>
          <a href="#">Hàng mới</a>
          <Link href="/contact">Liên hệ</Link>
          <a href="#">Sản phẩm giảm giá</a>
          <hr />
          <a href="#"><i className="fas fa-user"></i> Tài khoản</a>
          <a href="#"><i className="fas fa-heart"></i> Yêu thích</a>
          <a href="#"><i className="fas fa-file-alt"></i> Đơn hàng</a>
          <a href="#"><i className="fas fa-shopping-cart"></i> Giỏ hàng</a>
          <div className="mobile-search">
            <input type="text" placeholder="Tìm kiếm..." />
            <button><i className="fas fa-search"></i></button>
          </div>
        </nav>
      </div>
      <div id="menuOverlay" className="menu-overlay"></div>
    </>
  );
};

export default Header;
