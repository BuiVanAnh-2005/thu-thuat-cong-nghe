"use client";
import { useEffect } from "react";
import { usePathname } from "next/navigation";

function findScrollableAncestor(el) {
  while (el && el !== document.body && el !== document.documentElement) {
    const style = window.getComputedStyle(el);
    const overflowY = style.overflowY;
    if ((overflowY === "auto" || overflowY === "scroll") && el.scrollHeight > el.clientHeight) {
      return el;
    }
    el = el.parentElement;
  }
  return document.scrollingElement || document.documentElement;
}

export default function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    try {
      console.groupCollapsed(`[ScrollToTop] pathname changed -> ${pathname}`);

      const scrollingElement = document.scrollingElement || document.documentElement;
      const namedContainer = document.querySelector(".container");
      const startEl = namedContainer || document.body;
      const scrollable = findScrollableAncestor(startEl);

      const html = document.documentElement;
      const prevBehavior = html.style.scrollBehavior;
      html.style.scrollBehavior = "auto";

      if (scrollable === document.documentElement || scrollable === document.body) {
        window.scrollTo(0, 0);
        document.documentElement.scrollTop = 0;
        document.body.scrollTop = 0;
      } else {
        try {
          scrollable.scrollTo({ top: 0, behavior: "auto" });
        } catch {
          scrollable.scrollTop = 0;
        }
      }

      setTimeout(() => {
        html.style.scrollBehavior = prevBehavior || "";
        try {
          if (scrollable === document.documentElement || scrollable === document.body) {
            window.scrollTo({ top: 0, behavior: "smooth" });
          } else {
            scrollable.scrollTo({ top: 0, behavior: "smooth" });
          }
        } catch {}
        console.groupEnd();
      }, 60);
    } catch (e) {
      console.error("[ScrollToTop] error:", e);
    }
  }, [pathname]);

  return null;
}
