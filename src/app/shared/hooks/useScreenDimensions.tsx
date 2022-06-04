import React, { createContext, useContext, useEffect, useState } from "react"
import { Dimensions } from "react-native"
import { EdgeInsets, useSafeAreaInsets } from "react-native-safe-area-context"

export type ScreenOrientation = "landscape | portrait"

export type SafeAreaInsets = EdgeInsets

export interface ScreenDimensions {
  width: number
  height: number
  orientation: ScreenOrientation
  size: "small" | "standard" | "large"
  isSmallScreen: boolean
}

export interface ScreenDimensionsWithSafeAreas extends ScreenDimensions {
  safeAreaInsets: SafeAreaInsets
}

export const ScreenDimensionsContext = createContext<ScreenDimensionsWithSafeAreas>(null as any)

function getCurrentDimensions(): ScreenDimensions {
  const { width, height } = Dimensions.get("window")
  return {
    width,
    height,
    orientation: width > height ? "landscape" : "portrait",
    size: height < 667 ? "small" : height <= 812 ? "standard" : "large",
    get isSmallScreen() {
      return this.size === "small"
    },
  }
}

export const ProvideScreenDimensions: React.FC = ({ children }) => {
  const safeAreaInsets = useSafeAreaInsets()
  const [dimensions, setDimensions] = useState<ScreenDimensions>(getCurrentDimensions())

  useEffect(() => {
    const onChange = () => {
      setDimensions(getCurrentDimensions())
    }
    Dimensions.addEventListener("change", onChange)
    return () => {
      Dimensions.removeEventListener("change", onChange)
    }
  }, [])

  return (
    <ScreenDimensionsContext.Provider value={{ ...dimensions, safeAreaInsets }}>
      {children}
    </ScreenDimensionsContext.Provider>
  )
}

/**
 * Call during render to be notified whenever `screenDimensions` changes
 */
export function useScreenDimensions() {
  return useContext(ScreenDimensionsContext)
}
