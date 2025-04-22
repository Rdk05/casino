import React from 'react';
import "../app/globals.css"

const RefundPolicy = () => {
  return (
    <div className="bg-[#1a1a2e] text-white py-16 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-400 mb-8 text-center">Refund Policy</h1>

        <p className="mb-4 text-gray-300">
          At <strong className="text-white">RummyZone</strong>, we prioritize your satisfaction and aim to provide a seamless gaming experience. Please read our refund policy carefully before initiating any transactions.
        </p>

        <h2 className="text-2xl font-semibold text-orange-300 mt-6 mb-2">1. No Refunds on Played Games</h2>
        <p className="text-gray-300 mb-4">
          Once a game has been initiated or played, the entry fee or amount spent is non-refundable, regardless of the outcome of the game.
        </p>

        <h2 className="text-2xl font-semibold text-orange-300 mt-6 mb-2">2. Accidental Payments</h2>
        <p className="text-gray-300 mb-4">
          In case of any accidental or duplicate payments, users must notify us within 24 hours with proof of the transaction. Refunds, if applicable, will be processed within 7 working days.
        </p>

        <h2 className="text-2xl font-semibold text-orange-300 mt-6 mb-2">3. Technical Errors</h2>
        <p className="text-gray-300 mb-4">
          If a game fails to complete due to server issues or technical problems on our end, we may refund the entry fee to the user's wallet. This is subject to verification by our team.
        </p>

        <h2 className="text-2xl font-semibold text-orange-300 mt-6 mb-2">4. Fraudulent Activities</h2>
        <p className="text-gray-300 mb-4">
          If any transaction is found to be fraudulent, RummyZone holds the right to withhold the refund and suspend the associated account after investigation.
        </p>

        <h2 className="text-2xl font-semibold text-orange-300 mt-6 mb-2">5. How to Request a Refund</h2>
        <p className="text-gray-300 mb-4">
          To request a refund, please contact our support team at <span className="text-orange-300">support@rummyzone.com</span> with your transaction ID and relevant details. Requests without proper documentation may be rejected.
        </p>

        <p className="mt-10 text-center text-gray-500">
          Last updated: April 21, 2025
        </p>
      </div>
    </div>
  );
};

export default RefundPolicy;
