import { cn } from "@/lib/utils";

import React from "react";

interface PrimaryButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "danger";
  size?: "sm" | "md" | "lg";
  isLoading?: boolean;
}

const PrimaryButton = ({
  className,
  variant = "primary",
  size = "md",
  isLoading,
  children,
  ...props
}: PrimaryButtonProps) => {

  const variants = {
    primary:
      "bg-indigo-600 text-white hover:bg-indigo-700 shadow-lg shadow-indigo-500/20",
    secondary: "bg-zinc-800 text-zinc-100 hover:bg-zinc-700",
    outline: "border border-zinc-700 text-zinc-300 hover:bg-zinc-800",
    danger: "bg-red-600 text-white hover:bg-red-700",
  };
  
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-5 py-2.5 text-base",
    lg: "px-8 py-4 text-lg font-bold",
  };

  return (
    <button
      className={cn(
        "inline-flex items-center justify-center rounded-lg transition-all active:scale-95 disabled:opacity-50 disabled:pointer-events-none",
        variants[variant],
        sizes[size],
        className,
      )}
      disabled={isLoading}
      {...props}
    >
      {isLoading ? (
        <span className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin mr-2" />
      ) : null}
      {children}
    </button>
  );
};

export default PrimaryButton;
