"use client";

import { useEffect, useRef } from "react";

export function BackgroundVideo({ src }: { src: string }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;
    const savedTime = sessionStorage.getItem("hero-video-time");
    if (savedTime) {
      video.currentTime = parseFloat(savedTime);
    }
    const handleUnmount = () => {
      sessionStorage.setItem("hero-video-time", video.currentTime.toString());
    };
    window.addEventListener("beforeunload", handleUnmount);
    return () => {
      handleUnmount();
      window.removeEventListener("beforeunload", handleUnmount);
    };
  }, []);
  return (
    <video
      ref={videoRef}
      autoPlay
      loop
      muted
      playsInline
      className="absolute inset-0 h-full w-full object-cover opacity-60"
    >
      <source src={src} type="video/mp4" />
    </video>
  );
}