import React, { useContext } from "react"
import { ThemeProvider, ThemeContext } from "styled-components/native"
import { THEME } from "./v1"

const THEMES = {
  v1: {
    ...THEME,
  },
  v1dark: {
    ...THEME,
  },
}

export type Color = keyof typeof THEME["colors"]
export type ThemeType = typeof THEMES.v1

export const useTheme = () => {
  const theme: ThemeType = useContext(ThemeContext)

  return {
    theme: theme,
  }
}

export const figureOutTheme = (theme: keyof typeof THEMES | ThemeType): ThemeType => {
  if (theme === "v1") {
    return THEMES.v1
  } else {
    return THEMES.v1dark
  }
}

export const Theme: React.FC<{
  theme?: keyof typeof THEMES
}> = ({ children, theme = THEME }) => {
  const actualTheme = figureOutTheme(theme)
  return <ThemeProvider theme={actualTheme}>{children}</ThemeProvider>
}
