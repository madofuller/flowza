import { BsCheckCircleFill, BsPeopleFill } from "react-icons/bs";
import { FiTrendingUp } from "react-icons/fi";

import { IStats } from "@/types";

export const stats: IStats[] = [
    {
        title: "10K+",
        icon: <BsCheckCircleFill size={34} className="text-blue-500" />,
        description: "Leads followed up automatically, helping businesses close more jobs."
    },
    {
        title: "5.0",
        icon: <BsPeopleFill size={34} className="text-yellow-500" />,
        description: "Star rating from satisfied business owners who love Flowza’s automation."
    },
    {
        title: "300+",
        icon: <FiTrendingUp size={34} className="text-green-600" />,
        description: "Businesses growing faster by automating follow-ups & lead tracking."
    }
];
