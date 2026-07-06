import Image from "next/image";
import { cn } from "@/lib/utils";

type CrescentLogoProps = {
  containerClassName?: string;
  className?: string;
  priority?: boolean;
};

export default function CrescentLogo({
  containerClassName,
  className,
  priority = false,
}: CrescentLogoProps) {
  return (
    <div className={cn("relative overflow-hidden", containerClassName)}>
      <Image
        src="/Logo.png"
        alt="Crescent Tracking Logo"
        fill
        sizes="160px"
        priority={priority}
        className={cn("object-contain dark:hidden", className)}
      />
      <Image
        src="/Logo-dark.png"
        alt="Crescent Tracking Logo"
        fill
        sizes="160px"
        priority={priority}
        className={cn("object-contain hidden dark:block", className)}
      />
    </div>
  );
}
