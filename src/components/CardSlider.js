'use client';

import React from 'react';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import img1 from '../public/images/icon01.png';
import img2 from '../public/images/icon02.png';
import img3 from '../public/images/i01.png';
import img4 from '../public/images/icon02.png';
import img5 from '../public/images/img1.jpg';
import img6 from '../public/images/img2.jpeg';

const cards = [
  {
    id: 1,
    title: 'Compete in Rummy Tournaments',
    desc: 'Show your skills and win exciting rewards.',
    img: img1,
  },
  {
    id: 2,
    title: 'Daily Bonus Rewards',
    desc: 'Get rewarded every day you log in!',
    img: img2,
  },
  {
    id: 3,
    title: 'Instant Withdrawals',
    desc: 'Fast and secure money withdrawals.',
    img: img3,
  },
  {
    id: 4,
    title: 'Play with Friends',
    desc: 'Invite your friends and play together online.',
    img: img4,
  },
  {
    id: 5,
    title: 'Instant Withdrawals',
    desc: 'Fast and secure money withdrawals.',
    img: img5,
  },
  {
    id: 6,
    title: 'Play with Friends',
    desc: 'Invite your friends and play together online.',
    img: img6,
  },
];

const CardSlider = () => {
  return (
    <div className="py-12 bg-[#2A1F2D] text-white">
      <h2 className="text-3xl font-bold text-center mb-8 text-orange-400">
        Why Choose RummyZone?
      </h2>
      <div className="max-w-7xl mx-auto px-4">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={4}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000 }}
          breakpoints={{
            0: { slidesPerView: 1 },
            640: { slidesPerView: 2 },
            768: { slidesPerView: 3 },
            1024: { slidesPerView: 4 },
          }}
        >
          {cards.map((card) => (
            <SwiperSlide key={card.id}>
              <div className="bg-[#0f0f1c99] rounded-xl overflow-hidden shadow-lg p-4 text-center hover:scale-105 transition-all h-[380px] flex flex-col justify-between">
                <div>
                  <div className="w-full h-[180px] relative mb-4">
                    <Image
                      src={card.img}
                      alt={card.title}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-lg"
                    />
                  </div>
                  <h3 className="text-lg font-semibold text-orange-300">{card.title}</h3>
                  <p className="text-gray-400 mt-2 text-sm">{card.desc}</p>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CardSlider;
