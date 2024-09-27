// import { useState } from "react";
// import AccessibilityPanel from "./AccessibilityPanel";

// const AccessibilityMenu = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [position, setPosition] = useState<"left" | "right">("left"); // Default to the left side

//   return (
//     <div className={`fixed bottom-4 ${position === "right" ? "right-2" : "left-2"} z-50`}>
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
    <div className={`fixed bottom-4 ${position === "right" ? "right-0" : "left-0"} z-50`}>
      {menuOpen && (
        <AccessibilityPanel
          setPosition={setPosition}
          position={position}
          closePanel={() => setMenuOpen(false)}
        />
      )}

      <button
        className={`bg-blue-600 text-white text-3xl rounded-full shadow-lg focus:outline-none transition-transform duration-300 hover:scale-110 
          ${position === "right" ? "rounded-l-full rounded-r-none" : "rounded-r-full rounded-l-none"}
        `}
        style={{
          clipPath: position === "right" ? "polygon(0 0, 100% 0, 100% 100%, 0 100%, 0 50%)" : "polygon(100% 0, 100% 50%, 100% 100%, 0 100%, 0 0)",
          width: "4rem",
          height: "4rem",
          position: "relative",
        }}
        onClick={() => setMenuOpen(!menuOpen)}
        aria-label="Toggle Accessibility Menu"
      >
        ♿
      </button>
    </div>
  );
};

export default AccessibilityMenu;
