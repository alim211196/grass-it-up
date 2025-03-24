import React, { useEffect, useState } from "react";
import "./Chatbot.css";
import { motion } from "framer-motion";
const Chatbot = () => {
  let timeoutId = null;
  const [open, setOpen] = useState(false);
  const [expand, setExpand] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hello! Welcome to Grass It Up. 🌿 How can I assist you today?",
      sender: "bot",
    },
    {
      text: `Hi, I’m looking for an outdoor sofa set that’s durable and seats 4 to 5 people. Do you have any recommendations?`,
      sender: "user",
    },
    {
      text: "Absolutely! Here are two great options for you:",
      sender: "bot",
    },

    {
      type: "product",
      products: [
        {
          name: "Outdoor Rattan Sofa Set",
          image: "/product1.png",
          list: [
            "Stylish and durable with water-resistant cushions.",
            "Seats up to 4 people comfortably.",
            "Available in beige, charcoal gray, and navy blue.",
          ],
          link: "https://example.com/sofa1",
        },
      ],
      sender: "bot",
    },
    {
      type: "product",
      products: [
        {
          name: "Luxury Patio Sofa Set",
          image: "/product2.png",
          list: [
            "Flexible design with modular sections for customization.",
            "Weatherproof materials for long-lasting use.",
            "Seats up to 5 people.",
          ],
          link: "https://example.com/sofa2",
        },
      ],
      sender: "bot",
    },
  ]);

  // Function to detect URLs and render them as <a> tags
  const renderMessage = (text) => {
    const urlRegex = /(https?:\/\/[^\s]+|www\.[^\s]+)/g;
    return text.split(urlRegex).map((part, index) =>
      urlRegex.test(part) ? (
        <a
          key={index}
          href={part.startsWith("http") ? part : `https://${part}`}
          target="_blank"
          rel="noopener noreferrer"
          className="chat-link"
        >
          {part}
        </a>
      ) : (
        <span key={index}>{part}</span>
      )
    );
  };
  // Disable scrolling on the homepage when the modal is open
  useEffect(() => {
    if (open) {
      document.body.classList.add("chatbot-modal");
    } else {
      document.body.classList.remove("chatbot-modal");
    }

    return () => {
      document.body.classList.remove("chatbot-modal");
    };
  }, [open]);

  const [selectedImage, setSelectedImage] = useState({
    png: "/persona.png",
    gif: "/persona.gif",
  });

  const avatarOptions = [
    { png: "/persona1.png", gif: "/persona1.gif", alt: "persona1" },
    { png: "/persona2.png", gif: "/persona2.gif", alt: "persona2" },
    { png: "/persona.png", gif: "/persona.gif", alt: "persona3" },
  ];

  const handleAvatarChange = (avatar) => {
    setSelectedImage({ ...selectedImage, png: avatar.png, gif: avatar.gif });
  };

  const handleMouseEnter = () => {
    clearTimeout(timeoutId); // Clear any existing timeout to prevent flickering
    setExpand(true);
  };

  const handleMouseLeave = () => {
    timeoutId = setTimeout(() => {
      setExpand(false);
    }, 500); // Delay to prevent instant collapse
  };
  return (
    <>
      <motion.div
        className="chatbot-container-home"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <motion.div
          className={`chatbot-box-home ${expand ? "expanded" : ""}`}
          initial={{ height: "50px", width: "160px" }}
          animate={
            expand ? { height: "auto", width: 220 } : { height: 50, width: 160 }
          }
          transition={{ duration: 0.3, ease: "easeInOut" }}
        >
          {expand && (
            <motion.div
              className="chatbot-button-home-top"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
            >
              {avatarOptions.map((avatar, index) => (
                <motion.img
                  key={index}
                  src={avatar.png}
                  alt={avatar.alt}
                  className="chatbot-avatar-small"
                  onClick={() => handleAvatarChange(avatar)}
                  animate={{
                    scale: selectedImage.png === avatar.png ? 1.2 : 1,
                  }}
                  transition={{ duration: 0.3 }}
                  style={{
                    border:
                      selectedImage.png === avatar.png
                        ? "2px solid #7f9c90"
                        : "none",
                    cursor: "pointer",
                  }}
                />
              ))}
            </motion.div>
          )}

          <motion.div
            className="chatbot-avatar-box-home"
            style={{
              backgroundImage: "url(/grassitup.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              borderRadius: "10px",
              position: "relative", // Required for overlay
            }}
          >
            <div className="chatbot-overlay"></div>
            <div style={{ position: "relative", zIndex: 2, width: "100%" }}>
              <motion.img
                key={expand ? selectedImage.gif : selectedImage.png}
                src={expand ? selectedImage.gif : selectedImage.png}
                alt="persona"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                className="chatbot-avatar-home"
              />
            </div>
          </motion.div>

          {!expand && (
            <motion.button className="chatbot-text-box-home">
              Chat
            </motion.button>
          )}

          {expand && (
            <motion.button
              className="chatbot-button-home"
              onClick={() => setOpen(true)}
            >
              Chat
            </motion.button>
          )}
        </motion.div>
      </motion.div>

      {open && (
        <div className="chatbot-modal">
          <div
            className="chatbot-container"
            style={{
              backgroundImage: "url(/grassitup.webp)",
              backgroundSize: "cover",
              backgroundPosition: "center",
              backgroundRepeat: "no-repeat",
              position: "relative", // Required for overlay
            }}
          >
            {/* Dark Overlay */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                width: "100%",
                height: "100%",
                zIndex: 1, // Keep it above background image
                backgroundColor: "rgba(0, 0, 0, 0.8)",
                backdropFilter: "blur(5px)",
                WebkitBackdropFilter: "blur(5px)",
                boxShadow:
                  "0px 4px 10px rgba(255, 255, 255, 0.2),0px 6px 30px rgba(0, 0, 0, 0.3)",
              }}
            ></div>
            <div style={{ position: "relative", zIndex: 2, width: "100%" }}>
              <button className="close-btn" onClick={() => setOpen(false)}>
                <img src={"/x-circle.png"} alt="X" />
              </button>
              <div
                className="text-center text-md-start pt-5"
                style={{ height: "98%" }}
              >
                <div
                  className="row"
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: "100%",
                  }}
                >
                  <div className="col-md-8 col-lg-8 column-class">
                    <div style={{ margin: "1rem 3rem 0rem" }}>
                      <h1 className="botTitle">Welcome to GrassItUp!</h1>
                      <p className="botDesc">
                        Your go-to for premium outdoor furniture that blends
                        style, comfort, and nature.”
                      </p>
                    </div>

                    <div
                      className="chatbox"
                      style={{ margin: "1rem 3rem 0rem" }}
                    >
                      {messages.map((msg, index) => (
                        <div
                          key={index}
                          className={`chat-item ${
                            msg.sender === "user" ? "right" : "left"
                          }`}
                        >
                          {msg.sender === "bot" && (
                            <img
                              src={selectedImage.png}
                              alt="Bot Avatar"
                              className="small-avatar"
                            />
                          )}
                          <div className="msg">
                            {msg.type === "product" ? (
                              // Product Cards Section
                              msg.products.map((product, pIndex) => (
                                <div key={pIndex} className="bot-product-card">
                                  <img
                                    src={product.image}
                                    alt={product.name}
                                    className="bot-product-image"
                                  />
                                  <div className="bot-product-info">
                                    <h3>{product.name}</h3>
                                    {product.list.map((i) => (
                                      <li key={i}>{i}</li>
                                    ))}
                                  </div>
                                </div>
                              ))
                            ) : (
                              <p>{renderMessage(msg.text)}</p>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Input Box - Fixed at Bottom */}
                    <div
                      className="typing-area"
                      style={{ margin: "0rem 3rem" }}
                    >
                      <input
                        type="text"
                        placeholder="Type a message..."
                        className="chat-input"
                      />
                      <button className="attach-btn">
                        <img src={"/attachment.png"} alt="attachment" />
                      </button>
                      <button className="emoji-btn">😊</button>
                      <button className="send-btn">
                        {" "}
                        <img src={"/send.png"} alt="send" />
                      </button>
                    </div>
                  </div>
                  <div className="col-md-4 col-lg-4">
                    <img
                      src={selectedImage.gif}
                      alt="persona"
                      style={{
                        width: "100%",
                        height: "auto",
                        objectFit: "cover",
                      }}
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Chatbot;
