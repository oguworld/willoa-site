"use client";

import { useEffect } from "react";

export default function ScrollBranch() {
  useEffect(() => {
    const route = document.getElementById("route");
    const fillPath = document.getElementById(
      "branchPathFill",
    ) as unknown as SVGPathElement | null;
    const driftLeaf = document.getElementById("driftLeaf");
    const svg = document.getElementById("branchSvg");
    if (!route || !fillPath || !driftLeaf || !svg) return;

    const sections = Array.from(document.querySelectorAll<HTMLElement>(".section"));
    const navLinks = Array.from(
      document.querySelectorAll<HTMLAnchorElement>(".section-nav a"),
    );

    let pathLen = 0;
    try {
      pathLen = fillPath.getTotalLength();
    } catch {
      pathLen = 2000;
    }
    fillPath.style.strokeDasharray = String(pathLen);
    fillPath.style.strokeDashoffset = String(pathLen);

    let ticking = false;

    function update() {
      if (!route || !fillPath || !driftLeaf || !svg) return;
      const rect = route.getBoundingClientRect();
      const vh = window.innerHeight;
      const trigger = vh * 0.5;
      const total = rect.height;
      const passed = trigger - rect.top;
      const pct = Math.max(0, Math.min(1, passed / total));

      fillPath.style.strokeDashoffset = String(pathLen - pathLen * pct);

      const svgHeight = svg.getBoundingClientRect().height;
      driftLeaf.style.top = `${pct * svgHeight}px`;

      let current: string | null = null;
      sections.forEach((section) => {
        const sRect = section.getBoundingClientRect();
        const isPassed = sRect.top < trigger;
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
