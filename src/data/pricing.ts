import { IPricing } from "@/types";

export const tiers: IPricing[] = [
  {
    name: "Essentials",
    price: 99,
    bestFor: "Best for solo contractors needing basic automation",
    features: [
      "One-Page Website (Mobile-Optimized)",
      "CRM Setup & Customization",
      "Automated Email Follow-Ups",
      "Lead Tracking System",
      "Automated Appointment Booking",
      "Basic Reporting Dashboard",
      "Email Support",
    ],
  },
  {
    name: "Growth",
    price: 297,
    bestFor: "Best for growing teams who want better lead conversion & online presence",
    features: [
      "Everything in Essentials",
      "Website Build (Up to 5 Pages)",
      "SMS & Email Follow-Ups",
      "Review & Reputation Management",
      "Custom Workflow Automations",
      "Advanced Reporting & Analytics",
      "Facebook Page Management",
      "Priority Email & Phone Support",
    ],
  },
  {
    name: "Done-for-You",
    price: 997,
    bestFor: "Best for businesses that want full automation & a completely managed system",
    features: [
      "Everything in Growth",
      "Website Build (You name it, we build it)",
      "We Answer Calls & Follow-Up for You",
      "Ad Campaigns (Google & Facebook)",
      "Full CRM & Pipeline Management",
      "Custom API & Software Integrations",
      "Monthly Website Updates & Maintenance",
      "24/7 Dedicated Support",
      "On-Demand Strategy Calls",
    ],
  },
];
