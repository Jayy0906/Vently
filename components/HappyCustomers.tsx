"use client";

import Image from "next/image";
import { useRef, useEffect, useState } from "react";

interface ReviewCardProps {
  stars: number;
  title: string;
  content: string;
  author: string;
}

function ReviewCard({ stars, title, content, author }: ReviewCardProps) {
  return (
    <article data-aos="fade-up"
      className="border-2 border-gray-200 rounded-2xl p-6 flex flex-col justify-between min-h-[260px] shadow-sm shadow-gray-400 hover:shadow-lg transition-shadow duration-300 flex-shrink-0 w-[90vw] w-[340px] sm:w-[320px] lg:w-[380px]"
      style={{ scrollSnapAlign: "start" }}
    >
      <div>
        <div className="flex space-x-1 mb-5">
          {Array.from({ length: stars }).map(
            (
              _,
              index // Dynamically render stars
            ) => (
              <Image
                key={index}
                src="/icons/star.svg"
                alt="Star"
                width={20}
                height={20}
                className="inline-block"
              />
            )
          )}
        </div>
        <h3 className="lt-semibold text-[#010A12] text-lg mb-1">{title}</h3>
        <p className="lt-normal text-[#010A12] text-base leading-6 max-w-[100%]">
          {content}
        </p>
      </div>
      <hr className="border-[#e5e7eb] my-3" />
      <p className="lt-semibold text-[#010A12] text-lg">{author}</p>
    </article>
  );
}

export default function CustomerReviews() {
  const reviews = [
    {
      stars: 5,
      title: "General review",
      content: "I love this product because the support is great. Please ...",
      author: "Wallmart",
    },
    {
      stars: 5,
      title: "Excellent Service",
      content: "The installation was quick and efficient. Highly recommend!",
      author: "Wallmart",
    },
    {
      stars: 4,
      title: "Great Value",
      content: "Very happy with the results. Solved our condensation issues.",
      author: "Wallmart",
    },
    {
      stars: 5,
      title: "Professional Team",
      content: "From start to finish, the team was fantastic. Will use again.",
      author: "Wallmart",
    },
    {
      stars: 3,
      title: "Professional Team",
      content: "From start to finish, the team was fantastic. Will use again.",
      author: "Wallmart",
    },

    {
      stars: 4,
      title: "Professional Team",
      content: "From start to finish, the team was fantastic. Will use again.",
      author: "Wallmart",
    },
    {
      stars: 5,
      title: "Professional Team",
      content: "From start to finish, the team was fantastic. Will use again.",
      author: "Wallmart",
    },
    {
      stars: 4,
      title: "Professional Team",
      content: "From start to finish, the team was fantastic. Will use again.",
      author: "Wallmart",
    },
    {
      stars: 5,
      title: "Professional Team",
      content: "From start to finish, the team was fantastic. Will use again.",
      author: "Wallmart",
    },
  ];

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    let isDragging = false;
    let startX = 0;
    let scrollLeft = 0;

    const onPointerDown = (e: PointerEvent) => {
      if (window.innerWidth >= 768) {
        isDragging = true;
        startX = e.pageX;
        scrollLeft = container.scrollLeft;
        container.setPointerCapture(e.pointerId);
        container.style.cursor = "grabbing";
        document.body.style.userSelect = "none";
      }
    };

    const onPointerMove = (e: PointerEvent) => {
      if (!isDragging) return;
      const x = e.pageX;
      const walk = x - startX;
      container.scrollLeft = scrollLeft - walk;
    };

    const onPointerUp = (e: PointerEvent) => {
      isDragging = false;
      container.releasePointerCapture(e.pointerId);
      container.style.cursor = "grab";
      document.body.style.userSelect = "auto";
    };

    const onScroll = () => {
      if (window.innerWidth < 768) {
        const scrollPosition = container.scrollLeft;
        const cardWidth = window.innerWidth * 0.9 + 24; // Assuming 24px gap, adjust if needed
        const newIndex = Math.round(scrollPosition / cardWidth);
        setActiveIndex(newIndex);
      }
    };

    container.addEventListener("pointerdown", onPointerDown);
    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerup", onPointerUp);
    container.addEventListener("pointercancel", onPointerUp);
    container.addEventListener("scroll", onScroll);

    return () => {
      container.removeEventListener("pointerdown", onPointerDown);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerup", onPointerUp);
      container.removeEventListener("pointercancel", onPointerUp);
      container.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollLeftCards = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -350, behavior: "smooth" });
    }
  };

  const scrollRightCards = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 350, behavior: "smooth" });
    }
  };

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      const cardWidth =
        window.innerWidth < 768 ? window.innerWidth * 0.9 + 24 : 350 + 24; // Assuming 24px gap, adjust if needed
      scrollContainerRef.current.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  return (
    <section data-aos="fade-up" className="text-[#010A12] px-4 sm:px-6 md:px-10 lg:px-10 xl:px-10 2xl:px-12 max-w-[1440px] 2xl:max-w-[1600px] mx-auto overflow-x-hidden">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6 md:gap-0 mb-6">
        <h2 data-aos="fade-up" className="order-2 md:order-none text-[#010A12] text-[30px] md:text-4xl lg:text-[42px] lt-semibold leading-[30px] md:leading-[48px] max-w-3xl mt-14">
          More than 1000+
          <br />
          happy customers
        </h2>

        <div data-aos="fade-up" className="order-1 md:order-none md:flex md:flex-wrap md:items-center md:gap-10 md:justify-start">
          <div className="flex flex-nowrap overflow-x-auto scrollbar-hide mt-10 md:mt-0 lg:mt-12 2xl:mt-8 gap-10 md:gap-10 justify-start">
            {["paypal", "google", "glassdoor"].map((logo, i) => (
              <div key={i} className="flex flex-shrink-0 flex-col items-center">
                <Image
                  alt={`${logo} logo`}
                  className="w-[165px] h-[60px] md:w-[100px] md:h-[40px] lg:w-[180px] lg:h-[60px] 2xl:w-[220px] 2xl:h-[160px]"
                  height={60}
                  src={`/images/${logo}.svg`}
                  width={205}
                  quality={50}
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-[#e5e7eb] mb-6" />

      <div 
        ref={scrollContainerRef}
        className="flex flex-nowrap overflow-x-auto gap-6 py-2 scroll-smooth scrollbar-hide select-none"
        style={{
          scrollSnapType: "x mandatory",
          cursor: "grab",
          paddingLeft: "1rem",
          paddingRight: "1rem",
        }}
      >
        {/* Start Spacer */}
        <div className="flex-shrink-0 w-2 sm:w-4 lg:w-6" />

        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}

        {/* End Spacer */}
        <div className="flex-shrink-0 w-2 sm:w-4 lg:w-6" />
      </div>

      <div  className="flex gap-4 mt-8">
        <button aria-label="Previous" onClick={scrollLeftCards}>
          <Image
            className="cursor-pointer"
            src="/icons/backward.svg"
            alt="Previous review"
            width={40}
            height={40}
          />
        </button>
        <div className="flex justify-center items-center flex-grow lg:hidden">
          {reviews.map((_, index) => (
            <button
              key={index}
              className={`w-2 h-2 rounded-full mx-1 ${
                index === activeIndex ? "bg-[#030a0e]" : "bg-gray-300"
              }`}
              onClick={() => scrollToCard(index)}
              aria-label={`Go to slide ${index + 1}`}
            ></button>
          ))}
        </div>
        <button
          aria-label="Next"
          className="md:ml-auto lg:ml-0"
          onClick={scrollRightCards}
        >
          <Image
            className="cursor-pointer"
            src="/icons/farward.svg"
            alt="Next review"
            width={40}
            height={40}
          />
        </button>
      </div>
    </section>
  );
}
