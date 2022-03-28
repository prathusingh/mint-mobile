import React from "react"
import SplashSvg from "./assets/mint.svg"

export interface SplashProps {
  height: string
  width: string
}

const Splash: React.FC<SplashProps> = ({ height, width }) => {
  return <SplashSvg height={height} width={width} />
}

export default Splash
