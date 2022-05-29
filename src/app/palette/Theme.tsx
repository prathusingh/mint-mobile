import React from "react"
import { ThemeProvider } from "styled-components/native"
import THEME from "./themes"

export const Theme: React.FC<{
  theme?: keyof typeof THEME
}> = ({ children, theme = THEME }) => {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>
}
