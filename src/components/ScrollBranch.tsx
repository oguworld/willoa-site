"use client";

import { useEffect } from "react";

export default function ScrollBranch() {
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>(".section"));
    const navLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(".section-nav a"),
    );
    if (sections.length === 0) return;

    let ticking = false;

    function update() {
      const trigger = window.innerHeight * 0.5;
      let current: string | null = null;
      sections.forEach((section) => {
        const isPassed = section.getBoundingClientRect().top < trigger;
        section.classList.toggle("is-active", isPassed);
        if (isPassed) current = section.id;
      });
      navLinks.forEach((link) => {
        link.classList.toggle("active", link.dataset.target === current);
      });
    }

    function onScroll() {
      if (!ticking) {
        requestAnimationFrame(() => {
          update();
          ticking = false;
        });
        ticking = true;
      }
    }

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", update);
    update();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", update);
    };
  }, []);

  return null;
}
