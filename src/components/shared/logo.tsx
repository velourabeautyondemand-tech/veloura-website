import Image from "next/image";
import { cn } from "@/lib/utils";

export function NailIcon({ className }: { className?: string }) {
  return (
    <div className={cn("relative aspect-square overflow-hidden", className)}>
      <Image
        src="https://firebasestorage.googleapis.com/v0/b/studio-8096841563-8bcb9.firebasestorage.app/o/Veloura%20NEw%20Logo.png?alt=media&token=e5b06483-4af8-4051-a21d-704398c3966c"
        alt="VÉLOURA Logo"
        fill
        sizes="(max-width: 768px) 100vw, 33vw"
        className="object-contain"
        priority
      />
    </div>
  );
}
