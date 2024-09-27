
// import { useState } from "react";


// interface AccessibilityPanelProps {
//     setPosition: (position: "left" | "right") => void;
//     position: "left" | "right";
//     closePanel: () => void;
//   }
  
//   const AccessibilityPanel: React.FC<AccessibilityPanelProps> = ({
//     setPosition,
//     position,
//     closePanel,
//   }) => {
//     const [fontSize, setFontSize] = useState(16);
//     const [highContrast, setHighContrast] = useState(false);
//     const [hideImages, setHideImages] = useState(false);
//     const [saturation, setSaturation] = useState(100);
  
//     // Increase font size
//     const increaseFontSize = () => {
//       setFontSize(fontSize + 2);
//       document.documentElement.style.fontSize = `${fontSize + 2}px`;
//     };
  
//     // Decrease font size
//     const decreaseFontSize = () => {
//       setFontSize(fontSize > 12 ? fontSize - 2 : fontSize);
//       document.documentElement.style.fontSize = `${fontSize - 2}px`;
//     };
  
//     // Toggle high contrast mode for the entire site, including the accessibility menu
//     const toggleContrast = () => {
//       setHighContrast(!highContrast);
//       if (!highContrast) {
//         document.documentElement.classList.add("dark"); // Apply Tailwind's dark mode for contrast
//       } else {
//         document.documentElement.classList.remove("dark");
//       }
//     };
  
//     // Toggle image visibility
//     const toggleImages = () => {
//       setHideImages(!hideImages);
//       const images = document.querySelectorAll("img");
//       images.forEach((img) => {
//         img.style.visibility = hideImages ? "visible" : "hidden";
//       });
//     };
  
//     // Adjust saturation
//     const adjustSaturation = (level: number) => {
//       setSaturation(level);
//       document.documentElement.style.filter = `saturate(${saturation}%)`;
//     };
  
//     // Reset all settings
//     const resetSettings = () => {
//       setFontSize(16);
//       setHighContrast(false);
//       setHideImages(false);
//       setSaturation(100);
//       document.documentElement.style.fontSize = "16px";
//       document.documentElement.classList.remove("dark");
//       document.documentElement.style.filter = "saturate(100%)";
//       const images = document.querySelectorAll("img");
//       images.forEach((img) => (img.style.visibility = "visible"));
//     };
  
//     const togglePanelPosition = () => {
//       setPosition(position === "right" ? "left" : "right");
//     };
  
//     return (
//       <div
//         className={`fixed top-0 ${position === "right" ? "right-4" : "left-4"} w-64 bg-gray-200 dark:bg-contrast-bg dark:text-contrast-text p-4 shadow-lg rounded-lg z-50`}
//       >
//         <h3  dir="rtl" className="text-lg font-bold mb-4">הגדרות נגישות</h3>
  
//         <button
//           className="block w-full p-2 mb-2 bg-blue-500 dark:bg-contrast-button-bg dark:text-contrast-button-text text-white rounded"
//           onClick={increaseFontSize}
//         >
//           הגדלת טקסט
//         </button>
  
//         <button
//           className="block w-full p-2 mb-2 bg-blue-500 dark:bg-contrast-button-bg dark:text-contrast-button-text text-white rounded"
//           onClick={decreaseFontSize}
//         >
//           הקטנת טקסט
//         </button>
  
//         <button
//           className="block w-full p-2 mb-2 bg-gray-800 dark:bg-contrast-button-bg dark:text-contrast-button-text text-white rounded"
//           onClick={toggleContrast}
//         >
//           ניגודיות 
//         </button>
  
//         <button
//           className="block w-full p-2 mb-2 bg-yellow-800 dark:bg-contrast-button-bg dark:text-contrast-button-text text-white rounded"
//           onClick={toggleImages}
//         >
//           הסתרת תמונות
//         </button>
  
//         <label className="block mb-2">
//           <span className="block text-gray-700 dark:text-contrast-text">רוויה</span>
//           <input
//             type="range"
//             min="0"
//             max="200"
//             value={saturation}
//             onChange={(e) => adjustSaturation(Number(e.target.value))}
//             className="w-full"
//           />
//         </label>
  
//         <button
//           className="block w-full p-2 mb-2 bg-indigo-500 dark:bg-contrast-button-bg dark:text-contrast-button-text text-white rounded"
//           onClick={togglePanelPosition}
//         >
//           הזז ל{position === "right" ? "שמאל" : "ימין"}
//         </button>
  
//         <button
//           className="block w-full p-2 mb-2 bg-red-500 dark:bg-contrast-button-bg dark:text-contrast-button-text text-white rounded"
//           onClick={resetSettings}
//         >
//           איפוס כל ההגדרות
//         </button>
  
//         <button
//           className="block w-full p-2 bg-gray-500 dark:bg-contrast-button-bg dark:text-contrast-button-text text-white rounded"
//           onClick={closePanel}
//         >
//           סגור
//         </button>
//       </div>
//     );
//   };
  
//   export default AccessibilityPanel;
  
import { useState } from "react";

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

  // Toggle high contrast mode for the entire site
  const toggleContrast = () => {
    setHighContrast(!highContrast);
    if (!highContrast) {
      document.documentElement.classList.add("dark");
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
    document.documentElement.style.filter = `saturate(${level}%)`;
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
      className={`fixed top-0 ${position === "right" ? "right-4" : "left-4"} w-64 bg-gray-200 dark:bg-gray-600 dark:text-white p-4  my-32 shadow-lg rounded-lg z-50`}
    >
      <h3 dir="rtl" className="text-lg font-bold mb-4">
        הגדרות נגישות
      </h3>

      <button
        className="block w-full p-2 mb-2 bg-blue-500 dark:bg-gray-700 text-white rounded"
        onClick={increaseFontSize}
      >
        הגדלת טקסט
      </button>

      <button
        className="block w-full p-2 mb-2 bg-blue-500 dark:bg-gray-700 text-white rounded"
        onClick={decreaseFontSize}
      >
        הקטנת טקסט
      </button>

      <button
        className="block w-full p-2 mb-2 bg-gray-800 dark:bg-gray-700 text-white rounded"
        onClick={toggleContrast}
      >
        {highContrast ? "הסר ניגודיות" : "ניגודיות גבוהה"}
      </button>

      <button
        className="block w-full p-2 mb-2 bg-yellow-800 dark:bg-gray-700 text-white rounded"
        onClick={toggleImages}
      >
        הסתרת תמונות
      </button>

      <label className="block mb-2">
        <span className="block text-gray-700 dark:text-white">רוויה</span>
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
        className="block w-full p-2 mb-2 bg-indigo-500 dark:bg-gray-700 text-white rounded"
        onClick={togglePanelPosition}
      >
        הזז ל{position === "right" ? "שמאל" : "ימין"}
      </button>

      <button
        className="block w-full p-2 mb-2 bg-red-500 dark:bg-gray-700 text-white rounded"
        onClick={resetSettings}
      >
        איפוס כל ההגדרות
      </button>

      <button
        className="block w-full p-2 bg-gray-500 dark:bg-gray-700 text-white rounded"
        onClick={closePanel}
      >
        סגור
      </button>
    </div>
  );
};

export default AccessibilityPanel;
