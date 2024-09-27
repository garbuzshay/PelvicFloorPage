// import { useState } from "react";

// interface TreatmentCardProps {
//   treatment: {
//     id: string;
//     name: string;
//     description: string;
//     image: string;
//   };
//   onDelete: () => void;
//   onEdit: () => void;
//   isAdmin: boolean;
// }

// export default function TreatmentCard({
//   treatment,
//   onDelete,
//   onEdit,
//   isAdmin,
// }: TreatmentCardProps) {
//   const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

//   const handleDelete = () => {
//     const isConfirmed = window.confirm(
//       "Are you sure you want to delete this treatment?"
//     );
//     if (isConfirmed) {
//       onDelete();
//     }
//   };

//   const toggleDescription = () => {
//     setIsDescriptionOpen(!isDescriptionOpen);
//   };

//   return (
//     <div
//       className="bg-gradient-to-tr from-blue-100 to-pink-100 shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
//       onClick={toggleDescription}
//       dir="rtl"
//     >
//       {/* Header Section */}
//       <div className="flex items-center justify-between">
//         <h2 className="text-2xl font-bold text-blue-800">{treatment.name}</h2>
//       </div>

//       {/* Image Section */}
//       <div className="mt-4">
//         <img
//           src={treatment.image}
//           alt={treatment.name}
//           className="w-fulll h-48 md:h-64 lg:h-72  rounded-lg"
//         />
//       </div>

//       {isAdmin && (
//         <div className="space-(-x-2)">
//           <button
//             onClick={(e) => {
//               e.stopPropagation();
//               onEdit();
//             }}
//             className="bg-yellow-500 text-white mx-2 px-3 py-1 rounded-lg"
//           >
//             עריכה
//           </button>
//           <button
//             onClick={(e) => {
//               e.stopPropagation(); // Prevent triggering the card click event
//               handleDelete();
//             }}
//             className="bg-red-500 text-white px-3 mx-2 py-1 mt-2 rounded-lg"
//           >
//             מחיקה
//           </button>
//         </div>
//       )}

//       {/* Toggleable Description Section */}
//       {isDescriptionOpen && (
//         <div className="mt-4 bg-blue-100 bg-opacity-50 rounded-xl p-6 text-gray-900 border-l-4 border-blue-300 border-opacity-30 shadow-md">
//           <p className="leading-relaxed text-lg">{treatment.description}</p>
//         </div>
//       )}

//       {/* Indicator for description */}
//       <div className="text-center mt-2 text-blue-700 font-semibold">
//         {isDescriptionOpen ? "לסגור תיאור" : "הסבר נוסף"}
//       </div>
//     </div>
//   );
// }


import { useState } from "react";

interface TreatmentCardProps {
  treatment: {
    id: string;
    name: string;
    description: string;
    image: string;
  };
  onDelete: () => void;
  onEdit: () => void;
  isAdmin: boolean;
}

export default function TreatmentCard({
  treatment,
  onDelete,
  onEdit,
  isAdmin,
}: TreatmentCardProps) {
  const [isDescriptionOpen, setIsDescriptionOpen] = useState(false);

  const handleDelete = () => {
    const isConfirmed = window.confirm(
      "Are you sure you want to delete this treatment?"
    );
    if (isConfirmed) {
      onDelete();
    }
  };

  const toggleDescription = () => {
    setIsDescriptionOpen(!isDescriptionOpen);
  };

  return (
    <div
      className="bg-gradient-to-tr from-blue-100 to-pink-100 dark:from-gray-800 dark:to-gray-900 shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer dark:hover:shadow-gray-700"
      onClick={toggleDescription}
      dir="rtl"
    >
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h3 className="text-2xl font-bold  dark:text-white">
          {treatment.name}
        </h3>
      </div>

      {/* Image Section */}
      <div className="mt-4">
        <img
          src={treatment.image}
          alt={treatment.name}
          className="w-fulll h-48 md:h-64 lg:h-72  rounded-lg"
        />
      </div>

      {isAdmin && (
        <div className="space-x-2 mt-4">
          <button
            onClick={(e) => {
              e.stopPropagation();
              onEdit();
            }}
            className="bg-yellow-500 dark:bg-yellow-600 text-white mx-2 px-3 py-1 rounded-lg"
          >
            עריכה
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleDelete();
            }}
            className="bg-red-500 dark:bg-red-600 text-white px-3 mx-2 py-1 mt-2 rounded-lg"
          >
            מחיקה
          </button>
        </div>
      )}

      {/* Toggleable Description Section */}
      {isDescriptionOpen && (
        <div className="mt-4 bg-blue-100 dark:bg-gray-800 bg-opacity-50 dark:bg-opacity-75 rounded-xl p-6 text-gray-900 dark:text-gray-200 border-l-4 border-blue-300 dark:border-gray-600 shadow-md">
          <p className="leading-relaxed text-lg">{treatment.description}</p>
        </div>
      )}

      {/* Indicator for description */}
      <div className="text-center mt-2 text-blue-700 dark:text-gray-300 font-semibold">
        {isDescriptionOpen ? "לסגור תיאור" : "הסבר נוסף"}
      </div>
    </div>
  );
}
