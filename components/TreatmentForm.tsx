import { useState, useEffect } from 'react';

interface TreatmentFormProps {
  initialData?: { // Optional initial data for editing
    name: string;
    description: string;
    image: string;
  };
  onSubmit: (data: { name: string; description: string; image: string }) => void;
  isEditing?: boolean; // Whether this is an edit operation
}

export default function TreatmentForm({ initialData, onSubmit, isEditing = false }: TreatmentFormProps) {
  const [name, setName] = useState(initialData?.name || '');
  const [description, setDescription] = useState(initialData?.description || '');
  const [image, setImage] = useState(initialData?.image || '');

  useEffect(() => {
    if (initialData) {
      setName(initialData.name);
      setDescription(initialData.description);
      setImage(initialData.image);
    } else {
      setName('');
      setDescription('');
      setImage('');
    }
  }, [initialData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const isConfirmed = window.confirm(isEditing ? "Are you sure you want to update this treatment?" : "Are you sure you want to add this treatment?");
    if (!isConfirmed) return;

    onSubmit({ name, description, image });
  };

  return (
    <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-700">{isEditing ? "עריכת טיפול" : "הוספת טיפול חדש"}</h2>
      
      <div className="mb-4">
        <label className="block text-gray-600 font-semibold mb-2" htmlFor="name">שם הטיפול</label>
        <input 
          id="name" 
          type="text" 
          value={name} 
          onChange={(e) => setName(e.target.value)} 
          required 
          className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
          placeholder="Enter treatment name"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-600 font-semibold mb-2" htmlFor="description">תיאור</label>
        <textarea 
          id="description" 
          value={description} 
          onChange={(e) => setDescription(e.target.value)} 
          required 
          className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm" 
          rows={4}
          placeholder="Describe the treatment"
        />
      </div>

      <div className="mb-6">
        <label className="block text-gray-600 font-semibold mb-2" htmlFor="image">כתובת אינטרנט של התמונה</label>
        <input 
          id="image" 
          type="url" 
          value={image} 
          onChange={(e) => setImage(e.target.value)} 
          required 
          className="w-full px-4 py-2 border rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm" 
          placeholder="https://example.com/image.jpg"
        />
      </div>

      <button 
        type="submit" 
        className="w-full bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 rounded-lg shadow-md transition duration-300"
      >
        {isEditing ? "לשמור מעודכן" : "הוספת תוכן"}
      </button>
    </form>
  );
}
