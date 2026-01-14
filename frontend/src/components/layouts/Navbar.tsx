"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { CustomEase } from "gsap/CustomEase";
import SplitType from "split-type";
import Lenis from "lenis";
import HamburgerIcon from "./HamburgerIcon";
import MenuOverlay from "./MenuOverlay";
import Link from "next/link";
import ThemeSwitcher from "../ThemeSwitcher";



interface ReactNavProps {
  containerRef: React.RefObject<HTMLDivElement | null>;
}

const ReactNav: React.FC<ReactNavProps> = ({ containerRef }) => {
  const menuOverlayRef = useRef<HTMLDivElement>(null);
  const menuOverlayContentRef = useRef<HTMLDivElement>(null);
  const menuMediaWrapperRef = useRef<HTMLDivElement>(null);
  const menuToggleLabelRef = useRef<HTMLParagraphElement>(null);
  const hamburgerIconRef = useRef<HTMLDivElement>(null);
  const menuColsRef = useRef<(HTMLDivElement | null)[]>([]);

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false)
  const lenisRef = useRef<Lenis | null>(null);
  const splitTextByContainerRef = useRef<SplitType[][]>([]);

  useEffect(() => {
    gsap.registerPlugin(CustomEase);
    CustomEase.create("hop", ".87, 0, .13, 1");

    const lenis = new Lenis();
    lenisRef.current = lenis;

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);

    // Initialize SplitType
    const splitTexts: SplitType[][] = [];
    menuColsRef.current.forEach((container) => {
      if (container) {
        const textElements = container.querySelectorAll("a, p");
        const containerSplits: SplitType[] = [];
        textElements.forEach((element) => {
          const split = new SplitType(element as HTMLElement, {
            types: "lines",
            lineClass: "line",
          });
          containerSplits.push(split);
          gsap.set(split.lines, { y: "-110%" });
        });
        splitTexts.push(containerSplits);
      }
    });
    splitTextByContainerRef.current = splitTexts;

    return () => {
      lenis.destroy();
    };
  }, []);

  const toggleMenu = () => {
    if (isAnimating) return;

    const tl = gsap.timeline();

    if (!isMenuOpen) {
      setIsAnimating(true);
      lenisRef.current?.stop();
      document.body.style.overflow = "hidden";

      tl.to(menuToggleLabelRef.current, {
        y: "-110%",
        duration: 1,
        ease: "hop",
      });

      if (containerRef.current) {
        tl.to(
          containerRef.current,
          {
            y: "100svh",
            duration: 1,
            ease: "hop",
          },
          "<"
        );
      }

      tl.to(
        menuOverlayRef.current,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          duration: 1,
          ease: "hop",
        },
        "<"
      )
        .to(
          menuOverlayContentRef.current,
          {
            yPercent: 0,
            duration: 1,
            ease: "hop",
          },
          "<"
        )
        .to(
          menuMediaWrapperRef.current,
          {
            opacity: 1,
            duration: 0.75,
            ease: "power2.out",
            delay: 0.5,
          },
          "<"
        );

      splitTextByContainerRef.current.forEach((containerSplits) => {
        const copyLines = containerSplits.flatMap((split) => split.lines);
        tl.to(
          copyLines,
          {
            y: "0%",
            duration: 2,
            ease: "hop",
            stagger: -0.075,
          },
          -0.15
        );
      });

      tl.call(() => {
        setIsAnimating(false);
        setIsMenuOpen(true);
      });
    } else {
      setIsAnimating(true);

      if (containerRef.current) {
        tl.to(containerRef.current, {
          y: "0svh",
          duration: 1,
          ease: "hop",
        });
      }

      tl.to(
        menuOverlayRef.current,
        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 0%, 0% 0%)",
          duration: 1,
          ease: "hop",
        },
        "<"
      )
        .to(
          menuOverlayContentRef.current,
          {
            yPercent: -50,
            duration: 1,
            ease: "hop",
          },
          "<"
        )
        .to(
          menuToggleLabelRef.current,
          {
            y: "0%",
            duration: 1,
            ease: "hop",
          },
          "<"
        )
        .to(
          menuColsRef.current,
          {
            opacity: 0.25,
            duration: 1,
            ease: "hop",
          },
          "<"
        );

      tl.call(() => {
        splitTextByContainerRef.current.forEach((containerSplits) => {
          const copyLines = containerSplits.flatMap((split) => split.lines);
          gsap.set(copyLines, { y: "-110%" });
        });

        gsap.set(menuColsRef.current, { opacity: 1 });
        gsap.set(menuMediaWrapperRef.current, { opacity: 0 });

        setIsAnimating(false);
        setIsMenuOpen(false);
        lenisRef.current?.start();
        document.body.style.overflow = "";
      });
    }
  };

  const setColRef = (index: number) => (el: HTMLDivElement | null) => {
    menuColsRef.current[index] = el;
  };

  return (
    <nav className="fixed top-0 w-screen h-[100svh] pointer-events-none overflow-hidden z-[100] font-[family-name:var(--font-ppMontreal)]">
      <div className="fixed top-0 left-0 w-screen p-8 flex justify-between items-center pointer-events-auto text-[var(--fg)] z-[110] transition-colors duration-300">
        <div className="w-42 h-0 flex items-center">
          <Link href="/">
            <img
              src="/assets/images/keep-up-fixed.svg"
              alt="Keep Up Logo"
              className="h-full w-auto object-contain nav-logo transition-all duration-300"
            />
          </Link>


        </div>

        <div className="flex items-center gap-4">
          <ThemeSwitcher />

          {!isLoggedIn && (
            <div className="flex items-center gap-4">
              <Link
                href="/login"
                className="text-sm font-medium hover:text-gray-300 transition-colors"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="px-6 py-2 bg-white text-black rounded-full text-sm font-semibold hover:bg-gray-200 transition-all duration-300 shadow-[0_0_20px_rgba(255,255,255,0.1)]"
              >
                Join
              </Link>
            </div>
          )}

          {isLoggedIn && (
            <div className="flex items-center gap-4 cursor-pointer">
              <div className="flex items-center gap-4" onClick={toggleMenu}>
                <div className="overflow-hidden">
                  <p ref={menuToggleLabelRef} className="relative translate-y-0 will-change-transform font-medium">
                    Menu
                  </p>
                </div>

                <HamburgerIcon
                  isActive={isMenuOpen}
                  onClick={toggleMenu}
                  ref={hamburgerIconRef}
                />
              </div>
            </div>
          )}
        </div>
      </div>

      <MenuOverlay
        overlayRef={menuOverlayRef}
        contentRef={menuOverlayContentRef}
        mediaWrapperRef={menuMediaWrapperRef}
        setColRef={setColRef}
      />
    </nav >
  );
};

export default ReactNav;
