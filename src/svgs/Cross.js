import React from "react";

export default function Cross(props) {
  const size = props.size || 100;
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 140 134"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M135 5L5 129M5 5L128 129"
        stroke="black"
        strokeWidth="10"
        strokeLinecap="round"
      />
    </svg>
  );
}
