type DoodleProps = {
  className?: string;
};

export function StarDoodle({ className = "" }: DoodleProps) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      viewBox="0 0 80 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M40 8v24M40 48v24M8 40h24M48 40h24M18 18l17 17M45 45l17 17M62 18L45 35M35 45L18 62"
        stroke="var(--taupe)"
        strokeWidth="2"
        strokeLinecap="round"
      />
      <circle cx="40" cy="40" r="3" fill="var(--accent)" />
    </svg>
  );
}

export function RingDoodle({ className = "" }: DoodleProps) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      viewBox="0 0 140 140"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <circle cx="70" cy="70" r="58" stroke="var(--taupe)" strokeDasharray="4 8" />
      <circle cx="70" cy="70" r="38" stroke="var(--line)" />
    </svg>
  );
}

export function Scribble({ className = "" }: DoodleProps) {
  return (
    <svg
      className={className}
      aria-hidden="true"
      viewBox="0 0 220 80"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 39.5C18.5 31 34 22.8 53 22.8C80 22.8 86 54.8 114 54.8C138 54.8 149 26 176 26C190 26 201 29 216 38.5"
        stroke="var(--taupe)"
        strokeWidth="2"
        strokeLinecap="round"
      />
    </svg>
  );
}

type OrganicDividerProps = {
  flip?: boolean;
};

export function OrganicDivider({ flip = false }: OrganicDividerProps) {
  return (
    <div className={flip ? "rotate-180 opacity-80" : "opacity-80"} aria-hidden="true">
      <svg
        viewBox="0 0 1440 132"
        className="h-12 w-full sm:h-16"
        preserveAspectRatio="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 36C148 10 280 0 436 20C595 40 717 90 878 90C1044 90 1209 36 1440 0V132H0V36Z"
          fill="var(--sand)"
          fillOpacity="0.45"
        />
      </svg>
    </div>
  );
}
