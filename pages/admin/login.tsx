import { useState } from 'react';
import { useRouter } from 'next/router';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../lib/firebase';

interface AdminLoginProps {
  setSelectedSection: (section: string) => void;
}

export default function AdminLogin({ setSelectedSection }: AdminLoginProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  
  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await signInWithEmailAndPassword(auth, email, password);
      setSelectedSection('home'); // Redirect to home section upon successful login
    } catch (error) {
      setError('Invalid email or password. Please try again.');
    }
  };

  return (
    <div className="flex items-center min-h-full justify-center p-8 ">
      <form 
        onSubmit={handleSubmit} 
        className="space-y-6 bg-white p-6 rounded-lg shadow-2xl w-full max-w-xs sm:max-w-sm md:max-w-md bg-gradient-to-r from-cyan-50 to-purple-200"
      >
        <h1 className="text-3xl font-bold mb-4 text-center">Admin Login</h1>
        {error && <p className="text-red-500 text-center">{error}</p>}
        
        <div>
          <label htmlFor="email" className="block text-sm">Email</label>
          <input
            id="email"
            type="email"
            className="input w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>
        
        <div>
          <label htmlFor="password" className="block text-sm">Password</label>
          <input
            id="password"
            type="password"
            className="input w-full px-4 py-2 border rounded-lg focus:ring focus:ring-blue-300"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>
        
        <button 
          type="submit" 
          className="bg-blue-500 text-white w-full py-2 rounded-lg hover:bg-blue-600 transition duration-300"
        >
          Login
        </button>
      </form>
    </div>
  );
}
