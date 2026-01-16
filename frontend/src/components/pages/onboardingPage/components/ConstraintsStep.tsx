import { useState } from 'react';
import { Zap } from 'lucide-react';

interface ConstraintsStepProps {
    constraints: string[];
    onAdd: (constraint: string) => void;
    onRemove: (constraint: string) => void;
}

export default function ConstraintsStep({ constraints, onAdd, onRemove }: ConstraintsStepProps) {
    const [localConstraint, setLocalConstraint] = useState('');

    const handleAdd = () => {
        if (localConstraint.trim()) {
            onAdd(localConstraint.trim());
            setLocalConstraint('');
        }
    };

    return (
        <div className="space-y-6">
            <div>
                <h2 className="text-2xl font-bold mb-2">What&apos;s your situation?</h2>
                <p className="text-gray-400 text-sm mb-4">
                    Help us understand your life constraints so we can create a realistic plan.
                </p>
            </div>

            <div className="space-y-2">
                <label className="text-sm font-medium text-gray-400 ml-1">
                    Add Constraints
                </label>
                <div className="flex gap-2">
                    <input
                        type="text"
                        value={localConstraint}
                        onChange={(e) => setLocalConstraint(e.target.value)}
                        onKeyPress={(e) => e.key === 'Enter' && (e.preventDefault(), handleAdd())}
                        className="flex-1 bg-black/50 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-600 focus:outline-none focus:border-[var(--primaryColor)] focus:ring-1 focus:ring-[var(--primaryColor)] transition-all"
                        placeholder="e.g., 'Busy schedule', 'No gym access', 'Knee injury'..."
                    />
                    <button
                        type="button"
                        onClick={handleAdd}
                        className="px-6 py-3 bg-white/10 text-white rounded-xl hover:bg-[var(--primaryColor)] hover:text-black transition-all"
                    >
                        Add
                    </button>
                </div>
            </div>

            {/* Constraints List */}
            {constraints.length > 0 && (
                <div className="space-y-2">
                    <label className="text-sm font-medium text-gray-400 ml-1">
                        Your Constraints
                    </label>
                    <div className="flex flex-wrap gap-2">
                        {constraints.map((constraint, index) => (
                            <div
                                key={index}
                                className="bg-white/10 border border-white/10 rounded-full px-4 py-2 flex items-center gap-2 group hover:border-red-500/50 transition-all"
                            >
                                <span className="text-sm">{constraint}</span>
                                <button
                                    onClick={() => onRemove(constraint)}
                                    className="text-gray-400 hover:text-red-500 transition-colors"
                                >
                                    ×
                                </button>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            <div className="bg-white/5 border border-white/10 rounded-xl p-4 flex items-start gap-3">
                <Zap className="w-5 h-5 text-[var(--primaryColor)] shrink-0 mt-0.5" />
                <p className="text-xs text-gray-400">
                    <strong>Examples:</strong> &quot;Work 60hrs/week&quot;, &quot;Home gym only&quot;, &quot;Shoulder injury&quot;, &quot;Single parent&quot;, &quot;Travel frequently&quot;
                </p>
            </div>
        </div>
    );
}
