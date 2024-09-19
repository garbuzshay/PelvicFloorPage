import ContactForm from './ContactForm';

export default function Contact() {
  const handleFormSubmit = async (data: { name: string; email: string; tel: string; message: string  }) => {
    try {
      const res = await fetch('/api/sendMail', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Send the form data, including phone
      });

      if (res.status === 200) {
        alert('הטופס נשלח בהצלחה!');
      } else {
        alert('שליחת הטופס נכשלה, נסה שוב מאוחר יותר.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('שליחת הטופס נכשלה.');
    }
  };

  return (
    <div>
      <main className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold text-center mb-6">צור קשר</h1>
        <ContactForm onSubmit={handleFormSubmit} />
      </main>
    </div>
  );
}
