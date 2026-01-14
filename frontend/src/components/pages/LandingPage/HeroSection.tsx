import React from 'react';
function HeroSection() {
    return (
        <section className="relative w-full h-screen flex items-center overflow-hidden bg-[var(--bg)] transition-colors duration-300">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 z-0 bg-cover bg-center bg-no-repeat opacity-60 transition-all duration-500 dark:filter-none invert"
                style={{ backgroundImage: "url('/assets/images/web-bg-3.svg')" }}
            />
            <div className="absolute inset-0 z-[1] bg-gradient-to-r from-[var(--bg)] via-[var(--bg)]/40 to-transparent transition-colors duration-300" />

            {/* Content */}
            <div className="relative z-10 max-w-7xl mx-auto px-8 lg:px-16 w-full pt-64">
                <div className="max-w-4xl">
                    <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] mb-8 text-[var(--fg)] transition-colors duration-300">
                        The ultimate platform <br />
                        <span className="text-[var(--fg)]/90">for your optimal self.</span>
                    </h1>

                    <p className="text-lg md:text-xl text-[var(--fg)]/70 max-w-xl mb-12 leading-relaxed font-medium transition-colors duration-300">
                        Unlock your potential with AI-driven insights, personalized wellness plans,
                        and a community dedicated to growth. Everywhere you grow.
                    </p>

                    <button className="group flex items-center gap-4 bg-[var(--fg)] text-[var(--bg)] px-8 py-3 rounded-full font-bold text-lg hover:opacity-90 transition-all duration-300">
                        Get started
                        <div className="bg-[var(--bg)] rounded-full p-2 group-hover:translate-x-1 transition-transform duration-300 flex items-center justify-center">
                            <svg
                                width="16"
                                height="16"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="3"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                className="text-[var(--fg)]"
                            >
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </div>
                    </button>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;