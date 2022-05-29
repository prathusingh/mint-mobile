import { THEME } from "./v1"

export default THEME

export type Color = keyof typeof THEME["colors"]
