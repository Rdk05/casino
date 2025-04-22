"use client";

import Image from "next/image";
import bg from "../public/images/bg01.png"; 
import img1 from "../public/images/i01.png";
import download from "../public/images/download.png"

const HomePage = () => {
  return (
    <div
      className="h-screen w-full bg-cover bg-center flex items-center"
      style={{ backgroundImage: `url(${bg.src})` }}
    >
      {/* Left Side - Text */}
      <div className="flex-1 flex justify-start items-center p-8">
        <div className="text-white">
          <h1 className="text-6xl font-bold mb-4 text-amber-300">Play rummay online</h1>
          <p className="text-md">
            Rummy has rapidly gained popularity among the Indian audience
            because it's a game that is well-suited for various occasions.
            Indian culture is all about getting together to celebrate even a
            small occasion. This is where the game of rummy found its place as a
            form of entertainment during these events. Rummy is a game that can
            be played among 2to 6 players with 1-2 standard decks of 52 cards.
            In the game, every player is dealt 13 cards, and to win, a player
            must arrange each card in sequences or sets. A player can only make
            a valid declaration if they have at least two sequences, with one
            sequence necessarily being a pure sequence.
          </p>
          <Image
          src={download}
          alt="Right Side Image"
          width={300}
          height={300}
          style={{margin: 25}}
        />

        </div>
      </div>

      {/* Right Side - Transparent Image */}
      <div className="flex-1 flex justify-center items-center">
        <Image
          src={img1}
          alt="Right Side Image"
          width={400}
          height={400}
          className="opacity-70"
        />
      </div>
    </div>
  );
};

export default HomePage;
