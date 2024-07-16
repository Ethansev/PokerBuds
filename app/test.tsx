import { Stack, router } from 'expo-router';
import { Button, Text, View } from 'react-native';

export default function test() {
    return (
        <View className='mx-8'>
            <Stack.Screen
                options={{
                    // headerTitle: () => <Text>Your mom</Text>,
                    headerLeft: () => <Button onPress={() => router.back()} title='Back' />,
                }}
            />
            <Text>hi this is my text</Text>
            <Text>
                Okay looks like I got navigation working now woohoo. I can put a stack inside of
                another route component instead of just having it sit in layout
            </Text>
        </View>
    );
}
