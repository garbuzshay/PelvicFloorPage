// import { useState } from 'react';

// interface ContactFormProps {
//   onSubmit: (data: { name: string; email: string; tel: string; message: string  }) => Promise<void>;
// }

// const ContactForm = ({ onSubmit }: ContactFormProps) => {
//   const [name, setName] = useState('');
//   const [email, setEmail] = useState('');
//   const [tel, setPhone] = useState(''); // New phone state
//   const [message, setMessage] = useState('');
//   const [isSubmitting, setIsSubmitting] = useState(false); // State for submit button

//   const resetForm = () => {
//     setName('');
//     setEmail('');
//     setPhone(''); // Reset phone field
//     setMessage('');
//   };

//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
//     setIsSubmitting(true); // Set submitting state

//     // Call the onSubmit function (from parent) with form data
//     await onSubmit({ name, email, tel, message });

//     setIsSubmitting(false); // Reset submitting state

//     // Clear the form 2 seconds after submission
//     setTimeout(() => {
//       resetForm();
//     }, 2000);
//   };

//   return (
//     <form onSubmit={handleSubmit} className="space-y-4" dir="rtl">
//       <input
//         type="text"
//         placeholder="שם מלא"
//         value={name}
//         onChange={(e) => setName(e.target.value)}
//         className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-purple-200"
//       />
//       <input
//         type="email"
//         placeholder="כתובת מייל"
//         value={email}
//         onChange={(e) => setEmail(e.target.value)}
//         className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-purple-200"
//       />
//       <input
//         type="tel"
//         placeholder="מספר טלפון" // New phone number input
//         value={tel}
//         onChange={(e) => setPhone(e.target.value)}
//         className="w-full  px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-purple-200"
//         dir="rtl"
//       />
//       <textarea
//         placeholder="תוכן ההודעה"
//         value={message}
//         onChange={(e) => setMessage(e.target.value)}
//         className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-purple-200"
//       />
//       <button
//         type="submit"
//         className="w-full bg-blue-500 text-white py-2 rounded-lg shadow-md hover:bg-blue-600 transition duration-300"
//         disabled={isSubmitting}
//       >
//         {isSubmitting ? 'שולח...' : 'שלח'}
//       </button>
//     </form>
//   );
// };

// export default ContactForm;


import { useState } from 'react';
import LoadingSpinner from '../components/LoadingSpinner';

interface ContactFormProps {
  onSubmit: (data: { name: string; email: string; tel: string; message: string }) => Promise<void>;
}

const ContactForm = ({ onSubmit }: ContactFormProps) => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [tel, setPhone] = useState(''); // New phone state
  const [message, setMessage] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false); // State for submit button

  const resetForm = () => {
    setName('');
    setEmail('');
    setPhone(''); // Reset phone field
    setMessage('');
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true); // Set submitting state

    // Call the onSubmit function (from parent) with form data
    await onSubmit({ name, email, tel, message });

    setIsSubmitting(false); // Reset submitting state

    // Clear the form 2 seconds after submission
    setTimeout(() => {
      resetForm();
    }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4" dir="rtl">
      <input
        type="text"
        placeholder="שם מלא"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-purple-200"
      />
      <input
        type="email"
        placeholder="כתובת מייל"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-purple-200"
      />
      <input
        type="tel"
        placeholder="מספר טלפון" // New phone number input
        value={tel}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-purple-200"
        dir="rtl"
      />
      <textarea
        placeholder="תוכן ההודעה"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        className="w-full px-4 py-2 border rounded-lg shadow-sm focus:ring focus:ring-purple-200"
      />

      <div className="flex justify-between items-center">
        <button
          type="submit"
          className={`bg-blue-500 text-white py-2 px-6 rounded-lg shadow-md hover:bg-blue-600 transition duration-300 ${
            isSubmitting ? 'opacity-50 cursor-not-allowed' : ''
          }`}
          disabled={isSubmitting}
        >
          {isSubmitting ? 'שולח...' : 'שלח'}
        </button>

        {/* Display loading spinner if submitting */}
        {isSubmitting && (
          <div className="ml-4">
            <LoadingSpinner />
          </div>
        )}
      </div>
    </form>
  );
};

export default ContactForm;
