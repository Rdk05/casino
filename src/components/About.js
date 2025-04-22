'use client';
import "../app/globals.css";


const About = () => {
  return (
    <div className="bg-[#2C1E35] text-white min-h-screen py-16 px-6">
      <div className="max-w-6xl mx-auto space-y-12">
        {/* Page Title */}
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            About <span className="text-orange-400">RummyZone</span>
          </h1>
          <p className="text-gray-300 text-lg max-w-3xl mx-auto">
            Your Ultimate Destination to Play Rummy Online, Anytime, Anywhere!
          </p>
        </div>

        {/* Section: Who We Are */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-orange-400">Who We Are</h2>
          <p className="text-gray-300 text-base">
            RummyZone is a premium online rummy platform offering players an immersive and secure experience to play and win real cash. Whether you're a casual gamer or a competitive enthusiast, our platform is designed to offer something for everyone.
          </p>
        </div>

        {/* Section: Our Mission */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-orange-400">Our Mission</h2>
          <p className="text-gray-300 text-base">
            Our goal is to bring together rummy lovers from all walks of life and provide them with a thrilling, skill-based platform to play, connect, and win. We aim to be the most trusted name in the online gaming industry.
          </p>
        </div>

        {/* Section: Why Choose Us */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-orange-400">Why Choose Us</h2>
          <ul className="list-disc list-inside text-gray-300 text-base space-y-2">
            <li>100% Safe & Secure Platform</li>
            <li>Instant Withdrawals & Deposits</li>
            <li>24x7 Customer Support</li>
            <li>Exciting Tournaments & Bonuses</li>
            <li>Play on Mobile, Tablet, and Desktop</li>
          </ul>
        </div>

        {/* Section: Our Commitment */}
        <div className="space-y-4">
          <h2 className="text-2xl font-semibold text-orange-400">Our Commitment</h2>
          <p className="text-gray-300 text-base">
            We are committed to responsible gaming and provide all the tools necessary for a safe and enjoyable experience. With transparent policies and fair gameplay, your trust is our top priority.
          </p>
        </div>

        {/* Section: Join Us */}
        <div className="text-center pt-10">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Unleash Your <span className="text-orange-400">Rummy Skills?</span>
          </h2>
          <button className="bg-orange-500 hover:bg-orange-600 transition px-6 py-3 rounded-full text-white text-lg font-medium">
            Join Now & Start Playing
          </button>
        </div>
      </div>
    </div>
  );
};

export default About;
