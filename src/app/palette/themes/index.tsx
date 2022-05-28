export const THEME = {
  colors: {
    /** Full black, primary brand color  */
    black100: "#000000",
    /** 30 black (dark grey), placeholder text only  */
    black30: "#C2C2C2",
    /** 15 black (grey), borders, divider lines, and grey button only */
    black15: "#D8D8D8",
    /** 5 black (light grey), backgrounds only */
    black5: "#F7F7F7",
    /** Full Blue. Calls to action, highlights, edits */
    blue100: "#1023D7",
    /** Full copper. In consideration, transition, temporary */
    copper100: "#7B5927",
    /** Full green. Success, approval, go */
    green100: "#127438",
    /** Full red. Notification, error, stop */
    red100: "#C82400",
    /** Full white */
    white100: "#FFFFFF",
  },
}

// All available color keys
export type Color = keyof typeof THEME["colors"]
