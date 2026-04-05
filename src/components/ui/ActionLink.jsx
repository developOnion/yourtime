import { Link } from "react-router-dom";
import { getButtonClasses } from "./buttonStyles";

export default function ActionLink({
  variant = "primary",
  className = "",
  to,
  children,
  ...props
}) {
  const classes = getButtonClasses(variant, className);

  return (
    <Link to={to} className={classes} {...props}>
      {children}
    </Link>
  );
}
