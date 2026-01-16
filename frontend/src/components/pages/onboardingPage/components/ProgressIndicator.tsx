interface ProgressIndicatorProps {
    currentStep: number;
}

const stepLabels = ['Goal', 'History', 'Constraints', 'Occupation'];

export default function ProgressIndicator({ currentStep }: ProgressIndicatorProps) {
    return (
        <div className="flex justify-center mb-8">
            {[1, 2, 3, 4].map((step) => (
                <div key={step} className="flex items-center relative">
                    <div className="flex flex-col items-center absolute -top-6 left-1/2 -translate-x-1/2 w-32">
                        <span className={`text-[10px] font-medium transition-colors duration-300 ${currentStep === step ? 'text-[var(--primaryColor)]' : 'text-transparent'}`}>
                            {stepLabels[step - 1]}
                        </span>
                    </div>
                    <div
                        className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold transition-all duration-500 border-2 ${currentStep >= step
                            ? 'bg-[var(--primaryColor)] border-[var(--primaryColor)] text-black shadow-[0_0_15px_rgba(201,252,110,0.3)]'
                            : 'bg-transparent border-white/20 text-gray-500'
                            }`}
                    >
                        {step}
                    </div>
                    {step < 4 && (
                        <div
                            className={`w-8 md:w-16 h-0.5 mx-1 transition-all duration-500 ${currentStep > step ? 'bg-[var(--primaryColor)]' : 'bg-white/10'
                                }`}
                        />
                    )}
                </div>
            ))}
        </div>
    );
}
