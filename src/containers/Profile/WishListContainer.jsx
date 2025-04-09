import React from "react";

const WishListContainer = () => {
  return (
    <div className="wishlist-container">
      {[
        {
          id: 1,
          title: "White Minimal Chair",
          price: "$25.75",
          rating: 5,
          image:
            "https://terraoutdoor.com/cdn/shop/files/seaside-dune-sofa-1_600x.jpg",
        },
        {
          id: 2,
          title: "Preminu Luxury Sofa",
          price: "$122.75",
          rating: 4,
          image:
            "https://terraoutdoor.com/cdn/shop/files/stinson-charcoal-sofa-cast-silver-1_600x.jpg",
        },
        {
          id: 3,
          title: "Table With Pops",
          price: "$140.99",
          rating: 4,
          image:
            "https://terraoutdoor.com/cdn/shop/files/stinson-teak-sofa-quad-silver-1_600x.jpg",
        },
        {
          id: 4,
          title: "White Minimal Chair",
          price: "$25.75",
          rating: 5,
          image:
            "https://terraoutdoor.com/cdn/shop/files/seaside-dune-sofa-1_600x.jpg",
        },
        {
          id: 5,
          title: "Preminu Luxury Sofa",
          price: "$122.75",
          rating: 4,
          image:
            "https://terraoutdoor.com/cdn/shop/files/stinson-charcoal-sofa-cast-silver-1_600x.jpg",
        },
        {
          id: 6,
          title: "Table With Pops",
          price: "$140.99",
          rating: 4,
          image:
            "https://terraoutdoor.com/cdn/shop/files/stinson-teak-sofa-quad-silver-1_600x.jpg",
        },
      ].map((item) => (
        <div
          className="wishlist-card"
          key={item.id}
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="card-img">
            <img src={item.image} alt={item.title} />
            <div className="hover-icons">
              <button className="icon-btn">💼</button>
              <button className="icon-btn">❤️</button>
            </div>
          </div>
          <div className="card-info">
            <p className="wishlist-price">{item.price}</p>
            <h4 className="wishlist-title">{item.title}</h4>
            <div className="wishlist-rating">
              {Array.from({ length: item.rating }, (_, i) => (
                <span key={i}>⭐</span>
              ))}
              <span className="wishlist-count">(1,230)</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WishListContainer;
