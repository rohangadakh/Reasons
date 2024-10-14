import React, { useState, useEffect, useRef } from "react";

const EveryDay = () => {
  const [activePopup, setActivePopup] = useState(null);
  const [hoveredItem, setHoveredItem] = useState(null);
  const [imageSize, setImageSize] = useState({ width: 0, height: 0 });
  const imgRef = useRef(null);
  const cardsRef = useRef([]);

  // Update image dimensions dynamically
  const updateImageSize = () => {
    if (imgRef.current) {
      const { width, height } = imgRef.current.getBoundingClientRect();
      setImageSize({ width, height });
    }
  };

  useEffect(() => {
    // Update image size on window resize
    window.addEventListener("resize", updateImageSize);
    updateImageSize(); // Initial size

    return () => window.removeEventListener("resize", updateImageSize);
  }, []);

  // Function to calculate hotspot position relative to the image's dynamic size
  const getHotspotStyle = (xCoord, yCoord) => {
    const originalWidth = 736; // Original width of the image
    const originalHeight = 1104; // Original height of the image

    // Calculate proportional positions based on current image size
    const top = (imageSize.height * yCoord) / originalHeight;
    const left = (imageSize.width * xCoord) / originalWidth;
    return { top: `${top}px`, left: `${left}px` };
  };

  // Function to handle hotspot click for mobile
  const handleHotspotClick = (item) => {
    if (window.innerWidth < 768) {
      // Mobile view
      const cardIndex =
        item === "necklace"
          ? 0
          : item === "earrings"
          ? 1
          : item === "ring"
          ? 2
          : 3; // Adjust indices based on your cards
      cardsRef.current[cardIndex].scrollIntoView({ behavior: "smooth" });
    } else {
      setActivePopup(item);
    }
  };

  return (
    <div className="flex flex-col">
      {/* Main Image Section */}
      <div className="relative w-full">
        {/* Main Image */}
        <img
          ref={imgRef}
          src="https://i.pinimg.com/736x/bb/b2/f9/bbb2f92d5dee0449faebd4eb5f0420f1.jpg"
          alt="Model"
          className="w-full h-auto object-cover"
          onLoad={updateImageSize}
        />

        {/* Hotspot for Necklace at coordinates (381, 549) */}
        <div
          className="absolute w-8 h-8 bg-transparent cursor-pointer neon-effect"
          style={getHotspotStyle(381, 549)} // Coordinates for necklace
          onClick={() => handleHotspotClick("necklace")}
          onMouseEnter={() => setHoveredItem("necklace")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          {/* Blinking Circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full border-2 bg-purple-500 animate-blink"></div>
          </div>
        </div>

        {/* Hotspot for Earrings at coordinates (478, 291) */}
        <div
          className="absolute w-8 h-8 bg-transparent cursor-pointer neon-effect"
          style={getHotspotStyle(458, 305)} // Coordinates for earrings
          onClick={() => handleHotspotClick("earrings")}
          onMouseEnter={() => setHoveredItem("earrings")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          {/* Blinking Circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full border-2 bg-purple-500 animate-blink"></div>
          </div>
        </div>

        {/* Hotspot for Ring at coordinates (489, 668) */}
        <div
          className="absolute w-8 h-8 bg-transparent cursor-pointer neon-effect"
          style={getHotspotStyle(489, 668)} // Coordinates for ring
          onClick={() => handleHotspotClick("ring")}
          onMouseEnter={() => setHoveredItem("ring")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          {/* Blinking Circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full border-2 bg-purple-500 animate-blink"></div>
          </div>
        </div>

        {/* Hotspot for Bracelet at coordinates (301, 820) */}
        <div
          className="absolute w-8 h-8 bg-transparent cursor-pointer neon-effect"
          style={getHotspotStyle(301, 820)} // Coordinates for bracelet
          onClick={() => handleHotspotClick("bracelet")}
          onMouseEnter={() => setHoveredItem("bracelet")}
          onMouseLeave={() => setHoveredItem(null)}
        >
          {/* Blinking Circle */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-4 h-4 rounded-full border-2 bg-purple-500 animate-blink"></div>
          </div>
        </div>

        {/* Popups */}
        {activePopup && (
          <div className="absolute inset-0 flex items-center justify-center bg-gray-800 bg-opacity-50 z-20">
            <div className="bg-white p-4 rounded-lg shadow-lg relative">
              <button
                className="absolute top-2 right-2 text-purple-600"
                onClick={() => setActivePopup(null)}
              >
                ✕
              </button>
            </div>
          </div>
        )}

        {/* Hover Image Preview */}
        {hoveredItem === "necklace" && (
          <div
            className="absolute rounded-full border-2 border-purple-600"
            style={{
              ...getHotspotStyle(381, 549), // Use the same coordinates for positioning
              top: getHotspotStyle(381, 549).top,
              left: `calc(${getHotspotStyle(381, 549).left} + 20px)`,
              width: "80px",
              height: "80px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
            }}
          >
            <img
              src="https://tyaani.com/cdn/shop/products/JDN60260_728333a8-4afd-4a01-a6a6-8695879a9388.jpg?v=1689848046&width=1500"
              alt="Necklace"
              className="object-cover w-full h-full"
            />
          </div>
        )}
        {hoveredItem === "earrings" && (
          <div
            className="absolute rounded-full border-2 border-purple-600"
            style={{
              ...getHotspotStyle(458, 305),
              top: getHotspotStyle(458, 305).top,
              left: `calc(${getHotspotStyle(458, 305).left} + 20px)`,
              width: "80px",
              height: "80px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
            }}
          >
            <img
              src="https://tyaani.com/cdn/shop/products/JDT60260_e90982f3-bb83-4442-ba61-3ba070716eea.jpg?v=1689848046&width=1500"
              alt="Earrings"
              className="object-cover w-full h-full"
            />
          </div>
        )}
        {hoveredItem === "ring" && (
          <div
            className="absolute rounded-full border-2 border-purple-600"
            style={{
              ...getHotspotStyle(489, 668),
              top: getHotspotStyle(489, 668).top,
              left: `calc(${getHotspotStyle(489, 668).left} + 20px)`,
              width: "80px",
              height: "80px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
            }}
          >
            <img
              src="https://www.curiocottage.in/cdn/shop/files/FRE102_2_3a021959-51f6-4b80-8c7d-af1a9cc97bac_2048x2048.jpg?v=1700375566"
              alt="Ring"
              className="object-cover w-full h-full"
            />
          </div>
        )}
        {hoveredItem === "bracelet" && (
          <div
            className="absolute rounded-full border-2 border-purple-600"
            style={{
              ...getHotspotStyle(301, 820),
              top: getHotspotStyle(301, 820).top,
              left: `calc(${getHotspotStyle(301, 820).left} + 20px)`,
              width: "80px",
              height: "80px",
              overflow: "hidden",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backgroundColor: "white",
            }}
          >
            <img
              src="https://ishhaara.com/cdn/shop/files/ishhaara-handmade-triangle-shaped-kundan-and-pearl-studded-bangle-42514897415451.jpg?v=1728560772&width=600"
              alt="Bracelet"
              className="object-cover w-full h-full"
            />
          </div>
        )}
      </div>

      {/* Cards Section with Border and Margin */}
      <div className="lg:pl-4 p-4 mt-4"> {/* Spacing between image and cards */}
        <div className="border border-gray-400 p-4 rounded-3xl shadow-lg bg-white">
          <div className="grid grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { name: "Necklace", image: "https://tyaani.com/cdn/shop/products/JDN60260_728333a8-4afd-4a01-a6a6-8695879a9388.jpg" },
              { name: "Earrings", image: "https://tyaani.com/cdn/shop/products/JDT60260_e90982f3-bb83-4442-ba61-3ba070716eea.jpg" },
              { name: "Ring", image: "https://www.curiocottage.in/cdn/shop/files/FRE102_2_3a021959-51f6-4b80-8c7d-af1a9cc97bac_2048x2048.jpg?v=1700375566" },
              { name: "Bracelet", image: "https://ishhaara.com/cdn/shop/files/ishhaara-handmade-triangle-shaped-kundan-and-pearl-studded-bangle-42514897415451.jpg?v=1728560772&width=600" },
            ].map((item, index) => (
              <div
                key={index}
                ref={(el) => (cardsRef.current[index] = el)} // Reference for scrolling
                className={`relative p-4 rounded-3xl bg-gray-100 transition-opacity duration-300 transform hover:scale-105 ${
                  activePopup === null || activePopup === item.name.toLowerCase() ? "opacity-100" : "opacity-50"
                }`}
                onClick={() => handleHotspotClick(item.name.toLowerCase())} // Handle click for mobile
              >
                <img
                  src={item.image} // Use actual image URLs
                  alt={item.name}
                  className="w-full h-48 object-cover rounded-3xl"
                />
                <p className="mt-2 text-center text-lg font-semibold text-gray-800">{item.name}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EveryDay;
