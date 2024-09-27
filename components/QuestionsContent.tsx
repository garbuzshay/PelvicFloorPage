// import { useState, useEffect } from 'react';
// import LoadingSpinner from '../components/LoadingSpinner';

// const QuestionsContent = () => {
//   const [openQuestion, setOpenQuestion] = useState<number | null>(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Simulate a loading delay (you can replace this with actual data fetching logic)
//     const timer = setTimeout(() => {
//       setLoading(false);
//     }, 500); // 1.5 seconds delay to mimic loading time

//     return () => clearTimeout(timer); // Cleanup the timer
//   }, []);

//   const toggleQuestion = (index: number) => {
//     setOpenQuestion(openQuestion === index ? null : index);
//   };

//   if (loading) {
//     return <LoadingSpinner />;
//   }

//   return (
//     <div className="max-w-screen-lg mx-auto p-6">
//       <h1 className="text-4xl font-bold text-center mb-10">שאלות נפוצות</h1>
//       <div className="space-y-6" dir="rtl">
//         {/* Question 1 */}
//         <div className="bg-gray-100 rounded-lg shadow-lg p-6">
//           <button
//             className="w-full text-right text-xl font-semibold focus:outline-none"
//             onClick={() => toggleQuestion(1)}
//           >
//             איך ניתן לקבוע תור?
//           </button>
//           {openQuestion === 1 && (
//             <p className="mt-4 text-gray-700 text-right">
//               לקביעת תור, ניתן ליצור קשר דרך טופס יצירת הקשר באתר, או להתקשר ישירות למספר
//               הטלפון המצוין בדף הקשר.
//             </p>
//           )}
//         </div>

//         {/* Question 2 */}
//         <div className="bg-gray-100 rounded-lg shadow-lg p-6">
//           <button
//             className="w-full text-right text-xl font-semibold focus:outline-none"
//             onClick={() => toggleQuestion(2)}
//           >
//             מה כוללים הטיפולים?
//           </button>
//           {openQuestion === 2 && (
//             <p className="mt-4 text-gray-700 text-right">
//               הטיפולים כוללים אבחון אישי, תרגילים מותאמים לשיפור הכאב והתפקוד, ייעוץ תזונתי
//               וטיפולים מנואליים במידת הצורך.
//             </p>
//           )}
//         </div>

//         {/* Question 3 */}
//         <div className="bg-gray-100 rounded-lg shadow-lg p-6">
//           <button
//             className="w-full text-right text-xl font-semibold focus:outline-none"
//             onClick={() => toggleQuestion(3)}
//           >
//             מהן שעות הפעילות?
//           </button>
//           {openQuestion === 3 && (
//             <p className="mt-4 text-gray-700 text-right">
//               שעות הפעילות הן בימים ראשון עד חמישי בין השעות 9:00-18:00, ובימי שישי בין
//               השעות 9:00-14:00.
//             </p>
//           )}
//         </div>

//         {/* Question 4 */}
//         <div className="bg-gray-100 rounded-lg shadow-lg p-6">
//           <button
//             className="w-full text-right text-xl font-semibold focus:outline-none"
//             onClick={() => toggleQuestion(4)}
//           >
//             האם הטיפול מתאים לנשים בלבד?
//           </button>
//           {openQuestion === 4 && (
//             <p className="mt-4 text-gray-700 text-right">
//               הטיפולים מותאמים גם לגברים ולנשים, בהתאם לצרכים הייחודיים של כל מטופל.
//             </p>
//           )}
//         </div>

//         {/* Question 5 */}
//         <div className="bg-gray-100 rounded-lg shadow-lg p-6">
//           <button
//             className="w-full text-right text-xl font-semibold focus:outline-none"
//             onClick={() => toggleQuestion(5)}
//           >
//             איך מתבצע תהליך האבחון?
//           </button>
//           {openQuestion === 5 && (
//             <p className="mt-4 text-gray-700 text-right">
//               האבחון כולל שיחה עם המטופל ובדיקת מצבו הפיזי וההיסטוריה הרפואית, ולאחר מכן בניית תוכנית טיפול מותאמת אישית.
//             </p>
//           )}
//         </div>

//         {/* Question 6 */}
//         <div className="bg-gray-100 rounded-lg shadow-lg p-6">
//           <button
//             className="w-full text-right text-xl font-semibold focus:outline-none"
//             onClick={() => toggleQuestion(6)}
//           >
//             האם הטיפול כרוך בכאבים?
//           </button>
//           {openQuestion === 6 && (
//             <p className="mt-4 text-gray-700 text-right">
//               חלק מהטיפולים עשויים לגרום לתחושת אי נוחות קלה, אך הם מבוצעים בזהירות כדי למזער כאבים ולהקל על תהליך ההחלמה.
//             </p>
//           )}
//         </div>

//         {/* Question 7 */}
//         <div className="bg-gray-100 rounded-lg shadow-lg p-6">
//           <button
//             className="w-full text-right text-xl font-semibold focus:outline-none"
//             onClick={() => toggleQuestion(7)}
//           >
//             כמה זמן אורך טיפול ממוצע?
//           </button>
//           {openQuestion === 7 && (
//             <p className="mt-4 text-gray-700 text-right">
//               טיפול ממוצע נמשך בין 45 דקות לשעה, תלוי במורכבות הבעיה ובתוכנית הטיפול.
//             </p>
//           )}
//         </div>

//         {/* Question 8 */}
//         <div className="bg-gray-100 rounded-lg shadow-lg p-6">
//           <button
//             className="w-full text-right text-xl font-semibold focus:outline-none"
//             onClick={() => toggleQuestion(8)}
//           >
//             האם יש צורך להביא מסמכים רפואיים לפגישה הראשונה?
//           </button>
//           {openQuestion === 8 && (
//             <p className="mt-4 text-gray-700 text-right">
//               כן, מומלץ להביא כל מסמך רפואי שקשור למצבך הבריאותי כדי לקבל תמונה מלאה במהלך האבחון.
//             </p>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default QuestionsContent;



import { useState, useEffect } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

const QuestionsContent = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate a loading delay (you can replace this with actual data fetching logic)
    const timer = setTimeout(() => {
      setLoading(false);
    }, 500); // 0.5 second delay to mimic loading time

    return () => clearTimeout(timer); // Cleanup the timer
  }, []);

  const toggleQuestion = (index: number) => {
    setOpenQuestion(openQuestion === index ? null : index);
  };

  if (loading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="max-w-screen-lg mx-auto p-6">
      <h1 className="text-4xl font-bold text-center mb-10 dark:text-gray-200">שאלות נפוצות</h1>
      <div className="space-y-6" dir="rtl">
        {/* Question 1 */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <button
            className="w-full text-right text-xl font-semibold focus:outline-none dark:text-gray-200"
            onClick={() => toggleQuestion(1)}
          >
            איך ניתן לקבוע תור?
          </button>
          {openQuestion === 1 && (
            <p className="mt-4 text-gray-700 dark:text-gray-300 text-right">
              לקביעת תור, ניתן ליצור קשר דרך טופס יצירת הקשר באתר, או להתקשר ישירות למספר
              הטלפון המצוין בדף הקשר.
            </p>
          )}
        </div>

        {/* Question 2 */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <button
            className="w-full text-right text-xl font-semibold focus:outline-none dark:text-gray-200"
            onClick={() => toggleQuestion(2)}
          >
            מה כוללים הטיפולים?
          </button>
          {openQuestion === 2 && (
            <p className="mt-4 text-gray-700 dark:text-gray-300 text-right">
              הטיפולים כוללים אבחון אישי, תרגילים מותאמים לשיפור הכאב והתפקוד, ייעוץ תזונתי
              וטיפולים מנואליים במידת הצורך.
            </p>
          )}
        </div>

        {/* Question 3 */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <button
            className="w-full text-right text-xl font-semibold focus:outline-none dark:text-gray-200"
            onClick={() => toggleQuestion(3)}
          >
            מהן שעות הפעילות?
          </button>
          {openQuestion === 3 && (
            <p className="mt-4 text-gray-700 dark:text-gray-300 text-right">
              שעות הפעילות הן בימים ראשון עד חמישי בין השעות 9:00-18:00, ובימי שישי בין
              השעות 9:00-14:00.
            </p>
          )}
        </div>

        {/* Question 4 */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <button
            className="w-full text-right text-xl font-semibold focus:outline-none dark:text-gray-200"
            onClick={() => toggleQuestion(4)}
          >
            האם הטיפול מתאים לנשים בלבד?
          </button>
          {openQuestion === 4 && (
            <p className="mt-4 text-gray-700 dark:text-gray-300 text-right">
              הטיפולים מותאמים גם לגברים ולנשים, בהתאם לצרכים הייחודיים של כל מטופל.
            </p>
          )}
        </div>

        {/* Question 5 */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <button
            className="w-full text-right text-xl font-semibold focus:outline-none dark:text-gray-200"
            onClick={() => toggleQuestion(5)}
          >
            איך מתבצע תהליך האבחון?
          </button>
          {openQuestion === 5 && (
            <p className="mt-4 text-gray-700 dark:text-gray-300 text-right">
              האבחון כולל שיחה עם המטופל ובדיקת מצבו הפיזי וההיסטוריה הרפואית, ולאחר מכן בניית תוכנית טיפול מותאמת אישית.
            </p>
          )}
        </div>

        {/* Question 6 */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <button
            className="w-full text-right text-xl font-semibold focus:outline-none dark:text-gray-200"
            onClick={() => toggleQuestion(6)}
          >
            האם הטיפול כרוך בכאבים?
          </button>
          {openQuestion === 6 && (
            <p className="mt-4 text-gray-700 dark:text-gray-300 text-right">
              חלק מהטיפולים עשויים לגרום לתחושת אי נוחות קלה, אך הם מבוצעים בזהירות כדי למזער כאבים ולהקל על תהליך ההחלמה.
            </p>
          )}
        </div>

        {/* Question 7 */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <button
            className="w-full text-right text-xl font-semibold focus:outline-none dark:text-gray-200"
            onClick={() => toggleQuestion(7)}
          >
            כמה זמן אורך טיפול ממוצע?
          </button>
          {openQuestion === 7 && (
            <p className="mt-4 text-gray-700 dark:text-gray-300 text-right">
              טיפול ממוצע נמשך בין 45 דקות לשעה, תלוי במורכבות הבעיה ובתוכנית הטיפול.
            </p>
          )}
        </div>

        {/* Question 8 */}
        <div className="bg-gray-100 dark:bg-gray-800 rounded-lg shadow-lg p-6">
          <button
            className="w-full text-right text-xl font-semibold focus:outline-none dark:text-gray-200"
            onClick={() => toggleQuestion(8)}
          >
            האם יש צורך להביא מסמכים רפואיים לפגישה הראשונה?
          </button>
          {openQuestion === 8 && (
            <p className="mt-4 text-gray-700 dark:text-gray-300 text-right">
              כן, מומלץ להביא כל מסמך רפואי שקשור למצבך הבריאותי כדי לקבל תמונה מלאה במהלך האבחון.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default QuestionsContent;
