import { Search } from 'lucide-react';

interface PastAttemptsStepProps {
    value: string;
    onChange: (value: string) => void;
}

export default function PastAttemptsStep({ value, onChange }: PastAttemptsStepProps) {
    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold mb-2">Have you tried before?</h2>
                <p className="text-gray-400 text-sm mb-4">
                    Our Failure Pattern Agent will analyze your history to prevent past mistakes.
                </p>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">
                    Past Attempts (Optional)
                </label>
                <textarea
                    value={value}
                    onChange={(e) => onChange(e.target.value)}
                    className="w-full bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--primaryColor)] focus:ring-1 focus:ring-[var(--primaryColor)] transition-all min-h-[120px] resize-none"
                    placeholder="e.g., 'Tried going to gym 3 times, always quit after 2-3 weeks', 'Started running but got injured', 'Too busy with work'..."
                />
            </div>

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3">
                <Search className="w-5 h-5 text-[var(--primaryColor)] shrink-0 mt-0.5" />
                <p className="text-xs text-gray-400">
                    <strong>Why we ask:</strong> Our AI detects patterns in when and why people quit. This helps us design a plan that works for YOU.
                </p>
            </div>
        </div>
    );
}
