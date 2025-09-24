import { router } from "expo-router"
import React from "react"
import { Image, Text, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"
// import Swiper from "react-native-swiper"

export default function Onboarding() {
	// const swiperRef = useRef(null)
	return (
		<SafeAreaView className="flex h-full  items-center justify-between">
			<View className="h-full w-full grid justify-center items-center">
				<Text className="text-3xl font-semibold">Bir zat diyip goymaly</Text>
				<Image
					source={require("../../assets/images/doctor.png")}
					className="w-96 h-96"
				/>
			</View>
			<View className="mb-10 absolute bottom-0">
				<TouchableOpacity
					className="w-full h-full border rounded-full px-4 py-2 border-blue-500"
					onPress={() => {
						router.replace("/(auth)/signIn")
					}}
				>
					<Text className="text-lg font-semibold text-blue-500">Sign In</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}
