import React from 'react'

const CardEmpty = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="45"
      height="45"
      viewBox="0 0 120 80"
    >
      <g fill="none" fillRule="evenodd">
        <path
          fill="#E0E0E3"
          d="M4 0h112a4 4 0 0 1 4 4v72a4 4 0 0 1-4 4H4a4 4 0 0 1-4-4V4a4 4 0 0 1 4-4z"
        />
        <path
          fill="#C6C6CB"
          d="M16 19h19a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H16a2 2 0 0 1-2-2V21a2 2 0 0 1 2-2z"
        />
        <path
          fill="#FFF"
          d="M94 0h22c2.213 0 4 1.788 4 3.995v72.01A3.993 3.993 0 0 1 116.003 80H27C79 53 88.999 3.864 88.999 3.864 89.582 1.737 91.79 0 93.999 0z"
          opacity=".2"
        />
        <rect width="20" height="7" x="14" y="56" fill="#A1A1A6" rx="3.5" />
        <rect width="20" height="7" x="38" y="56" fill="#A1A1A6" rx="3.5" />
        <rect width="20" height="7" x="62" y="56" fill="#A1A1A6" rx="3.5" />
        <rect width="20" height="7" x="86" y="56" fill="#A1A1A6" rx="3.5" />
      </g>
    </svg>
  )
}

export default CardEmpty
