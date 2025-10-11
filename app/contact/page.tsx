"use client";
import CardForm from "./form";

function ContactPage() {
  return (
    <div className="contact-background min-h-screen flex items-center justify-center p-8">
      <div className="bg-white bg-opacity-90 dark:bg-gray-800 dark:bg-opacity-90 p-8 rounded-lg shadow-lg w-full max-w-4xl">
        <h2 className="text-3xl font-bold mb-6 text-center dark:text-white">
          Contact Us
        </h2>
        <CardForm />
      </div>
    </div>
  );
}

export default ContactPage;
