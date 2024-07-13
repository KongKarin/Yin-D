import Image from "next/image";

export default function FrontCard() {
  return (
    <>
      <div className="relative bg-white shadow-xl w-[500px] h-[260px] rounded-2xl overflow-hidden">
        <Image
          src="https://s3-eu-west-1.amazonaws.com/public.creativemindclass.com/magazine/2021/07/small_image00003.jpg"
          alt="car!"
          width={500}
          height={260}
          className="object-cover z-0"
        />
        <div className="absolute z-[1] top-0 w-full h-full flex justify-end items-center ">
          <div className="bg-white w-[280px] h-[250px] rounded-[14px] mr-[0.3rem] text-center text-xs box-border p-2">
            <p>write message</p>
          </div>
        </div>
      </div>
    </>
  );
}
