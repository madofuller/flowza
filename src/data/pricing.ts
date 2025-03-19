import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Essentials',
        price: 99,
        bestFor: 'Best for solo contractors needing basic automation',
        features: [
            'Automated Email Follow-Ups',
            'CRM Setup & Customization',
            'Lead Tracking System',
            'Basic Reporting Dashboard',
            'Automated Appointment Booking',
            'Email Support',
        ],
        note: 'Seamless $500 setup & data migration – no headaches, no lost leads.',
    },
    {
        name: 'Growth',
        price: 297,
        bestFor: 'Best for growing teams who want better lead conversion & online presence',
        features: [
            'Everything in Essentials',
            'SMS Follow-Ups & Google Business Messaging',
            'Review & Reputation Management',
            'Custom Workflow Automations',
            'Advanced Reporting & Analytics',
            'Facebook Page Management',
            'Priority Email & Phone Support',
            'Basic Website Creation (Up to 5 Pages)', // ✅ NEW
        ],
        note: 'Seamless $500 setup & data migration – no headaches, no lost leads.',
    },
    {
        name: 'Done-for-You',
        price: 997,
        bestFor: 'Best for businesses that want full automation & a completely managed system',
        features: [
            'Everything in Growth',
            'We Answer Calls & Follow-Up for You',
            'Ad Campaign Integration (Google & Facebook)',
            'Full CRM & Pipeline Management',
            'Custom API & Software Integrations',
            'Monthly Website Updates & Maintenance',
            '24/7 Dedicated Support',
            'On-Demand Strategy Calls',
            'Custom Website Build & Management',
        ],
        note: 'Seamless $500 setup & data migration – no headaches, no lost leads.',
    },
];
