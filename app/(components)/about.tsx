"use client";
import React from "react";
import { notoSansThai } from "../font";

export default function About() {
  const handleSubmit = (event: React.FormEvent) => {
    event.preventDefault();
  };
  return (
    <div className={`h-screen p-10 flex items-center`}>
      <div className="py-28">
        <h2
          className={`${notoSansThai.className} text-white text-6xl font-semibold drop-shadow`}
        >
          ยินดี
        </h2>
        <div className="flex items-center gap-x-20 mt-10">
          <div className="w-1/2">
            <p
              className={`${notoSansThai.className} text-white text-lg drop-shadow `}
            >
              “ ยินดี ” - ได้รับแรงบันดาลใจจากคำอวยพรยินดี
              ที่แสนเรียบง่ายและตรงไปตรงมา จึงทำให้ฉุกคิดได้ว่า
              การให้กำลังใจอวยพรคำยินดีที่เรียบง่าย
              อาจจะมีคุณค่าทางใจและอบอุ่นต่อผู้ที่ได้รับอย่างมากมาย
              <br />
              <br />
              เราอยากให้ทุกคำยินดี
              ที่ทุกคนอยากจะกล่าวให้กับใครบางคนรวมทั้งกับตัวทุกคนเองด้วย
              อย่างน้อยได้มีโอกาสยินดีผ่านการเขียนโปสการ์ดเหล่านี้
              <br />
              <br />
            </p>
            <p
              className={`${notoSansThai.className} text-center text-white text-lg drop-shadow `}
            >
              ---- “ เพราะเราเชื่อว่าจะมีสักคำยินดี
              ที่ทำให้รู้สึกยินดีได้อย่างสุดหัวใจ. ”
            </p>
            <br />
            <br />
            <br />
            <p
              className={`${notoSansThai.className} text-end text-white text-lg drop-shadow `}
            >
              ยินดีที่ได้รู้จัก.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="form-control gap-4 justify-center w-1/2 h-[12rem] bg-white/15 rounded-2xl backdrop-blur box-border p-10 text-white text-xl"
          >
            <label htmlFor="message">
              <span className="label-text text-xl">Leave message to us</span>
            </label>
            <input
              id="message"
              type="text"
              className={`${notoSansThai.className} w-full border-b border-white bg-transparent outline-none text-lg`}
            />
            <div className="flex justify-center mt-2">
              <button
                type="submit"
                className="btn btn-sm text-sm w-32 h-8 font-light rounded-full btn-primary text-white border border-white/30 drop-shadow "
              >
                SEND
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
