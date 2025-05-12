// A simple balloon icon
export function BalloonIcon(props: React.SVGProps<SVGSVGElement>) {
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
      <path d="M12,2c-4.42,0-8,3.58-8,8c0,3.37,2.03,6.25,5,7.52V21h6v-3.48c2.97-1.27,5-4.15,5-7.52C20,5.58,16.42,2,12,2z" />
      <path d="M12,14L12,14c-2.21,0-4-1.79-4-4c0-2.21,1.79-4,4-4c2.21,0,4,1.79,4,4C16,12.21,14.21,14,12,14z" fill="currentColor" fillOpacity="0.3" />
      <path d="M12,21v2" />
    </svg>
  );
}
