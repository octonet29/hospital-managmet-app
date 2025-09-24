import { Ionicons } from "@expo/vector-icons"
import { router } from "expo-router"
import React from "react"
import { Text, TextInput, TouchableOpacity, View } from "react-native"
import { SafeAreaView } from "react-native-safe-area-context"

export default function SignUp() {
	return (
		<SafeAreaView className="flex-1 bg-white">
			<View className="flex h-full w-full items-center justify-center px-6">
				<Text className="text-3xl font-bold text-blue-600 mb-10">Sign Up</Text>

				<View className="w-full mb-6">
					<Text className="text-[17px] font-semibold mb-2">Username</Text>
					<View className="flex-row items-center border  bg-[#F6F8FA] border-gray-300 rounded-full px-4">
						<Ionicons name="person" size={20} color="gray" />
						<TextInput
							keyboardType="default"
							className="flex-1 h-12 px-3"
							placeholder="Username"
							placeholderTextColor="#9ca3af"
						/>
					</View>
				</View>

				<View className="w-full mb-6">
					<Text className="text-[17px] font-semibold mb-2">Phone</Text>
					<View className="flex-row items-center border  bg-[#F6F8FA] border-gray-300 rounded-full px-4">
						<Ionicons name="call" size={20} color="gray" />
						<TextInput
							keyboardType="phone-pad"
							className="flex-1 h-12 px-3"
							placeholder="+993"
							placeholderTextColor="#9ca3af"
						/>
					</View>
				</View>

				<View className="w-full mb-8">
					<Text className="text-[17px] font-semibold mb-2">Password</Text>
					<View className="flex-row items-center border  bg-[#F6F8FA] border-gray-300 rounded-full px-4">
						<Ionicons name="lock-closed" size={20} color="gray" />
						<TextInput
							secureTextEntry={true}
							className="flex-1 h-12 px-3"
							placeholder="********"
							placeholderTextColor="#9ca3af"
						/>
					</View>
				</View>

				<TouchableOpacity className="bg-blue-600 w-full py-3 rounded-full shadow-md">
					<Text className="text-center text-white font-semibold text-lg">
						Sign Up
					</Text>
				</TouchableOpacity>

				<TouchableOpacity
					className="mt-4"
					onPress={() => {
						router.replace("/(auth)/signIn")
					}}
				>
					<Text className="text-blue-500">Have an account? Sign In</Text>
				</TouchableOpacity>
			</View>
		</SafeAreaView>
	)
}
