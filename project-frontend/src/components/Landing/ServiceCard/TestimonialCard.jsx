import React, { useEffect, useState } from "react";
import { FaChevronLeft, FaChevronRight, FaStar } from "react-icons/fa";
import { GoVerified } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";

const ReviewCarousel = () => {
  const reviews = [
    {
      name: "Pushpa Darji",
      imgUrl:
        "https://lh3.googleusercontent.com/a/ACg8ocIUW47TR4X2OyjESSh1dyXWIYEJO56IhWyK6D_O6aZwl876Tg=w72-h72-p-rp-mo-br100",
      date: "a week ago",
      text: "One of the Best Clinics I have been ! My whole treatment went very smoothly. With highly skilled and empathetic professionals , I recommend it for all kind of dental problems.",
    },
    {
      name: "Smart Boy",
      imgUrl:
        "https://lh3.googleusercontent.com/a-/ALV-UjURWvIcM6moOYP9veNSxU7h2i3iYfbr24ikZtlxXRRSoGZ6Gy2i=w72-h72-p-rp-mo-br100",
      date: "4 month ago",
      text: "I had a great experience with dr. riddhi she explained everything clearly and made me feel comfortable. i'm happy with the results. thank you for the good care",
    },
    {
      name: "Devendra Vyas",
      imgUrl:
        "https://lh3.googleusercontent.com/a-/ALV-UjUTSM07QYhbSrjShTtTSTKzTmhnhSMt3Ka8IElYDJoJmAVo9r8=w72-h72-p-rp-mo-br100",
      date: "2023-05-22",
      text: "Highly qualified and well experienced Doctors' team and cooperative staff. Effective treatments to the entire satisfaction of the patients. Nicely furnished with essential equipments.",
    },
    {
      name: "Mausam Sharma",
      imgUrl:
        "https://www.freepik.com/premium-vector/modern-dr-logo-icon-vector_364014244.htm",
      date: "a week ago",
      text: "I had a wonderful experience at Clinic! The staff were friendly and professional, making me feel comfortable from start to finish. Special thanks to the lady dentist —Zalak Sharma. she was absolutely amazing! Very gentle, caring, and thorough in explaining everything. I felt confident in her skills and appreciated her warm approach. Highly recommend this clinic for anyone looking for quality dental care with compassionate staff!",
    },
    {
      name: "Tanvi Bhavsar",
      imgUrl:
        "https://lh3.googleusercontent.com/a-/ALV-UjVylT5lzymMAwYUq-p0lZihlYOBCav8ErOZ0q0IFXoEjQKuNPJC=w72-h72-p-rp-mo-br100",
      date: "2023-04-10",
      text: "Well equipped dental care hospital with reliable and trustworthy Doctors",
    },
    {
      name: "Sharma Jitendra",
      imgUrl:
        "https://lh3.googleusercontent.com/a-/ALV-UjUptM0WHSx5OL4sx_va5UuAybiqz0-07TzLp8mmavT0Y7zLbxRn=w65-h65-p-rp-mo-ba6-br100",
      date: "2023-04-10",
      text: "Doctors and support staff are very experienced in this field .And you also never knew any type of pain during the treatment .Thanks to all Doctors .",
    },
    {
      name: "Umang Solanki",
      imgUrl:
        "https://lh3.googleusercontent.com/a-/ALV-UjWm4cJzcM2ZjpudBTFf1WXZPlx-TS2-3RZqUVvFi4Tn3d3J3tGt=w72-h72-p-rp-mo-ba3-br100",
      date: "2023-04-10",
      text: "Painless teeth treatment with very friendly nature",
    },
  ];

  const [index, setIndex] = useState(0);

  // card + gap sizes
  const CARD_WIDTH = 320;
  const GAP_WIDTH = 24;
  const CARD_WIDTH_PLUS_GAP = CARD_WIDTH + GAP_WIDTH;

  // allowable slides
  const maxIndex = reviews.length - 3;

  const prevSlide = () => {
    setIndex((prev) => (prev === 0 ? maxIndex : prev - 1));
  };

  const nextSlide = () => {
    setIndex((prev) => (prev >= maxIndex ? 0 : prev + 1));
  };

  // Auto slide every 3 seconds
  useEffect(() => {
    if (reviews.length <= 3) return;

    const timer = setInterval(() => nextSlide(), 3000);
    return () => clearInterval(timer);
  }, [index]);

  if (reviews.length === 0) return null;

  return (
  <>
     <div className="text-center mb-12 mt-6">
          <p className="text-gray-600 font-semibold mb-2 tracking-wide">Our Testimonial</p>
          <h1 className="text-2xl md:text-5xl font-bold" style={{ color: '#88b121' }}>
            Reasons to Smile
          </h1>
        </div>
    <div className="flex justify-center items-center w-full py-8 mb-6 bg-white">
      <div className="relative w-full max-w-7xl flex items-center justify-center">
        {/* Left Arrow */}
        {/* <button
          onClick={prevSlide}
          className="absolute -left-3 bg-white border rounded-full shadow-lg p-2 hover:bg-gray-100 transition-all duration-300 z-1"
        >
          <FaChevronLeft size={20} className="text-gray-700" />
        </button> */}

        {/* Cards Wrapper */}
        <div
          className="overflow-hidden px-8"
          style={{ width: `${CARD_WIDTH * 3 + GAP_WIDTH * 4}px` }}
        >
          <div
            className="flex gap-6 transition-transform duration-700 ease-in-out"
            style={{
              transform: `translateX(-${index * CARD_WIDTH_PLUS_GAP}px)`,
            }}
          >
            {reviews.map((review, i) => (
              <div
                key={i}
                className="bg-white rounded-xl shadow-md p-5 w-[320px] min-h-[230px] border shrink-0"
              >
                {/* Header */}
                <div className="flex justify-between items-center mb-3">
                  <div className="flex items-center">
                    <img
                      src={review.imgUrl}
                      alt={review.name}
                      className="w-10 h-10 rounded-full object-cover mr-3"
                    />
                    <div>
                      <h3 className="font-semibold text-gray-800">
                        {review.name}
                      </h3>
                      <p className="text-sm text-gray-500">{review.date}</p>
                    </div>
                  </div>
                  <FcGoogle className="text-xl" />
                </div>

                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  {[...Array(5)].map((_, idx) => (
                    <FaStar key={idx} size={16} className="text-yellow-500" />
                  ))}
                  <GoVerified size={16} className="text-blue-500" />
                </div>

                {/* Review Text */}
                <p className="text-gray-700 text-sm leading-relaxed whitespace-pre-wrap">
                  {review.text}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Right Arrow */}
        {/* <button
          onClick={nextSlide}
          className="absolute -right-3 bg-white border rounded-full shadow-lg p-2 hover:bg-gray-100 transition-all duration-300 z-1"
        >
          <FaChevronRight size={20} className="text-gray-700" />
        </button> */}
      </div>
    </div>
    </>
  );
};

export default ReviewCarousel;
