import React, { useEffect, useMemo } from "react"
import { Animated } from "react-native"

export const FadeIn: React.FC = ({ slide = true, delay = 0, children, style }) => {
  const showing = useMemo(() => {
    return new Animated.Value(0)
  }, [])

  useEffect(() => {
    Animated.spring(showing, { toValue: 1, useNativeDriver: true, speed: 100, delay }).start()
  }, [delay, showing])

  return (
    <Animated.View
      style={[
        {
          transform: [
            {
              translateY: slide
                ? showing.interpolate({
                    inputRange: [0, 1],
                    outputRange: [10, 0],
                  })
                : 0,
            },
          ],
          opacity: showing,
        },
        style,
      ]}
    >
      {children}
    </Animated.View>
  )
}
