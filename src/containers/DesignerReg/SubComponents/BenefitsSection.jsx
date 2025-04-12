import SectionHeading from "../../../common/SectionHeading";

const benefits = [
  {
    title: "Exceptional Quality",
    description:
      "Grassitupshop is an online retailer specializing in outdoor luxury furniture, with a showroom in Dubai and a website at grassitupshop.com. They offer special edition outdoor furniture sets, emphasizing comfort, luxury, and timeless design.We design and produce high-quality outdoor furniture for residential customers, hospitality, and other demanding outdoor projects globally. Our focus on functionality, durability, and easy maintenance, combined with versatile collections, ensures that every project is unique. ",
  },
  {
    title: "No Middleman",
    description:
      "Grassitupshop is an online retailer specializing in outdoor luxury furniture, with a showroom in Dubai and a website at grassitupshop.com. They offer special edition outdoor furniture sets, emphasizing comfort, luxury, and timeless design.We design and produce high-quality outdoor furniture for residential customers, hospitality, and other demanding outdoor projects globally. Our focus on functionality, durability, and easy maintenance, combined with versatile collections, ensures that every project is unique. ",
  },
  {
    title: "Sustainable Practices",
    description:
      "Grassitupshop is an online retailer specializing in outdoor luxury furniture, with a showroom in Dubai and a website at grassitupshop.com. They offer special edition outdoor furniture sets, emphasizing comfort, luxury, and timeless design.We design and produce high-quality outdoor furniture for residential customers, hospitality, and other demanding outdoor projects globally. Our focus on functionality, durability, and easy maintenance, combined with versatile collections, ensures that every project is unique. ",
  },
  {
    title: "Timeless Design",
    description:
      "Grassitupshop is an online retailer specializing in outdoor luxury furniture, with a showroom in Dubai and a website at grassitupshop.com. They offer special edition outdoor furniture sets, emphasizing comfort, luxury, and timeless design.We design and produce high-quality outdoor furniture for residential customers, hospitality, and other demanding outdoor projects globally. Our focus on functionality, durability, and easy maintenance, combined with versatile collections, ensures that every project is unique. ",
  },
  {
    title: "Handcrafted Excellence",
    description:
      "Grassitupshop is an online retailer specializing in outdoor luxury furniture, with a showroom in Dubai and a website at grassitupshop.com. They offer special edition outdoor furniture sets, emphasizing comfort, luxury, and timeless design.We design and produce high-quality outdoor furniture for residential customers, hospitality, and other demanding outdoor projects globally. Our focus on functionality, durability, and easy maintenance, combined with versatile collections, ensures that every project is unique. ",
  },
  {
    title: "Customer Satisfaction",
    description:
      "Grassitupshop is an online retailer specializing in outdoor luxury furniture, with a showroom in Dubai and a website at grassitupshop.com. They offer special edition outdoor furniture sets, emphasizing comfort, luxury, and timeless design.We design and produce high-quality outdoor furniture for residential customers, hospitality, and other demanding outdoor projects globally. Our focus on functionality, durability, and easy maintenance, combined with versatile collections, ensures that every project is unique. ",
  },
];

export default function BenefitsSection() {
  return (
    <section className="benefits-section">
      <div className="benefit-container">
        <p className="intro-text" data-aos="fade-up" data-aos-delay="100">
          Grass It Up is your go-to platform for discovering professional
          landscaping and garden care services in your city. Whether you're a
          homeowner looking to refresh your backyard or a business needing
          regular maintenance, we connect you with trusted lawn care experts
          nearby. Need weekly mowing, seasonal clean-up, or a complete outdoor
          makeover? Grass It Up makes it easy to schedule services that suit
          your needs. With flexible plans and skilled professionals, you can
          enjoy a beautiful, well-maintained outdoor space all year round. Join
          Grass It Up today and take the first step toward greener, healthier,
          and more inviting surroundings!
        </p>
        <SectionHeading
          title="Benefits"
          subtitle="Of Being A Interior Designer"
        />
        <div
          className="benefit-container"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <div className="benefit-box">
            <div className="benefit-icon">
              <img src="/tree.svg" alt="Tree Icon" />
            </div>
            <p>
              We work directly with our manufacturing partners to source
              top-quality materials at the best possible prices.
            </p>
          </div>
          <div className="benefit-box">
            <div className="benefit-icon">
              <img src="/design.svg" alt="Design Icon" />
            </div>
            <p>
              We collaborate closely with European designers and international
              artisans to create furnishings of exceptional style and quality.
            </p>
          </div>
          <div className="benefit-box">
            <div className="benefit-icon">
              <img src="/warehouse.svg" alt="Warehouse Icon" />
            </div>
            <p>
              We ship directly from our own warehouse using our own delivery
              team, eliminating the middleman.
            </p>
          </div>
          <div className="benefit-box">
            <div className="benefit-icon">
              <img src="/tag.svg" alt="Tag Icon" />
            </div>
            <p>
              You enjoy beautiful, durable furnishings for 20% less than other
              premium brands charge.
            </p>
          </div>
        </div>
        <div
          className="banner-container"
          data-aos="fade-up"
          data-aos-delay="100"
        >
          <video autoPlay muted loop playsInline className={"BannerFormVideo"}>
            <source
              src="https://videos.pexels.com/video-files/7578554/7578554-uhd_2560_1440_30fps.mp4"
              type="video/mp4"
            />
            <img
              src="/fallback.jpg"
              className={`img-fluid ${"BannerFormImage"}`}
              alt="Grass It Up"
              loading="lazy"
            />
          </video>

          <div className="banner-overlay">
            <img
              src={"/Master_Logo_WHITE.png"}
              alt="Grass It Up"
              className="logoImage"
              loading="lazy"
              data-aos="fade-left"
              data-aos-delay="100"
            />
            <h2 className="headline" data-aos="fade-left" data-aos-delay="100">
              Innovation at Its Best: A Closer Look at Our Services
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
