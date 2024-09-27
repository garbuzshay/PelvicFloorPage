
// import { useState } from "react";
// import AccessibilityPanel from "./AccessibilityPanel";

// const AccessibilityMenu = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [position, setPosition] = useState<"left" | "right">("right");

//   return (
//     <div className={`fixed bottom-4 ${position === "right" ? "right-4" : "left-4"} z-50`}>
//       {menuOpen && (
//         <AccessibilityPanel
//           setPosition={setPosition}
//           position={position}
//           closePanel={() => setMenuOpen(false)}
//         />
//       )}

//       <button
//         className="bg-blue-600 text-white p-3 text-2xl rounded-full shadow-lg focus:outline-none transition-transform duration-300 hover:scale-110"
//         onClick={() => setMenuOpen(!menuOpen)}
//         aria-label="Toggle Accessibility Menu"
//       >
//         ♿
//       </button>
//     </div>
//   );
// };

// export default AccessibilityMenu;


import { useState } from "react";
import AccessibilityPanel from "./AccessibilityPanel";

const AccessibilityMenu = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [position, setPosition] = useState<"left" | "right">("left"); // Default to the left side

  return (
    <div className={`fixed bottom-4 ${position === "right" ? "right-2" : "left-2"} z-50`}>
      {menuOpen && (
        <AccessibilityPanel
          setPosition={setPosition}
          position={position}
          closePanel={() => setMenuOpen(false)}
        />
      )}

      <button
        className="bg-blue-600 text-white p-3 text-2xl rounded-full shadow-lg focus:outline-none transition-transform duration-300 hover:scale-110"
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Accessibility Menu"
      >
        ♿
      </button>
    </div>
  );
};

export default AccessibilityMenu;
