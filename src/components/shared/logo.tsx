import { cn } from "@/lib/utils";

export function NailIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      aria-label="Beauty on the Go icon"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-8 h-8", className)}
    >
      <defs>
        <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{stopColor: "hsl(var(--primary))", stopOpacity:1}} />
          <stop offset="100%" style={{stopColor: "hsl(var(--accent))", stopOpacity:1}} />
        </linearGradient>
      </defs>
      <rect width="100" height="100" rx="20" fill="url(#grad1)" />
      
      <text
        x="50"
        y="62"
        fontFamily="sans-serif"
        fontSize="60"
        fontWeight="bold"
        fill="hsl(var(--primary-foreground))"
        textAnchor="middle"
        letterSpacing="-2"
      >
        B
      </text>
      
      <path
        d="M75 20 L78 28 L86 31 L78 34 L75 42 L72 34 L64 31 L72 28 Z"
        fill="hsl(var(--primary-foreground))"
        transform="rotate(15 75 31)"
      />
    </svg>
  );
}
