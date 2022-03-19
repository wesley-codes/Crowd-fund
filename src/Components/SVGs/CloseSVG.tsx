import * as React from "react"
import { SVGProps } from "react"

const CloseSVG= (props: SVGProps<SVGSVGElement>) => (
  <svg
    width='24px'
    height='24px'
    viewBox='0 0 24 24'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <path
      fill='none'
      stroke='#fff'
      strokeWidth={2}
      d='M3,3 L21,21 M3,21 L21,3'
    />
  </svg>
)

export default CloseSVG;
