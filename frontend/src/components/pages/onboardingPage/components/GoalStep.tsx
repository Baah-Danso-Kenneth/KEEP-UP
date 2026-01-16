import { Lightbulb } from 'lucide-react';

interface GoalStepProps {
    value: string;
    onChange: (value: string) => void;
}

export default function GoalStep({ value, onChange }: GoalStepProps) {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold mb-2">What&apos;s your goal?</h2>
                <p className="text-gray-400 text-sm mb-4">
                    Tell us what you want to achieve. Be as specific or vague as you like - our AI will figure it out.
                </p>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">
                    Your Goal
                </label>
                <textarea
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--primaryColor)] focus:ring-1 focus:ring-[var(--primaryColor)] transition-all min-h-[120px] resize-none"
                    placeholder="e.g., 'I want to get fit', 'Lose 20 lbs', 'Run a marathon', 'Build muscle'..."
                    required
                />
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3">
                <Lightbulb className="w-5 h-5 text-[var(--primaryColor)] shrink-0 mt-0.5" />
                <p className="text-xs text-gray-400">
                    <strong>Tip:</strong> The more context you provide, the better your AI agents can help. But don&apos;t worry - they&apos;ll ask questions if needed.
                </p>
            </div>
        </div>
    );
}
