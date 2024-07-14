export const getBaseUrl = () => {
  if (typeof window !== "undefined") {
    // Client-side
    return "";
  } else {
    // Server-side
    return `${process.env.NEXT_PUBLIC_BASE_URL}`;
  }
};

export default getBaseUrl;
