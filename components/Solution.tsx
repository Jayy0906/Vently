"use client";

import Image from "next/image";
import { useRef, useEffect, useState, useCallback } from "react";

const TRACK_HORIZONTAL_PADDING_PX = 24;

export default function ProvenSolution() {
  const galleryRef = useRef<HTMLDivElement>(null);
  const draggableImageRef = useRef<HTMLImageElement>(null);
  const scrollTrackRef = useRef<HTMLDivElement>(null);

  const [scrollPercentage, setScrollPercentage] = useState(0);
  const [isDragging, setIsDragging] = useState(false);
  // Renamed to be generic for mouse and touch initial coordinate
  const [initialClientX, setInitialClientX] = useState(0);
  const [initialGalleryScrollLeft, setInitialGalleryScrollLeft] = useState(0);

  const calculateImageTranslateX = useCallback(() => {
    const scrollTrack = scrollTrackRef.current;
    const draggableImage = draggableImageRef.current;

    if (!scrollTrack || !draggableImage) return 0;

    const trackInnerWidth =
      scrollTrack.clientWidth - 2 * TRACK_HORIZONTAL_PADDING_PX;
    const maxImageTranslateX = Math.max(
      0,
      trackInnerWidth - draggableImage.offsetWidth
    );

    return Math.max(
      0,
      Math.min(scrollPercentage * maxImageTranslateX, maxImageTranslateX)
    );
  }, [scrollPercentage]);

  useEffect(() => {
    const gallery = galleryRef.current;
    if (!gallery) return;

    const handleScroll = () => {
      if (!isDragging) {
        // Only update percentage if not actively dragging the handle
        const scrollLeft = gallery.scrollLeft;
        const clientWidth = gallery.clientWidth;
        const scrollWidth = gallery.scrollWidth;
        const maxScrollLeft = Math.max(0, scrollWidth - clientWidth);

        const percent = maxScrollLeft > 0 ? scrollLeft / maxScrollLeft : 0;
        setScrollPercentage(percent);
      }
    };

    gallery.addEventListener("scroll", handleScroll);
    handleScroll(); // Call once on mount to set initial percentage
    return () => {
      gallery.removeEventListener("scroll", handleScroll);
    };
  }, [isDragging]); // Re-run effect if isDragging changes to ensure correct behavior

  // Unified event handler for mouse down and touch start
  const handleInteractionStart = useCallback(
    (
      e: React.MouseEvent<HTMLImageElement> | React.TouchEvent<HTMLImageElement>
    ) => {
      e.preventDefault(); // Prevent default browser behavior (e.g., image drag, page scroll)

      const gallery = galleryRef.current;
      if (!gallery) return;

      setIsDragging(true);
      // Get clientX from mouse event or first touch
      setInitialClientX("touches" in e ? e.touches[0].clientX : e.clientX);
      setInitialGalleryScrollLeft(gallery.scrollLeft);

      document.body.style.cursor = "grabbing";
      document.body.style.userSelect = "none";
    },
    []
  );

  // Unified event handler for mouse move and touch move
  const handleInteractionMove = useCallback(
    (e: MouseEvent | TouchEvent) => {
      if (!isDragging) return;

      const gallery = galleryRef.current;
      const scrollTrack = scrollTrackRef.current;
      const draggableImage = draggableImageRef.current;

      if (!gallery || !scrollTrack || !draggableImage) return;

      // Prevent default touch actions (like scrolling the entire page) while dragging
      if ("touches" in e) {
        e.preventDefault();
      }

      // Get current clientX from mouse event or first touch
      const currentClientX = "touches" in e ? e.touches[0].clientX : e.clientX;
      const deltaX = currentClientX - initialClientX;

      const galleryScrollableWidth = gallery.scrollWidth - gallery.clientWidth;
      const imageMovableRange =
        scrollTrack.clientWidth -
        2 * TRACK_HORIZONTAL_PADDING_PX -
        draggableImage.offsetWidth;

      // Avoid division by zero if imageMovableRange is 0 or negative
      const scrollRatio =
        imageMovableRange > 0 ? galleryScrollableWidth / imageMovableRange : 0;

      let newGalleryScrollLeft =
        initialGalleryScrollLeft + deltaX * scrollRatio;
      newGalleryScrollLeft = Math.max(
        0,
        Math.min(newGalleryScrollLeft, galleryScrollableWidth)
      );

      gallery.scrollLeft = newGalleryScrollLeft;

      const newScrollPercent =
        galleryScrollableWidth > 0
          ? newGalleryScrollLeft / galleryScrollableWidth
          : 0;
      setScrollPercentage(newScrollPercent);
    },
    [isDragging, initialClientX, initialGalleryScrollLeft]
  );

  // Unified event handler for mouse up and touch end
  const handleInteractionEnd = useCallback(() => {
    setIsDragging(false);
    document.body.style.cursor = "default";
    document.body.style.userSelect = "auto";
  }, []);

  useEffect(() => {
    if (isDragging) {
      // Add global mouse listeners
      window.addEventListener("mousemove", handleInteractionMove);
      window.addEventListener("mouseup", handleInteractionEnd);
      // Add global touch listeners (passive: false is crucial for preventing default scroll)
      window.addEventListener("touchmove", handleInteractionMove, {
        passive: false,
      });
      window.addEventListener("touchend", handleInteractionEnd);
    } else {
      // Remove global mouse listeners
      window.removeEventListener("mousemove", handleInteractionMove);
      window.removeEventListener("mouseup", handleInteractionEnd);
      // Remove global touch listeners
      window.removeEventListener("touchmove", handleInteractionMove);
      window.removeEventListener("touchend", handleInteractionEnd);
    }

    // Cleanup function for useEffect to prevent memory leaks
    return () => {
      window.removeEventListener("mousemove", handleInteractionMove);
      window.removeEventListener("mouseup", handleInteractionEnd);
      window.removeEventListener("touchmove", handleInteractionMove);
      window.removeEventListener("touchend", handleInteractionEnd);
    };
  }, [isDragging, handleInteractionMove, handleInteractionEnd]);

  return (
    <>
      <div data-aos="fade-up" className="px-4 md:px-10 lg:px-10 xl:px-10 2xl:px-12  max-w-[1440px] mx-auto 2xl:max-w-[1600px] -mt-20 md:-mt-4 lg:-mt-20 xl:-mt-20 2xl:-mt-20">
        <div
          className="
                        md:block /* For MD: h2 and text block stack */
                        lg:block /* For LG: h2 and text block stack */
                        xl:flex xl:flex-row xl:space-x-29 items-start 2xl:gap-5 /* For XL/2XL: h2 and text/button block are side-by-side */
                        "
        >
          <div>
            <h2 data-aos="fade-up" className="text-[30px] md:text-4xl lg:text-[42px] font-semibold text-[#010A12] max-w-3xl">
              Our proven solution
            </h2>
          </div>
          {/* Inner container for paragraph and button */}
          <div
            className="text-sm md:text-base lg:text-[17px] text-[#0A1B2A] leading-relaxed max-w-full md:max-w-[100%] xl:max-w-[83ch] 2xl:max-w-[93ch]
                          md:flex md:justify-between md:items-end md:gap-4 /* NEW: For MD, Paragraph and button are side-by-side */
                          lg:flex lg:justify-between lg:items-end lg:gap-4 /* For LG: Paragraph and button are side-by-side */
                          xl:block /* Revert to block display for XL/2XL: Paragraph and button stack */
                          "
          >
            {/* The paragraph tag itself */}
            <p data-aos="fade-up" className="md:max-w-[53ch] lg:max-w-[80ch]">
              Positive Input Ventilation (PIV) systems work tirelessly to
              circulate fresh, filtered air throughout your home, effectively
              minimizing humidity and condensation levels by as much as 90%. The
              advantages of this technology include healthier indoor air
              quality, a significant reduction in mold and mildew growth, and an
              overall enhancement in comfort. With more than a million PIV units
              successfully installed, homeowners are experiencing these benefits
              firsthand.
            </p>
            {/* Button wrapper div */}
            <div data-aos="fade-up"
              className="mt-6 flex flex-row justify-center /* Base styles for sm: stacked, centered */
                            md:w-auto md:justify-end md:mt-0 md:ml-auto /* NEW: For MD: button aligns to end, no top margin, pushed right */
                            lg:w-auto lg:justify-end lg:mt-0 lg:ml-auto /* For LG: button aligns to end, no top margin, pushed right */
                            xl:justify-start xl:mt-8 xl:ml-0 xl:mr-auto xl:w-auto /* For XL/2XL: revert to stacked, left-aligned, restore margin */
                            "
            >
              <button
                className="lt-semibold bg-[#B6E2FB] text-[#010A12] text-sm rounded-md px-6 py-3 inline-flex items-center hover:bg-[#a0c9f7] transition w-full md:w-auto justify-center gap-2"
                type="button"
              >
                how PIV works
                <Image
                  src="/icons/right-up.svg"
                  alt="Right up arrow"
                  width={10}
                  height={16}
                />
              </button>
            </div>
          </div>
        </div>

        <hr className="my-6 lg:my-10 border-t border-gray-300" />

        {/* Carousel */}
        <div data-aos="fade-up" className="relative -mt-20 md:-mt-50 lg:-mt-34">
          {/* Image Gallery */}
          <div
            ref={galleryRef}
            className="flex space-x-4 overflow-x-auto scrollbar-hide mb-4"
            style={{
              scrollPaddingLeft: "1.5rem",
              scrollPaddingRight: "1.5rem",
            }}
          >
            {[...Array(4)].map((_, i) => (
              <Image
                key={i}
                alt={`PIV view ${i + 1}`}
                className="flex-shrink-0 w-[90vw] sm:w-[500px] md:w-[600px] lg:w-[800px] h-[60vh] sm:h-[70vh] md:h-[850px] rounded-lg object-contain drop-shadow-[10px_10px_10px_rgba(107,114,128,0.6)]"
                height={450}
                src="/images/3.webp"
                width={800}
                priority
              />
            ))}
          </div>

          {/* Scrollbar */}
          <div data-aos="fade-up" className="-mt-10 md:-mt-46 lg:-mt-30 xl:-mt-28">
            <div
              ref={scrollTrackRef}
              aria-hidden="true"
              className="h-1 bg-gray-300 rounded-full flex items-center"
              style={{
                paddingLeft: `${TRACK_HORIZONTAL_PADDING_PX}px`,
                paddingRight: `${TRACK_HORIZONTAL_PADDING_PX}px`,
              }}
            >
              <Image
                ref={draggableImageRef}
                src="/icons/scroll.webp"
                alt="Drag handle"
                width={62}
                height={62}
                className="flex-shrink-0 mt-[14px]" // tighter vertical space
                onMouseDown={handleInteractionStart}
                onTouchStart={handleInteractionStart}
                style={{
                  transform: `translateX(${calculateImageTranslateX()}px)`,
                  cursor: isDragging ? "grabbing" : "grab",
                }}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
