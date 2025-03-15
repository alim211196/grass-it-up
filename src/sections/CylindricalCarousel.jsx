import React, { useRef } from "react";
import "../App.css";

const images = [
  "https://images.ctfassets.net/tuohjudwxvzs/9Ff7V1JqJwu0cfYEJ4kWt/ef7b0e440769d005afdc9466fae600a0/chairs_nemcam.png",
  "https://images.ctfassets.net/tuohjudwxvzs/9Ff7V1JqJwu0cfYEJ4kWt/ef7b0e440769d005afdc9466fae600a0/chairs_nemcam.png",
  "https://images.ctfassets.net/tuohjudwxvzs/9Ff7V1JqJwu0cfYEJ4kWt/ef7b0e440769d005afdc9466fae600a0/chairs_nemcam.png",
  "https://images.ctfassets.net/tuohjudwxvzs/9Ff7V1JqJwu0cfYEJ4kWt/ef7b0e440769d005afdc9466fae600a0/chairs_nemcam.png",
  "https://images.ctfassets.net/tuohjudwxvzs/9Ff7V1JqJwu0cfYEJ4kWt/ef7b0e440769d005afdc9466fae600a0/chairs_nemcam.png",
  "https://images.ctfassets.net/tuohjudwxvzs/9Ff7V1JqJwu0cfYEJ4kWt/ef7b0e440769d005afdc9466fae600a0/chairs_nemcam.png",
  "https://images.ctfassets.net/tuohjudwxvzs/9Ff7V1JqJwu0cfYEJ4kWt/ef7b0e440769d005afdc9466fae600a0/chairs_nemcam.png",
];

// const CylindricalCarousel = () => {
//   const scrollRef = useRef(null);

//   // Drag to Scroll Functionality
//   const handleMouseDown = (e) => {
//     const slider = scrollRef.current;
//     let startX = e.pageX - slider.offsetLeft;
//     let scrollLeft = slider.scrollLeft;

//     const handleMouseMove = (e) => {
//       const x = e.pageX - slider.offsetLeft;
//       const walk = (x - startX) * 2; // Scroll Speed
//       slider.scrollLeft = scrollLeft - walk;
//     };

//     const handleMouseUp = () => {
//       window.removeEventListener("mousemove", handleMouseMove);
//       window.removeEventListener("mouseup", handleMouseUp);
//     };

//     window.addEventListener("mousemove", handleMouseMove);
//     window.addEventListener("mouseup", handleMouseUp);
//   };

//   return (
//     <div className="carousel-container1">
//       <h2 className="text-center">Instagram Feed</h2>
//       <div
//         className="scroll-container"
//         ref={scrollRef}
//         onMouseDown={handleMouseDown}
//       >
//         {images.map((img, index) => (
//           <div
//             className="image-wrapper"
//             key={index}
//             style={{ "--index": index }}
//           >
//             <img
//               src={img}
//               alt={`Image ${index + 1}`}
//               className="carousel-image1"
//             />
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// };

const CylindricalCarousel = () => {
  const scrollRef = useRef(null);

  const handleMouseDown = (e) => {
    const slider = scrollRef.current;
    let startX = e.pageX - slider.offsetLeft;
    let scrollLeft = slider.scrollLeft;

    const handleMouseMove = (e) => {
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 2;
      slider.scrollLeft = scrollLeft - walk;
    };

    const handleMouseUp = () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseup", handleMouseUp);
  };

  return (
    <div className="carousel-container1">
      <h2 className="text-center">Instagram Feed</h2>
      <div
        className="scroll-container"
        ref={scrollRef}
        onMouseDown={handleMouseDown}
      >
        {images.map((img, index) => (
          <div
            className="image-wrapper"
            key={index}
            style={{ "--index": index }}
          >
            <img
              src={img}
              alt={`Image ${index + 1}`}
              className="carousel-image1"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default CylindricalCarousel;
