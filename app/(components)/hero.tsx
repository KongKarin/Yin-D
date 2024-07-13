import Link from "next/link";
import FrontCard from "./postcard/frontCard";
import { notoSansThai } from "../font";

export default function Hero() {
  return (
    <>
      <div className="h-screen overflow-hidden p-10 relative backdrop-blur-3xl">
        <div className="absolute z-[5] top-0 left-0 w-[36%] h-screen bg-gradient-to-r from-black/50  via-black/25 via-50% to-transparent to-70% backdrop-blur-[1px] rounded-br-[32px] p-10">
          <h1 className="text-white text-8xl font-bold drop-shadow">Yin - D</h1>
          <div className="ml-10 mt-6">
            <p className="text-white text-lg font-normal drop-shadow-lg">
              <span className="text-2xl">yindī</span>
              <br /> (verb) be glad , be pleased , be happy.
            </p>
            <br />
            <p
              className={`${notoSansThai.className} text-white text-lg font-normal drop-shadow-lg`}
            >
              <span className="text-2xl">ยินดี</span>
              <br /> (กริยา) ชอบใจ, ดีใจ, พอใจ.
            </p>
          </div>
          <br />
          <br />
          <div className="w-full flex justify-center">
            <Link href={"/#write"} scroll={true}>
              <button className="btn tracking-widest text-xl font-light text-center rounded-full w-[150px] btn-primary text-white border border-white/30 drop-shadow">
                WRITE
              </button>
            </Link>
          </div>
        </div>
        <div className="grid grid-rows-5 gap-10">
          <div className="flex gap-x-10">
            <FrontCard />
            <FrontCard />
            <FrontCard />
            <FrontCard />
          </div>
          <div className="flex gap-x-10">
            <FrontCard />
            <FrontCard />
            <FrontCard />
            <FrontCard />
          </div>
          <div className="flex gap-x-10">
            <FrontCard />
            <FrontCard />
            <FrontCard />
            <FrontCard />
          </div>
        </div>
      </div>
    </>
  );
}
