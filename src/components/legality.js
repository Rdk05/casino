import React from 'react';
import "../app/globals.css"

const Legality = () => {
  return (
    <div className="bg-[#1a1a2e] text-white py-16 px-6 min-h-screen">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-orange-400 mb-8 text-center">Legality</h1>

        <p className="mb-4 text-gray-300">
          At <strong className="text-white">RummyZone</strong>, we are fully committed to complying with all applicable laws and regulations. Our platform is designed to provide a fair, secure, and transparent gaming environment.
        </p>

        <h2 className="text-2xl font-semibold text-orange-300 mt-6 mb-2">1. Game of Skill</h2>
        <p className="text-gray-300 mb-4">
          Rummy is classified as a "Game of Skill" under Indian law. As per the Supreme Court judgment, playing skill-based games like Rummy for real money is completely legal and does not fall under gambling.
        </p>

        <h2 className="text-2xl font-semibold text-orange-300 mt-6 mb-2">2. Legal Jurisdictions</h2>
        <p className="text-gray-300 mb-4">
          While Rummy is legal in most states in India, it is currently restricted in a few states due to local laws (e.g., Andhra Pradesh, Telangana, Assam, Odisha, Nagaland, and Sikkim). Users from these regions are not permitted to play for real money on RummyZone.
        </p>

        <h2 className="text-2xl font-semibold text-orange-300 mt-6 mb-2">3. Fair Play Policy</h2>
        <p className="text-gray-300 mb-4">
          We use advanced algorithms and monitoring tools to ensure every player has a fair chance to win. Any form of cheating, bot usage, or collusion is strictly prohibited and leads to permanent bans.
        </p>

        <h2 className="text-2xl font-semibold text-orange-300 mt-6 mb-2">4. Age Restriction</h2>
        <p className="text-gray-300 mb-4">
          Only individuals aged 18 or above are allowed to register and play on our platform. Any violation of this policy will result in account termination.
        </p>

        <h2 className="text-2xl font-semibold text-orange-300 mt-6 mb-2">5. Responsible Gaming</h2>
        <p className="text-gray-300 mb-4">
          RummyZone promotes responsible gaming. We encourage players to set limits and enjoy the game responsibly. Players showing signs of addiction will be guided and supported appropriately.
        </p>

        <p className="mt-10 text-center text-gray-500">
          Last updated: April 21, 2025
        </p>
      </div>
    </div>
  );
};

export default Legality;
