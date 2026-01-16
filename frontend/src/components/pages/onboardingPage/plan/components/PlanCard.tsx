import { ReactElement } from 'react';

interface PlanCardProps {
    icon: ReactElement;
    title: string;
    description: string;
}

export default function PlanCard({ icon, title, description }: PlanCardProps) {
    return (
        <div className="bg-[#111111] border border-white/10 rounded-2xl p-8 hover:bg-[#1a1a1a] transition-all duration-300 group plan-card flex flex-col items-start h-full">
            <div className="mb-6 text-gray-300 group-hover:text-[var(--primaryColor)] transition-colors">
                {icon}
            </div>
            <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
            <p className="text-gray-400 text-sm leading-relaxed">
                {description}
            </p>
        </div>
    );
}
