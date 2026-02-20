import { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface GlassCardProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "medium" | "strong" | "red";
  hover?: boolean;
}

const GlassCard = ({ children, className, variant = "default", hover = false }: GlassCardProps) => {
  const variants = {
    default: "glass",
    medium: "glass-medium",
    strong: "glass-strong",
    red: "glass-red",
  };

  return (
    <div
      className={cn(
        variants[variant],
        "rounded-2xl",
        hover && "service-card cursor-pointer",
        className
      )}
    >
      {children}
    </div>
  );
};

export default GlassCard;
