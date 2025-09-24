import CustomButton from "@/components/CustomButton"
import InputField from "@/components/InputField"
import { icons, images } from "@/constants"

import { Link, router } from "expo-router"
import React from "react"
import { Image, ScrollView, Text, View } from "react-native"

export default function SignIn() {
	return (
		<ScrollView className="flex-1 bg-white">
			<View className="flex-1 bg-white">
				<View className="relative w-full h-[250px]">
					<Image source={images.loginImage} className="z-0 w-full h-[250px]" />
				</View>

				<View className="p-5">
					<InputField
						label="Email"
						placeholder="Enter email"
						icon={icons.email}
						textContentType="emailAddress"
					/>

					<InputField
						label="Password"
						placeholder="Enter password"
						icon={icons.lock}
						secureTextEntry={true}
						textContentType="password"
					/>

					<CustomButton
						title="Sign In"
						onPress={() => {
							router.replace("/(root)/(tabs)/home")
						}}
						className="mt-6"
					/>

					<Link
						href="/signUp"
						className="text-lg text-center text-general-200 mt-10"
					>
						Don&apos;t have an account?
						<Text className="text-primary-500">Sign Up</Text>
					</Link>
				</View>
			</View>
		</ScrollView>
	)
}
