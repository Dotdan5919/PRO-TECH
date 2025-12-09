import ContactForm from '@/components/forms/ContactForm';
import ContactInfo from '@/components/forms/ContactInfo';

export default function ContactPage() {
  return (
    <main className="flex-1 pt-20">
      <div className="container mx-auto px-4 py-16 sm:py-24">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-white text-4xl md:text-5xl font-bold leading-tight">
              Let's Build Something Great Together.
            </h1>
            <p className="text-slate-400 text-lg mt-4 max-w-2xl mx-auto">
              Fill out the form below, and we'll get back to you within 24 hours.
            </p>
          </div>

          {/* Contact Form & Info Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Form */}
            <div className="lg:col-span-3 bg-black/20 p-8 rounded-xl shadow-sm">
              <h2 className="text-white text-2xl font-bold mb-6">
                Send Us a Message
              </h2>
              <ContactForm />
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-2">
              <ContactInfo />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
