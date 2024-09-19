// import { useState, useEffect } from 'react';
// import { useTreatments } from '../../hooks/useTreatments';
// import { useAbout } from '../../hooks/useAbout'; // Import the useAbout hook
// import TreatmentForm from '../../components/TreatmentForm';
// import TreatmentCard from '../../components/TreatmentCard';

// export default function AdminEditMode() {
//   const { treatments, addTreatment, updateTreatment, deleteTreatment } = useTreatments();
//   const { aboutData, editAbout, addProblem, deleteProblem, editProblem } = useAbout(); // Use the about hook

//   const [editingTreatment, setEditingTreatment] = useState<{ id: string, name: string, description: string, image: string } | undefined>(undefined);
//   const [isFormVisible, setIsFormVisible] = useState(false);

//   const [aboutText, setAboutText] = useState<string>(''); // Initialize with an empty string
//   const [newProblem, setNewProblem] = useState<string>('');
//   const [editingProblem, setEditingProblem] = useState<{ oldProblem: string; newProblem: string } | null>(null);

//   // Effect to set aboutText once aboutData is loaded
//   useEffect(() => {
//     if (aboutData?.about) {
//       setAboutText(aboutData.about);
//     }
//   }, [aboutData]);

//   const handleAddOrEditTreatment = (data: { name: string; description: string; image: string }) => {
//     if (editingTreatment) {
//       updateTreatment(editingTreatment.id, data);
//       setIsFormVisible(false);
//     } else {
//       addTreatment(data);
//       setIsFormVisible(false);
//     }
//   };

//   const handleEdit = (treatment: { id: string, name: string, description: string, image: string }) => {
//     setEditingTreatment(treatment);
//     setIsFormVisible(true);
//   };

//   const switchToCreateMode = () => {
//     setEditingTreatment(undefined);
//   };

//   // Handle about text save
//   const handleAboutSave = () => {
//     if (aboutText) {
//       editAbout(aboutText);
//     }
//   };

//   // Handle adding a new problem
//   const handleProblemAdd = () => {
//     if (newProblem) {
//       addProblem(newProblem);
//       setNewProblem(''); // Reset input field after adding
//     }
//   };

//   // Handle editing an existing problem
//   const handleProblemEdit = () => {
//     if (editingProblem && editingProblem.newProblem) {
//       editProblem(editingProblem.oldProblem, editingProblem.newProblem);
//       setEditingProblem(null); // Reset the editing state
//     }
//   };

//   // Separate the special treatment by ID
//   const specialTreatment = treatments.find(treatment => treatment.id === 'GUGjGKdrVrRH4DtcRVy0');
//   const otherTreatments = treatments.filter(treatment => treatment.id !== 'GUGjGKdrVrRH4DtcRVy0');

//   return (
//     <div className="bg-gray-100 min-h-screen" dir="rtl">
//       <main className="container mx-auto px-4 py-6">
//         {/* Manage About Section */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-semibold mb-2">Edit About Section</h2>
//           <textarea
//             value={aboutText}
//             onChange={(e) => setAboutText(e.target.value)}
//             className="w-full p-2 border rounded mb-4"
//             rows={5}
//           />
//           <button
//             onClick={handleAboutSave}
//             className="px-4 py-2 bg-blue-600 text-white rounded-lg"
//           >
//             Save About Section
//           </button>
//         </div>

//         {/* Manage Problems Section */}
//         <div className="mb-8">
//           <h2 className="text-2xl font-semibold mb-2">Manage Problems</h2>

//           {/* Add New Problem */}
//           <div className="mb-4">
//             <input
//               value={newProblem}
//               onChange={(e) => setNewProblem(e.target.value)}
//               placeholder="Add new problem"
//               className="p-2 border rounded mr-2"
//             />
//             <button
//               onClick={handleProblemAdd}
//               className="px-4 py-2 bg-green-600 text-white rounded-lg"
//             >
//               Add Problem
//             </button>
//           </div>

//           {/* Edit Existing Problems */}
//           {aboutData?.problems.map((problem) => (
//             <div key={problem} className="flex items-center justify-between mb-2">
//               <span>{problem}</span>
//               <div>
//                 <button
//                   className="px-2 py-1 bg-yellow-500 text-white rounded mr-2"
//                   onClick={() => setEditingProblem({ oldProblem: problem, newProblem: problem })}
//                 >
//                   Edit
//                 </button>
//                 <button
//                   className="px-2 py-1 bg-red-500 text-white rounded"
//                   onClick={() => deleteProblem(problem)}
//                 >
//                   Delete
//                 </button>
//               </div>
//             </div>
//           ))}

//           {/* Edit Problem Form */}
//           {editingProblem && (
//             <div className="mt-4">
//               <input
//                 value={editingProblem.newProblem}
//                 onChange={(e) => setEditingProblem({ ...editingProblem, newProblem: e.target.value })}
//                 className="p-2 border rounded mr-2"
//               />
//               <button onClick={handleProblemEdit} className="px-4 py-2 bg-yellow-500 text-white rounded-lg">
//                 Save Problem
//               </button>
//             </div>
//           )}
//         </div>

//         {/* Treatments Section */}
//         <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-8 space-y-4 sm:space-y-0">
//           <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">Manage Treatments</h1>
//           <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
//             <button
//               className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300"
//               onClick={() => {
//                 setIsFormVisible(!isFormVisible);
//                 setEditingTreatment(undefined);
//               }}
//             >
//               {isFormVisible ? "Hide Form" : "Add New Treatment"}
//             </button>
//           </div>
//         </div>

//         {isFormVisible && (
//           <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
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

//         {/* Display other treatments first */}
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

//         {/* Divider */}
//         {specialTreatment && (
//           <>
//             <hr className="my-8 border-t-2 border-gray-300" />
//             {/* Special treatment without delete button */}
//             <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//               <TreatmentCard
//                 key={specialTreatment.id}
//                 treatment={specialTreatment}
//                 onDelete={() => {}} // No delete functionality for this special treatment
//                 onEdit={() => handleEdit(specialTreatment)}
//                 isAdmin={false} // Set isAdmin to false to hide delete button
//               />
//             </div>
//           </>
//         )}
//       </main>
//     </div>
//   );
// }

import { useState, useEffect } from "react";
import { useTreatments } from "../../hooks/useTreatments";
import { useAbout } from "../../hooks/useAbout"; // Import the useAbout hook
import TreatmentForm from "../../components/TreatmentForm";
import TreatmentCard from "../../components/TreatmentCard";

export default function AdminEditMode() {
  const { treatments, addTreatment, updateTreatment, deleteTreatment } =
    useTreatments();
  const { aboutData, editAbout, addProblem, deleteProblem, editProblem } =
    useAbout(); // Use the about hook

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

  // Toggles for showing/hiding sections
  const [isAboutSectionVisible, setIsAboutSectionVisible] = useState(false);
  const [isProblemsSectionVisible, setIsProblemsSectionVisible] =
    useState(false);

  // Effect to set aboutText once aboutData is loaded
  useEffect(() => {
    if (aboutData?.about) {
      setAboutText(aboutData.about);
    }
  }, [aboutData]);

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
    setIsFormVisible(true);
  };

  const switchToCreateMode = () => {
    setEditingTreatment(undefined);
  };

  // Handle about text save
  const handleAboutSave = () => {
    if (aboutText) {
      editAbout(aboutText);
    }
  };

  // Handle adding a new problem
  const handleProblemAdd = () => {
    if (newProblem) {
      addProblem(newProblem);
      setNewProblem(""); // Reset input field after adding
    }
  };

  // Handle editing an existing problem
  const handleProblemEdit = () => {
    if (editingProblem && editingProblem.newProblem) {
      editProblem(editingProblem.oldProblem, editingProblem.newProblem);
      setEditingProblem(null); // Reset the editing state
    }
  };

  // Separate the special treatment by ID
  const specialTreatment = treatments.find(
    (treatment) => treatment.id === "GUGjGKdrVrRH4DtcRVy0"
  );
  const otherTreatments = treatments.filter(
    (treatment) => treatment.id !== "GUGjGKdrVrRH4DtcRVy0"
  );

  return (
    <div className="bg-gray-100 min-h-screen" dir="rtl">
      <main className="container mx-auto px-4 py-6">
        {/* Treatments Section */}
        <div className="flex flex-col sm:flex-row sm:justify-between items-center mb-8 space-y-4 sm:space-y-0">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Manage Treatments
          </h1>
          <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
            <button
              className="bg-blue-600 text-white px-5 py-2 rounded-lg shadow hover:bg-blue-700 transition duration-300"
              onClick={() => {
                setIsFormVisible(!isFormVisible);
                setEditingTreatment(undefined);
              }}
            >
              {isFormVisible ? "Hide Form" : "Add New Treatment"}
            </button>
          </div>
        </div>

        {isFormVisible && (
          <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
            {editingTreatment && (
              <div className="flex justify-center mb-4">
                <button
                  className="bg-gray-400 text-white px-5 py-2 rounded-lg shadow hover:bg-yellow-600 transition duration-300"
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

        {/* Display other treatments first */}
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

        {/* Divider */}
        {specialTreatment && (
          <>
            <hr className="my-8 border-t-2 border-gray-300" />
            {/* Special treatment without delete button */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              <TreatmentCard
                key={specialTreatment.id}
                treatment={specialTreatment}
                onDelete={() => {}} // No delete functionality for this special treatment
                onEdit={() => handleEdit(specialTreatment)}
                isAdmin={true} // Set isAdmin to false to hide delete button
              />
            </div>
          </>
        )}

        {/* About Section Toggle */}
        <div className="my-8">
          <button
            onClick={() => setIsAboutSectionVisible(!isAboutSectionVisible)}
            className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition duration-300 shadow"
          >
            {isAboutSectionVisible ? "לסגור עריכת אודות" : " אודות"}
          </button>

          {isAboutSectionVisible && (
            <div className="mt-4 bg-white p-6 rounded-lg shadow-lg">
              <textarea
                value={aboutText}
                onChange={(e) => setAboutText(e.target.value)}
                className="w-full p-2 border rounded mb-4"
                rows={5}
              />
              <button
                onClick={handleAboutSave}
                className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
              >
                שמירה
              </button>
            </div>
          )}
        </div>

        {/* Problems Section Toggle */}
        <div className="mb-8">
          <button
            onClick={() =>
              setIsProblemsSectionVisible(!isProblemsSectionVisible)
            }
            className="px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-purple-600 transition duration-300 shadow"
          >
            {isProblemsSectionVisible ? "הסתר בעיות נפוצות" : "בעיות נפוצות "}
          </button>

          {isProblemsSectionVisible && (
            <div className="mt-4 bg-white p-6 rounded-lg shadow-lg">
              {/* Add New Problem */}
              <div className="mb-4 flex flex-col sm:flex-row">
                <input
                  value={newProblem}
                  onChange={(e) => setNewProblem(e.target.value)}
                  placeholder="נא לתאר כאן את שם הבעיה"
                  className="p-2 ml-4 border rounded w-full sm:w-2/3 mb-2 sm:mb-0 "
                />
                <button
                  onClick={handleProblemAdd}
                  className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300"
                >
                  הוספה
                </button>
              </div>

              {/* Edit Existing Problems */}
              {aboutData?.problems.map((problem) => (
                <div key={problem} className="mb-4">
                  {/* Problem row with buttons */}
                  <div className="flex items-center justify-between">
                    <span>{problem}</span>
                    <div className="flex space-x-6 space-x-reverse">
                      <button
                        className="px-2 py-1 bg-yellow-500 text-white rounded hover:bg-yellow-600 transition duration-300"
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
                        className="px-2 py-1 bg-red-500 text-white rounded hover:bg-red-600 transition duration-300"
                        onClick={() => deleteProblem(problem)}
                      >
                        מחיקה
                      </button>
                    </div>
                  </div>

                  {/* Divider between each problem */}
                  <hr className="my-2 border-gray-300" />
                </div>
              ))}

              {/* Edit Problem Form */}
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
                    className="p-2 ml-4 border rounded w-full sm:w-2/3 mb-2 sm:mb-0 "
                  />
                  <button
                    onClick={handleProblemEdit}
                    className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-yellow-600 transition duration-300"
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
