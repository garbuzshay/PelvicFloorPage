// import { useState, useEffect } from 'react';
// import { db, auth } from '../lib/firebase'; 
// import { doc, getDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
// import { onAuthStateChanged, User } from 'firebase/auth'; 

// interface AboutData {
//   about: string;
//   problems: string[];
// }

// export function useAbout() {
//   const [aboutData, setAboutData] = useState<AboutData | null>(null);
//   const [loading, setLoading] = useState<boolean>(true);
//   const [error, setError] = useState<string | null>(null);
//   const [user, setUser] = useState<User | null>(null);

//   useEffect(() => {
//     const unsubscribe = onAuthStateChanged(auth, (user) => {
//       setUser(user ? user : null);
//     });
//     return () => unsubscribe();
//   }, []);

//   // Use the generated document ID from Firestore (from your screenshot)
//   const documentId = 'CJsx7kpvgyVehrT3PozP';

//   useEffect(() => {
//     const fetchAbout = async () => {
//       setLoading(true);
//       try {
//         const aboutDoc = await getDoc(doc(db, 'About', documentId));
//         if (aboutDoc.exists()) {
//           setAboutData(aboutDoc.data() as AboutData);
//         } else {
//           setError('About data not found in Firestore.');
//         }
//       } catch (err) {
//         setError('Failed to load about data');
//         console.error('Error fetching about data:', err);
//       } finally {
//         setLoading(false);
//       }
//     };

//     fetchAbout();
//   }, []);

//   return {
//     aboutData,
//     loading,
//     error,
//   };
// }


// hooks/useAbout.tsx
import { useState, useEffect } from 'react';
import { db, auth } from '../lib/firebase';
import { doc, getDoc, updateDoc, arrayUnion, arrayRemove } from 'firebase/firestore';
import { onAuthStateChanged, User } from 'firebase/auth';

interface AboutData {
  about: string;
  problems: string[];
}

export function useAbout() {
  const [aboutData, setAboutData] = useState<AboutData | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user ? user : null);
    });
    return () => unsubscribe();
  }, []);

  const documentId = 'CJsx7kpvgyVehrT3PozP'; // Your actual document ID

  useEffect(() => {
    const fetchAbout = async () => {
      setLoading(true);
      try {
        const aboutDoc = await getDoc(doc(db, 'About', documentId));
        if (aboutDoc.exists()) {
          setAboutData(aboutDoc.data() as AboutData);
        } else {
          setError('About data not found in Firestore.');
        }
      } catch (err) {
        setError('Failed to load about data');
        console.error('Error fetching about data:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchAbout();
  }, []);

  // Edit About text
  const editAbout = async (newAbout: string) => {
    try {
      const aboutRef = doc(db, 'About', documentId);
      await updateDoc(aboutRef, { about: newAbout });
      setAboutData((prevData) => prevData && { ...prevData, about: newAbout });
      console.log('About section updated successfully');
    } catch (error) {
      console.error('Error updating About section:', error);
    }
  };

  // Add a new problem
  const addProblem = async (newProblem: string) => {
    try {
      const aboutRef = doc(db, 'About', documentId);
      await updateDoc(aboutRef, { problems: arrayUnion(newProblem) });
      setAboutData((prevData) => prevData && { ...prevData, problems: [...prevData.problems, newProblem] });
    } catch (error) {
      console.error('Error adding problem:', error);
    }
  };

  // Edit an existing problem
  const editProblem = async (oldProblem: string, newProblem: string) => {
    try {
      const aboutRef = doc(db, 'About', documentId);
      await updateDoc(aboutRef, { problems: arrayRemove(oldProblem) });
      await updateDoc(aboutRef, { problems: arrayUnion(newProblem) });
      setAboutData((prevData) => prevData && {
        ...prevData,
        problems: prevData.problems.map((p) => (p === oldProblem ? newProblem : p)),
      });
    } catch (error) {
      console.error('Error editing problem:', error);
    }
  };

  // Delete a problem
  const deleteProblem = async (problem: string) => {
    try {
      const aboutRef = doc(db, 'About', documentId);
      await updateDoc(aboutRef, { problems: arrayRemove(problem) });
      setAboutData((prevData) => prevData && {
        ...prevData,
        problems: prevData.problems.filter((p) => p !== problem),
      });
    } catch (error) {
      console.error('Error deleting problem:', error);
    }
  };

  return {
    aboutData,
    loading,
    error,
    editAbout,
    addProblem,
    editProblem,
    deleteProblem,
  };
}
