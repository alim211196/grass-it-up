import React from "react";
import "../App.css";

const testimonials = [
  {
    id: 1,
    name: "Jen S.",
    role: "Founder of XYZ",
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur esse!",
    image: "img1.jpg",
  },
  {
    id: 2,
    name: "Paul A.",
    role: "Founder of XYZ",
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur esse!",
    image: "img2.jpg",
  },
  {
    id: 3,
    name: "Cindy B.",
    role: "Founder of XYZ",
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur esse!",
    image: "img3.jpg",
  },
  {
    id: 4,
    name: "Max Q.",
    role: "Founder of XYZ",
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur esse!",
    image: "img4.jpg",
  },
  {
    id: 5,
    name: "Jeff R.",
    role: "Founder of XYZ",
    message:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Ipsa nostrum labore dolor facilis, nesciunt facere mollitia nam aspernatur esse!",
    image: "img2.jpg",
  },
];

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <div className="container-fluid">
        <h2 className="section-title">Testimonials</h2>
        <p className="section-subtitle">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
          consequatur reprehenderit.
        </p>

        {/* First Row (Right to Left) */}
        <div className="testimonial-wrapper rtl">
          <div className="testimonial-slider">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-content">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-img"
                  />
                  <div className="testimonial-text">
                    <h5>{testimonial.name}</h5>
                    <p className="role">{testimonial.role}</p>
                    <p className="message">
                      {" "}
                      {testimonial.message?.length > 150
                        ? `${testimonial.message.substring(0, 150)}...`
                        : testimonial.message}{" "}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Second Row (Left to Right) */}
        <div className="testimonial-wrapper ltr">
          <div className="testimonial-slider">
            {[...testimonials, ...testimonials].map((testimonial, index) => (
              <div key={index} className="testimonial-card">
                <div className="testimonial-content">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="testimonial-img"
                  />
                  <div className="testimonial-text">
                    <h5>{testimonial.name}</h5>
                    <p className="role">{testimonial.role}</p>
                    <p className="message">{testimonial.message}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
