import * as React from 'react'

interface Props {
  fill: string
  stroke: string
}

export const LiteCheck = (props: Props) => {
  const { fill, stroke } = props

  return (
    <svg
      id="Icon_check"
      xmlns="http://www.w3.org/2000/svg"
      width="46"
      height="46"
      viewBox="0 0 46 46"
    >
      <g
        id="Elipse_194"
        data-name="Elipse 194"
        fill="none"
        stroke="#009e4f"
        strokeWidth="1"
      >
        <circle cx="23" cy="23" r="23" stroke="none" />
        <circle cx="23" cy="23" r="22.5" fill="none" />
      </g>
      <path
        id="Trazado_5965"
        data-name="Trazado 5965"
        d="M10.1,24.9a.6.6,0,0,1-.408-.16L4.8,20.15a.6.6,0,1,1,.815-.869l4.479,4.191L27.525,6.149a.6.6,0,1,1,.84.846L10.524,24.724a.594.594,0,0,1-.421.173"
        transform="translate(6.892 7.525)"
        className={`${fill} ${stroke}`}
        strokeWidth="1"
      />
    </svg>
  )
}
