import { IFAQ } from "@/types";
import { siteDetails } from "./siteDetails";

export const faqs: IFAQ[] = [
    {
        question: `How does ${siteDetails.siteName} help my business?`,
        answer: 'We set up a system that automates lead follow-ups, appointment booking, and customer communication—so you never lose a job due to slow responses.',
    },
    {
        question: `Do I need technical skills to use ${siteDetails.siteName}?`,
        answer: 'Nope! We handle everything for you. We set up the CRM, automation, and follow-up sequences so you can focus on running your business.',
    },
    {
        question: 'Can you connect this with my website and Facebook page?',
        answer: 'Yes! We integrate everything—including your website, Facebook ads, and other lead sources—so no potential customers slip through the cracks.',
    },
    {
        question: 'Will this system automatically follow up with my leads?',
        answer: 'Yes! We set up automated text, email, and voicemail follow-ups that make sure your leads get responses instantly—without you lifting a finger.',
    },
    {
        question: 'What if I need help after setup?',
        answer: 'We offer ongoing support and management, so if anything needs adjusting or improving, we handle it for you. You’ll never be stuck figuring things out alone.',
    }
];
