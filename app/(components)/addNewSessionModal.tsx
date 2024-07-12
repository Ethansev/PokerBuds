import { StatusBar } from 'expo-status-bar';
import { Platform } from 'react-native';

import Form from '@/components/Form';
import { View } from '@/components/Themed';

export default function AddNewSessionModal() {
    return (
        <View className='flex-1 items-center justify-center'>
            {/* <Text style={styles.title}>Add Session</Text> */}
            {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" /> */}
            {/* <EditScreenInfo path="app/(tabs)/modal.tsx" /> */}
            <Form />

            {/* Use a light status bar on iOS to account for the black space above the modal */}
            <StatusBar style={Platform.OS === 'ios' ? 'light' : 'auto'} />
        </View>
    );
}
