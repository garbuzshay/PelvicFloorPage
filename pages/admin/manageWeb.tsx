
// import { useTreatments } from "../../hooks/useTreatments";
// import { useAbout } from "../../hooks/useAbout";
// import TreatmentForm from "../../components/TreatmentForm";
// import TreatmentCard from "../../components/TreatmentCard";
// import LoadingSpinner from "../../components/LoadingSpinner";
// import { useEffect, useRef, useState } from "react";

// export default function AdminEditMode() {
//   const { treatments, addTreatment, updateTreatment, deleteTreatment, loading: isTreatmentsLoading } = useTreatments();
//   const { aboutData, editAbout, addProblem, deleteProblem, editProblem, loading: isAboutLoading } = useAbout();

//   const [editingTreatment, setEditingTreatment] = useState<
//     { id: string; name: string; description: string; image: string } | undefined
//   >(undefined);
//   const [isFormVisible, setIsFormVisible] = useState(false);

//   const [aboutText, setAboutText] = useState<string>(""); // Initialize with an empty string
//   const [newProblem, setNewProblem] = useState<string>("");
//   const [editingProblem, setEditingProblem] = useState<{
//     oldProblem: string;
//     newProblem: string;
//   } | null>(null);

//   const [isAboutSectionVisible, setIsAboutSectionVisible] = useState(false);
//   const [isProblemsSectionVisible, setIsProblemsSectionVisible] = useState(false);

//   const formRef = useRef<HTMLDivElement | null>(null); // Ref to track the form section
//   const aboutSectionRef = useRef<HTMLDivElement | null>(null); // Ref for the About section

//   // Effect to scroll into view when the form becomes visible
//   useEffect(() => {
//     if (isFormVisible && formRef.current) {
//       formRef.current.scrollIntoView({ behavior: "smooth" });
//     }
//   }, [isFormVisible]);

//   // Effect to set aboutText once aboutData is loaded
//   useEffect(() => {
//     if (aboutData?.about) {
//       setAboutText(aboutData.about);
//     }
//   }, [aboutData]); // Update aboutText when aboutData changes

//   const handleAddOrEditTreatment = (data: {
//     name: string;
//     description: string;
//     image: string;
//   }) => {
//     if (editingTreatment) {
//       updateTreatment(editingTreatment.id, data);
//       setIsFormVisible(false);
//     } else {
//       addTreatment(data);
//       setIsFormVisible(false);
//     }
//   };

//   const handleEdit = (treatment: {
//     id: string;
//     name: string;
//     description: string;
//     image: string;
//   }) => {
//     setEditingTreatment(treatment);
//     setIsFormVisible(true); // This will trigger the scroll effect in useEffect
//     formRef.current?.scrollIntoView({ behavior: "smooth" }); 
//   };

//   const switchToCreateMode = () => {
//     setEditingTreatment(undefined);
//   };

//   const handleAboutSave = () => {
//     if (aboutText && window.confirm("Are you sure you want to save the changes to the 'About' section?")) {
//       editAbout(aboutText);
//       setIsAboutSectionVisible(false); // Close the About section after saving
//     }
//   };

//   const handleProblemAdd = () => {
//     if (newProblem && window.confirm(`Are you sure you want to add the problem: ${newProblem}?`)) {
//       addProblem(newProblem);
//       setNewProblem(""); // Reset input field after adding
//     }
//   };

//   const handleProblemEdit = () => {
//     if (editingProblem && editingProblem.newProblem && window.confirm(`Are you sure you want to update this problem to: ${editingProblem.newProblem}?`)) {
//       editProblem(editingProblem.oldProblem, editingProblem.newProblem);
//       setEditingProblem(null); // Reset the editing state
//     }
//   };

//   const handleProblemDelete = (problem: string) => {
//     if (window.confirm(`Are you sure you want to delete the problem: ${problem}?`)) {
//       deleteProblem(problem);
//     }
//   };

//   const specialTreatment = treatments.find((treatment) => treatment.id === "GUGjGKdrVrRH4DtcRVy0");
//   const otherTreatments = treatments.filter((treatment) => treatment.id !== "GUGjGKdrVrRH4DtcRVy0");

//   if (isTreatmentsLoading || isAboutLoading) {
//     return <LoadingSpinner />;
//   }

//   return (
//     <div className="bg-gray-100 min-h-screen" dir="rtl">
//       <main className="container mx-auto px-4 py-6">
//         {/* Treatments Section */}
//         <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-8 space-y-4 sm:space-y-0">
//           <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">ניהול תוכן</h1>
//           <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
//             <button
//               className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300"
//               onClick={() => {
//                 setIsFormVisible(!isFormVisible);
//                 setEditingTreatment(undefined);
//                 formRef.current?.scrollIntoView({ behavior: "smooth" });
//               }}
//             >
//               {isFormVisible ? "Hide Form" : "Add New Treatment"}
//             </button>
//           </div>
//         </div>

//         {isFormVisible && (
//           <div ref={formRef} className="bg-white rounded-lg shadow-lg p-6 mb-8">
//             {editingTreatment && (
//               <div className="flex justify-center mb-4">
//                 <button
//                   className="bg-gray-400 text-white px-5 py-2 rounded-lg shadow hover:bg-yellow-600 transition duration-300"
//                   onClick={switchToCreateMode}
//                 >
//                   Switch to Create Mode
//                 </button>
//               </div>
//             )}
//             <TreatmentForm
//               initialData={editingTreatment}
//               onSubmit={handleAddOrEditTreatment}
//               isEditing={!!editingTreatment}
//             />
//           </div>
//         )}

//         {/* Display other treatments */}
//         <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//           {otherTreatments.map((treatment) => (
//             <TreatmentCard
//               key={treatment.id}
//               treatment={treatment}
//               onDelete={() => deleteTreatment(treatment.id)}
//               onEdit={() => handleEdit(treatment)}
//               isAdmin={true}
//             />
//           ))}
//         </div>

//         {specialTreatment && (
//           <>
//             <hr className="my-8 border-t-2 border-gray-300" />
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               <TreatmentCard
//                 key={specialTreatment.id}
//                 treatment={specialTreatment}
//                 onDelete={() => {}}
//                 onEdit={() => handleEdit(specialTreatment)}
//                 isAdmin={true}
//               />
//             </div>
//           </>
//         )}

//         {/* About Section */}
//         <div className="my-8">
//           <button
//             onClick={() => setIsAboutSectionVisible(!isAboutSectionVisible)}
//             className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 shadow"
//           >
//             {isAboutSectionVisible ? "לסגור עריכת אודות" : " אודות"}
//           </button>

//           {isAboutSectionVisible && (
//             <div ref={aboutSectionRef} className="mt-4 bg-white p-6 rounded-lg shadow-lg">
//               <textarea
//                 value={aboutText}
//                 onChange={(e) => setAboutText(e.target.value)}
//                 className="w-full p-2 border rounded mb-4"
//                 rows={5}
//               />
//               <button
//                 onClick={handleAboutSave}
//                 className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
//               >
//                 שמירה
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Problems Section */}
//         <div className="mb-8">
//           <button
//             onClick={() => setIsProblemsSectionVisible(!isProblemsSectionVisible)}
//             className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-300 shadow"
//           >
//             {isProblemsSectionVisible ? "הסתר בעיות נפוצות" : "בעיות נפוצות "}
//           </button>

//           {isProblemsSectionVisible && (
//             <div className="mt-4 bg-white p-6 rounded-lg shadow-lg">
//               <div className="mb-4 flex flex-col sm:flex-row">
//                 <input
//                   value={newProblem}
//                   onChange={(e) => setNewProblem(e.target.value)}
//                   placeholder="נא לתאר כאן את שם הבעיה"
//                   className="p-2 ml-4 border rounded w-full sm:w-2/3 mb-2 sm:mb-0"
//                 />
//                 <button
//                   onClick={handleProblemAdd}
//                   className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
//                 >
//                   הוספה
//                 </button>
//               </div>

//               {aboutData?.problems.map((problem) => (
//                 <div key={problem} className="mb-4">
//                   <div className="flex items-center justify-between">
//                     <span>{problem}</span>
//                     <div className="flex space-x-6 space-x-reverse">
//                       <button
//                         className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-300"
//                         onClick={() =>
//                           setEditingProblem({
//                             oldProblem: problem,
//                             newProblem: problem,
//                           })
//                         }
//                       >
//                         עריכה
//                       </button>
//                       <button
//                         className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
//                         onClick={() => handleProblemDelete(problem)}
//                       >
//                         מחיקה
//                       </button>
//                     </div>
//                   </div>
//                   <hr className="my-2 border-gray-300" />
//                 </div>
//               ))}

//               {editingProblem && (
//                 <div className="mt-4 flex">
//                   <input
//                     value={editingProblem.newProblem}
//                     onChange={(e) =>
//                       setEditingProblem({
//                         ...editingProblem,
//                         newProblem: e.target.value,
//                       })
//                     }
//                     className="p-2 ml-4 border rounded w-full sm:w-2/3 mb-2 sm:mb-0"
//                   />
//                   <button
//                     onClick={handleProblemEdit}
//                     className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300"
//                   >
//                     שמור
//                   </button>
//                 </div>
//               )}
//             </div>
//           )}
//         </div>
//       </main>
//     </div>
//   );
// }


import { useTreatments } from "../../hooks/useTreatments";
import { useAbout } from "../../hooks/useAbout";
import TreatmentForm from "../../components/TreatmentForm";
import TreatmentCard from "../../components/TreatmentCard";
import LoadingSpinner from "../../components/LoadingSpinner";
import { useEffect, useRef, useState } from "react";

export default function AdminEditMode() {
  const { treatments, addTreatment, updateTreatment, deleteTreatment, loading: isTreatmentsLoading } = useTreatments();
  const { aboutData, editAbout, addProblem, deleteProblem, editProblem, loading: isAboutLoading } = useAbout();

  const [editingTreatment, setEditingTreatment] = useState<
    { id: string; name: string; description: string; image: string } | undefined
  >(undefined);
  const [isFormVisible, setIsFormVisible] = useState(false);

  const [aboutText, setAboutText] = useState<string>(""); // Initialize with an empty string
  const [newProblem, setNewProblem] = useState<string>("");
  const [editingProblem, setEditingProblem] = useState<{
    oldProblem: string;
    newProblem: string;
  } | null>(null);

  const [isAboutSectionVisible, setIsAboutSectionVisible] = useState(false);
  const [isProblemsSectionVisible, setIsProblemsSectionVisible] = useState(false);

  const formRef = useRef<HTMLDivElement | null>(null); // Ref to track the form section
  const aboutSectionRef = useRef<HTMLDivElement | null>(null); // Ref for the About section

  // Effect to scroll into view when the form becomes visible
  useEffect(() => {
    if (isFormVisible && formRef.current) {
      formRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [isFormVisible]);

  // Effect to set aboutText once aboutData is loaded
  useEffect(() => {
    if (aboutData?.about) {
      setAboutText(aboutData.about);
    }
  }, [aboutData]); // Update aboutText when aboutData changes

  const handleAddOrEditTreatment = (data: {
    name: string;
    description: string;
    image: string;
  }) => {
    if (editingTreatment) {
      updateTreatment(editingTreatment.id, data);
      setIsFormVisible(false);
    } else {
      addTreatment(data);
      setIsFormVisible(false);
    }
  };

  const handleEdit = (treatment: {
    id: string;
    name: string;
    description: string;
    image: string;
  }) => {
    setEditingTreatment(treatment);
    setIsFormVisible(true); // This will trigger the scroll effect in useEffect
    formRef.current?.scrollIntoView({ behavior: "smooth" }); 
  };

  const switchToCreateMode = () => {
    setEditingTreatment(undefined);
  };

  const handleAboutSave = () => {
    if (aboutText && window.confirm("Are you sure you want to save the changes to the 'About' section?")) {
      editAbout(aboutText);
      setIsAboutSectionVisible(false); // Close the About section after saving
    }
  };

  const handleProblemAdd = () => {
    if (newProblem && window.confirm(`Are you sure you want to add the problem: ${newProblem}?`)) {
      addProblem(newProblem);
      setNewProblem(""); // Reset input field after adding
    }
  };

  const handleProblemEdit = () => {
    if (editingProblem && editingProblem.newProblem && window.confirm(`Are you sure you want to update this problem to: ${editingProblem.newProblem}?`)) {
      editProblem(editingProblem.oldProblem, editingProblem.newProblem);
      setEditingProblem(null); // Reset the editing state
    }
  };

  const handleProblemDelete = (problem: string) => {
    if (window.confirm(`Are you sure you want to delete the problem: ${problem}?`)) {
      deleteProblem(problem);
    }
  };

  const specialTreatment = treatments.find((treatment) => treatment.id === "GUGjGKdrVrRH4DtcRVy0");
  const otherTreatments = treatments.filter((treatment) => treatment.id !== "GUGjGKdrVrRH4DtcRVy0");

  if (isTreatmentsLoading || isAboutLoading) {
    return <LoadingSpinner />;
  }

  return (
    <div className="bg-gray-100 bg-gradient-to-tr dark:from-gray-950 dark:to-gray-400 min-h-screen" dir="rtl">
      <main className="container mx-auto px-4 py-6">
        {/* Treatments Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-8 space-y-4 sm:space-y-0">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800 dark:text-gray-200">ניהול תוכן</h1>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <button
              className="bg-blue-600 dark:bg-blue-800 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 dark:hover:bg-blue-900 transition duration-300"
              onClick={() => {
                setIsFormVisible(!isFormVisible);
                setEditingTreatment(undefined);
                formRef.current?.scrollIntoView({ behavior: "smooth" });
              }}
            >
              {isFormVisible ? "Hide Form" : "Add New Treatment"}
            </button>
          </div>
        </div>

        {isFormVisible && (
          <div ref={formRef} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-6 mb-8">
            {editingTreatment && (
              <div className="flex justify-center mb-4">
                <button
                  className="bg-gray-400 dark:bg-gray-600 text-white px-5 py-2 rounded-lg shadow hover:bg-yellow-600 transition duration-300"
                  onClick={switchToCreateMode}
                >
                  Switch to Create Mode
                </button>
              </div>
            )}
            <TreatmentForm
              initialData={editingTreatment}
              onSubmit={handleAddOrEditTreatment}
              isEditing={!!editingTreatment}
            />
          </div>
        )}

        {/* Display other treatments */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {otherTreatments.map((treatment) => (
            <TreatmentCard
              key={treatment.id}
              treatment={treatment}
              onDelete={() => deleteTreatment(treatment.id)}
              onEdit={() => handleEdit(treatment)}
              isAdmin={true}
            />
          ))}
        </div>

        {specialTreatment && (
          <>
            <hr className="my-8 border-t-2 border-gray-300 dark:border-gray-600" />
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <TreatmentCard
                key={specialTreatment.id}
                treatment={specialTreatment}
                onDelete={() => {}}
                onEdit={() => handleEdit(specialTreatment)}
                isAdmin={true}
              />
            </div>
          </>
        )}

        {/* About Section */}
        <div className="my-8">
          <button
            onClick={() => setIsAboutSectionVisible(!isAboutSectionVisible)}
            className="px-4 py-2 bg-blue-500 dark:bg-blue-700 text-white rounded-lg hover:bg-blue-600 dark:hover:bg-blue-600 transition duration-300 shadow"
          >
            {isAboutSectionVisible ? "לסגור עריכת אודות" : " אודות"}
          </button>

          {isAboutSectionVisible && (
            <div ref={aboutSectionRef} className="mt-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <textarea
                value={aboutText}
                onChange={(e) => setAboutText(e.target.value)}
                className="w-full p-2 border rounded mb-4 dark:bg-gray-700 dark:text-gray-200"
                rows={5}
              />
              <button
                onClick={handleAboutSave}
                className="px-4 py-2 bg-green-500 dark:bg-green-600 text-white rounded-lg hover:bg-green-600 transition duration-300"
              >
                שמירה
              </button>
            </div>
          )}
        </div>

        {/* Problems Section */}
        <div className="mb-8">
          <button
            onClick={() => setIsProblemsSectionVisible(!isProblemsSectionVisible)}
            className="px-4 py-2 bg-purple-500 dark:bg-purple-700 text-white rounded-lg hover:bg-purple-600 transition duration-300 shadow"
          >
            {isProblemsSectionVisible ? "הסתר בעיות נפוצות" : "בעיות נפוצות "}
          </button>

          {isProblemsSectionVisible && (
            <div className="mt-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg">
              <div className="mb-4 flex flex-col sm:flex-row">
                <input
                  value={newProblem}
                  onChange={(e) => setNewProblem(e.target.value)}
                  placeholder="נא לתאר כאן את שם הבעיה"
                  className="p-2 ml-4 border rounded w-full sm:w-2/3 mb-2 sm:mb-0 dark:bg-gray-700 dark:text-gray-200"
                />
                <button
                  onClick={handleProblemAdd}
                  className="px-4 py-2 bg-green-500 dark:bg-green-600 text-white rounded-lg hover:bg-green-600 transition duration-300"
                >
                  הוספה
                </button>
              </div>

              {aboutData?.problems.map((problem) => (
                <div key={problem} className="mb-4">
                  <div className="flex items-center justify-between dark:text-gray-200">
                    <span>{problem}</span>
                    <div className="flex space-x-6 space-x-reverse">
                      <button
                        className="px-2 py-1 bg-yellow-500 dark:bg-yellow-600 text-white rounded hover:bg-yellow-600 transition duration-300"
                        onClick={() =>
                          setEditingProblem({
                            oldProblem: problem,
                            newProblem: problem,
                          })
                        }
                      >
                        עריכה
                      </button>
                      <button
                        className="px-2 py-1 bg-red-500 dark:bg-red-600 text-white rounded hover:bg-red-600 transition duration-300"
                        onClick={() => handleProblemDelete(problem)}
                      >
                        מחיקה
                      </button>
                    </div>
                  </div>
                  <hr className="my-2 border-gray-300 dark:border-gray-600" />
                </div>
              ))}

              {editingProblem && (
                <div className="mt-4 flex">
                  <input
                    value={editingProblem.newProblem}
                    onChange={(e) =>
                      setEditingProblem({
                        ...editingProblem,
                        newProblem: e.target.value,
                      })
                    }
                    className="p-2 ml-4 border rounded w-full sm:w-2/3 mb-2 sm:mb-0 dark:bg-gray-700 dark:text-gray-200"
                  />
                  <button
                    onClick={handleProblemEdit}
                    className="px-4 py-2 bg-gray-500 dark:bg-gray-600 text-white rounded-lg hover:bg-yellow-600 transition duration-300"
                  >
                    שמור
                  </button>
                </div>
              )}
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
