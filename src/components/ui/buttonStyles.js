import { clsx } from "clsx";

export const baseButtonStyles =
  "tracking-widest uppercase transition-all duration-300 inline-flex items-center justify-center text-center";

export const buttonVariants = {
  primary:
    "px-12 py-4 bg-primary text-secondary text-sm hover:bg-accent hover:text-white disabled:opacity-70 disabled:hover:bg-primary cursor-pointer",
  secondary:
    "px-10 py-4 bg-secondary text-primary text-xs font-semibold hover:bg-accent hover:text-white shadow-xl duration-500 cursor-pointer",
  outline:
    "px-8 py-4 border border-primary text-xs hover:bg-primary hover:text-secondary cursor-pointer",
  text: "text-sm border-b border-primary/20 pb-1 hover:border-accent cursor-pointer",
};

export function getButtonClasses(variant = "primary", className = "") {
  return clsx(baseButtonStyles, buttonVariants[variant] || buttonVariants.primary, className);
}
