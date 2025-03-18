import { IPricing } from "@/types";

export const tiers: IPricing[] = [
    {
        name: 'Essentials',
        price: 99,
        bestFor: 'Best for solo contractors needing basic automation',
        features: [
            'Automated Follow-Ups (Texts & Emails)',
            'CRM Setup & Customization (Flowza)',
            'Lead Tracking System',
            'Basic Reporting Dashboard',
            'Email Support',
        ],
        note: 'Seamless $500 setup & data migration – no headaches, no lost leads.',
    },
    {
        name: 'Growth',
        price: 297,
        bestFor: 'Best for growing teams who want better lead conversion & social media',
        features: [
            'Everything in Essentials',
            'Automated Appointment Booking',
            'Review & Reputation Management',
            'Custom Workflow Automations',
            'Advanced Reporting & Analytics',
            'Facebook Page Management',
            'Priority Email & Phone Support',
        ],
        note: 'Seamless $500 setup & data migration – no headaches, no lost leads.',
    },
    {
        name: 'Done-for-You',
        price: 'Custom',
        bestFor: 'Best for businesses that want full automation & ad management',
        features: [
            'Everything in Growth',
            'Live Call Answering & Lead Nurturing',
            'Ad Campaign Integration',
            'Full CRM & Pipeline Management',
            'Custom API & Software Integrations',
            'Monthly Website Updates & Maintenance',
            '24/7 Dedicated Support',
            'On-Demand Strategy Calls',
        ],
        note: 'Seamless $500 setup & data migration – no headaches, no lost leads.',
    },
];
