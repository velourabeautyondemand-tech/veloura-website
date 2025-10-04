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
      <path d="M12 2a4.5 4.5 0 0 0-4.5 4.5v3.5h9V6.5A4.5 4.5 0 0 0 12 2Z" />
      <path d="M18 12.5c0 3.31-1.69 6-3.75 6S10.5 15.81 10.5 12.5" />
      <path d="M8.5 22.5c0-3.31 1.69-6 3.75-6s3.75 2.69 3.75 6" />
      <path d="M12 12.5h0" />
    </svg>
  );
}
