import { useState, useEffect } from 'react';
import { db, auth } from '../lib/firebase'; // Ensure Firebase auth and Firestore are imported
import { collection, getDocs, addDoc, deleteDoc, updateDoc, doc } from 'firebase/firestore';
import { onAuthStateChanged, User } from 'firebase/auth'; // Import Firebase Auth User type

interface Treatment {
  id: string;
  name: string;
  description: string;
  image: string;
}

export function useTreatments() {
  const [treatments, setTreatments] = useState<Treatment[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  
  // Track authenticated user
  const [user, setUser] = useState<User | null>(null);

  // Auth listener to track user state
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user); // Set authenticated user
      } else {
        setUser(null); // Set user to null if not authenticated
      }
    });
    // Clean up auth listener on unmount
    return () => unsubscribe();
  }, []);

  // Fetch treatments from Firestore
  useEffect(() => {
    const fetchTreatments = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, 'Treatments'));
        const treatmentsData = querySnapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        })) as Treatment[];
        setTreatments(treatmentsData);
        setError(null); // Clear any previous errors
      } catch (err) {
        setError('Failed to load treatments');
        console.error('Error fetching treatments:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchTreatments();
  }, []);

  // Add treatment only if the user is authenticated
  const addTreatment = async (treatment: { name: string; description: string; image: string }) => {
    if (!user) {
      setError('You must be logged in to add a treatment.');
      return;
    }
    try {
      await addDoc(collection(db, 'Treatments'), treatment);
      console.log('Treatment added successfully');
      // Optionally, refresh treatments list after adding
      setTreatments((prevTreatments) => [...prevTreatments, { ...treatment, id: 'generated-by-firestore' }]); // You might need to refresh the ID after submission
    } catch (error) {
      console.error('Error adding treatment:', error);
      setError('Error adding treatment');
    }
  };

  // Update treatment only if the user is authenticated
  const updateTreatment = async (id: string, treatment: { name: string; description: string; image: string }) => {
    if (!user) {
      setError('You must be logged in to update a treatment.');
      return;
    }
    try {
      const treatmentRef = doc(db, 'Treatments', id);
      await updateDoc(treatmentRef, treatment);
      console.log('Treatment updated successfully');
      // Optionally, update the local state to reflect the updated treatment
      setTreatments((prevTreatments) =>
        prevTreatments.map((t) => (t.id === id ? { ...t, ...treatment } : t))
      );
    } catch (err) {
      console.error('Error updating treatment:', err);
      setError('Error updating treatment');
    }
  };

  // Delete treatment only if the user is authenticated
  const deleteTreatment = async (id: string) => {
    if (!user) {
      setError('You must be logged in to delete a treatment.');
      return;
    }
    try {
      await deleteDoc(doc(db, 'Treatments', id));
      console.log('Treatment deleted successfully');
      // Remove the deleted treatment from the local state
      setTreatments((prevTreatments) => prevTreatments.filter((t) => t.id !== id));
    } catch (err) {
      console.error('Error deleting treatment:', err);
      setError('Error deleting treatment');
    }
  };

  return {
    treatments,
    loading,
    error,
    addTreatment,
    updateTreatment,
    deleteTreatment,
    user,
  };
}
