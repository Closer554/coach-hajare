import type { AnchorHTMLAttributes, ButtonHTMLAttributes, ReactNode } from "react";

type Variant = "primary" | "ghost" | "outline";

type SharedProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
  ariaLabel?: string;
};

type ButtonAsButton = SharedProps &
  ButtonHTMLAttributes<HTMLButtonElement> & {
    as?: "button";
    href?: never;
  };

type ButtonAsAnchor = SharedProps &
  AnchorHTMLAttributes<HTMLAnchorElement> & {
    as: "a";
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsAnchor;

const baseClass =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-semibold transition duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[var(--accent)] focus-visible:ring-offset-2";

const variantClass: Record<Variant, string> = {
  primary:
    "bg-[var(--ink)] text-[var(--paper)] shadow-lg shadow-[rgba(31,26,23,.2)] hover:-translate-y-0.5 hover:bg-[#2f2722]",
  ghost:
    "border border-transparent bg-[rgba(201,167,125,.15)] text-[var(--ink)] hover:bg-[rgba(201,167,125,.28)]",
  outline:
    "border border-[var(--line)] bg-[var(--paper)] text-[var(--ink)] hover:border-[var(--taupe)] hover:bg-white",
};

export function Button(props: ButtonProps) {
  const { children, variant = "primary", className = "", ariaLabel, as = "button", ...rest } = props;
  const classNames = `${baseClass} ${variantClass[variant]} ${className}`;

  if (as === "a") {
    const anchorProps = rest as AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a className={classNames} aria-label={ariaLabel} {...anchorProps}>
        {children}
      </a>
    );
  }

  const buttonProps = rest as ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classNames} aria-label={ariaLabel} {...buttonProps}>
      {children}
    </button>
  );
}
