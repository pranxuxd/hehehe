// A simple birthday cake icon
export function BirthdayCakeIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M20 21v-8a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v8" />
      <path d="M4 16h16" />
      <path d="M4 11h16" />
      <path d="M12 3a1.5 1.5 0 1 0 0 3 1.5 1.5 0 1 0 0-3z" />
      <path d="M8 7a1 1 0 1 0 0 2 1 1 0 1 0 0-2z" />
      <path d="M16 7a1 1 0 1 0 0 2 1 1 0 1 0 0-2z" />
      <path d="M7 11v3" />
      <path d="M12 11v3" />
      <path d="M17 11v3" />
    </svg>
  );
}
