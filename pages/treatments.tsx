import { useTreatments } from '../hooks/useTreatments';
import TreatmentCard from '../components/TreatmentCard';
import LoadingSpinner from '../components/LoadingSpinner';

export default function Treatments() {
  const { treatments, loading, error, deleteTreatment } = useTreatments();

  const handleEdit = (treatmentId: string) => {
    console.log(`Edit treatment with id: ${treatmentId}`);
  };

  if (loading) {
     return <LoadingSpinner />;
  }

  if (error) {
    return <p className="text-red-500">{error}</p>;
  }

  if (treatments.length === 0) {
    return <p>No treatments found.</p>;
  }

  // Separate out the specific treatment by id
  const specialTreatment = treatments.find(treatment => treatment.id === 'GUGjGKdrVrRH4DtcRVy0');
  const otherTreatments = treatments.filter(treatment => treatment.id !== 'GUGjGKdrVrRH4DtcRVy0');

  return (
    <div className="space-y-8" dir="rtl">
      {/* Main treatments grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {otherTreatments.map((treatment) => (
          <TreatmentCard
            key={treatment.id}
            treatment={treatment}
            onDelete={() => deleteTreatment(treatment.id)}
            onEdit={() => handleEdit(treatment.id)}
            isAdmin={false}
          />
        ))}
      </div>

      {/* Partition (you can customize the look) */}
      {specialTreatment && (
        <>
          <hr className="my-8 border-t-2 border-gray-300" />
          {/* Special treatment card */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            <TreatmentCard
              key={specialTreatment.id}
              treatment={specialTreatment}
              onDelete={() => deleteTreatment(specialTreatment.id)}
              onEdit={() => handleEdit(specialTreatment.id)}
              isAdmin={false}
            />
          </div>
        </>
      )}
    </div>
  );
}
