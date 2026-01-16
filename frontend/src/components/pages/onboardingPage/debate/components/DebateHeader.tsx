interface DebateHeaderProps {
    // No props needed for now, but keeping interface for future extensibility
}

export default function DebateHeader({ }: DebateHeaderProps) {
    return (
        <div className="space-y-6">
            <h1 className="text-6xl md:text-7xl font-black tracking-tighter text-white leading-[0.9]">
                The Council is <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[var(--primaryColor)] to-[#e6ccf5]">
                    Deliberating.
                </span>
            </h1>
            <p className="text-xl text-gray-400 max-w-2xl border-l-2 border-[var(--primaryColor)] pl-6">
                Watch as specialized AI agents debate, challenge, and refine your optimal plan in real-time.
            </p>
        </div>
    );
}
