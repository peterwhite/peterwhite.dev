export const DarkModeBackDrop = () => (
  <div className="pointer-events-none fixed inset-0 isolate -z-10 hidden opacity-20 mix-blend-color-dodge blur-2xl dark:block">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      viewBox="0 0 800 800"
      opacity="0.85"
    >
      <defs>
        <filter
          id="bbblurry-filter"
          x="-100%"
          y="-100%"
          width="400%"
          height="400%"
          filterUnits="objectBoundingBox"
          primitiveUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feGaussianBlur
            stdDeviation="115"
            x="0%"
            y="0%"
            width="100%"
            height="100%"
            in="SourceGraphic"
            edgeMode="none"
            result="blur"
          ></feGaussianBlur>
        </filter>
      </defs>
      <g filter="url(#bbblurry-filter)">
        <ellipse
          rx="166.5"
          ry="150"
          cx="647.5128466396455"
          cy="396.70954143914696"
          fill="hsl(38, 99%, 67%)"
        ></ellipse>
        <ellipse
          rx="166.5"
          ry="150"
          cx="502.73968731724773"
          cy="562.5909318895801"
          fill="hsl(316, 73%, 52%)"
        ></ellipse>
        <ellipse
          rx="166.5"
          ry="150"
          cx="182.73591358749215"
          cy="317.68164775719765"
          fill="hsl(185, 100%, 57%)"
        ></ellipse>
      </g>
    </svg>
  </div>
);
