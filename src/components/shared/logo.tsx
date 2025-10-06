
import { cn } from "@/lib/utils";

export function NailIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      aria-label="VÉLOURA icon"
      viewBox="0 0 100 100"
      xmlns="http://www.w3.org/2000/svg"
      className={cn("w-8 h-8", className)}
    >
      <rect width="100" height="100" rx="20" fill="hsl(var(--primary))" />
      
      <text
        x="50"
        y="70"
        fontFamily="serif"
        fontSize="60"
        fontWeight="bold"
        fill="hsl(var(--primary-foreground))"
        textAnchor="middle"
        letterSpacing="-2"
      >
        V
      </text>
    </svg>
  );
}
