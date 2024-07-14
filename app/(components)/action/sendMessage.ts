"use server";

import getBaseUrl from "@/app/helper/getBaseUrl";
import { revalidatePath } from "next/cache";
import { z } from "zod";

const schema = z.object({
  userMessage: z.string().min(1).max(255),
});

export async function sendMessage(
  prevState: {
    message: string;
  },
  formData: FormData
) {
  const parse = schema.safeParse({
    userMessage: formData.get("message"),
  });

  if (!parse.success) {
    return { message: "It's not valid message" };
  }

  const data = parse.data;

  try {
    const formData = new FormData();
    formData.append("msg", data.userMessage);

    const response = await fetch(`${getBaseUrl()}/api/mail`, {
      method: "POST",
      body: JSON.stringify({ msg: data.userMessage }),
      headers: {
        "Content-Type": "application/json",
      },
    });
    if (!response.ok) {
      return { message: "Failed to submit your message" };
    }
    revalidatePath("/");
    return {
      message: `Thank you for your submission!`,
    };
  } catch (e) {
    console.log("error", e);
    return { message: "Failed to submit the message" };
  }
}
