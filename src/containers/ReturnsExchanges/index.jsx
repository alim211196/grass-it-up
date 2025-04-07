import React from "react";
import "./ReturnsExchanges.css";
import Breadcrumb from "../Breadcrumb";

const ReturnsExchanges = () => {
  return (
    <>
      <Breadcrumb
        path={[{ label: "Home", link: "/" }, { label: "Returns & Exchanges" }]}
      />
      <section className="returns-container">
        <div className="returns-heading-container">
          <h1
            className="returns-heading"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Returns & Exchanges
          </h1>
          <p
            className="returns-description"
            data-aos="fade-up"
            data-aos-delay="100"
          >
            Welcome to GrassItUp We are committed to providing you with a
            seamless shopping experience and hope you enjoy everything our
            website has to offer.
          </p>
        </div>

        <div className="returns-content">
          <div className="returns-item">
            <h2 data-aos="fade-left" data-aos-delay="100">
              Returns & Exchanges
            </h2>
            <p data-aos="fade-up" data-aos-delay="100">
              We offer a hassle-free returns and exchange policy within the
              United Arab Emirates (UAE). You have 14 days from the date of
              receiving your online order to exchange items for any reason. To
              be eligible for a return or exchange, items must be in the same
              condition as received, unused, and in their original packaging. A
              proof of purchase is also required. To initiate a return or
              exchange, please contact us at connect@grassitupshop.com. When
              requesting a return via email, include your order number, and
              reason for the return (for quality assurance purposes). We will
              notify you once we have received and inspected your return,
              informing you whether the refund has been approved. If approved,
              the refund will be processed to your original payment method.
              Please allow some time for your bank or credit card company to
              process and post the refund. Exchanges are permitted only for
              items of equal or higher value. If you choose to exchange for a
              more expensive item, you will need to pay the difference, along
              with any applicable shipping charges, before the new item is
              dispatched. Please note that for Cash on Delivery (COD) orders, we
              cannot issue cash refunds or credit card refunds due to security
              and verification reasons. Unfortunately, we do not accept any
              returns/exchanges on sale items or pre-ordered products.
            </p>
          </div>
          <div className="returns-item">
            <h2 data-aos="fade-left" data-aos-delay="100">
              Faulty Items
            </h2>
            <p data-aos="fade-up" data-aos-delay="100">
              If you receive a faulty or damaged item, please email photos of
              the item to connect@grassitupshop.com. Our Customer Service will
              investigate the case and respond within 48 hours to guide you
              through the process.
            </p>
          </div>
          <div className="returns-item">
            <h2 data-aos="fade-left" data-aos-delay="100">
              Complaints
            </h2>
            <p data-aos="fade-up" data-aos-delay="100">
              For quality-related issues, please contact our Customer Service
              Department at connect@grassitupshop.com, We will aim to resolve
              any disputes as promptly as possible.
            </p>
          </div>
          <div className="returns-item">
            <h2 data-aos="fade-left" data-aos-delay="100">
              Additional Information
            </h2>
            <p data-aos="fade-up" data-aos-delay="100">
              For further details on our returns process and policy, please
              contact our Customer Service team. We reserve the right to modify
              our Terms and Conditions at any time. We will not be held
              responsible for any delays or failures in complying with our
              obligations under these Terms and Conditions due to circumstances
              beyond our reasonable control.
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default ReturnsExchanges;
