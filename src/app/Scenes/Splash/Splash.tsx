import React from "react"
import { View, SafeAreaView } from "react-native"
import SplashIcon from "../../icons/SplashIcon"

export const Splash = () => {
  return (
    <SafeAreaView>
      <View
        style={{
          backgroundColor: "black",
        }}
      >
        <SplashIcon />
      </View>
    </SafeAreaView>
  )
}
