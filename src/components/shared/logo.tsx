import { cn } from "@/lib/utils";

export function NailIcon({ className }: { className?: string }) {
  return (
    <svg
      role="img"
      aria-label="Nail polish icon"
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={cn("w-6 h-6", className)}
    >
      <path d="M8.5 20.5 4 16" />
      <path d="M6.5 12.5c0-5 5-7 7-7s7 2 7 7c0 5-5 7-7 7" />
      <path d="m14 12-2 2" />
    </svg>
  );
}