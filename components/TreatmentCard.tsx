// interface TreatmentCardProps {
//   treatment: {
//     id: string;
//     name: string;
//     description: string;
//     image: string;
//   };
//   onDelete: () => void;
//   onEdit: () => void; // New prop for editing
//   isAdmin: boolean; // New prop to check if the user is an admin
// }

// export default function TreatmentCard({ treatment, onDelete, onEdit, isAdmin }: TreatmentCardProps) {
//   const handleDelete = () => {
//     const isConfirmed = window.confirm("Are you sure you want to delete this treatment?");
//     if (isConfirmed) {
//       onDelete(); // Call the delete function passed as a prop
//     }
//   };

//   return (
//     <div className="bg-white shadow-md p-4 rounded">
//       <img src={treatment.image} alt={treatment.name} className="w-full h-32 object-cover rounded" />
//       <h2 className="text-xl font-bold mt-2">{treatment.name}</h2>
//       <p className="mt-2">{treatment.description}</p>
//       {isAdmin && ( // Only render buttons if the user is an admin
//         <div className="flex justify-between mt-4">
//           <button onClick={handleDelete} className="bg-red-500 text-white px-4 py-2 rounded">Delete</button>
//           <button onClick={onEdit} className="bg-yellow-500 text-white px-4 py-2 rounded">Edit</button>
//         </div>
//       )}
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
      className="bg-gradient-to-r from-blue-50 to-purple-50 shadow-lg p-6 rounded-lg hover:shadow-xl transition-shadow duration-300 cursor-pointer"
      onClick={toggleDescription}
      dir="rtl"
    >
      {/* Header Section */}
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-bold text-blue-800">{treatment.name}</h2>
       
      </div>

      {/* Image Section */}
      <div className="mt-4">
        <img
          src={treatment.image}
          alt={treatment.name}
          className="w-full h-48 object-cover rounded-lg"
        />
      </div>

      {isAdmin && (
          <div className="space-(-x-2)">
            <button
              onClick={(e) => {
                e.stopPropagation();
                onEdit();
              }}
              className="bg-yellow-500 text-white mx-2 px-3 py-1 rounded-lg"
            >
              עריכה
            </button>
            <button
              onClick={(e) => {
                e.stopPropagation(); // Prevent triggering the card click event
                handleDelete();
              }}
              className="bg-red-500 text-white px-3 mx-2 py-1 mt-2 rounded-lg"
            >
              מחיקה
            </button>
          </div>
        )}

      {/* Toggleable Description Section */}
      {isDescriptionOpen && (
        <div className="mt-4 bg-white rounded-lg p-4 text-gray-800 shadow-inner">
          <p>{treatment.description}</p>
        </div>
      )}

      {/* Indicator for description */}
      <div className="text-center mt-2 text-blue-700 font-semibold">
        {isDescriptionOpen ? "Hide Details" : "Show Details"}
      </div>
    </div>
  );
}
