"use client";
import React from "react";
import "../../public/css/contact.css"; 
import Link from "next/link";


export default function Contact() {
  return (
    <>
      
      {/* Contact Section */}
      <section className="contact-section">
        <div className="contact-info">
          <h2>Liên hệ với chúng tôi</h2>
          <p>
            <i className="fas fa-map-marker-alt"></i> Địa chỉ: 158/25 Phạm Văn Chiêu, Phường 8, Gò Vấp, TP Hồ Chí Minh
          </p>
          <p>
            <i className="fas fa-phone"></i> Số điện thoại: 1234567890
          </p>
          <p>
            <i className="fas fa-envelope"></i> Email: dravikstore@gmail.com
          </p>

          {/* Form gửi liên hệ */}
          <form className="contact-form" id="contact-form" autoComplete="off">
            <input type="text" name="from_name" placeholder="Họ và tên *" required />
            <input type="email" name="from_email" placeholder="Email *" required />
            <input type="tel" name="phone" placeholder="Số điện thoại *" required />
            <textarea name="message" rows={4} placeholder="Nhập nội dung *" required></textarea>
            <button type="submit">Gửi liên hệ của bạn</button>
          </form>
        </div>

        {/* Google Map */}
        <div className="contact-map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.833367511029!2d106.66650567471938!3d10.822159558365538!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528cc58289b41%3A0x74904f0a529b7e68!2zMTU4LzI1IFBo4bqhbSBWw6JuIENoaeG7gW4sIFBoxrDhu51uZyA4LCBH4bubaSBW4buHcCwgSOG7kyBDaMOtIE1pbmggNzAwMDAwLCBWaeG7h3QgTmFt!5e0!3m2!1svi!2s!4v1717999999999"
            allowFullScreen
            loading="lazy"
            style={{ width: "100%", height: "100%", border: 0, borderRadius: 10 }}
          ></iframe>
        </div>
      </section>
    </>
  );
}
