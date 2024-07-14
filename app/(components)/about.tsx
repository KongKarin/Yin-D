"use client";
import React, { useCallback, useEffect, useRef, useState } from "react";
import { notoSansThai } from "../font";
import { useFormState, useFormStatus } from "react-dom";
import { sendMessage } from "./action/sendMessage";
import { animate, motion, Variants } from "framer-motion";

const textVariants: Variants = {
  offscreen: {
    opacity: 0,
  },
  onscreen: {
    opacity: 1,
    transition: {
      type: "spring",
      duration: 1,
      delay: 0.5,
    },
  },
};
const formVariants: Variants = {
  offscreen: {
    x: 700,
  },
  onscreen: {
    x: 0,
    transition: {
      type: "spring",
      duration: 1.5,
      delay: 0.5,
    },
  },
};

const initialState = {
  message: "",
};

function SubmitButton() {
  const [count, setCount] = useState<number>(0);
  const { pending } = useFormStatus();

  useEffect(() => {
    if (count === 10) {
      setTimeout(() => {
        setCount(0);
      }, 3 * 60 * 1000);
    }
  }, [count]);

  return (
    <button
      type="submit"
      aria-disabled={pending}
      className="btn btn-sm text-sm w-32 h-8 font-light rounded-full btn-primary text-white border border-white/30 drop-shadow "
      onClick={() => setCount(count + 1)}
      disabled={count === 10 || pending}
    >
      SEND
    </button>
  );
}

export default function About() {
  const [state, formAction] = useFormState(sendMessage, initialState);
  const messageInputRef = useRef<HTMLInputElement>(null);
  const resetForm = useCallback(() => {
    if (messageInputRef.current) {
      messageInputRef.current.value = "";
    }
  }, []);

  useEffect(() => {
    if (state.message === "Thank you for your submission!") {
      resetForm();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  return (
    <div className={`h-screen p-10 flex items-center overflow-x-hidden`}>
      <motion.div
        className="py-28"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div variants={textVariants}>
          <h2
            className={`${notoSansThai.className} text-white text-6xl font-semibold drop-shadow`}
          >
            ยินดี
          </h2>
        </motion.div>
        <div className="flex items-center gap-x-20 mt-10">
          <motion.div variants={textVariants} className="w-1/2">
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
              ยินดีที่ได้รู้จัก...
            </p>
          </motion.div>

          <motion.div variants={formVariants} className="w-1/2">
            <form
              action={formAction}
              className="form-control gap-4 justify-center  h-auto bg-white/15 rounded-2xl backdrop-blur box-border p-10 text-white text-xl"
            >
              <label htmlFor="message">
                <span className="label-text text-xl">Leave message to us</span>
              </label>
              <input
                ref={messageInputRef}
                id="message"
                name="message"
                type="text"
                className={`${notoSansThai.className} w-full border-b border-white bg-transparent outline-none text-lg`}
              />

              <div className="h-4">
                <p
                  aria-live="polite"
                  className={`text-white text-center`}
                  role="status"
                >
                  {state?.message}
                </p>
              </div>

              <div className="flex justify-center mt-2">
                <SubmitButton />
              </div>
            </form>
          </motion.div>
        </div>
      </motion.div>
    </div>
  );
}
