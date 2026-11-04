import type { StaticImageData } from "next/image";
import encounter from "../../assets/shot-encounter.jpg";
import vitals from "../../assets/shot-vitals.jpg";
import icd10 from "../../assets/shot-icd10.jpg";

export const EHRS = ["OpenEMR", "SimplePractice", "Cliniko", "Carepatron", "ClinikEHR"];

export const TOOLS = [
  "Google Workspace",
  "Microsoft Office",
  "Slack",
  "Zoom",
  "Doxy.me",
  "Calendly",
  "Trello",
  "Notion",
  "Canva",
];

export const STAGES = [
  {
    stage: "Inquiry",
    title: "Patient communication and triage",
    desc: "Calls, emails and portal messages answered with warmth and clinical judgement. Anything urgent reaches the right provider, fast.",
    tags: ["Email", "Slack", "Doxy.me", "Zoom"],
  },
  {
    stage: "Scheduling",
    title: "Scheduling and calendar management",
    desc: "Appointments booked, rescheduled and confirmed, with reminders sent, so provider calendars stay full and clinics run on time.",
    tags: ["Calendly", "Google Workspace", "EHR schedulers"],
  },
  {
    stage: "Verification",
    title: "Insurance and HMO verification",
    desc: "Coverage and eligibility checked before the visit and prior authorizations coordinated, so check-in is smooth and billing has fewer surprises.",
    tags: ["EHR", "Google Workspace", "Microsoft Office"],
  },
  {
    stage: "Intake",
    title: "Patient intake and onboarding",
    desc: "New-patient forms, demographics and history collected, checked and in the chart before the first appointment.",
    tags: ["SimplePractice", "Carepatron", "Google Workspace"],
  },
  {
    stage: "Documentation",
    title: "EHR and EMR documentation",
    desc: "Encounters, SOAP notes, vitals, medication lists and billing codes entered accurately, leaving a complete, audit-ready record.",
    tags: ["OpenEMR", "Cliniko", "ClinikEHR"],
  },
  {
    stage: "Follow-up",
    title: "Follow-ups, refills and transcription",
    desc: "Refill requests processed, dictations transcribed, follow-ups booked and the inbox kept under control.",
    tags: ["Microsoft Office", "Notion", "Trello"],
  },
] as const;

export const SHOTS: ReadonlyArray<{
  title: string;
  desc: string;
  src: StaticImageData;
  alt: string;
}> = [
  {
    title: "Encounter and SOAP note",
    desc: "Opened the visit, recorded the reason for visit and a structured SOAP note.",
    src: encounter,
    alt: "OpenEMR encounter showing a visit summary and SOAP note for a fictitious patient",
  },
  {
    title: "Vitals",
    desc: "Entered blood pressure, weight, height, temperature, pulse, BMI and oxygen saturation.",
    src: vitals,
    alt: "Vitals recorded in OpenEMR for a fictitious patient",
  },
  {
    title: "ICD-10 coding",
    desc: "Coded the visit as Z00.00 on the fee sheet and assigned the rendering provider.",
    src: icd10,
    alt: "OpenEMR fee sheet with ICD-10 code Z00.00 selected",
  },
];

export const ROLES = [
  {
    dates: "Jul 2026 → Sep 2026 · Remote",
    title: "Patient Care Coordinator",
    org: "Excel Health Med",
    points: [
      "Coordinated appointments, follow-ups and scheduling for smooth service delivery.",
      "Bridged communication between patients and healthcare professionals.",
      "Kept patient records accurate and confidential to support continuity of care.",
    ],
  },
  {
    dates: "Apr 2025 → Present · Lagos",
    title: "Registered Nurse",
    org: "Hearthstone Medical Centre",
    points: [
      "Schedules clinic appointments and maintains provider calendars for smooth patient flow.",
      "Educates patients on treatment plans, medications and discharge instructions.",
      "Introduced a shift-handover checklist that cut documentation backlog by 30%.",
    ],
  },
  {
    dates: "Mar 2024 → Mar 2025 · Lagos",
    title: "Registered Nurse",
    org: "Firstline Hospital",
    points: [
      "Documented assessments, vitals, medications and care plans in the facility's EHR.",
      "Coordinated admissions, discharges, referrals and follow-ups with multidisciplinary teams.",
      "Processed refill requests and reconciled medication lists for accuracy.",
    ],
  },
  {
    dates: "Apr 2023 → Feb 2024 · Lagos",
    title: "Registered Nurse",
    org: "BioBatam Hospital",
    points: [
      "Provided nursing care and kept accurate patient records in the hospital's EMR.",
      "Served as scrub nurse in surgical procedures, maintaining sterile technique and assisting the surgical team.",
      "Assisted with medical billing and coding for patient services.",
      "Verified patients' HMO coverage and coordinated prior authorization requests.",
    ],
  },
] as const;

export const CERT_LINKS = [
  {
    meta: "SkillUp · Coursera · Oct 2026",
    title: "EHR Fundamentals and Core Functions",
    cta: "Verify on Coursera",
    href: "https://coursera.org/verify/JCE7LQV50T9Q",
  },
  {
    meta: "Udemy · Oct 2026",
    title: "Medical Virtual Assistance Certification",
    cta: "Verify on Udemy",
    href: "https://ude.my/UC-fb08afcd-4ba1-4143-b36b-6629b251671d",
  },
  {
    meta: "ALX Africa · Oct 2024",
    title: "Virtual Assistance Skills, 10-week programme",
    cta: "Verify on ALX",
    href: "https://savanna.alxafrica.com/certificates/Fx2nzSCXrh",
  },
] as const;
