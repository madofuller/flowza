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
        imageSrc: "/images/mockup-1.webp"
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
        imageSrc: "/images/mockup-2.webp"
    },
    {
        title: "Your Business, Fully Connected",
        description: "From calls and texts to social media and your website, Flowza keeps everything in sync so you never miss an opportunity.",
        bullets: [
            {
                title: "Call Tracking & Recording",
                description: "Log every customer call automatically so you never lose important details.",
                icon: <FiPhoneCall size={26} />
            },
            {
                title: "Facebook & Website Integration",
                description: "Leads from social media and your website flow directly into your CRM.",
                icon: <FiGlobe size={26} />
            },
            {
                title: "24/7 Lead Nurturing",
                description: "Stay top-of-mind with automated check-ins and personalized follow-ups.",
                icon: <FiBarChart2 size={26} />
            }
        ],
        imageSrc: "/images/mockup-1.webp"
    },
]
