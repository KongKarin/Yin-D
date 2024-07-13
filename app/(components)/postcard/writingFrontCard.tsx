import Image from "next/image";

export default function WritingFrontCard() {
  return (
    <>
      <div className="relative bg-white shadow-xl md:w-[49rem] md:h-[25.5rem] rounded-2xl overflow-hidden cursor-pointer">
        <Image
          src="https://s3-eu-west-1.amazonaws.com/public.creativemindclass.com/magazine/2021/07/small_image00003.jpg"
          alt="car!"
          width={1000}
          height={800}
          className="object-fill z-0"
        />
        <div className="absolute z-[1] top-0 w-full h-full flex justify-end items-center p-1">
          <div className="bg-white h-full md:w-[27.5rem] md:rounded-[0.875rem] text-center text-xs box-border cursor-text">
            <p>write message</p>
          </div>
        </div>
      </div>
    </>
  );
}
