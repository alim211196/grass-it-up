import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs, Zoom } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";
import "swiper/css/zoom";
const images = [
  "https://cdn.accentuate.io/8825401639165/1740006238258/seaside-dune-sofa-1.jpg",
  "https://cdn.accentuate.io/8825401639165/1740006241991/seaside-dune-sofa-2.jpg",
  "https://cdn.accentuate.io/8825401639165/1740006245207/seaside-dune-sofa-3.jpg",
  "https://cdn.accentuate.io/8825401639165/1740006248474/seaside-dune-sofa-4.jpg",
  "https://cdn.accentuate.io/8825401639165/1740006251762/seaside-dune-sofa-5.jpg",
  "https://cdn.accentuate.io/8825401639165/1740006254860/seaside-dune-sofa-6.jpg",
  "https://cdn.accentuate.io/8825401639165/1740006257704/seaside-dune-sofa-7.jpg",
  "https://cdn.accentuate.io/8825401639165/1740006262037/seaside-dune-sofa-8.jpg",
];
const ProductInfo = ({ product }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);

  const [quantity, setQuantity] = useState(1);
  const handleIncrement = () => setQuantity((prev) => prev + 1);
  const handleDecrement = () =>
    setQuantity((prev) => (prev > 1 ? prev - 1 : 1));

  return (
    <div className="product-container">
      {/* Left Section - Image */}

      <div className="product-slider-container">
        {/* Main Image Slider */}
        <Swiper
          spaceBetween={10}
          navigation
          zoom={true}
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Navigation, Thumbs, Zoom]}
          className="product-slider"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <div className="swiper-zoom-container">
                <img src={img} alt={`Product ${index}`} loading="lazy" />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Thumbnail Slider */}
        <Swiper
          onSwiper={setThumbsSwiper}
          spaceBetween={10}
          slidesPerView={5}
          watchSlidesProgress
          modules={[Thumbs]}
          className="thumbs-slider"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`Thumbnail ${index}`} loading="lazy" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      {/* Right Section - Product Details */}
      <div className="product-details-info">
        <h1 className="product-details-title">
          {product?.name || "Seaside Sofa in Dune"}
        </h1>
        <p className="product-details-price">
          <span className="new-details-price">
            {product?.price || "$3,460"}
          </span>
          <span className="old-details-price">
            {product?.fprice || "$4,325"}
          </span>
        </p>
        <p className="our-value">
          <a>Our Value Promise</a>
        </p>

        <div className="fabric-section">
          <p className="fabric-label">Cushion Fabric:</p>
          <div className="fabric-row">
            <div className="fabric-option">
              <button></button>
            </div>
            <div className="fabric-option2">
              <button></button>
            </div>
            <div className="fabric-option1">
              <button></button>
            </div>
          </div>

          <div className="fabric-div">
            <span className="fabric-name">Tidal Foam</span>
            <span className="product-stock">
              <span className="stock-check">
                <i className="fa fa-check"></i>
              </span>
              In stock
            </span>
          </div>
        </div>

        {/* Quantity and Cart Button */}
        <div className="cart-details-section">
          <div className="quantity">
            <button onClick={handleDecrement} disabled={quantity < 1}>
              -
            </button>
            <span>{quantity}</span>
            <button onClick={handleIncrement}>+</button>
          </div>
          <button className="add-to-cart-details">Add to Cart</button>
        </div>
        <div className="fabric-div">
          <span className="product-stock">Everyday Low Shipping - </span>
          <span className="our-value">
            <a>Learn More</a>
          </span>
        </div>
        <hr />
        <div>
          <div className="payment-cart-info">
            <p>
              4 interest-free payments or as low as{" "}
              <strong>$400.23/month.</strong> <strong>More options</strong>{" "}
            </p>

            <div className="tabby-div">
              <img
                src="/tabby.png"
                alt="Tabby"
                className="tabby-cart-logo"
                loading="lazy"
              />
              <img
                src="/moon.png"
                alt="moon"
                className="tabby-cart-logo"
                loading="lazy"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
