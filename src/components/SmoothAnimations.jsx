import { useEffect } from "react";

const revealSelector = [
  "section h1",
  "section h2",
  "section h3",
  "section h4",
  "section p",
  "section li",
  "section a",
  "section button",
  "section label",
  "section input",
  "section textarea",
  "section select",
  "section form",
  "section img",
  "footer h4",
  "footer li",
  "footer a",
  "footer p",
  "footer iframe",
].join(",");

const liftSelector = [
  ".rounded-xl",
  ".rounded-2xl",
  ".rounded-3xl",
  ".rounded-\\[3rem\\]",
  "section button",
  "footer a",
].join(",");

const SmoothAnimations = () => {
  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return undefined;
    }

    document.documentElement.classList.add("motion-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.12,
      },
    );

    const registerReveal = () => {
      const elements = Array.from(document.querySelectorAll(revealSelector));

      elements.forEach((element, index) => {
        if (element.closest("#home")) return;

        element.classList.add("reveal-motion");

        if (!element.dataset.motionRegistered) {
          element.dataset.motionRegistered = "true";
          element.style.setProperty("--reveal-delay", `${Math.min(index % 8, 7) * 55}ms`);
        }

        if (!element.classList.contains("is-visible")) {
          observer.observe(element);
        }
      });
    };

    const handlePointerDown = (event) => {
      const target = event.target.closest(".motion-lift");
      if (!target) return;

      target.classList.add("is-tapping");

      window.setTimeout(() => {
        target.classList.remove("is-tapping");
      }, 280);
    };

    const handlePointerLeave = (event) => {
      const target = event.target.closest(".motion-lift");
      if (!target) return;

      target.classList.remove("is-tapping");
    };

    const registerLift = () => {
      document.querySelectorAll(liftSelector).forEach((element) => {
        if (element.closest("#request-sample")) return;
        if (element.dataset.liftRegistered) return;

        element.dataset.liftRegistered = "true";
        element.classList.add("motion-lift");
      });
    };

    const registerAll = () => {
      registerReveal();
      registerLift();
    };

    const mutationObserver = new MutationObserver(registerAll);

    registerAll();
    document.addEventListener("pointerdown", handlePointerDown, { passive: true });
    document.addEventListener("pointerleave", handlePointerLeave, true);
    mutationObserver.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutationObserver.disconnect();
      document.removeEventListener("pointerdown", handlePointerDown);
      document.removeEventListener("pointerleave", handlePointerLeave, true);
      document.documentElement.classList.remove("motion-ready");
    };
  }, []);

  return null;
};

export default SmoothAnimations;
