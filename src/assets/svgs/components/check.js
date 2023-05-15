import * as React from "react";
const SvgCheck = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={36}
    height={37}
    fill="none"
    {...props}
  >
    <path
      fill="#97B543"
      d="M0 6.89a6 6 0 0 1 6-6h24a6 6 0 0 1 6 6v24a6 6 0 0 1-6 6H0v-30Z"
    />
    <path
      fill="#fff"
      d="M26.41 11.188a1.96 1.96 0 0 1 2.796 2.744l-10.427 13.04a1.96 1.96 0 0 1-2.822.053L9.042 20.11a1.96 1.96 0 1 1 2.77-2.77l5.472 5.47 9.076-11.564a.712.712 0 0 1 .052-.058h-.002Z"
    />
  </svg>
);
export default SvgCheck;
