import { FiBarChart2, FiClock, FiMessageCircle, FiCheckCircle, FiUsers, FiTrendingUp, FiSettings, FiPhoneCall, FiGlobe } from "react-icons/fi";

import { IBenefit } from "@/types"
export const benefits: IBenefit[] = [
    {
        title: "Never Lose a Lead Again",
        description: "Turn every inquiry into a booked job with automated follow-ups, appointment scheduling, and lead tracking—all done for you.",
        bullets: [
            {
                title: "Automated Follow-Ups",
                description: "Keep potential clients engaged with texts & emails, even when you're on a job site.",
                icon: <FiMessageCircle size={26} />
            },
            {
                title: "Instant Lead Capture",
                description: "Automatically collect and organize leads from phone calls, website forms, and Facebook ads.",
                icon: <FiUsers size={26} />
            },
            {
                title: "Pipeline Management",
                description: "Know exactly where each job stands, from initial inquiry to final payment.",
                icon: <FiTrendingUp size={26} />
            }
        ],
        imageSrc: "/images/appoint.jpg"
    },
    {
        title: "Save Hours Every Week",
        description: "Ditch the spreadsheets and sticky notes—Flowza automates your most time-consuming tasks so you can focus on the work that pays.",
        bullets: [
            {
                title: "Automated Appointment Booking",
                description: "No more back-and-forth scheduling—clients book jobs instantly.",
                icon: <FiClock size={26} />
            },
            {
                title: "Reputation Management",
                description: "Send automated review requests to boost your Google rating and attract more customers.",
                icon: <FiCheckCircle size={26} />
            },
            {
                title: "One-Click Invoicing & Payment Reminders",
                description: "Get paid faster with automatic reminders for unpaid invoices.",
                icon: <FiSettings size={26} />
            }
        ],
        imageSrc: "/images/email2.jpg"
    },
    {
        title: "Stay on Top Without Lifting a Finger",
        description: "Flowza keeps your leads and customers engaged—so they never forget about you, and you never miss an opportunity.",
        bullets: [
            {
                title: "Website & Social Media Sync",
                description: "Leads from your website, Facebook, and ads flow directly into your CRM for easy tracking.",
                icon: <FiGlobe size={26} />
            },
            {
                title: "Smart Follow-Ups",
                description: "Send automatic reminders, follow-ups, and check-ins to keep customers engaged.",
                icon: <FiBarChart2 size={26} />
            },
            {
                title: "Ongoing Engagement",
                description: "Automated texts and emails keep your business in front of potential clients, even if they’re not ready yet.",
                icon: <FiMessageCircle size={26} />
            }
        ],
        imageSrc: "/images/ads.jpg"
    }
]
