import * as React from "react"
const DeleteIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    viewBox="0 0 48 48"
    {...props}
  >
    <defs>
      <mask id="a">
        <g fill="none" stroke="#fff" strokeLinejoin="round" strokeWidth={4}>
          <path fill="#555" d="M9 10v34h30V10z" />
          <path strokeLinecap="round" d="M20 20v13m8-13v13M4 10h40" />
          <path fill="#555" d="m16 10 3.289-6h9.488L32 10z" />
        </g>
      </mask>
    </defs>
    <path d="M0 0h48v48H0z" mask="url(#a)" />
  </svg>
)
export default DeleteIcon