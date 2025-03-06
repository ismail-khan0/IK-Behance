import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import React, { useRef } from "react";

export default function SuccessStories() {
  const testimonials = [
    {
      id: 1,
      text: "Behance Pro has been great. I have noticed I am getting more serious freelance inquiries since signing up for Pro. For me the best feature is the no fees on payments: that is a really big deal.",
      author: "Harbor Bickmore",
      image: "https://via.placeholder.com/40", // Replace with actual image URL
    },
    {
      id: 2,
      text: "I have had Behance for more than ten years. I have seen so many features and changes all these years, and Behance Pro is a new giant leap for the best creative platform.",
      author: "Danny Ivan",
      image: "https://via.placeholder.com/40",
    },
    {
      id: 3,
      text: "Behance has been my main source of clients this year. I love Behance Pro, especially the analytics feature — it's great for tweaking my portfolio and hashtags.",
      author: "Kate Anto",
      image: "https://via.placeholder.com/40",
    },
    {
      id: 4,
      text: "I upgraded to Behance Pro and since then, my creative career has become a consistent source of income.",
      author: "Silver TL",
      image: "https://via.placeholder.com/40",
    },
  ];

  const scrollRef = useRef(null);

  // Scroll functions
  const scrollLeft = () => {
    if (scrollRef.current) {
      scrollRef.current.swiper.slidePrev();
    }
  };

  const scrollRight = () => {
    if (scrollRef.current) {
      scrollRef.current.swiper.slideNext();
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-6 py-12 text-left relative">
      <h3 className="text-blue-600 text-2xl font-semibold">Success Stories</h3>
      <h2 className="text-5xl font-bold mt-2">
        Creators like you are <br />
        thriving with Behance Pro
      </h2>
      <p className="text-gray-600 mt-4">
        Read more about how some of the world's best freelancers, art directors,
        and creatives use Behance Pro to grow their creative careers on our{" "}
        <a href="#" className="text-blue-600 underline">
          blog
        </a>
        .
      </p>

      {/* Swiper Carousel with Custom Navigation */}
      <div className="relative mt-10">
        {/* Left Scroll Button */}
        <button
          onClick={scrollLeft}
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
        >
          ❮
        </button>

        {/* Swiper Component */}
        <Swiper
          ref={scrollRef}
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="overflow-hidden scroll-smooth"
        >
          {testimonials.map(({ id, text, author, image }) => (
            <SwiperSlide key={id}>
              <div className="border rounded-lg p-6 shadow-sm hover:shadow-md transition h-72 bg-white">
                <p className="text-gray-900">{text}</p>
                <div className="absolute bottom-4 left-4 flex items-center space-x-3">
                  <img
                    src={image}
                    alt={author}
                    className="w-10 h-10 rounded-full"
                  />
                  <span className="font-semibold text-gray-800">{author}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Right Scroll Button */}
        <button
          onClick={scrollRight}
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white p-2 rounded-full shadow-md z-10"
        >
          ❯
        </button>
      </div>
    </section>
  );
}
