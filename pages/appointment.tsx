// import { useState } from 'react';
// import { db } from '../lib/firebase';
// import { collection, addDoc } from 'firebase/firestore';
// import Header from '../components/Navbar';
// import Footer from '../components/Footer';

// export default function Appointment() {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [date, setDate] = useState('');
//   const [message, setMessage] = useState('');

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     try {
//       await addDoc(collection(db, 'appointments'), {
//         name,
//         email,
//         date,
//         message,
//       });
//       alert('Appointment requested successfully!');
//     } catch (err) {
//       console.error('Error making appointment:', err);
//     }
//   };

//   return (
//     <div>
//       <Header />
//       <main className="container mx-auto px-4">
//         <h1 className="text-4xl font-bold">Make an Appointment</h1>
//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label htmlFor="name" className="block">Name</label>
//             <input
//               id="name"
//               type="text"
//               className="input"
//               value={name}
//               onChange={(e) => setName(e.target.value)}
//             />
//           </div>
//           <div>
//             <label htmlFor="email" className="block">Email</label>
//             <input
//               id="email"
//               type="email"
//               className="input"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//           </div>
//           <div>
//             <label htmlFor="date" className="block">Preferred Date</label>
//             <input
//               id="date"
//               type="date"
//               className="input"
//               value={date}
//               onChange={(e) => setDate(e.target.value)}
//             />
//           </div>
//           <div>
//             <label htmlFor="message" className="block">Message (Optional)</label>
//             <textarea
//               id="message"
//               className="input"
//               value={message}
//               onChange={(e) => setMessage(e.target.value)}
//             />
//           </div>
//           <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">Request Appointment</button>
//         </form>
//       </main>
//       <Footer />
//     </div>
//   );
// }
