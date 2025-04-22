'use client';

import Image from 'next/image';
import secureIcon from '../public/images/icon11.png';
import serviceIcon from '../public/images/icon12.png';
import mobileIcon from '../public/images/icon13.png';
import cashIcon from '../public/images/icon14.png';

const features = [
  {
    icon: secureIcon,
    text: 'Safe & Secure',
  },
  {
    icon: serviceIcon,
    text: '24x7 Service',
  },
  {
    icon: mobileIcon,
    text: 'Play on Mobile',
  },
  {
    icon: cashIcon,
    text: 'Win Real Cash',
  },
];

const FeatureBar = () => {
  return (
    <div className="bg-[#43304D] py-20 px-10">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center gap-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center space-x-3">
            <Image src={feature.icon} alt={feature.text} width={60} height={60} />
            <span className="text-white font-semibold text-lg">{feature.text}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FeatureBar;
