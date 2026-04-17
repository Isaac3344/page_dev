import { Link } from "react-router-dom";

export default function Button({
  children,
  to,
  href,
  variant = "primary",
  className = "",
}) {
  const base =
    "inline-flex items-center justify-center rounded-2xl px-5 py-3 text-sm font-semibold transition";
  const styles = {
    primary: "bg-cyan-400 text-slate-950 hover:translate-y-[-1px]",
    secondary: "border border-white/15 bg-white/5 text-white hover:bg-white/10",
    success: "bg-emerald-500 text-white hover:bg-emerald-400",
  };

  const classes = `${base} ${styles[variant]} ${className}`;

  if (to) return <Link to={to} className={classes}>{children}</Link>;
  if (href) return <a href={href} className={classes}>{children}</a>;

  return <button className={classes}>{children}</button>;
}