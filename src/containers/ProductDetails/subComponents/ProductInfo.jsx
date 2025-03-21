import React, { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Thumbs } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/thumbs";

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

  return (
    <div className="product-container">
      {/* Left Section - Image */}

      <div className="product-slider-container">
        {/* Main Image Slider */}
        <Swiper
          spaceBetween={10}
          navigation
          thumbs={{ swiper: thumbsSwiper }}
          modules={[Navigation, Thumbs]}
          className="product-slider"
        >
          {images.map((img, index) => (
            <SwiperSlide key={index}>
              <img src={img} alt={`Product ${index}`} />
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
              <img src={img} alt={`Thumbnail ${index}`} />
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
            <div className="fabric-option1">
              <button></button>
            </div>
          </div>

          <div className="fabric-div">
            <span className="fabric-name">Tidal Foam</span>
            <span className="product-stock">In stock</span>
          </div>
        </div>

        {/* Quantity and Cart Button */}
        <div className="cart-details-section">
          <div className="quantity">
            <button>-</button>
            <span>1</span>
            <button>+</button>
          </div>
          <button className="add-to-cart-details">Add to Cart</button>
        </div>
        <div className="fabric-div">
          <span className="product-stock">Everyday Low Shipping - </span>
          <span className="our-value">
            <a>Learn More</a>
          </span>
        </div>
      </div>
    </div>
  );
};

export default ProductInfo;
