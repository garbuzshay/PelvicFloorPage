import { useState } from 'react';
import { useTreatments } from '../../hooks/useTreatments';
import TreatmentForm from '../../components/TreatmentForm';
import TreatmentCard from '../../components/TreatmentCard';
import { doc, updateDoc } from 'firebase/firestore'; // Import Firestore update function
import { db } from '../../lib/firebase'; // Assuming you have firebase initialized here

export default function AdminTreatments() {
  // Align fields with Firestore (name, description, image)
  const { treatments, addTreatment, deleteTreatment } = useTreatments();
  const [editingTreatment, setEditingTreatment] = useState<{
    id: string;
    name: string;
    description: string;
    image: string;
  } | null>(null);

  // Handle adding treatment with proper fields (name, description, image)
  const handleAddTreatment = (data: { name: string; description: string; image: string }) => {
    addTreatment(data);
  };

  // Handle editing treatment (Firestore update)
  const handleEditTreatment = async (id: string, data: { name: string; description: string; image: string }) => {
    try {
      const treatmentRef = doc(db, 'Treatments', id);
      await updateDoc(treatmentRef, data); // Updating the treatment in Firestore
      console.log('Treatment updated:', id);
    } catch (error) {
      console.error('Error updating treatment:', error);
    }
    setEditingTreatment(null); // Reset the form after editing
  };

  return (
    <div className='border-2 '>
      <main className="container  px-4">
        <h1 className="text-4xl font-bold">Manage Treatments</h1>

        <h2 className="text-2xl mt-4">Add New Treatment</h2>
        <TreatmentForm onSubmit={handleAddTreatment} />

        {editingTreatment && (
          <div>
            <h2 className="text-2xl mt-4">Edit Treatment</h2>
            <TreatmentForm
              initialData={editingTreatment}
              onSubmit={(data) => handleEditTreatment(editingTreatment.id, data)}
            />
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {treatments.map((treatment) => (
            <TreatmentCard
              key={treatment.id}
              treatment={treatment}
              onDelete={() => deleteTreatment(treatment.id)}
              onEdit={() => setEditingTreatment(treatment)} // Set the treatment to be edited
              isAdmin={true}
            />
          ))}
        </div>
      </main>
    </div>
  );
}
