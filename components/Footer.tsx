// export default function Footer() {
//   return (
//     <footer className="bg-gradient-to-l from-pink-200 to-purple-400 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-300 p-4">
//       <div className="container mx-auto text-center">
//         © 2024 Pelvic Floor Physiotherapy - All Rights Reserved
//       </div>
//     </footer>
//   );
// }import { useState, useRef, useEffect } from 'react';
import { useState, useRef, useEffect } from 'react';

export default function Footer() {
  const [showDisclaimer, setShowDisclaimer] = useState(false);
  const disclaimerRef = useRef<HTMLDivElement>(null);

  const handleToggleDisclaimer = () => {
    setShowDisclaimer((prev) => !prev);
  };

  useEffect(() => {
    if (showDisclaimer && disclaimerRef.current) {
      disclaimerRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [showDisclaimer]);

  return (
    <>
      <footer className="bg-gradient-to-l from-pink-200 to-purple-400 dark:from-gray-800 dark:to-gray-900 text-gray-800 dark:text-gray-300 p-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-left">
            © 2024 Pelvic Floor Physiotherapy - All Rights Reserved
          </div>
          <button
            onClick={handleToggleDisclaimer}
            className="mt-2 md:mt-0 text-blue-500 hover:text-blue-700 underline"
            aria-expanded={showDisclaimer}
            aria-controls="disclaimer"
          >
            הצהרת אחריות
          </button>
        </div>
      </footer>

      {showDisclaimer && (
        <div dir="rtl"
          id="disclaimer"
          ref={disclaimerRef}
          className="bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-300 p-6 container mx-auto mt-4 mb-10 rounded-lg shadow-lg transition-transform duration-500 ease-in-out"
        >
          <h2 className="text-xl font-semibold mb-4 text-right">הצהרת הסרת אחריות רפואית</h2>
          <p className="mb-2 text-right">
            התכנים המוצגים באתר/בעמוד זה נועדו למטרות כלליות בלבד ואינם מהווים ייעוץ רפואי, אבחון או טיפול אישי. אין לראות בתכנים אלו תחליף לייעוץ מקצועי של רופא או מומחה מוסמך. לפני יישום כל מידע או הנחיה מהתכנים, יש להיוועץ ברופא או איש מקצוע רפואי המתמחה בתחום המתאים למצבך הבריאותי.
          </p>
          <p className="text-right">
            הכותבים והיוצרים של התכנים אינם נושאים באחריות לכל נזק, ישיר או עקיף, העלול להיגרם כתוצאה מהשימוש במידע המוצג. כל פעולה שתתבצע על בסיס המידע היא על אחריותך בלבד.
          </p>
        </div>
      )}
    </>
  );
}
