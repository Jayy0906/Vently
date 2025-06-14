"use client";

import Image from "next/image";
import { useRef, useEffect, useState, useCallback } from "react";

// Define the interface for the props passed to ReviewCard
interface ReviewCardProps {
  stars: number;
  title: string;
  content: string;
  author: string;
}

// ReviewCard Component
function ReviewCard({ stars, title, content, author }: ReviewCardProps) {
  const [showFull, setShowFull] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setShowFull((prev) => {
      // Reset scroll to top when closing
      if (prev && contentRef.current) contentRef.current.scrollTop = 0;
      return !prev;
    });
  };

  const shouldShowToggleButton = content.length > 120;

  return (
    <article
      data-aos="fade-up"
      className="border-2 border-gray-200 rounded-2xl p-6 flex flex-col justify-between min-h-[260px] shadow-sm shadow-gray-400 hover:shadow-lg transition-shadow duration-300 flex-shrink-0 w-full sm:w-[340px] lg:w-[300px] xl:w-[380px] 2xl:w-[520px]"
      style={{ scrollSnapAlign: "start" }}
    >
      <div>
        {/* Stars */}
        <div
          className="flex space-x-1 mb-5"
          aria-label={`${stars} out of 5 stars`}
        >
          {Array.from({ length: stars }).map((_, index) => (
            <Image
              key={index}
              src="/icons/star.svg"
              alt="Star"
              width={20}
              height={20}
              className="inline-block"
            />
          ))}
        </div>

        {/* Title */}
        <h3 className="lt-semibold text-[#010A12] text-lg 2xl:text-2xl mb-1">{title}</h3>

        {/* Content */}
        <div className="relative">
          <div
            ref={contentRef}
            className={`lt-normal text-[#010A12] text-[16px] 2xl:text-[18px] leading-6 max-w-full transition-all duration-300
    ${
      showFull
        ? "max-h-[74px] overflow-y-auto pr-1 scrollbar-thin-custom"
        : "max-h-[74px] overflow-hidden"
    }
  `}
          >
            {content}
          </div>

          {/* Fade mask */}
          {!showFull && (
            <div className="absolute bottom-0 left-0 w-full h-6 bg-gradient-to-t from-white-10 to-transparent pointer-events-none" />
          )}
        </div>

        {/* Toggle Button */}
        {shouldShowToggleButton && (
          <button
            className="text-blue-600 text-sm mt-2 underline cursor-pointer"
            onClick={handleToggle}
          >
            {showFull ? "Show Less" : "See More"}
          </button>
        )}
      </div>

      {/* Author */}
      <div>
        <hr className="border-[#e5e7eb] mb-3" />
        <p className="lt-semibold text-[#010A12] text-lg">{author}</p>
      </div>
    </article>
  );
}

// Define the interface for the raw Trustpilot API review data
// interface TrustpilotApiResponse {
//   reviews: {
//     stars: number;
//     title: string;
//     text: string;
//     consumer: {
//       displayName: string;
//     };
//   }[];
// }

// CustomerReviews Component
export default function CustomerReviews() {
  const [reviews, setReviews] = useState<ReviewCardProps[]>([]);

  useEffect(() => {
    const fetchReviews = async () => {
      try {
        // const response = await fetch(
        //   "https://widget.trustpilot.com/trustbox-data/53aa8912dec7e10d38f59f36?businessUnitId=61d9967de1cf858473046da5&locale=en-GB&reviewLanguages=en&reviewStars=&includeReviews=true&reviewsPerPage=15"
        // );
        //
        //  // This url of the review is from the CES Shop site, so it required to change with Current site KEY, When it will get from client we must need to change this URL.
        // // Ensure response is JSON
        // if (!response.ok) {
        //   throw new Error(`HTTP error! status: ${response.status}`);
        // }
        // const data: TrustpilotApiResponse = await response.json(); // Type assertion here

        const data = {
          reviews: [
            {
              stars: 5,
              createdAt: "2025-06-09T17:07:58Z",
              title: "Just finished",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper, lectus ut tristique imperdiet, leo elit scelerisque leo, a pharetra dolor sem eu elit. Sed non felis nec elit sollicitudin vulputate quis sed nisi. Donec vehicula vulputate dapibus. Proin et dui eget nibh placerat malesuada vitae sit amet nisl. Cras at dignissim turpis. Sed eget malesuada ligula. Integer lacinia nibh non leo maximus, eget feugiat diam rutrum. Nulla non sodales justo. Etiam augue orci, dignissim at nisl ut, bibendum ultrices lacus. Duis ut dui viverra neque aliquet tincidunt. Suspendisse non feugiat erat, et tempus diam. Etiam gravida iaculis massa eu faucibus. Vestibulum egestas diam risus. Cras sit amet justo lorem.",
              reviewUrl:
                "https://vently.jcasptechnologies.com/6846f8cede2f64a0cf74bfb2",
              language: "en",
              verification: {
                createdAt: "2025-06-09T17:07:58Z",
                isVerified: false,
                reviewSource: "Organic",
                verificationSource: "invitation",
                verificationLevel: "not-verified",
              },
              consumer: {
                displayName: "Thomas Jon",
              },
              companyReply: {
                createdAt: "2025-06-10T08:08:24Z",
                text: "Integer leo massa, suscipit sit amet condimentum at, pharetra quis tellus. Proin rhoncus nec dolor vitae laoreet. In vehicula congue orci sed vestibulum. Fusce non ultricies lorem, quis dictum felis. Sed sed dapibus neque. Donec sit amet urna tortor. Praesent venenatis ut sem sit amet placerat. Etiam et augue id augue gravida posuere vitae at tortor. Vestibulum faucibus metus non porta sagittis. Fusce finibus mi tellus, non aliquam est gravida vel. Curabitur id metus eget urna varius pulvinar nec non dui. Maecenas molestie ullamcorper pharetra. Suspendisse potenti. Aenean eu lacinia massa, at pellentesque leo. Quisque dui lorem, pulvinar ac dui non, varius ullamcorper metus",
              },
              isReviewSnippet: false,
            },
            {
              stars: 4,
              createdAt: "2025-06-07T12:22:08Z",
              title: " workers very…",
              text: "Integer leo massa, suscipit sit amet condimentum at, pharetra quis tellus. Proin rhoncus nec dolor vitae laoreet. In vehicula congue orci sed vestibulum. Fusce non ultricies lorem, quis dictum felis. Sed sed dapibus neque. Donec sit amet urna tortor. Praesent venenatis ut sem sit amet placerat. Etiam et augue id augue gravida posuere vitae at tortor. Vestibulum faucibus metus non porta sagittis. Fusce finibus mi tellus, non aliquam est gravida vel. Curabitur id metus eget urna varius pulvinar nec non dui. Maecenas molestie ullamcorper pharetra. Suspendisse potenti. Aenean eu lacinia massa, at pellentesque leo. Quisque dui lorem, pulvinar ac dui non, varius ullamcorper metus",
              reviewUrl:
                "https://vently.jcasptechnologies.com/684412d0c590f8a8729262f9",
              language: "en",
              verification: {
                createdAt: "2025-06-07T12:22:08Z",
                isVerified: false,
                reviewSource: "Organic",
                verificationSource: "invitation",
                verificationLevel: "not-verified",
              },
              consumer: {
                displayName: "Morgan Joe",
              },
              companyReply: {
                createdAt: "2025-06-09T08:05:29Z",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper, lectus ut tristique imperdiet, leo elit scelerisque leo, a pharetra dolor sem eu elit. Sed non felis nec elit sollicitudin vulputate quis sed nisi. Donec vehicula vulputate dapibus. Proin et dui eget nibh placerat malesuada vitae sit amet nisl. Cras at dignissim turpis. Sed eget malesuada ligula. Integer lacinia nibh non leo maximus, eget feugiat diam rutrum. Nulla non sodales justo. Etiam augue orci, dignissim at nisl ut, bibendum ultrices lacus. Duis ut dui viverra neque aliquet tincidunt. Suspendisse non feugiat erat, et tempus diam. Etiam gravida iaculis massa eu faucibus. Vestibulum egestas diam risus. Cras sit amet",
              },
              isReviewSnippet: false,
            },
            {
              stars: 3,
              createdAt: "2025-06-09T17:07:58Z",
              title: "Just finished",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper, lectus ut tristique imperdiet, leo elit scelerisque leo, a pharetra dolor sem eu elit. Sed non felis nec elit sollicitudin vulputate quis sed nisi. Donec vehicula vulputate dapibus. Proin et dui eget nibh placerat malesuada vitae sit amet nisl. Cras at dignissim turpis. Sed eget malesuada ligula. Integer lacinia nibh non leo maximus, eget feugiat diam rutrum. Nulla non sodales justo. Etiam augue orci, dignissim at nisl ut, bibendum ultrices lacus. Duis ut dui viverra neque aliquet tincidunt. Suspendisse non feugiat erat, et tempus diam. Etiam gravida iaculis massa eu faucibus. Vestibulum egestas diam risus. Cras sit amet justo lorem.",
              reviewUrl:
                "https://vently.jcasptechnologies.com/6846f8cede2f64a0cf74bfb2",
              language: "en",
              verification: {
                createdAt: "2025-06-09T17:07:58Z",
                isVerified: false,
                reviewSource: "Organic",
                verificationSource: "invitation",
                verificationLevel: "not-verified",
              },
              consumer: {
                displayName: "Thomas Jon",
              },
              companyReply: {
                createdAt: "2025-06-10T08:08:24Z",
                text: "Integer leo massa, suscipit sit amet condimentum at, pharetra quis tellus. Proin rhoncus nec dolor vitae laoreet. In vehicula congue orci sed vestibulum. Fusce non ultricies lorem, quis dictum felis. Sed sed dapibus neque. Donec sit amet urna tortor. Praesent venenatis ut sem sit amet placerat. Etiam et augue id augue gravida posuere vitae at tortor. Vestibulum faucibus metus non porta sagittis. Fusce finibus mi tellus, non aliquam est gravida vel. Curabitur id metus eget urna varius pulvinar nec non dui. Maecenas molestie ullamcorper pharetra. Suspendisse potenti. Aenean eu lacinia massa, at pellentesque leo. Quisque dui lorem, pulvinar ac dui non, varius ullamcorper metus",
              },
              isReviewSnippet: false,
            },
            {
              stars: 5,
              createdAt: "2025-06-07T12:22:08Z",
              title: " workers very…",
              text: "Integer leo massa, suscipit sit amet condimentum at, pharetra quis tellus. Proin rhoncus nec dolor vitae laoreet. In vehicula congue orci sed vestibulum. Fusce non ultricies lorem, quis dictum felis. Sed sed dapibus neque. Donec sit amet urna tortor. Praesent venenatis ut sem sit amet placerat. Etiam et augue id augue gravida posuere vitae at tortor. Vestibulum faucibus metus non porta sagittis. Fusce finibus mi tellus, non aliquam est gravida vel. Curabitur id metus eget urna varius pulvinar nec non dui. Maecenas molestie ullamcorper pharetra. Suspendisse potenti. Aenean eu lacinia massa, at pellentesque leo. Quisque dui lorem, pulvinar ac dui non, varius ullamcorper metus",
              reviewUrl:
                "https://vently.jcasptechnologies.com/684412d0c590f8a8729262f9",
              language: "en",
              verification: {
                createdAt: "2025-06-07T12:22:08Z",
                isVerified: false,
                reviewSource: "Organic",
                verificationSource: "invitation",
                verificationLevel: "not-verified",
              },
              consumer: {
                displayName: "Morgan Joe",
              },
              companyReply: {
                createdAt: "2025-06-09T08:05:29Z",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper, lectus ut tristique imperdiet, leo elit scelerisque leo, a pharetra dolor sem eu elit. Sed non felis nec elit sollicitudin vulputate quis sed nisi. Donec vehicula vulputate dapibus. Proin et dui eget nibh placerat malesuada vitae sit amet nisl. Cras at dignissim turpis. Sed eget malesuada ligula. Integer lacinia nibh non leo maximus, eget feugiat diam rutrum. Nulla non sodales justo. Etiam augue orci, dignissim at nisl ut, bibendum ultrices lacus. Duis ut dui viverra neque aliquet tincidunt. Suspendisse non feugiat erat, et tempus diam. Etiam gravida iaculis massa eu faucibus. Vestibulum egestas diam risus. Cras sit amet",
              },
              isReviewSnippet: false,
            },
            {
              stars: 4,
              createdAt: "2025-06-09T17:07:58Z",
              title: "Just finished",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper, lectus ut tristique imperdiet, leo elit scelerisque leo, a pharetra dolor sem eu elit. Sed non felis nec elit sollicitudin vulputate quis sed nisi. Donec vehicula vulputate dapibus. Proin et dui eget nibh placerat malesuada vitae sit amet nisl. Cras at dignissim turpis. Sed eget malesuada ligula. Integer lacinia nibh non leo maximus, eget feugiat diam rutrum. Nulla non sodales justo. Etiam augue orci, dignissim at nisl ut, bibendum ultrices lacus. Duis ut dui viverra neque aliquet tincidunt. Suspendisse non feugiat erat, et tempus diam. Etiam gravida iaculis massa eu faucibus. Vestibulum egestas diam risus. Cras sit amet justo lorem.",
              reviewUrl:
                "https://vently.jcasptechnologies.com/6846f8cede2f64a0cf74bfb2",
              language: "en",
              verification: {
                createdAt: "2025-06-09T17:07:58Z",
                isVerified: false,
                reviewSource: "Organic",
                verificationSource: "invitation",
                verificationLevel: "not-verified",
              },
              consumer: {
                displayName: "Thomas Jon",
              },
              companyReply: {
                createdAt: "2025-06-10T08:08:24Z",
                text: "Integer leo massa, suscipit sit amet condimentum at, pharetra quis tellus. Proin rhoncus nec dolor vitae laoreet. In vehicula congue orci sed vestibulum. Fusce non ultricies lorem, quis dictum felis. Sed sed dapibus neque. Donec sit amet urna tortor. Praesent venenatis ut sem sit amet placerat. Etiam et augue id augue gravida posuere vitae at tortor. Vestibulum faucibus metus non porta sagittis. Fusce finibus mi tellus, non aliquam est gravida vel. Curabitur id metus eget urna varius pulvinar nec non dui. Maecenas molestie ullamcorper pharetra. Suspendisse potenti. Aenean eu lacinia massa, at pellentesque leo. Quisque dui lorem, pulvinar ac dui non, varius ullamcorper metus",
              },
              isReviewSnippet: false,
            },
            {
              stars: 3,
              createdAt: "2025-06-07T12:22:08Z",
              title: " workers very…",
              text: "Integer leo massa, suscipit sit amet condimentum at, pharetra quis tellus. Proin rhoncus nec dolor vitae laoreet. In vehicula congue orci sed vestibulum. Fusce non ultricies lorem, quis dictum felis. Sed sed dapibus neque. Donec sit amet urna tortor. Praesent venenatis ut sem sit amet placerat. Etiam et augue id augue gravida posuere vitae at tortor. Vestibulum faucibus metus non porta sagittis. Fusce finibus mi tellus, non aliquam est gravida vel. Curabitur id metus eget urna varius pulvinar nec non dui. Maecenas molestie ullamcorper pharetra. Suspendisse potenti. Aenean eu lacinia massa, at pellentesque leo. Quisque dui lorem, pulvinar ac dui non, varius ullamcorper metus",
              reviewUrl:
                "https://vently.jcasptechnologies.com/684412d0c590f8a8729262f9",
              language: "en",
              verification: {
                createdAt: "2025-06-07T12:22:08Z",
                isVerified: false,
                reviewSource: "Organic",
                verificationSource: "invitation",
                verificationLevel: "not-verified",
              },
              consumer: {
                displayName: "Morgan Joe",
              },
              companyReply: {
                createdAt: "2025-06-09T08:05:29Z",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper, lectus ut tristique imperdiet, leo elit scelerisque leo, a pharetra dolor sem eu elit. Sed non felis nec elit sollicitudin vulputate quis sed nisi. Donec vehicula vulputate dapibus. Proin et dui eget nibh placerat malesuada vitae sit amet nisl. Cras at dignissim turpis. Sed eget malesuada ligula. Integer lacinia nibh non leo maximus, eget feugiat diam rutrum. Nulla non sodales justo. Etiam augue orci, dignissim at nisl ut, bibendum ultrices lacus. Duis ut dui viverra neque aliquet tincidunt. Suspendisse non feugiat erat, et tempus diam. Etiam gravida iaculis massa eu faucibus. Vestibulum egestas diam risus. Cras sit amet",
              },
              isReviewSnippet: false,
            },
            {
              stars: 2,
              createdAt: "2025-06-09T17:07:58Z",
              title: "Just finished",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper, lectus ut tristique imperdiet, leo elit scelerisque leo, a pharetra dolor sem eu elit. Sed non felis nec elit sollicitudin vulputate quis sed nisi. Donec vehicula vulputate dapibus. Proin et dui eget nibh placerat malesuada vitae sit amet nisl. Cras at dignissim turpis. Sed eget malesuada ligula. Integer lacinia nibh non leo maximus, eget feugiat diam rutrum. Nulla non sodales justo. Etiam augue orci, dignissim at nisl ut, bibendum ultrices lacus. Duis ut dui viverra neque aliquet tincidunt. Suspendisse non feugiat erat, et tempus diam. Etiam gravida iaculis massa eu faucibus. Vestibulum egestas diam risus. Cras sit amet justo lorem.",
              reviewUrl:
                "https://vently.jcasptechnologies.com/6846f8cede2f64a0cf74bfb2",
              language: "en",
              verification: {
                createdAt: "2025-06-09T17:07:58Z",
                isVerified: false,
                reviewSource: "Organic",
                verificationSource: "invitation",
                verificationLevel: "not-verified",
              },
              consumer: {
                displayName: "Thomas Jon",
              },
              companyReply: {
                createdAt: "2025-06-10T08:08:24Z",
                text: "Integer leo massa, suscipit sit amet condimentum at, pharetra quis tellus. Proin rhoncus nec dolor vitae laoreet. In vehicula congue orci sed vestibulum. Fusce non ultricies lorem, quis dictum felis. Sed sed dapibus neque. Donec sit amet urna tortor. Praesent venenatis ut sem sit amet placerat. Etiam et augue id augue gravida posuere vitae at tortor. Vestibulum faucibus metus non porta sagittis. Fusce finibus mi tellus, non aliquam est gravida vel. Curabitur id metus eget urna varius pulvinar nec non dui. Maecenas molestie ullamcorper pharetra. Suspendisse potenti. Aenean eu lacinia massa, at pellentesque leo. Quisque dui lorem, pulvinar ac dui non, varius ullamcorper metus",
              },
              isReviewSnippet: false,
            },
            {
              stars: 6,
              createdAt: "2025-06-07T12:22:08Z",
              title: " workers very…",
              text: "Integer leo massa, suscipit sit amet condimentum at, pharetra quis tellus. Proin rhoncus nec dolor vitae laoreet. In vehicula congue orci sed vestibulum. Fusce non ultricies lorem, quis dictum felis. Sed sed dapibus neque. Donec sit amet urna tortor. Praesent venenatis ut sem sit amet placerat. Etiam et augue id augue gravida posuere vitae at tortor. Vestibulum faucibus metus non porta sagittis. Fusce finibus mi tellus, non aliquam est gravida vel. Curabitur id metus eget urna varius pulvinar nec non dui. Maecenas molestie ullamcorper pharetra. Suspendisse potenti. Aenean eu lacinia massa, at pellentesque leo. Quisque dui lorem, pulvinar ac dui non, varius ullamcorper metus",
              reviewUrl:
                "https://vently.jcasptechnologies.com/684412d0c590f8a8729262f9",
              language: "en",
              verification: {
                createdAt: "2025-06-07T12:22:08Z",
                isVerified: false,
                reviewSource: "Organic",
                verificationSource: "invitation",
                verificationLevel: "not-verified",
              },
              consumer: {
                displayName: "Morgan Joe",
              },
              companyReply: {
                createdAt: "2025-06-09T08:05:29Z",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper, lectus ut tristique imperdiet, leo elit scelerisque leo, a pharetra dolor sem eu elit. Sed non felis nec elit sollicitudin vulputate quis sed nisi. Donec vehicula vulputate dapibus. Proin et dui eget nibh placerat malesuada vitae sit amet nisl. Cras at dignissim turpis. Sed eget malesuada ligula. Integer lacinia nibh non leo maximus, eget feugiat diam rutrum. Nulla non sodales justo. Etiam augue orci, dignissim at nisl ut, bibendum ultrices lacus. Duis ut dui viverra neque aliquet tincidunt. Suspendisse non feugiat erat, et tempus diam. Etiam gravida iaculis massa eu faucibus. Vestibulum egestas diam risus. Cras sit amet",
              },
              isReviewSnippet: false,
            },
            {
              stars: 2,
              createdAt: "2025-06-09T17:07:58Z",
              title: "Just finished",
              text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper, lectus ut tristique imperdiet, leo elit scelerisque leo, a pharetra dolor sem eu elit. Sed non felis nec elit sollicitudin vulputate quis sed nisi. Donec vehicula vulputate dapibus. Proin et dui eget nibh placerat malesuada vitae sit amet nisl. Cras at dignissim turpis. Sed eget malesuada ligula. Integer lacinia nibh non leo maximus, eget feugiat diam rutrum. Nulla non sodales justo. Etiam augue orci, dignissim at nisl ut, bibendum ultrices lacus. Duis ut dui viverra neque aliquet tincidunt. Suspendisse non feugiat erat, et tempus diam. Etiam gravida iaculis massa eu faucibus. Vestibulum egestas diam risus. Cras sit amet justo lorem.",
              reviewUrl:
                "https://vently.jcasptechnologies.com/6846f8cede2f64a0cf74bfb2",
              language: "en",
              verification: {
                createdAt: "2025-06-09T17:07:58Z",
                isVerified: false,
                reviewSource: "Organic",
                verificationSource: "invitation",
                verificationLevel: "not-verified",
              },
              consumer: {
                displayName: "Thomas Jon",
              },
              companyReply: {
                createdAt: "2025-06-10T08:08:24Z",
                text: "Integer leo massa, suscipit sit amet condimentum at, pharetra quis tellus. Proin rhoncus nec dolor vitae laoreet. In vehicula congue orci sed vestibulum. Fusce non ultricies lorem, quis dictum felis. Sed sed dapibus neque. Donec sit amet urna tortor. Praesent venenatis ut sem sit amet placerat. Etiam et augue id augue gravida posuere vitae at tortor. Vestibulum faucibus metus non porta sagittis. Fusce finibus mi tellus, non aliquam est gravida vel. Curabitur id metus eget urna varius pulvinar nec non dui. Maecenas molestie ullamcorper pharetra. Suspendisse potenti. Aenean eu lacinia massa, at pellentesque leo. Quisque dui lorem, pulvinar ac dui non, varius ullamcorper metus",
              },
              isReviewSnippet: false,
            },
            {
              stars: 5,
              createdAt: "2025-06-07T12:22:08Z",
              title: " workers very…",
              text: "Integer leo massa, suscipit sit amet condimentum at, pharetra quis tellus. Proin rhoncus nec dolor vitae laoreet. In vehicula congue orci sed vestibulum. Fusce non ultricies lorem, quis dictum felis. Sed sed dapibus neque. Donec sit amet urna tortor. Praesent venenatis ut sem sit amet placerat. Etiam et augue id augue gravida posuere vitae at tortor. Vestibulum faucibus metus non porta sagittis. Fusce finibus mi tellus, non aliquam est gravida vel. Curabitur id metus eget urna varius pulvinar nec non dui. Maecenas molestie ullamcorper pharetra. Suspendisse potenti. Aenean eu lacinia massa, at pellentesque leo. Quisque dui lorem, pulvinar ac dui non, varius ullamcorper metus",
              reviewUrl:
                "https://vently.jcasptechnologies.com/684412d0c590f8a8729262f9",
              language: "en",
              verification: {
                createdAt: "2025-06-07T12:22:08Z",
                isVerified: false,
                reviewSource: "Organic",
                verificationSource: "invitation",
                verificationLevel: "not-verified",
              },
              consumer: {
                displayName: "Morgan Joe",
              },
              companyReply: {
                createdAt: "2025-06-09T08:05:29Z",
                text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse semper, lectus ut tristique imperdiet, leo elit scelerisque leo, a pharetra dolor sem eu elit. Sed non felis nec elit sollicitudin vulputate quis sed nisi. Donec vehicula vulputate dapibus. Proin et dui eget nibh placerat malesuada vitae sit amet nisl. Cras at dignissim turpis. Sed eget malesuada ligula. Integer lacinia nibh non leo maximus, eget feugiat diam rutrum. Nulla non sodales justo. Etiam augue orci, dignissim at nisl ut, bibendum ultrices lacus. Duis ut dui viverra neque aliquet tincidunt. Suspendisse non feugiat erat, et tempus diam. Etiam gravida iaculis massa eu faucibus. Vestibulum egestas diam risus. Cras sit amet",
              },
              isReviewSnippet: false,
            },
          ],
        };

        const mappedReviews: ReviewCardProps[] = data.reviews.map((review) => ({
          stars: review.stars || 5, // Default to 5 stars if not provided
          title: review.title || "Customer Review",
          content: review.text,
          author: review.consumer.displayName || "Anonymous",
        }));

        setReviews(mappedReviews);
      } catch (error) {
        console.error("Error fetching reviews:", error);
        // Optionally set an error state or show a message to the user
      }
    };

    fetchReviews();
  }, []);

  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  // Use useCallback for event handlers to prevent re-creation on every render
  const onPointerDown = useCallback((e: PointerEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Check if the target is a button or has a button ancestor
    let target = e.target as HTMLElement;
    while (target && target !== container) {
      if (
        target.tagName === "BUTTON" ||
        target.getAttribute("role") === "button"
      ) {
        return; // Don't initiate drag for button clicks
      }
      target = target.parentElement as HTMLElement;
    }

    if (window.innerWidth >= 768) {
      container.setAttribute("data-dragging", "true");
      container.style.cursor = "grabbing";
      document.body.style.userSelect = "none";
      container.setPointerCapture(e.pointerId);

      // Store initial positions for drag calculation
      container.dataset.startX = String(e.pageX);
      container.dataset.scrollLeft = String(container.scrollLeft);
    }
  }, []); // Empty dependency array as it doesn't depend on component state directly

  const onPointerMove = useCallback((e: PointerEvent) => {
    const container = scrollContainerRef.current;
    if (!container || container.getAttribute("data-dragging") !== "true")
      return;

    const startX = parseFloat(container.dataset.startX || "0");
    const scrollLeft = parseFloat(container.dataset.scrollLeft || "0");
    const walk = e.pageX - startX;
    container.scrollLeft = scrollLeft - walk;
  }, []);

  const onPointerUp = useCallback((e: PointerEvent) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    container.removeAttribute("data-dragging");
    container.style.cursor = "grab";
    document.body.style.userSelect = "auto";
    container.releasePointerCapture(e.pointerId);
  }, []);

  const onScroll = useCallback(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    if (window.innerWidth < 768) {
      const scrollPosition = container.scrollLeft;
      const firstCard = container.querySelector("article");
      if (firstCard) {
        const cardRect = firstCard.getBoundingClientRect();
        const containerStyle = window.getComputedStyle(container);
        const gap = parseFloat(containerStyle.gap || "0");
        const effectiveCardWidth = cardRect.width + gap;
        const newIndex = Math.round(scrollPosition / effectiveCardWidth);
        setActiveIndex(newIndex);
      }
    }
  }, []);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (!container) return;

    // Attach event listeners for drag functionality
    container.addEventListener("pointerdown", onPointerDown);
    container.addEventListener("pointermove", onPointerMove);
    container.addEventListener("pointerup", onPointerUp);
    container.addEventListener("pointercancel", onPointerUp); // Handles cases where pointer interaction is interrupted

    // Attach scroll listener for pagination dots
    container.addEventListener("scroll", onScroll);

    // Initial sync for active dot
    onScroll();

    // Cleanup function
    return () => {
      container.removeEventListener("pointerdown", onPointerDown);
      container.removeEventListener("pointermove", onPointerMove);
      container.removeEventListener("pointerup", onPointerUp);
      container.removeEventListener("pointercancel", onPointerUp);
      container.removeEventListener("scroll", onScroll);
    };
  }, [onPointerDown, onPointerMove, onPointerUp, onScroll]); // Depend on memoized handlers

  const scrollLeftCards = () => {
    if (scrollContainerRef.current) {
      const firstCard = scrollContainerRef.current.querySelector("article");
      let scrollAmount = 350; // Default fallback
      if (firstCard) {
        const cardRect = firstCard.getBoundingClientRect();
        const containerStyle = window.getComputedStyle(
          scrollContainerRef.current
        );
        const gap = parseFloat(containerStyle.gap || "0");
        scrollAmount = cardRect.width + gap;
      }
      scrollContainerRef.current.scrollBy({
        left: -scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollRightCards = () => {
    if (scrollContainerRef.current) {
      const firstCard = scrollContainerRef.current.querySelector("article");
      let scrollAmount = 350; // Default fallback
      if (firstCard) {
        const cardRect = firstCard.getBoundingClientRect();
        const containerStyle = window.getComputedStyle(
          scrollContainerRef.current
        );
        const gap = parseFloat(containerStyle.gap || "0");
        scrollAmount = cardRect.width + gap;
      }
      scrollContainerRef.current.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  };

  const scrollToCard = (index: number) => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const firstCard = container.querySelector("article");
      let effectiveCardWidth = 350 + 24; // Default fallback

      if (firstCard) {
        const cardRect = firstCard.getBoundingClientRect();
        const containerStyle = window.getComputedStyle(container);
        const gap = parseFloat(containerStyle.gap || "0");
        effectiveCardWidth = cardRect.width + gap;
      }

      scrollContainerRef.current.scrollTo({
        left: index * effectiveCardWidth,
        behavior: "smooth",
      });
      setActiveIndex(index);
    }
  };

  return (
    <section
      data-aos="fade-up"
      id="testimonials"
      className="text-[#010A12] px-4 sm:px-6 md:px-10 lg:px-10 xl:px-10 2xl:px-12 max-w-[1550px] 2xl:max-w-[1905px] mx-auto"
    >
      <div
        className="flex flex-col md:items-start gap-6 md:gap-0 mb-6
                   lg:flex-row lg:items-center lg:justify-between"
      >
        <h2
          data-aos="fade-up"
          className="order-2 text-[#010A12] text-[30px] md:text-4xl lg:text-[42px] 2xl:text-[54px] lt-semibold leading-[30px] md:leading-[48px] max-w-3xl mt-10 md:mt-8 lg:mt-10
                     lg:order-none"
        >
          More than 1000+
          <br />
          happy customers
        </h2>

        <div
          data-aos="fade-up"
          className="order-1 md:flex md:flex-wrap md:items-center md:gap-10 md:justify-center
                     lg:order-none"
        >
          <div className="flex flex-nowrap overflow-x-auto md:overflow-x-hidden xl:overflow-x-auto scrollbar-hide mt-20 md:mt-0 lg:mt-12 2xl:mt-8 gap-12 md:gap-13 justify-start">
            {["paypal", "google", "glassdoor"].map((logo, i) => (
              <div key={i} className="flex flex-shrink-0 flex-col items-center">
                <Image
                  alt={`${logo} logo`}
                  className="w-[180px] h-[57px] md:w-[200px] md:h-[60px] lg:w-[200px] lg:h-[60px] xl:w-[220px] xl:h-[60px] 2xl:w-[220px] 2xl:h-[60px] object-contain"
                  height={60}
                  src={`/images/${logo}.webp`}
                  width={205}
                  quality={100}
                  priority
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <hr className="border-[#e5e7eb] mb-4 md:mb-6" />

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
        {reviews.map((review, index) => (
          <ReviewCard key={index} {...review} />
        ))}
      </div>

      <div className="flex gap-4 mt-8">
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
