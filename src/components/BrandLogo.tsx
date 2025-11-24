import React from "react";
import { cn } from "@/lib/utils";

interface BrandLogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

/**
 * BrandLogo Component
 * 
 * Combina l'icona Legis (frecce stilizzate) con il testo "legis" in minuscolo.
 * Usa currentColor per controllare il colore via CSS.
 * 
 * Layout: Icona a sinistra, testo a destra, allineati verticalmente.
 */
export const BrandLogo: React.FC<BrandLogoProps> = ({ className, ...props }) => {
  return (
    <svg
      viewBox="0 0 140 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-auto h-auto", className)}
      preserveAspectRatio="xMidYMid meet"
      {...props}
    >
      {/* Icona - Pattern di frecce stilizzate a sinistra */}
      <g id="icon" fill="currentColor">
        {/* Pattern principale basato sui path essenziali estratti */}
        <path
          d="M8 12 L16 8 L16 14 L22 14 L22 4 L26 4 L26 14 L32 14 L32 8 L40 12 L32 16 L32 20 L26 20 L26 28 L22 28 L22 20 L16 20 L16 16 Z"
          fill="currentColor"
        />
        {/* Pattern secondario */}
        <path
          d="M10 28 L18 24 L18 26 L24 26 L24 34 L28 34 L28 26 L34 26 L34 24 L42 28 L34 32 L34 30 L28 30 L28 38 L24 38 L24 30 L18 30 L18 32 Z"
          fill="currentColor"
          opacity="0.75"
        />
      </g>

      {/* Testo "legis" in minuscolo a destra */}
      <g id="text">
        <text
          x="56"
          y="32"
          fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif"
          fontSize="32"
          fontWeight="600"
          fill="currentColor"
          letterSpacing="-0.01em"
        >
          legis
        </text>
      </g>
    </svg>
  );
};

