'use client';

import Image from 'next/image';
import promoImg from '../public/images/icon01.png';
import promoImg1 from '../public/images/icon02.png';
import lineImg from '../public/images/line01.png';
import parallaxBg from '../public/images/img2.jpeg'; // Add your parallax image here

const PokarSkills = () => {
  return (
    <section
      className="relative bg-cover bg-center bg-fixed text-white w-full py-16 px-4 md:px-12 lg:px-20"
      style={{
        backgroundImage: `url(${parallaxBg.src})`,
      }}
    >
      {/* Overlay for better text visibility */}
      <div className="absolute inset-0 bg-[#2A1F2D]/90 z-0"></div>

      {/* Content */}
      <div className="relative z-10">
        {/* Section 1 */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10 mb-16">
          {/* LEFT TEXT SIDE */}
          <div className="flex-1 space-y-6 text-left">
            <h1 className="text-3xl md:text-4xl font-bold leading-snug">
              Unleash Your <span className="text-orange-500">Poker Skills</span>
              <br />
              Join the Thrilling Word of Rummy <span className="text-orange-400">Today</span>!
            </h1>
            <p className="text-sm md:text-base text-gray-200 leading-relaxed max-w-xl">
              Rummy is the ultimate destination for every rummy enthusiast. From adding cash to withdrawing winnings, 
              the smooth gameplay on the platform provides the ease of playing rummy online. Not only this, Rummy has 
              the best offers to gratify its new or existing players.
            </p>
          </div>

          {/* RIGHT IMAGE SIDE */}
          <div className="flex-1 flex justify-center md:justify-end">
            <Image
              src={promoImg}
              alt="Poker Promo"
              width={350}
              height={350}
              className="rounded-xl object-contain"
              priority
            />
          </div>
        </div>

        {/* Line image (non-fixed) */}
        <div className="mb-16">
          <Image
            src={lineImg}
            alt="Line Divider"
            width={1000}
            height={100}
            className="mx-auto"
          />
        </div>

        {/* Section 2 */}
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
          {/* LEFT TEXT SIDE */}
          <div className="flex-1 space-y-6 text-left">
            <h1 className="text-3xl md:text-4xl font-bold leading-snug">
              Unlock Unlimited <span className="text-orange-500">Access to</span>
              <br />
              Top Games <span className="text-orange-400">Now!</span>!
            </h1>
            <p className="text-sm md:text-base text-gray-200 leading-relaxed max-w-xl">
              Rummy is the nation's trusted rummy app, trusted by more than 3 crore verified players. As an online rummy app, Rummy has consistently offered the best game- play to its players, which includes free entry tournaments, Free Games, rewarding offers, and many more. Playing Indian Rummy on Rummy is not just an experience but an emotion that encourages rummy players to explore the world of online gaming profoundly.
            </p>
          </div>

          {/* RIGHT IMAGE SIDE */}
          <div className="flex-1 flex justify-center md:justify-end">
            <Image
              src={promoImg1}
              alt="Poker Promo"
              width={350}
              height={350}
              className="rounded-xl object-contain"
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default PokarSkills;
