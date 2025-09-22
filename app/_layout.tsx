import { Stack } from "expo-router"
import { SafeAreaProvider } from "react-native-safe-area-context"

export default function RootLayout() {
	return (
		<SafeAreaProvider>
			{/* <SafeScreen> */}
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name="(auth)/login" options={{ headerShown: false }} />
				<Stack.Screen name="(auth)/signUp" options={{ headerShown: false }} />
			</Stack>
			{/* </SafeScreen> */}
		</SafeAreaProvider>
	)
}
