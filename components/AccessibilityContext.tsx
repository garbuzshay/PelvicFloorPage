import { createContext, useContext, useState, ReactNode } from "react";

// Define the context value type
interface AccessibilityContextType {
  hideImages: boolean;
  toggleHideImages: () => void;
}

// Create the context
const AccessibilityContext = createContext<AccessibilityContextType | undefined>(undefined);

// Provide the context
export const AccessibilityProvider = ({ children }: { children: ReactNode }) => {
  const [hideImages, setHideImages] = useState(false);

  const toggleHideImages = () => {
    setHideImages((prev) => !prev);
  };

  return (
    <AccessibilityContext.Provider value={{ hideImages, toggleHideImages }}>
      {children}
    </AccessibilityContext.Provider>
  );
};

// Custom hook to use the accessibility context
export const useAccessibility = () => {
  const context = useContext(AccessibilityContext);
  if (!context) {
    throw new Error("useAccessibility must be used within an AccessibilityProvider");
  }
  return context;
};
