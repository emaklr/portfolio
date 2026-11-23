"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, usePageInView, useReducedMotion } from "motion/react";
import dynamic from "next/dynamic";

const HeroCanvas = dynamic(() => import("@/components/hero-canvas"), {
  ssr: false,
  loading: () => null,
});

type Theme = "light" | "dark";

function supportsWebGL() {
  try {
    const canvas = document.createElement("canvas");
    const context =
      canvas.getContext("webgl2", { powerPreference: "low-power" }) ??
      canvas.getContext("webgl", { powerPreference: "low-power" });

    const supported = Boolean(context);
    context?.getExtension("WEBGL_lose_context")?.loseContext();
    return supported;
  } catch {
    return false;
  }
}

export function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isNearViewport = useInView(containerRef, {
    margin: "180px 0px",
    amount: 0.01,
  });
  const pageIsVisible = usePageInView();
  const reducedMotion = useReducedMotion();
  const [theme, setTheme] = useState<Theme>("light");
  const [webglAvailable, setWebglAvailable] = useState(false);
  const [checked, setChecked] = useState(false);

  useEffect(() => {
    const root = document.documentElement;

    const readTheme = () => {
      setTheme(root.dataset.theme === "dark" ? "dark" : "light");
    };

    readTheme();

    const observer = new MutationObserver(readTheme);
    observer.observe(root, {
      attributes: true,
      attributeFilter: ["data-theme"],
    });

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const supported = supportsWebGL();
    setWebglAvailable(supported);
    setChecked(true);
  }, []);

  const sceneEnabled =
    checked &&
    webglAvailable &&
    reducedMotion === false &&
    isNearViewport;

  return (
    <div
      ref={containerRef}
      className="hero-scene"
      data-scene-ready={sceneEnabled ? "true" : "false"}
      aria-hidden="true"
    >
      {sceneEnabled ? (
        <HeroCanvas theme={theme} active={pageIsVisible} />
      ) : (
        <div className="hero-scene-fallback" />
      )}
    </div>
  );
}
