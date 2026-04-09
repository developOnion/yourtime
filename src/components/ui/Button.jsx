import { getButtonClasses } from "./buttonStyles";

export default function Button({
  variant = "primary",
  className = "",
  children,
  ...props
}) {
  const classes = getButtonClasses(variant, className);

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
