export const IPLLogo = () => (
  <svg viewBox="0 0 500 200" className="w-40 md:w-56 mx-auto">
    {/* Gradient Arc */}
    {/* <defs>
      <linearGradient id="grad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#facc15" />
        <stop offset="100%" stopColor="#ec4899" />
      </linearGradient>
    </defs> */}

    <path
      d="M50 150 Q150 10 250 150"
      stroke="url(#grad)"
      strokeWidth="8"
      fill="none"
    />

    {/* Text */}
    <text x="220" y="80" fontSize="80" fontWeight="bold" fill="#1e3a8a">
      IPL
    </text>
  </svg>
);
