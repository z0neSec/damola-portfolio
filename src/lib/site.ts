export const SITE = {
  name: "Adedolapo Ademola",
  title: "Adedolapo Ademola, RN | Medical Virtual Assistant",
  description:
    "Registered Nurse with over three years at the bedside, now supporting healthcare teams remotely with scheduling, intake, EHR documentation and patient communication.",
  email: "ademolaadedolapomary@gmail.com",
  linkedin: "https://www.linkedin.com/in/adedolapoademola",
} as const;

const PRODUCTION_URL = "https://ademolaadedolapo.me";

export function siteUrl(): string {
  if (process.env.NEXT_PUBLIC_SITE_URL) return process.env.NEXT_PUBLIC_SITE_URL;
  if (process.env.NODE_ENV === "development") return "http://localhost:3000";
  return PRODUCTION_URL;
}
