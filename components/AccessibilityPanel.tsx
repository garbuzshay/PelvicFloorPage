// import { useState, useEffect } from "react";

import { useState } from "react";



// interface AccessibilityPanelProps {
//   setPosition: (position: "left" | "right") => void; // Ensure setPosition is typed correctly
//   position: "left" | "right"; // Current position (left or right)
//   closePanel: () => void; // Function to close the panel
// }

// const AccessibilityPanel: React.FC<AccessibilityPanelProps> = ({
//   setPosition,
//   position,
//   closePanel,
// }) => {
//   const [fontSize, setFontSize] = useState(16); // Default font size
//   const [highContrast, setHighContrast] = useState(false);
//   const [hideImages, setHideImages] = useState(false);
//   const [saturation, setSaturation] = useState(100);
//   const [magnifierActive, setMagnifierActive] = useState(false); // New state for magnifier

//   // Font Increase
//   const increaseFontSize = () => {
//     setFontSize((prev) => prev + 2);
//     document.documentElement.style.fontSize = `${fontSize}px`;
//   };

//   // Font Decrease
//   const decreaseFontSize = () => {
//     setFontSize((prev) => (prev > 12 ? prev - 2 : prev)); // Minimum font size is 12px
//     document.documentElement.style.fontSize = `${fontSize}px`;
//   };

//   // Toggle High Contrast Mode
//   const toggleContrast = () => {
//     setHighContrast(!highContrast);
//     const allElements = document.querySelectorAll("*");
//     allElements.forEach((el) => {
//       if (el instanceof HTMLElement) {
//         const computedStyle = window.getComputedStyle(el);
//         const bgColor = computedStyle.backgroundColor;
//         const color = computedStyle.color;

//         if (highContrast) {
//           el.style.backgroundColor = bgColor === "rgb(0, 0, 0)" ? "" : bgColor;
//           el.style.color = color === "rgb(255, 255, 255)" ? "" : color;
//         } else {
//           el.style.backgroundColor = "black";
//           el.style.color = "white";
//         }
//       }
//     });
//   };

//   // Toggle Image Visibility
//   const toggleImages = () => {
//     setHideImages(!hideImages);
//     const images = document.querySelectorAll("img");
//     images.forEach((img) => {
//       img.style.visibility = hideImages ? "visible" : "hidden";
//     });
//   };

//   // Adjust Saturation
//   const adjustSaturation = (level: number) => {
//     setSaturation(level);
//     document.documentElement.style.filter = `saturate(${saturation}%)`;
//   };

//   // Reset All Accessibility Settings
//   const resetSettings = () => {
//     setFontSize(16);
//     setHighContrast(false);
//     setHideImages(false);
//     setSaturation(100);
//     setMagnifierActive(false); // Disable magnifier when reset

//     document.documentElement.style.fontSize = "16px";
//     document.documentElement.style.backgroundColor = "";
//     document.documentElement.style.color = "";
//     document.documentElement.style.filter = "saturate(100%)";
//     const images = document.querySelectorAll("img");
//     images.forEach((img) => (img.style.visibility = "visible"));
//   };

//   // Toggle Panel Position (Left/Right)
//   const togglePanelPosition = () => {
//     setPosition(position === "right" ? "left" : "right");
//   };

//   // Toggle Magnifier
//   const toggleMagnifier = () => {
//     setMagnifierActive(!magnifierActive);
//   };

//   useEffect(() => {
//     const magnifierDiv = document.createElement("div");
//     magnifierDiv.style.position = "fixed";
//     magnifierDiv.style.border = "3px solid #000";
//     magnifierDiv.style.borderRadius = "50%";
//     magnifierDiv.style.overflow = "hidden";
//     magnifierDiv.style.width = "150px";
//     magnifierDiv.style.height = "150px";
//     magnifierDiv.style.transform = "scale(1.5)";
//     magnifierDiv.style.pointerEvents = "none";
//     magnifierDiv.style.display = "none"; // Hidden by default
//     magnifierDiv.style.zIndex = "1000";
//     magnifierDiv.style.backgroundClip = "content-box";

//     const magnifierContent = document.createElement("div");
//     magnifierContent.style.position = "absolute";
//     magnifierContent.style.width = "300%"; // Zoom level
//     magnifierContent.style.height = "300%"; // Zoom level
//     magnifierContent.style.transform = "scale(0.33)"; // Reverse the zoom for content
//     magnifierDiv.appendChild(magnifierContent);

//     document.body.appendChild(magnifierDiv);

//     const moveMagnifier = (event: MouseEvent) => {
//       magnifierDiv.style.left = `${event.pageX - 75}px`;
//       magnifierDiv.style.top = `${event.pageY - 75}px`;
//       magnifierContent.style.left = `-${event.pageX * 3 - 225}px`; // Adjust zoomed content position
//       magnifierContent.style.top = `-${event.pageY * 3 - 225}px`;
//     };

//     if (magnifierActive) {
//       magnifierDiv.style.display = "block";
//       document.addEventListener("mousemove", moveMagnifier);
//     } else {
//       magnifierDiv.style.display = "none";
//       document.removeEventListener("mousemove", moveMagnifier);
//     }

//     // Cleanup
//     return () => {
//       document.removeEventListener("mousemove", moveMagnifier);
//       magnifierDiv.remove();
//     };
//   }, [magnifierActive]);

//   return (
//     <div
//       className={`fixed top-0 ${
//         position === "right" ? "right-4" : "left-4"
//       } w-64 bg-white p-4 shadow-lg rounded-lg z-50`}
//     >
//       <h2 className="text-lg font-bold mb-4">הגדרות נגישות</h2>

//       {/* Increase Font Size */}
//       <button
//         className="block w-full p-2 mb-2 bg-blue-500 text-white rounded"
//         onClick={increaseFontSize}
//       >
//         הגדלת טקסט
//       </button>

//       {/* Decrease Font Size */}
//       <button
//         className="block w-full p-2 mb-2 bg-blue-500 text-white rounded"
//         onClick={decreaseFontSize}
//       >
//         הקטנת טקסט
//       </button>

//       {/* Toggle High Contrast */}
//       <button
//         className="block w-full p-2 mb-2 bg-gray-800 text-white rounded"
//         onClick={toggleContrast}
//       >
//         ניגודיות גבוהה
//       </button>

//       {/* Hide Images */}
//       <button
//         className="block w-full p-2 mb-2 bg-yellow-500 text-white rounded"
//         onClick={toggleImages}
//       >
//         הסתרת תמונות
//       </button>

//       {/* Magnifier */}
//       <button
//         className={`block w-full p-2 mb-2 bg-green-500 text-white rounded ${
//           magnifierActive ? "bg-green-700" : ""
//         }`}
//         onClick={toggleMagnifier}
//       >
//         זכוכית מגדלת
//       </button>

//       {/* Saturation */}
//       <label className="block mb-2">
//         <span className="block text-gray-700">רוויה</span>
//         <input
//           type="range"
//           min="0"
//           max="200"
//           value={saturation}
//           onChange={(e) => adjustSaturation(Number(e.target.value))}
//           className="w-full"
//         />
//       </label>

//       {/* Move Panel Position */}
//       <button
//         className="block w-full p-2 mb-2 bg-indigo-500 text-white rounded"
//         onClick={togglePanelPosition} // Use the toggle function
//       >
//         הזז ל{position === "right" ? "שמאל" : "ימין"}
//       </button>

//       {/* Reset Settings */}
//       <button
//         className="block w-full p-2 mb-2 bg-red-500 text-white rounded"
//         onClick={resetSettings}
//       >
//         איפוס כל ההגדרות
//       </button>

//       {/* Close Panel */}
//       <button
//         className="block w-full p-2 bg-gray-500 text-white rounded"
//         onClick={closePanel}
//       >
//         סגור
//       </button>
//     </div>
//   );
// };

// export default AccessibilityPanel;

interface AccessibilityPanelProps {
    setPosition: (position: "left" | "right") => void;
    position: "left" | "right";
    closePanel: () => void;
  }
  
  const AccessibilityPanel: React.FC<AccessibilityPanelProps> = ({
    setPosition,
    position,
    closePanel,
  }) => {
    const [fontSize, setFontSize] = useState(16);
    const [highContrast, setHighContrast] = useState(false);
    const [hideImages, setHideImages] = useState(false);
    const [saturation, setSaturation] = useState(100);
  
    // Increase font size
    const increaseFontSize = () => {
      setFontSize(fontSize + 2);
      document.documentElement.style.fontSize = `${fontSize + 2}px`;
    };
  
    // Decrease font size
    const decreaseFontSize = () => {
      setFontSize(fontSize > 12 ? fontSize - 2 : fontSize);
      document.documentElement.style.fontSize = `${fontSize - 2}px`;
    };
  
    // Toggle high contrast mode for the entire site, including the accessibility menu
    const toggleContrast = () => {
      setHighContrast(!highContrast);
      if (!highContrast) {
        document.documentElement.classList.add("dark"); // Apply Tailwind's dark mode for contrast
      } else {
        document.documentElement.classList.remove("dark");
      }
    };
  
    // Toggle image visibility
    const toggleImages = () => {
      setHideImages(!hideImages);
      const images = document.querySelectorAll("img");
      images.forEach((img) => {
        img.style.visibility = hideImages ? "visible" : "hidden";
      });
    };
  
    // Adjust saturation
    const adjustSaturation = (level: number) => {
      setSaturation(level);
      document.documentElement.style.filter = `saturate(${saturation}%)`;
    };
  
    // Reset all settings
    const resetSettings = () => {
      setFontSize(16);
      setHighContrast(false);
      setHideImages(false);
      setSaturation(100);
      document.documentElement.style.fontSize = "16px";
      document.documentElement.classList.remove("dark");
      document.documentElement.style.filter = "saturate(100%)";
      const images = document.querySelectorAll("img");
      images.forEach((img) => (img.style.visibility = "visible"));
    };
  
    const togglePanelPosition = () => {
      setPosition(position === "right" ? "left" : "right");
    };
  
    return (
      <div
        className={`fixed top-0 ${position === "right" ? "right-4" : "left-4"} w-64 bg-gray-200 dark:bg-contrast-bg dark:text-contrast-text p-4 shadow-lg rounded-lg z-50`}
      >
        <h3  dir="rtl" className="text-lg font-bold mb-4">הגדרות נגישות</h3>
  
        <button
          className="block w-full p-2 mb-2 bg-blue-500 dark:bg-contrast-button-bg dark:text-contrast-button-text text-white rounded"
          onClick={increaseFontSize}
        >
          הגדלת טקסט
        </button>
  
        <button
          className="block w-full p-2 mb-2 bg-blue-500 dark:bg-contrast-button-bg dark:text-contrast-button-text text-white rounded"
          onClick={decreaseFontSize}
        >
          הקטנת טקסט
        </button>
  
        <button
          className="block w-full p-2 mb-2 bg-gray-800 dark:bg-contrast-button-bg dark:text-contrast-button-text text-white rounded"
          onClick={toggleContrast}
        >
          ניגודיות 
        </button>
  
        <button
          className="block w-full p-2 mb-2 bg-yellow-800 dark:bg-contrast-button-bg dark:text-contrast-button-text text-white rounded"
          onClick={toggleImages}
        >
          הסתרת תמונות
        </button>
  
        <label className="block mb-2">
          <span className="block text-gray-700 dark:text-contrast-text">רוויה</span>
          <input
            type="range"
            min="0"
            max="200"
            value={saturation}
            onChange={(e) => adjustSaturation(Number(e.target.value))}
            className="w-full"
          />
        </label>
  
        <button
          className="block w-full p-2 mb-2 bg-indigo-500 dark:bg-contrast-button-bg dark:text-contrast-button-text text-white rounded"
          onClick={togglePanelPosition}
        >
          הזז ל{position === "right" ? "שמאל" : "ימין"}
        </button>
  
        <button
          className="block w-full p-2 mb-2 bg-red-500 dark:bg-contrast-button-bg dark:text-contrast-button-text text-white rounded"
          onClick={resetSettings}
        >
          איפוס כל ההגדרות
        </button>
  
        <button
          className="block w-full p-2 bg-gray-500 dark:bg-contrast-button-bg dark:text-contrast-button-text text-white rounded"
          onClick={closePanel}
        >
          סגור
        </button>
      </div>
    );
  };
  
  export default AccessibilityPanel;
  