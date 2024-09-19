import Header from '../components/Navbar';
import Footer from '../components/Footer';

export default function FAQ() {
  return (
    <div>
      <Header />
      <main className="container mx-auto px-4">
        <h1 className="text-4xl font-bold">Frequently Asked Questions</h1>
        <div>
          <h2 className="text-xl mt-4">What is pelvic floor physiotherapy?</h2>
          <p>Pelvic floor physiotherapy helps improve the function of pelvic muscles.</p>
        </div>
      </main>
      <Footer />
    </div>
  );
}
