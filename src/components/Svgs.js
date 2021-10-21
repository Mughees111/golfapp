import * as React from "react"
import Svg, { Path } from "react-native-svg"

export function EyeShow(props) {
  return (
    <Svg
      width={20}
      height={20}
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path
        d="M10 7.504a3.334 3.334 0 110 6.667 3.334 3.334 0 010-6.667zm0-2.92a8.336 8.336 0 018.084 6.303.625.625 0 01-1.212.304 7.086 7.086 0 00-13.744.003.625.625 0 01-1.213-.302A8.336 8.336 0 0110 4.583z"
        fill="#828282"
      />
    </Svg>
  )
}

