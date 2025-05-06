// TalkingAgentScreen.jsx
import React, { useEffect } from "react";
import HeroBanner from "./HomePage/subComponents/HeroBanner";

const TalkingAgentScreen = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.type = "module";
    script.src = "https://agent.d-id.com/v1/index.js";
    script.setAttribute("data-name", "did-agent");
    script.setAttribute("data-mode", "fabio");
    script.setAttribute(
      "data-client-key",
      "Z29vZ2xlLW9hdXRoMnwxMDI2NDc0MDM2MjQ1NTE2NTE3Mzg6Z1dUUVBVdW10QTFyYWEyT21nRE9q"
    );
    script.setAttribute("data-agent-id", "agt_TazyjEHU");
    script.setAttribute("data-monitor", "true");

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <HeroBanner />
    </>
  );
};

export default TalkingAgentScreen;
