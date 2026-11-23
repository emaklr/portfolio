"use client";

import { useRef, useSyncExternalStore } from "react";
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

let webglSupportCache: boolean | null = null;

function subscribeToWebGLSupport() {
  return () => {};
}

function getWebGLSupportSnapshot() {
  if (webglSupportCache === null) {
    webglSupportCache = supportsWebGL();
  }

  return webglSupportCache;
}

function getServerWebGLSupportSnapshot() {
  return false;
}

export function HeroScene() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isNearViewport = useInView(containerRef, {
    margin: "180px 0px",
    amount: 0.01,
  });
  const pageIsVisible = usePageInView();
  const reducedMotion = useReducedMotion();
  const webglAvailable = useSyncExternalStore(
    subscribeToWebGLSupport,
    getWebGLSupportSnapshot,
    getServerWebGLSupportSnapshot,
  );
  const [theme] = useThemeObserver();

  const sceneEnabled = webglAvailable && isNearViewport;
  const animate = sceneEnabled && pageIsVisible && reducedMotion === false;

  return (
    <div
      ref={containerRef}
      className="hero-scene"
      data-scene-ready={sceneEnabled ? "true" : "false"}
      aria-hidden="true"
    >
      {sceneEnabled ? (
        <HeroCanvas theme={theme} animate={animate} />
      ) : (
        <div className="hero-scene-fallback" />
      )}
    </div>
  );
}

function useThemeObserver(): [Theme] {
  const themeRef = useRef<Theme>("light");
  const theme = useSyncExternalStore(
    (callback) => {
      const observer = new MutationObserver(callback);
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["data-theme"],
      });

      return () => observer.disconnect();
    },
    () => (document.documentElement.dataset.theme === "dark" ? "dark" : "light"),
    () => themeRef.current,
  );

  return [theme];
}
