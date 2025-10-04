import { cn } from "@/lib/utils";

export function NailIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      aria-label="Nail polish icon"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-8 h-8", className)}
    >
      <rect width="100" height="100" rx="20" fill="#E57399" />

      <g transform="translate(10, 10) rotate(15, 50, 50) scale(0.9)">
        <path d="M 30 90 L 30 70 C 30 60, 20 50, 40 40 L 80 40" stroke="#FFC107" strokeWidth="12" fill="none" strokeLinecap="round" />
        <path d="M 45 90 L 45 70 C 45 60, 40 50, 55 45 L 80 45" stroke="#FFC107" strokeWidth="12" fill="none" strokeLinecap="round" />
        <path d="M 60 90 L 60 70 C 60 60, 60 50, 70 50 L 85 50" stroke="#FFC107" strokeWidth="12" fill="none" strokeLinecap="round" />

        <path d="M 30 70 C 30 60, 20 50, 40 40 L 43 40 C 35 50, 39 60, 39 70 Z" fill="#9C27B0" />
        <path d="M 45 70 C 45 60, 40 50, 55 45 L 58 45 C 50 55, 54 60, 54 70 Z" fill="#9C27B0" />
        <path d="M 60 70 C 60 60, 60 50, 70 50 L 73 50 C 65 60, 69 60, 69 70 Z" fill="#9C27B0" />
        
        <g transform="translate(65, 20) rotate(20)">
            <rect x="-2" y="8" width="4" height="10" fill="#333" rx="1"/>
            <rect x="-4" y="0" width="8" height="8" fill="#555" rx="2"/>
            <path d="M -3 18 L 3 18 L 0 24 Z" fill="#9C27B0" />
        </g>
      </g>
    </svg>
  );
}
