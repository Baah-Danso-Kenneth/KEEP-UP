"use client";

import React, {useState} from "react";
import { navLinks, secondaryLinks } from "@/lib/data";

import { useRouter } from "next/navigation";

interface MenuOverlayProps {
    overlayRef: React.RefObject<HTMLDivElement | null>;
    contentRef: React.RefObject<HTMLDivElement | null>;
    mediaWrapperRef: React.RefObject<HTMLDivElement | null>;
    setColRef: (index: number) => (el: HTMLDivElement | null) => void;
}

const MenuOverlay: React.FC<MenuOverlayProps> = ({
    overlayRef,
    contentRef,
    mediaWrapperRef,
    setColRef,
}) => {

    const router = useRouter();
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = async () => {
        router.push("/");
    };

    return (
        <div
            ref={overlayRef}
            className="fixed top-0 left-0 w-screen h-screen bg-black z-[100] overflow-hidden pointer-events-auto"
            style={{ clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)" }}
        >
            <div
                className="fixed top-0 left-0 w-screen h-[100svh] flex -translate-y-1/2 will-change-transform pointer-events-auto"
                ref={contentRef}
            >
                <div
                    className="flex-[2] opacity-0 will-change-opacity hidden lg:block"
                    ref={mediaWrapperRef}
                >
                    <img
                        src="/assets/images/bg-elite.svg"
                        alt="Media"
                        className="w-full h-full object-cover"
                    />
                </div>

                <div className="flex-[3] relative flex flex-col justify-between p-8 lg:p-12">
                    <div className="flex flex-col lg:flex-row items-start lg:items-end gap-12 lg:gap-8 mt-24 lg:mt-0 lg:absolute lg:top-1/2 lg:left-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2 w-full lg:w-3/4">
                        <div className="flex-[3] flex flex-col gap-2" ref={setColRef(0)}>
                            {navLinks.map(
                                (item) => (
                                    <div key={item.label} className="overflow-hidden">
                                        <a
                                            href={item.href}
                                            className="text-5xl lg:text-[3.5rem] font-medium leading-[1.2] hover:text-gray-400 transition-colors"
                                        >
                                            {item.label}
                                        </a>
                                    </div>
                                )
                            )}
                        </div>

                        <div className="flex-[2] flex flex-col gap-2" ref={setColRef(1)}>
                            {secondaryLinks.map((item) => (
                                <div key={item.label} className="overflow-hidden">
                                    <a
                                        href={item.href}
                                        className="text-white text-xl lg:text-2xl font-medium hover:text-gray-300 transition-colors"
                                    >
                                        {item.label}
                                    </a>
                                </div>
                            ))}
                            {isLoggedIn && (
                                <div className="overflow-hidden mt-4">
                                    <button
                                        onClick={handleLogout}
                                        className="text-red-500 text-xl lg:text-2xl font-medium hover:text-red-400 transition-colors"
                                    >
                                        Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>

                    <div className="flex flex-col lg:flex-row items-start lg:items-end gap-8 w-full lg:w-3/4 mx-auto mb-8">
                        <div className="flex-[3]" ref={setColRef(2)}>
                            <p className="text-white font-medium">Global Operations</p>
                        </div>
                        <div className="flex-[2] flex flex-col gap-1" ref={setColRef(3)}>
                            <p className="text-white font-medium">+1 800 KEEP UP</p>
                            <p className="text-white font-medium">
                                hello@keep-up.ai
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MenuOverlay;
