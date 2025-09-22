import React from "react"
import { View } from "react-native"

export default function SafeScreen({ children }: any) {
	// const insets = useSafeAreaInsets()
	return <View className="bg-black">{children}</View>
}
