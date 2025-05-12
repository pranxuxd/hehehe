// A simple flower icon
export function FlowerIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <circle cx="12" cy="12" r="3" fill="currentColor" fillOpacity="0.3" />
      <path d="M12 9a3 3 0 0 0 0-6 3 3 0 0 0 0 6z" />
      <path d="M12 15a3 3 0 0 0 0 6 3 3 0 0 0 0-6z" />
      <path d="M6 12a3 3 0 0 0-6 0 3 3 0 0 0 6 0z" />
      <path d="M18 12a3 3 0 0 0 6 0 3 3 0 0 0-6 0z" />
      <path d="M6.75 6.75a3 3 0 0 0-4.25 4.25 3 3 0 0 0 4.25-4.25z" />
      <path d="M17.25 6.75a3 3 0 0 0 4.25 4.25 3 3 0 0 0-4.25-4.25z" />
      <path d="M6.75 17.25a3 3 0 0 0-4.25-4.25 3 3 0 0 0 4.25 4.25z" />
      <path d="M17.25 17.25a3 3 0 0 0 4.25-4.25 3 3 0 0 0-4.25 4.25z" />
    </svg>
  );
}
