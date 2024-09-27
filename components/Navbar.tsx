import { useState, useEffect } from 'react';
import { useRouter } from 'next/router'; // Import useRouter from Next.js
import { auth } from '../lib/firebase';
import { onAuthStateChanged, signOut } from 'firebase/auth';

interface NavbarProps {
  setSelectedSection: (section: string) => void;
}

export default function Navbar({ setSelectedSection }: NavbarProps) {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [startX, setStartX] = useState(0); // Track touch start position
  const router = useRouter(); // Initialize the router

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setIsAuthenticated(!!user);
    });

    return () => unsubscribe();
  }, []);

  const handleLogout = () => {
    signOut(auth);
    setSelectedSection('home'); // Set to home after logout
  };

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogin = () => {
    setSelectedSection('login');
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setStartX(e.touches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    const touchX = e.touches[0].clientX;
    if (startX - touchX > 50) {
      // Swipe left detected (more than 50px)
      setIsOpen(false);
    }
  };

  return (
    <header dir="rtl" className={`${isOpen ? 'bg-transparent' : 'bg-gradient-to-r from-pink-300 to-purple-100 dark:from-gray-800 dark:to-gray-900'} text-black dark:text-gray-300`}>
      <nav className="container mx-auto flex items-center justify-center">
        {/* Links Section */}
        <div className={`flex flex-col md:flex-row items-center ${isOpen ? 'block' : 'hidden'} md:block`}>
          <div className="flex flex-wrap justify-center space-x-6 p-4">
            <button onClick={() => setSelectedSection('home')} className="text-xl px-4 font-bold hover:text-purple-700 dark:hover:text-purple-300 transition duration-300">
              עמוד הבית
            </button>
            <button onClick={() => setSelectedSection('treatments')} className="text-xl px-4 font-bold hover:text-purple-700 dark:hover:text-purple-300 transition duration-300">
              טיפולים
            </button>
            <button onClick={() => setSelectedSection('questions')} className="text-xl px-4 font-bold hover:text-purple-700 dark:hover:text-purple-300 transition duration-300">
              שאלות ותשובות
            </button>
            <button onClick={() => setSelectedSection('contact')} className="text-xl px-4 font-bold hover:text-purple-700 dark:hover:text-purple-300 transition duration-300">
              יצירת קשר
            </button>
            {!isAuthenticated ? (
              <button onClick={handleLogin} className="text-xl px-4 font-bold hover:text-purple-700 dark:hover:text-purple-300 transition duration-300">
                Login
              </button>
            ) : (
              <>
                <button onClick={() => setSelectedSection('edit')} className="text-xl font-bold hover:text-purple-700 dark:hover:text-purple-300 transition duration-300">
                  עריכת תוכן
                </button>
                <button onClick={handleLogout} className="bg-red-600 hover:bg-red-500 dark:bg-red-700 dark:hover:bg-red-600 text-white py-1 px-3 rounded transition duration-300">
                  Logout
                </button>
              </>
            )}
          </div>
        </div>

        {/* Hamburger Menu */}
        <button 
          onClick={toggleSidebar} 
          className="md:hidden focus:outline-none fixed right-4 top-4 z-50 text-gray-800 dark:text-gray-300"
        >
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
          </svg>
        </button>
      </nav>

      {/* Sidebar for mobile */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-white dark:bg-gray-800 bg-opacity-90 dark:bg-opacity-90 z-50 p-4 md:hidden transition-all duration-300"
          onTouchStart={handleTouchStart} // Detect touch start
          onTouchMove={handleTouchMove}   // Detect swipe
        >
          <div className="flex flex-col space-y-4">
            <button onClick={toggleSidebar} className="self-end text-black dark:text-gray-300">
              Close
            </button>
            <button onClick={() => setSelectedSection('home')} className="text-lg font-bold hover:text-purple-700 dark:hover:text-purple-300">
              עמוד הבית
            </button>
            <button onClick={() => setSelectedSection('treatments')} className="text-lg font-bold hover:text-purple-700 dark:hover:text-purple-300">
              טיפולים
            </button>
            <button onClick={() => setSelectedSection('questions')} className="text-lg font-bold hover:text-purple-700 dark:hover:text-purple-300">
              שאלות ותשובות
            </button>
            <button onClick={() => setSelectedSection('contact')} className="text-lg font-bold hover:text-purple-700 dark:hover:text-purple-300">
              יצירת קשר
            </button>
            {!isAuthenticated ? (
              <button onClick={handleLogin} className="text-lg font-bold hover:text-purple-700 dark:hover:text-purple-300">
                Login
              </button>
            ) : (
              <>
                <button onClick={() => setSelectedSection('edit')} className="text-lg font-bold hover:text-purple-700 dark:hover:text-purple-300">
                  עריכת תוכן
                </button>
                <button onClick={handleLogout} className="bg-red-600 hover:bg-red-500 dark:bg-red-700 dark:hover:bg-red-600 text-white py-1 px-3 rounded">
                  Logout
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </header>
  );
}
