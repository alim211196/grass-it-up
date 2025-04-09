import React from "react";

const OrderHistory = () => {
  return (
    <div className="order-list">
      <div
        className="order-history-header"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div>Product</div>
        <div>Price</div>
        <div>Status</div>
      </div>

      {/* Sample Item */}
      {[
        {
          id: 1,
          image: "https://furnixar.vercel.app/assets/post-01-CH5c4FsY.jpg",
          title: "Modern Sofa Set",
          category: "Chair",
          price: "$74",
          status: "Completed",
        },
        {
          id: 2,
          image: "https://furnixar.vercel.app/assets/post-02-C0DuL8HC.jpg",
          title: "Classic Chair with Vase",
          category: "Interior",
          price: "$74",
          status: "Pending",
        },
        {
          id: 3,
          image: "https://furnixar.vercel.app/assets/post-01-CH5c4FsY.jpg",
          title: "Luxury Hanging Lamp",
          category: "Light",
          price: "$74",
          status: "Cancel",
        },
      ].map((item) => (
        <div
          className="order-history"
          key={item.id}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="order-product-info">
            <img src={item.image} alt={item.title} />
            <div>
              <p className="category">{item.category}</p>
              <p className="title">{item.title}</p>
            </div>
          </div>
          <div className="order-price">{item.price}</div>
          <div className={`order-status ${item.status.toLowerCase()}`}>
            {item.status}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderHistory;
