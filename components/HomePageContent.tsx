// import { useState } from "react";
// import { useAbout } from "../hooks/useAbout"; 
// import ContactForm from "./ContactForm";
// import { useTreatments } from "../hooks/useTreatments"; 
// import TreatmentCard from "./TreatmentCard"; // Import the TreatmentCard component
// import LoadingSpinner from '../components/LoadingSpinner';
// interface HomePageContentProps {
//   setSelectedSection: (section: string) => void;
// }

// export default function HomePageContent({
//   setSelectedSection,
// }: HomePageContentProps) {
//   const [selectedTreatmentId, setSelectedTreatmentId] = useState<string | null>(null); // State to track selected treatment

//   const scrollToSection = (id: string) => {
//     document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
//   };

//   const { aboutData, loading: aboutLoading, error: aboutError } = useAbout();
//   const { treatments, loading: treatmentsLoading, error: treatmentsError } = useTreatments();

//   // Find the special treatment and separate it from the rest
//   const specialTreatment = treatments.find(
//     (treatment) => treatment.id === "GUGjGKdrVrRH4DtcRVy0"
//   );
//   const otherTreatments = treatments.filter(
//     (treatment) => treatment.id !== "GUGjGKdrVrRH4DtcRVy0"
//   );

//   const handleFormSubmit = async (data: { name: string; email: string; tel: string; message: string; }) => {
//     try {
//       const res = await fetch("/api/sendMail", {
//         method: "POST",
//         headers: { "Content-Type": "application/json" },
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

//   // Function to handle opening/closing treatment cards
//   const toggleTreatmentCard = (treatmentId: string) => {
//     setSelectedTreatmentId(selectedTreatmentId === treatmentId ? null : treatmentId);
//   };

//   if (aboutLoading || treatmentsLoading) return <LoadingSpinner/>;
//   if (aboutError || treatmentsError) return <p>Error: {aboutError || treatmentsError}</p>;

//   return (
//     <div className="max-w-screen-xl mx-auto">
//       {/* Welcome Section */}
//       <section>
//         <h1 className="text-5xl font-bold text-center mb-4">Welcome</h1>
//       </section>

//       {/* About Section */}
//       <section className="bg-gray-200 rounded-3xl shadow-lg p-8 mb-12">
//         <div dir="rtl" className="text-center text-xl text-gray-700 space-y-6">
//           <p>{aboutData?.about}</p>
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

//       {/* Common Problems Section */}
//       <section
//         id="problem-list"
//         className="bg-gradient-to-r from-cyan-50 to-purple-200 p-8 rounded-3xl shadow-lg mb-12"
//       >
//         <h2 className="text-3xl font-bold text-center mb-6">בעיות נפוצות</h2>
//         <ul
//           dir="rtl"
//           className="list-disc list-inside text-right text-xl text-gray-700 space-y-4"
//         >
//           {aboutData?.problems.map((problem, index) => (
//             <li key={index}>{problem}</li>
//           ))}
//         </ul>
//       </section>

//       {/* Treatments Section */}
//       <section
//         id="treatment-list"
//         className="bg-gradient-to-r from-purple-100 to-purple-300 p-8 rounded-3xl shadow-lg mb-12"
//       >
//         <h2 className="text-3xl font-bold text-center mb-6 cursor-pointer hover:text-purple-600 transition duration-300" 
//           onClick={() => setSelectedSection("treatments")}>
//           טיפולים
//         </h2>

//         {treatmentsLoading && <LoadingSpinner/>}
//         {treatmentsError && <p className="text-red-500">{treatmentsError}</p>}

//         {/* Render other treatments */}
//         <ul dir="rtl" className="list-disc list-inside text-right text-xl text-gray-700 space-y-2">
//           {otherTreatments.map((treatment) => (
//             <li key={treatment.id} className="cursor-pointer hover:text-purple-600" onClick={() => toggleTreatmentCard(treatment.id)}>
//               {treatment.name}

//               {/* Conditionally render the TreatmentCard if this treatment is clicked */}
//               {selectedTreatmentId === treatment.id && (
//                 <div className="mt-4" onClick={(e) => e.stopPropagation() /* Prevent closing when clicking inside card */}>
//                   <TreatmentCard
//                     treatment={treatment}
//                     onDelete={() => console.log(`Delete treatment with id: ${treatment.id}`)}
//                     onEdit={() => console.log(`Edit treatment with id: ${treatment.id}`)}
//                     isAdmin={false}
//                   />
//                 </div>
//               )}
//             </li>
//           ))}
//         </ul>

//         {/* Separator Line */}
//         <div className="my-8 border-t border-gray-400"></div>

//         {/* Render special treatment at the bottom */}
//         {specialTreatment && (
//           <ul dir="rtl" className="list-disc list-inside text-right text-xl text-gray-700 space-y-2">
//             <li key={specialTreatment.id} className="cursor-pointer hover:text-purple-600" onClick={() => toggleTreatmentCard(specialTreatment.id)}>
//               {specialTreatment.name}

//               {/* Conditionally render the TreatmentCard if this treatment is clicked */}
//               {selectedTreatmentId === specialTreatment.id && (
//                 <div className="mt-4" onClick={(e) => e.stopPropagation() /* Prevent closing when clicking inside card */}>
//                   <TreatmentCard
//                     treatment={specialTreatment}
//                     onDelete={() => console.log(`Delete special treatment with id: ${specialTreatment.id}`)}
//                     onEdit={() => console.log(`Edit special treatment with id: ${specialTreatment.id}`)}
//                     isAdmin={false}
//                   />
//                 </div>
//               )}
//             </li>
//           </ul>
//         )}
//       </section>

//       {/* Patients Recommend Section */}
//       <section
//         id="moreInfo"
//         className="bg-purple-200 p-8 rounded-3xl shadow-lg mb-12"
//       >
//         <h2 className="text-3xl font-bold text-center mb-4">מטופלים ממליצים</h2>
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
//         <h2 className="text-2xl font-bold text-center mb-6">השאר פרטים ליצירת קשר</h2>
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

import { useState } from "react";
import { useAbout } from "../hooks/useAbout";
import ContactForm from "./ContactForm";
import { useTreatments } from "../hooks/useTreatments";
import TreatmentCard from "./TreatmentCard"; // Import the TreatmentCard component
import LoadingSpinner from '../components/LoadingSpinner';

interface HomePageContentProps {
  setSelectedSection: (section: string) => void;
}

export default function HomePageContent({
  setSelectedSection,
}: HomePageContentProps) {
  const [selectedTreatmentId, setSelectedTreatmentId] = useState<string | null>(null); // State to track selected treatment

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const { aboutData, loading: aboutLoading, error: aboutError } = useAbout();
  const { treatments, loading: treatmentsLoading, error: treatmentsError } = useTreatments();

  // Find the special treatment and separate it from the rest
  const specialTreatment = treatments.find(
    (treatment) => treatment.id === "GUGjGKdrVrRH4DtcRVy0"
  );
  const otherTreatments = treatments.filter(
    (treatment) => treatment.id !== "GUGjGKdrVrRH4DtcRVy0"
  );

  const handleFormSubmit = async (data: { name: string; email: string; tel: string; message: string; }) => {
    try {
      const res = await fetch("/api/sendMail", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
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

  // Function to handle opening/closing treatment cards
  const toggleTreatmentCard = (treatmentId: string) => {
    setSelectedTreatmentId(selectedTreatmentId === treatmentId ? null : treatmentId);
  };

  if (aboutLoading || treatmentsLoading) return <LoadingSpinner />;
  if (aboutError || treatmentsError) return <p>Error: {aboutError || treatmentsError}</p>;

  return (
    <div className="max-w-screen-xl mx-auto">
      {/* Welcome Section */}
      <section>
        <h1 className="text-5xl font-bold text-center mb-4 dark:text-gray-200">Welcome</h1>
      </section>

      {/* About Section */}
      <section className="bg-gray-200 dark:bg-gray-800 dark:text-gray-300 rounded-3xl shadow-lg p-8 mb-12">
        <div dir="rtl" className="text-center text-xl space-y-6">
          <p>{aboutData?.about}</p>
        </div>
      </section>

      {/* Buttons Section */}
      <section className="flex justify-center space-x-4 mb-12">
        <button
          className="bg-blue-500 dark:bg-blue-700 text-white px-6 py-2 rounded shadow-md hover:bg-blue-600 dark:hover:bg-blue-800 transition duration-300"
          onClick={() => scrollToSection("contactDetails")}
        >
          ליצירת קשר
        </button>
        <button
          className="bg-purple-500 dark:bg-purple-700 text-white px-6 py-2 rounded shadow-md hover:bg-purple-600 dark:hover:bg-purple-800 transition duration-300"
          onClick={() => scrollToSection("problem-list")}
        >
          פרטים נוספים
        </button>
      </section>

      {/* Common Problems Section */}
      <section
        id="problem-list"
        className="bg-gradient-to-r from-cyan-50 to-purple-200 dark:from-gray-800 dark:to-gray-700 p-8 rounded-3xl shadow-lg mb-12"
      >
        <h2 className="text-3xl font-bold text-center mb-6 dark:text-gray-200">בעיות נפוצות</h2>
        <ul
          dir="rtl"
          className="list-disc list-inside text-right text-xl text-gray-700 dark:text-gray-300 space-y-4"
        >
          {aboutData?.problems.map((problem, index) => (
            <li key={index}>{problem}</li>
          ))}
        </ul>
      </section>

      {/* Treatments Section */}
      <section
        id="treatment-list"
        className="bg-gradient-to-r from-purple-100 to-purple-300 dark:from-gray-800 dark:to-gray-700 p-8 rounded-3xl shadow-lg mb-12"
      >
        <h2
          className="text-3xl font-bold text-center mb-6 cursor-pointer hover:text-purple-600 dark:hover:text-purple-400 transition duration-300 dark:text-gray-200"
          onClick={() => setSelectedSection("treatments")}
        >
          טיפולים
        </h2>

        {treatmentsLoading && <LoadingSpinner />}
        {treatmentsError && <p className="text-red-500">{treatmentsError}</p>}

        {/* Render other treatments */}
        <ul dir="rtl" className="list-disc list-inside text-right text-xl text-gray-700 dark:text-gray-300 space-y-2">
          {otherTreatments.map((treatment) => (
            <li
              key={treatment.id}
              className="cursor-pointer hover:text-purple-600 dark:hover:text-purple-400"
              onClick={() => toggleTreatmentCard(treatment.id)}
            >
              {treatment.name}

              {/* Conditionally render the TreatmentCard if this treatment is clicked */}
              {selectedTreatmentId === treatment.id && (
                <div className="mt-4" onClick={(e) => e.stopPropagation()}>
                  <TreatmentCard
                    treatment={treatment}
                    onDelete={() => console.log(`Delete treatment with id: ${treatment.id}`)}
                    onEdit={() => console.log(`Edit treatment with id: ${treatment.id}`)}
                    isAdmin={false}
                  />
                </div>
              )}
            </li>
          ))}
        </ul>

        {/* Separator Line */}
        <div className="my-8 border-t border-gray-400 dark:border-gray-600"></div>

        {/* Render special treatment at the bottom */}
        {specialTreatment && (
          <ul dir="rtl" className="list-disc list-inside text-right text-xl text-gray-700 dark:text-gray-300 space-y-2">
            <li
              key={specialTreatment.id}
              className="cursor-pointer hover:text-purple-600 dark:hover:text-purple-400"
              onClick={() => toggleTreatmentCard(specialTreatment.id)}
            >
              {specialTreatment.name}

              {/* Conditionally render the TreatmentCard if this treatment is clicked */}
              {selectedTreatmentId === specialTreatment.id && (
                <div className="mt-4" onClick={(e) => e.stopPropagation()}>
                  <TreatmentCard
                    treatment={specialTreatment}
                    onDelete={() => console.log(`Delete special treatment with id: ${specialTreatment.id}`)}
                    onEdit={() => console.log(`Edit special treatment with id: ${specialTreatment.id}`)}
                    isAdmin={false}
                  />
                </div>
              )}
            </li>
          </ul>
        )}
      </section>

      {/* Patients Recommend Section */}
      <section
        id="moreInfo"
        className="bg-purple-200 dark:bg-gray-800 dark:text-gray-300 p-8 rounded-3xl shadow-lg mb-12"
      >
        <h2 className="text-3xl font-bold text-center mb-4 dark:text-gray-200">מטופלים ממליצים</h2>
        <ul
          dir="rtl"
          className="list-disc list-inside text-right text-xl space-y-2"
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
        className="bg-gray-200 dark:bg-gray-800 dark:text-gray-300 mt-12 p-6 rounded-lg shadow-lg"
        dir="rtl"
      >
        <h2 className="text-2xl font-bold text-center mb-6 dark:text-gray-200">השאר פרטים ליצירת קשר</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <ContactForm onSubmit={handleFormSubmit} />

          {/* Contact Information Section */}
          <div className="text-right space-y-4">
            <h3 className="text-xl font-semibold dark:text-gray-200">פרטי קשר</h3>
            <p>אילנה אורונוב גרבוז</p>
            <p>Email: ilanapfpt@gmail.com</p>
            <p>Phone: +972 50-997-5742</p>
          </div>
        </div>
      </section>
    </div>
  );
}
