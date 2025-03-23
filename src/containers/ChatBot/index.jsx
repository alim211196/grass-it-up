import React, { useEffect, useState } from "react";
import "./Chatbot.css";

const Chatbot = () => {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      text: "Hello! Welcome to Grass It Up. 🌿 How can I assist you today?",
      sender: "bot",
    },
    {
      text: `Hi, I saw a sofa set called "Sunset Luxe" on your website. Can you tell me more about it?`,
      sender: "user",
    },
    {
      text: " Sure! The Sunset Luxe Sofa Set features a durable aluminum frame, weather-resistant cushions, and is available in beige, charcoal gray, and navy blue. You can check all the details, including dimensions, on www.grassitup.com/sunset-luxe.",
      sender: "bot",
    },
    {
      text: `Is the fabric waterproof?`,
      sender: "user",
    },
    {
      text: "Yes, the cushions are water-resistant, perfect for outdoor use. For heavy rain, we recommend protective covers. Visit the product page for more details: www.grassitup.com/sunset-luxe.",
      sender: "bot",
    },
    {
      text: `Great, thanks!`,
      sender: "user",
    },
    {
      text: `You're welcome! Happy shopping! 😊`,
      sender: "user",
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
  return (
    <>
      {/* Floating Action Button (FAB) */}
      <button className="fab-button" onClick={() => setOpen(true)}>
        <img
          src="/persona.gif"
          alt="persona"
          style={{ width: "50px", height: "auto" }}
        />
      </button>

      {/* Chatbot Modal */}
      {open && (
        <div className="chatbot-modal">
          <div
            className="chatbot-container"
            style={{
              backgroundImage: "url(/bgimage.png)",
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
                backgroundColor: "rgba(0, 0, 0, 0.8)", // Dark overlay (adjust opacity)
                boxShadow: "inset 0 0 10px rgba(0, 0, 0, 0.6)", // Shadow effect
                zIndex: 1, // Keep it above background image
              }}
            ></div>
            <div style={{ position: "relative", zIndex: 2 }}>
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
                  <div
                    className="col-md-8 col-lg-8"
                    style={{
                      overflowY: "auto",
                      position: "relative",
                      height: "100%",
                    }}
                  >
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
                              src="/persona.png"
                              alt="Bot Avatar"
                              className="small-avatar"
                            />
                          )}
                          <div className="msg">
                            <p>{renderMessage(msg.text)}</p>
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
                      src="/persona.gif"
                      alt="persona"
                      style={{ width: "100%", height: "auto" }}
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
