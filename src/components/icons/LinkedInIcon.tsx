interface LinkedInIconProps {
  className?: string;
}

export default function LinkedInIcon({
  className,
}: LinkedInIconProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      aria-hidden="true"
    >
      <path d="M4.98 3.5C4.98 4.88 3.86 6 2.48 6S0 4.88 0 3.5 1.12 1 2.48 1s2.5 1.12 2.5 2.5zM0 8h5v16H0V8zm7.5 0h4.79v2.19h.07c.67-1.27 2.3-2.61 4.74-2.61 5.07 0 6 3.34 6 7.68V24h-5v-7.13c0-1.7-.03-3.89-2.37-3.89-2.38 0-2.75 1.85-2.75 3.77V24h-5V8z" />
    </svg>
  );
}