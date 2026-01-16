interface OnboardingHeaderProps {
    // No props needed for now
}

export default function OnboardingHeader({ }: OnboardingHeaderProps) {
    return (
        <div className="text-center mb-6">
            <h1 className="text-4xl md:text-5xl font-[var(--font-sfBold)] tracking-tight mb-2">
                Join the Council
            </h1>
            <p className="text-gray-400 text-base">
                Your AI agents are ready to create your personalized plan
            </p>
        </div>
    );
}
