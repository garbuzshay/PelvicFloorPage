import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Header from '../components/Header';

// Import the different sections
import HomePageContent from '../components/HomePageContent';
import Treatments from './treatments';
import QuestionsContent from '../components/QuestionsContent';
import ContactContent from '../components/ContactContent';
import AdminLogin from './admin/login';
import AdminEditMode from './admin/manageWeb';

export default function Home() {
  const [selectedSection, setSelectedSection] = useState('home');

  const renderContent = () => {
    switch (selectedSection) {
      case 'treatments':
        return <Treatments />;
      case 'questions':
        return <QuestionsContent />;
      case 'contact':
        return <ContactContent />;
      case 'login':
       return <AdminLogin setSelectedSection={setSelectedSection} />
      case 'edit':
        return <AdminEditMode/>
      default:
        return <HomePageContent setSelectedSection={setSelectedSection} />;
    }
  };

  return (
    <div className="min-h-screen flex flex-col font-hebrew">

      <Header />
      <Navbar setSelectedSection={setSelectedSection} />
      
      {/* Main Content Section */}

      <main className="flex-grow container mx-auto px-4 py-8">
        {renderContent()}
      </main>
      
      <Footer />
    </div>
  );
}
