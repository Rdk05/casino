import React from 'react';
import "../app/globals.css"

const Terms = () => {
  return (
    <div className="bg-[#1a1a2e] text-white py-16 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-400 mb-8 text-center">Terms & Conditions</h1>

        <p className="mb-4 text-gray-300">
          Welcome to <strong className="text-white">RummyZone</strong>. By accessing or using our platform, you agree to the following terms and conditions.
        </p>

        <h2 className="text-2xl font-semibold text-orange-300 mt-6 mb-2">1. Eligibility</h2>
        <p className="text-gray-300 mb-4">
          You must be at least 18 years of age and legally allowed to play skill-based games under your jurisdiction. By registering, you confirm your eligibility.
        </p>

        <h2 className="text-2xl font-semibold text-orange-300 mt-6 mb-2">2. Account Registration</h2>
        <p className="text-gray-300 mb-4">
          You are responsible for maintaining the confidentiality of your account information. RummyZone is not liable for any loss caused by unauthorized access.
        </p>

        <h2 className="text-2xl font-semibold text-orange-300 mt-6 mb-2">3. Fair Play</h2>
        <p className="text-gray-300 mb-4">
          Any attempt to cheat, hack, or manipulate the gameplay will result in permanent suspension of your account and forfeiture of your winnings.
        </p>

        <h2 className="text-2xl font-semibold text-orange-300 mt-6 mb-2">4. Payments & Withdrawals</h2>
        <p className="text-gray-300 mb-4">
          All transactions are processed through secure gateways. Withdrawals are subject to verification and may take up to 3–5 business days.
        </p>

        <h2 className="text-2xl font-semibold text-orange-300 mt-6 mb-2">5. User Conduct</h2>
        <p className="text-gray-300 mb-4">
          You agree not to post or transmit any content that is abusive, defamatory, obscene, or illegal. Violating this may lead to immediate action.
        </p>

        <h2 className="text-2xl font-semibold text-orange-300 mt-6 mb-2">6. Intellectual Property</h2>
        <p className="text-gray-300 mb-4">
          All content, graphics, logos, and software on this platform are the property of RummyZone and are protected by copyright and trademark laws.
        </p>

        <h2 className="text-2xl font-semibold text-orange-300 mt-6 mb-2">7. Termination</h2>
        <p className="text-gray-300 mb-4">
          We reserve the right to terminate or suspend your access without notice for violating these terms or for any conduct deemed harmful to the platform.
        </p>

        <h2 className="text-2xl font-semibold text-orange-300 mt-6 mb-2">8. Amendments</h2>
        <p className="text-gray-300 mb-4">
          RummyZone may update these terms at any time. Continued use of the platform constitutes acceptance of the modified terms.
        </p>

        <p className="mt-10 text-center text-gray-500">
          Last updated: April 21, 2025
        </p>
      </div>
    </div>
  );
};

export default Terms;
