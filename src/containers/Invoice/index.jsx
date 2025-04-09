import React, { useEffect } from "react";
import "./Invoice.css";
import AOS from "aos";
import "aos/dist/aos.css";
const Invoice = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
    window.scrollTo(0, 0);
  }, []);
  return (
    <section className="invoice-container">
      <div className="invoice-wrapper">
        <div className="invoice-header">
          <h3 data-aos="fade-up" data-aos-delay="100">
            Invoice : <span>#038 - 456980</span>
          </h3>
          <button className="print-btn" data-aos="fade-up" data-aos-delay="100">
            Print Invoice
          </button>
        </div>
        <div className="invoice-box">
          <div className="invoice-logo-header">
            <img
              src={"/Master_Logo_RGB.png"}
              alt="Grass It Up"
              className="grassitup"
              loading="lazy"
              data-aos="fade-up"
              data-aos-delay="100"
            />
          </div>
          <div className="invoice-cards">
            <div
              className="invoice-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <p id="p1">Date: 1st Sept 2025</p>
              <p id="p2">Invoice #: 0416-22155</p>
              <p className="invoice-section-title">Shop Information</p>
              <p id="p3">Jack Wood Farm</p>
              <p id="p1">23A South Park Lake Road</p>
              <p id="p1">Milan, Italy</p>
            </div>

            <div
              className="invoice-card"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <p id="p1">Date: 3rd Nov 2025</p>
              <p id="p2">Cash On Delivery</p>

              <p className="invoice-section-title">Customer Information</p>
              <p id="p3">Jack Wood Farm</p>
              <p id="p1">23A South Park Lake Road</p>
              <p id="p1">Milan, Italy</p>
            </div>
          </div>
          <div className="order-header" data-aos="fade-up" data-aos-delay="100">
            Order Information
          </div>
          <div className="order-info">
            <div className="table-head" data-aos="fade-up" data-aos-delay="100">
              <span>Product Info</span>
              <span id="align-center">Quantity</span>
              <span id="align-center">Price</span>
              <span id="align-center">Total</span>
            </div>

            <div
              className="product-row"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="product-info">
                <img
                  src="https://furnixar.vercel.app/assets/post-01-CH5c4FsY.jpg"
                  alt="Modern Sofa Set"
                />
                <div>
                  <p>Chair</p>
                  <p>
                    <strong>Modern Sofa Set</strong>
                  </p>
                </div>
              </div>
              <span id="align-center">3</span>
              <span id="align-center">$74</span>
              <span id="align-center">$210</span>
            </div>

            <div
              className="product-row"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="product-info">
                <img
                  src="https://furnixar.vercel.app/assets/post-02-C0DuL8HC.jpg"
                  alt="Classic Chair"
                />
                <div>
                  <p>Interior</p>
                  <p>
                    <strong>Classic Chair with Vase</strong>
                  </p>
                </div>
              </div>
              <span id="align-center">2</span>
              <span id="align-center">$90</span>
              <span id="align-center">$180</span>
            </div>

            <div
              className="product-row"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="product-info">
                <img
                  src="https://furnixar.vercel.app/assets/post-01-CH5c4FsY.jpg"
                  alt="Luxury Lamp"
                />
                <div>
                  <p>Light & Lamp</p>
                  <p>
                    <strong>Luxury Hanging Lamp</strong>
                  </p>
                </div>
              </div>
              <span id="align-center">3</span>
              <span id="align-center">$74</span>
              <span id="align-center">$210</span>
            </div>

            <div
              className="summary-box"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div>
                <span>
                  <strong>Sub Total:</strong>
                </span>
                <span>
                  <strong>$670</strong>
                </span>
              </div>
              <div>
                <span>
                  <strong>Coupon Discount:</strong>
                </span>
                <span>
                  <strong>$20</strong>
                </span>
              </div>
              <div>
                <span>
                  <strong>Delivery Fee:</strong>
                </span>
                <span>
                  <strong>$5</strong>
                </span>
              </div>
              <div>
                <span>
                  <strong>VAT:</strong>
                </span>
                <span>
                  <strong>$5</strong>
                </span>
              </div>
              <div className="total-row">
                <strong>Total:</strong>
                <strong>$650</strong>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Invoice;
