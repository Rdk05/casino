import React from 'react';
import "../app/globals.css"

const Privacy = () => {
  return (
    <div className="bg-[#1a1a2e] text-white py-16 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-400 mb-8 text-center">Privacy Policy</h1>
        
        <p className="mb-4 text-gray-300">
          Welcome to <strong className="text-white">RummyZone</strong>. We value your privacy and are committed to protecting your personal information.
        </p>

        <h2 className="text-2xl font-semibold text-orange-300 mt-6 mb-2">1. Information We Collect</h2>
        <p className="text-gray-300 mb-4">
          We may collect personal data such as your name, email address, phone number, payment details, and gameplay behavior when you register or interact with our services.
        </p>

        <h2 className="text-2xl font-semibold text-orange-300 mt-6 mb-2">2. How We Use Your Information</h2>
        <p className="text-gray-300 mb-4">
          We use your information to improve our services, provide customer support, process transactions, and ensure a safe and fair gaming environment.
        </p>

        <h2 className="text-2xl font-semibold text-orange-300 mt-6 mb-2">3. Sharing Your Information</h2>
        <p className="text-gray-300 mb-4">
          We do not share your personal data with third parties except to comply with legal obligations or with your consent. All data is encrypted and stored securely.
        </p>

        <h2 className="text-2xl font-semibold text-orange-300 mt-6 mb-2">4. Cookies & Tracking</h2>
        <p className="text-gray-300 mb-4">
          We use cookies and similar technologies to improve your experience, analyze trends, and personalize content. You can manage cookie settings in your browser.
        </p>

        <h2 className="text-2xl font-semibold text-orange-300 mt-6 mb-2">5. Data Security</h2>
        <p className="text-gray-300 mb-4">
          We implement the latest security protocols to protect your data from unauthorized access, alteration, or destruction.
        </p>

        <h2 className="text-2xl font-semibold text-orange-300 mt-6 mb-2">6. Your Rights</h2>
        <p className="text-gray-300 mb-4">
          You have the right to access, update, or delete your personal data. You can contact us anytime at <span className="text-white">support@rummyzone.com</span>.
        </p>

        <h2 className="text-2xl font-semibold text-orange-300 mt-6 mb-2">7. Updates to Policy</h2>
        <p className="text-gray-300 mb-4">
          We may update this policy occasionally. Changes will be posted here with the updated revision date.
        </p>

        <p className="mt-10 text-center text-gray-500">
          Last updated: April 21, 2025
        </p>
      </div>
    </div>
  );
};

export default Privacy;
