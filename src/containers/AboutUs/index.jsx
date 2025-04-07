import React from "react";
import "./aboutus.css";
import SubscriptionSection from "../../common/SubscriptionSection";
import PartnerMarquee from "../HomePage/subComponents/PartnerMarquee";
import OurHistory from "./OurHistory";
import SectionHeading from "../../common/SectionHeading";
import Breadcrumb from "../Breadcrumb";
const AboutUs = () => {
  return (
    <>
      <Breadcrumb
        path={[{ label: "Home", link: "/" }, { label: "About GrassItUp" }]}
      />
      <section
        className="about-container"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="heading-container">
          <h1 className="about-heading">About GrassItUp</h1>
          <h6 className="about-subheading">
            Exclusively Designed Contemporary Outdoor Furniture
          </h6>
          <p className="about-description">
            GrassItUp collaborates with an extraordinary team of designers,
            manufacturers and artisans across the globe to create exceptional
            outdoor furnishings under our exclusive brand, Ventana. Sold
            directly through our website and showrooms, our products feature
            premium quality and contemporary European design to help turn your
            outdoor space into a personal sanctuary to reconnect with nature,
            family and friends.
          </p>
        </div>
      </section>
      <section
        className="about-banner-image"
        data-aos="fade-up"
        data-aos-delay="100"
      />
      <section data-aos="fade-up" data-aos-delay="100">
        <div className="mission-container">
          <SectionHeading title="Our" subtitle="Mission & Values" />

          <h5 className="mission-description">
            At GrassItUp, our goal is to help you create beautiful, comfortable
            outdoor spaces in which to gather, relax, connect and live well
            every day. We believe outdoor furniture should be just as
            thoughtfully designed and well-made as indoor furnishings. We’re
            committed to ensuring every piece we offer meets the highest-quality
            standards at the best possible price.
          </h5>
        </div>
      </section>
      <section className="about-section">
        <div className="about-container2">
          <div
            className="about-image"
            data-aos="fade-left"
            data-aos-delay="100"
          >
            <img src="/about-dining.png" alt="Dining Table Image" />
          </div>
          <div
            className="about-text"
            data-aos="fade-right"
            data-aos-delay="100"
          >
            <h2>EXCEPTIONAL QUALITY</h2>
            <p>
              Strong relationships with our longtime manufacturing partners,
              designers, and artisans allow us to create premium goods at honest
              prices. Made from materials chosen for their beauty and
              durability, GrassItUp products are engineered to withstand time,
              use, and the elements with minimal maintenance, so the style and
              comfort you invest in today will last a lifetime.
            </p>
            <h2>NO MIDDLEMAN</h2>
            <p>
              GrassItUp goes to the source, working with our trusted design and
              manufacturing partners to bring exclusive furnishings and
              accessories directly to you. We only sell our assortment through
              our website and showrooms, and we ship from our warehouse using
              our own fleet of delivery trucks. That’s how we’re able to offer
              products of the highest quality.
            </p>
            <h2>Green Practices</h2>
            <p>
              We strive to ensure our products and business practices reflect
              our love and respect for the planet. We use sustainably grown,
              responsibly sourced Indonesian legal wood for all our teak
              furnishings. We’re currently pursuing B-Corp certification, using
              that framework to set guidelines and goals for improvement as we
              work toward complete sustainability by 2030.
            </p>
            <h2>Direct-to-Consumer Model</h2>
            <p>
              By eliminating unnecessary markups and intermediaries, we make
              high-quality furniture accessible at fair prices. Our
              direct-to-consumer approach ensures that you receive thoughtfully
              designed, premium products without the added retail overhead.
            </p>
          </div>
        </div>
      </section>
      <section
        className="pricing-section"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <SectionHeading title="Fair pricing" subtitle="Quality goods" />

        <p className="subheading">
          Our unique production process allows us to create premium products at
          honest prices under our exclusive Ventana brand.
        </p>

        <div className="features-container">
          <div className="feature-box">
            <div className="icon">
              <img src="/tree.svg" alt="Tree Icon" />
            </div>
            <p>
              We work directly with our manufacturing partners to source
              top-quality materials at the best possible prices.
            </p>
          </div>
          <div className="feature-box">
            <div className="icon">
              <img src="/design.svg" alt="Design Icon" />
            </div>
            <p>
              We collaborate closely with European designers and international
              artisans to create furnishings of exceptional style and quality.
            </p>
          </div>
          <div className="feature-box">
            <div className="icon">
              <img src="/warehouse.svg" alt="Warehouse Icon" />
            </div>
            <p>
              We ship directly from our own warehouse using our own delivery
              team, eliminating the middleman.
            </p>
          </div>
          <div className="feature-box">
            <div className="icon">
              <img src="/tag.svg" alt="Tag Icon" />
            </div>
            <p>
              You enjoy beautiful, durable furnishings for 20% less than other
              premium brands charge.
            </p>
          </div>
        </div>
      </section>
      <OurHistory />
      <section
        className="about-hero-section"
        data-aos="fade-up"
        data-aos-delay="100"
      >
        <div className="about-hero-content">
          <SectionHeading title="Explore" subtitle="GrassItUp" />
          <button className="shopNow">Let's Shop Now</button>
        </div>
      </section>
      <PartnerMarquee />
      <SubscriptionSection />
    </>
  );
};

export default AboutUs;
