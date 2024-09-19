// import ContactForm from "./ContactForm";
// import { useTreatments } from "../hooks/useTreatments"; // Import your custom hook

// interface HomePageContentProps {
//   setSelectedSection: (section: string) => void;
// }

// export default function HomePageContent({
//   setSelectedSection,
// }: HomePageContentProps) {
//   const scrollToSection = (id: string) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//   };

//   // Use the useTreatments hook to fetch treatments from Firestore
//   const { treatments, loading, error } = useTreatments();

//   const handleFormSubmit = async (data: {
//     name: string;
//     email: string;
//     tel: string;
//     message: string;
//   }) => {
//     try {
//       const res = await fetch("/api/sendMail", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(data),
//       });

//       if (res.status === 200) {
//         alert("הטופס נשלח בהצלחה!");
//       } else {
//         alert("שליחת הטופס נכשלה, נסה שוב מאוחר יותר.");
//       }
//     } catch (error) {
//       console.error("Error submitting form:", error);
//       alert("שליחת הטופס נכשלה.");
//     }
//   };

//   return (
//     <div className="max-w-screen-xlg mx-auto">
//       {/* Welcome Section */}
//       <section>
//         <h1 className="text-5xl font-bold text-center mb-4"> ברוכים הבאים </h1>
//         <p className="text-lg text-center">אילנה פיוזתרפיסטית</p>
//       </section>

//       {/* Description Section */}
//       <section className="bg-gray-200 rounded-3xl shadow-lg p-8 mb-12">
//         <div dir="rtl" className="text-center text-xl text-gray-700 space-y-6">
//           <p>
//             כפיזיותרפיסטית המתמחה ברצפת האגן, אני מציעה טיפול ממוקד לשיפור תפקוד
//             השרירים, המסייע בבעיות כמו בריחת שתן, צניחת איברים, וכאבים בזמן
//             יחסים.
//           </p>
//           <p>
//             תוכנית אישית תותאם לך לאחר אבחון מעמיק, וכוללת תרגילים, ייעוץ
//             תזונתי, ושיפור היציבה.
//           </p>
//           <p>
//             טכניקות מתקדמות כמו ביופידבק וטיפול מנואלי יעזרו לך לחזור לשליטה
//             מלאה בתפקודי הגוף.
//           </p>
//         </div>
//       </section>

//       {/* Buttons Section */}
//       <section className="flex justify-center space-x-4 mb-12">
//         <button
//           className="bg-blue-500 text-white px-6 py-2 rounded shadow-md hover:bg-blue-600 transition duration-300"
//           onClick={() => scrollToSection("contactDetails")}
//         >
//           ליצירת קשר
//         </button>
//         <button
//           className="bg-purple-500 text-white px-6 py-2 rounded shadow-md hover:bg-purple-600 transition duration-300"
//           onClick={() => scrollToSection("problem-list")}
//         >
//           פרטים נוספים
//         </button>
//       </section>

//       {/* Common Problems Section (בעיות נפוצות) */}
//       <section
//         id="problem-list"
//         className="bg-gradient-to-r from-cyan-50 to-purple-200 p-8 rounded-3xl shadow-lg mb-12"
//       >
//         <h2 className="text-3xl font-bold text-center mb-6">בעיות נפוצות</h2>
//         <ul
//           dir="rtl"
//           className="list-disc list-inside text-right text-xl text-gray-700 space-y-4"
//         >
//           <li>כאבי גב תחתון</li>
//           <li>בריחת שתן</li>
//           <li>צניחת איברי אגן</li>
//           <li>כאבים בזמן יחסים</li>
//           <li>בעיות בתפקוד המעי</li>
//           <li>כאבי מפרקים ושרירים</li>
//           <li>כאבים כרוניים</li>
//         </ul>
//       </section>

//       {/* Treatments Section (טיפולים) */}
//       <section
//         id="treatment-list"
//         className="bg-gradient-to-r from-purple-100 to-purple-300 p-8 rounded-3xl shadow-lg mb-12"
//       >
//         <h2 className="text-3xl font-semibold text-center mb-4">טיפולים</h2>
//         {loading && <p>Loading treatments...</p>}
//         {error && <p className="text-red-500">{error}</p>}
//         <ul
//           dir="rtl"
//           className="list-disc list-inside text-right text-xl text-gray-700 space-y-2"
//         >
//           {/* Dynamically render treatments from Firestore */}
//           {treatments.map((treatment) => (
//             <li
//               key={treatment.id}
//               onClick={() => setSelectedSection("treatments")}
//               className="cursor-pointer hover:text-purple-600 transition duration-300"
//             >
//               {treatment.name}
//             </li>
//           ))}
//         </ul>
//       </section>

//       {/* Patients Recommend Section (מטופלים ממליצים) */}
//       <section
//         id="moreInfo"
//         className="bg-purple-200 p-8 rounded-3xl shadow-lg mb-12"
//       >
//         <h2 className="text-3xl font-semibold text-center mb-4">
//           מטופלים ממליצים
//         </h2>
//         <ul
//           dir="rtl"
//           className="list-disc list-inside text-right text-xl text-gray-700 space-y-2"
//         >
//           <li>"הטיפול עזר לי מאוד, אני מרגיש הרבה יותר טוב"</li>
//           <li>"היחס המקצועי והטיפול המסור גרמו לי להחלים מהר יותר"</li>
//           <li>"שירות מעולה ואנשי צוות מקצועיים"</li>
//           <li>"הטיפול הכי טוב שקיבלתי אי פעם!"</li>
//           <li>"הצוות דואג לכל פרט, אני ממליץ בחום"</li>
//           <li>"הרגשתי שיפור כבר אחרי המפגש הראשון"</li>
//           <li>"הטיפול המקצועי החזיר אותי לתפקוד מלא!"</li>
//         </ul>
//       </section>

//       {/* Lower Section - Contact Info */}
//       <section
//         id="contactDetails"
//         className="bg-gray-200 mt-12 p-6 rounded-lg shadow-lg"
//         dir="rtl"
//       >
//         <h2 className="text-2xl font-bold text-center mb-6">
//           השאר פרטים ליצירת קשר
//         </h2>
//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           <ContactForm onSubmit={handleFormSubmit} />

//           {/* Contact Information Section */}
//           <div className="text-right space-y-4">
//             <h3 className="text-xl font-semibold">פרטי קשר</h3>
//             <p>אילנה אורונוב גרבוז</p>
//             <p>Email: ilanapfpt@gmail.com</p>
//             <p>Phone: +972 50-997-5742</p>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }

import { useAbout } from "../hooks/useAbout"; // Import the new useAbout hook
import ContactForm from "./ContactForm";
import { useTreatments } from "../hooks/useTreatments"; // Import your treatments hook

interface HomePageContentProps {
  setSelectedSection: (section: string) => void;
}

export default function HomePageContent({
  setSelectedSection,
}: HomePageContentProps) {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  // Use the useAbout hook to fetch the About and Problems sections
  const { aboutData, loading: aboutLoading, error: aboutError } = useAbout();
  
  // Use the useTreatments hook to fetch treatments from Firestore
  const { treatments, loading: treatmentsLoading, error: treatmentsError } = useTreatments();

  const handleFormSubmit = async (data: {
    name: string;
    email: string;
    tel: string;
    message: string;
  }) => {
    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (res.status === 200) {
        alert("הטופס נשלח בהצלחה!");
      } else {
        alert("שליחת הטופס נכשלה, נסה שוב מאוחר יותר.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("שליחת הטופס נכשלה.");
    }
  };

  if (aboutLoading || treatmentsLoading) return <p>Loading...</p>;
  if (aboutError || treatmentsError)
    return <p>Error: {aboutError || treatmentsError}</p>;

  return (
    <div className="max-w-screen-xlg mx-auto">
      {/* Welcome Section */}
      <section>
        <h1 className="text-5xl font-bold text-center mb-4"> ברוכים הבאים </h1>
        <p className="text-lg text-center">אילנה פיוזתרפיסטית</p>
      </section>

      {/* About Section (Dynamically fetched) */}
      <section className="bg-gray-200 rounded-3xl shadow-lg p-8 mb-12">
        <div dir="rtl" className="text-center text-xl text-gray-700 space-y-6">
          <p>{aboutData?.about}</p>
        </div>
      </section>

      {/* Buttons Section */}
      <section className="flex justify-center space-x-4 mb-12">
        <button
          className="bg-blue-500 text-white px-6 py-2 rounded shadow-md hover:bg-blue-600 transition duration-300"
          onClick={() => scrollToSection("contactDetails")}
        >
          ליצירת קשר
        </button>
        <button
          className="bg-purple-500 text-white px-6 py-2 rounded shadow-md hover:bg-purple-600 transition duration-300"
          onClick={() => scrollToSection("problem-list")}
        >
          פרטים נוספים
        </button>
      </section>

      {/* Common Problems Section (Dynamically fetched) */}
      <section
        id="problem-list"
        className="bg-gradient-to-r from-cyan-50 to-purple-200 p-8 rounded-3xl shadow-lg mb-12"
      >
        <h2 className="text-3xl font-bold text-center mb-6">בעיות נפוצות</h2>
        <ul
          dir="rtl"
          className="list-disc list-inside text-right text-xl text-gray-700 space-y-4"
        >
          {aboutData?.problems.map((problem, index) => (
            <li key={index}>{problem}</li>
          ))}
        </ul>
      </section>

      {/* Treatments Section (Dynamically fetched) */}
      <section
        id="treatment-list"
        className="bg-gradient-to-r from-purple-100 to-purple-300 p-8 rounded-3xl shadow-lg mb-12"
      >
        <h2 className="text-3xl font-semibold text-center mb-4">טיפולים</h2>
        {treatmentsLoading && <p>Loading treatments...</p>}
        {treatmentsError && <p className="text-red-500">{treatmentsError}</p>}
        <ul
          dir="rtl"
          className="list-disc list-inside text-right text-xl text-gray-700 space-y-2"
        >
          {/* Dynamically render treatments from Firestore */}
          {treatments.map((treatment) => (
            <li
              key={treatment.id}
              onClick={() => setSelectedSection("treatments")}
              className="cursor-pointer hover:text-purple-600 transition duration-300"
            >
              {treatment.name}
            </li>
          ))}
        </ul>
      </section>

      {/* Patients Recommend Section (Static Content) */}
      <section
        id="moreInfo"
        className="bg-purple-200 p-8 rounded-3xl shadow-lg mb-12"
      >
        <h2 className="text-3xl font-semibold text-center mb-4">
          מטופלים ממליצים
        </h2>
        <ul
          dir="rtl"
          className="list-disc list-inside text-right text-xl text-gray-700 space-y-2"
        >
          <li>"הטיפול עזר לי מאוד, אני מרגיש הרבה יותר טוב"</li>
          <li>"היחס המקצועי והטיפול המסור גרמו לי להחלים מהר יותר"</li>
          <li>"שירות מעולה ואנשי צוות מקצועיים"</li>
          <li>"הטיפול הכי טוב שקיבלתי אי פעם!"</li>
          <li>"הצוות דואג לכל פרט, אני ממליץ בחום"</li>
          <li>"הרגשתי שיפור כבר אחרי המפגש הראשון"</li>
          <li>"הטיפול המקצועי החזיר אותי לתפקוד מלא!"</li>
        </ul>
      </section>

      {/* Lower Section - Contact Info */}
      <section
        id="contactDetails"
        className="bg-gray-200 mt-12 p-6 rounded-lg shadow-lg"
        dir="rtl"
      >
        <h2 className="text-2xl font-bold text-center mb-6">
          השאר פרטים ליצירת קשר
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactForm onSubmit={handleFormSubmit} />

          {/* Contact Information Section */}
          <div className="text-right space-y-4">
            <h3 className="text-xl font-semibold">פרטי קשר</h3>
            <p>אילנה אורונוב גרבוז</p>
            <p>Email: ilanapfpt@gmail.com</p>
            <p>Phone: +972 50-997-5742</p>
          </div>
        </div>
      </section>
    </div>
  );
}
