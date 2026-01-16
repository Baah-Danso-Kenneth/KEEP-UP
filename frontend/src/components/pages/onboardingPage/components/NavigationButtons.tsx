import ArrowButton from '@/components/common/ArrowButton';

interface NavigationButtonsProps {
    currentStep: number;
    isLoading: boolean;
    isNextDisabled: boolean;
    onBack: () => void;
    onNext: () => void;
}

export default function NavigationButtons({
    currentStep,
    isLoading,
    isNextDisabled,
    onBack,
    onNext
}: NavigationButtonsProps) {
    return (
        <div className="flex justify-between mt-6 pt-4 border-t border-white/10">
            <button
                onClick={onBack}
                disabled={currentStep === 1}
                className="px-6 py-2 text-gray-400 hover:text-white transition-colors disabled:opacity-0 disabled:cursor-not-allowed text-sm"
            >
                ← Back
            </button>

            <ArrowButton
                onClick={onNext}
                disabled={isNextDisabled}
                isLoading={isLoading}
                text={currentStep === 4 ? 'Start Debate' : 'Next'}
                className="bg-[var(--primaryColor)] hover:bg-[var(--tertiaryColorTwo)] text-black border-none py-2 px-6 text-base"
            />
        </div>
    );
}
