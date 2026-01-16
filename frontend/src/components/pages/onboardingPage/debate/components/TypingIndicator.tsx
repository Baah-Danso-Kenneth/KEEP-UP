import { Sparkles } from 'lucide-react';

export default function TypingIndicator() {
    return (
        <div className="p-8 border-b border-r border-white/10 bg-black/40 flex flex-col justify-between min-h-[300px] animate-pulse">
            <Sparkles className="w-6 h-6 text-gray-600 animate-spin-slow" />
            <div className="space-y-2">
                <div className="h-4 w-24 bg-white/5 rounded"></div>
                <div className="h-3 w-16 bg-white/5 rounded"></div>
            </div>
        </div>
    );
}
