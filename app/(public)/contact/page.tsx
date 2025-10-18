"use client";
import CardForm from "./form";
import GoogleMap from "./map";

function ContactPage() {
  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800 py-12 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white mb-4">
            Get in Contact
          </h1>
          <p className="text-lg leading-7 text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            We'd love to hear from you. Drop us a message or visit us at our location.
          </p>
        </div>

        {/* Content Grid */}
        <div className="grid lg:grid-cols-2 gap-8 items-stretch">
          {/* Map Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl overflow-hidden h-[500px] lg:h-auto">
            <GoogleMap />
          </div>

          {/* Form Section */}
          <div className="bg-white dark:bg-gray-800 rounded-2xl shadow-xl p-8 lg:p-10">
            <h2 className="text-3xl font-bold mb-6 text-gray-900 dark:text-white">
              Send us a Message
            </h2>
            <CardForm />
          </div>
        </div>

        {/* Optional: Contact Info Below */}
        <div className="mt-12 grid md:grid-cols-3 gap-6 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="text-3xl mb-3">📍</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Visit Us</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              Soho Centro de Inovação Tecnológica
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="text-3xl mb-3">📧</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Email Us</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              contact@example.com
            </p>
          </div>
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6">
            <div className="text-3xl mb-3">💬</div>
            <h3 className="font-semibold text-gray-900 dark:text-white mb-2">WhatsApp</h3>
            <p className="text-gray-600 dark:text-gray-400 text-sm">
              +55 (47) 1234-5678
            </p>
          </div>
        </div>
      </div>
    </main>
  );
}

export default ContactPage;