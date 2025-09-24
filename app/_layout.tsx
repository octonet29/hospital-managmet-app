import { Stack } from "expo-router"
import { SafeAreaProvider } from "react-native-safe-area-context"

export default function RootLayout() {
	return (
		<SafeAreaProvider>
			<Stack screenOptions={{ headerShown: false }}>
				<Stack.Screen name="(auth)/welcome" />
				<Stack.Screen name="(auth)/login" />
				<Stack.Screen name="(auth)/signUp" />
			</Stack>
		</SafeAreaProvider>
	)
}
