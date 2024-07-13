import React from "react";
import WritingFrontCard from "./postcard/writingFrontCard";
import Link from "next/link";

export default function WritingCard() {
  return (
    <div className="h-screen p-10">
      <div className="py-14 h-full flex flex-col justify-between ">
        <h2 className="text-white text-6xl font-semibold drop-shadow">
          Give a message
        </h2>
        <div className="mx-auto">
          <WritingFrontCard />
        </div>
        <div className="w-full flex justify-center">
          <Link href={"/#write"} scroll={true}>
            <button className="btn tracking-widest text-xl font-light rounded-full w-[150px] btn-primary text-white border border-white/30 drop-shadow flex items-center justify-center ">
              SEND
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
              >
                <path
                  d="M18.0781 3.46407C18.0781 3.46407 18.0781 3.47189 18.0781 3.47579L13.5312 18.4711C13.4624 18.7147 13.3207 18.9313 13.1252 19.0921C12.9297 19.2528 12.6897 19.3499 12.4374 19.3703C12.4015 19.3734 12.3656 19.375 12.3296 19.375C12.0932 19.3757 11.8615 19.3088 11.6619 19.1822C11.4623 19.0555 11.3031 18.8744 11.2031 18.6602L8.41321 12.7703C8.38567 12.7121 8.37682 12.6467 8.38787 12.5832C8.39891 12.5197 8.42933 12.4612 8.47493 12.4156L12.9484 7.94142C13.0606 7.82325 13.1223 7.66591 13.1202 7.50293C13.1181 7.33996 13.0525 7.18424 12.9372 7.06899C12.8219 6.95374 12.6662 6.88807 12.5033 6.88598C12.3403 6.8839 12.1829 6.94556 12.0648 7.05782L7.58431 11.5313C7.53877 11.5769 7.48024 11.6073 7.41675 11.6183C7.35325 11.6294 7.28789 11.6205 7.22962 11.593L1.37025 8.8172C1.14012 8.71177 0.946464 8.54042 0.813787 8.32486C0.68111 8.10929 0.615385 7.8592 0.624934 7.60626C0.637659 7.34629 0.731777 7.09689 0.893982 6.89333C1.05619 6.68977 1.27827 6.54234 1.52884 6.47188L16.5242 1.92501H16.5359C16.7494 1.86503 16.975 1.86292 17.1896 1.91892C17.4042 1.97491 17.6 2.08698 17.757 2.24364C17.9139 2.40029 18.0264 2.59589 18.0828 2.81036C18.1393 3.02483 18.1376 3.25045 18.0781 3.46407Z"
                  fill="white"
                />
              </svg>
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
