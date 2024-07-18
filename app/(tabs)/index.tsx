import EditScreenInfo from '@/components/EditScreenInfo';
import { View } from '@/components/Themed';
import { Link } from 'expo-router';
import { StyleSheet } from 'react-native';

export default function TabOneScreen() {
    return (
        <View style={styles.container}>
            {/* <Text style={styles.title}>This is the main page</Text> */}
            {/* <View style={styles.separator} lightColor="#eee" darkColor="rgba(256,255,255,0.1)" /> */}
            <Link href='/profile' style={{ color: 'blue' }}>
                Go to Profile
            </Link>
            <EditScreenInfo path='app/(tabs)/index.tsx' />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
    },
    separator: {
        marginVertical: 30,
        height: 1,
        width: '80%',
    },
});