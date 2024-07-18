// import { Button, Input } from '@rneui/themed';
import React, { useState } from 'react';
import { Alert, AppState, Pressable, StyleSheet, Text, TextInput, View } from 'react-native';
import { supabase } from '../app/lib/supabase';

// Tells Supabase Auth to continuously refresh the session automatically if
// the app is in the foreground. When this is added, you will continue to receive
// `onAuthStateChange` events with the `TOKEN_REFRESHED` or `SIGNED_OUT` event
// if the user's session is terminated. This should only be registered once.
AppState.addEventListener('change', (state) => {
    if (state === 'active') {
        supabase.auth.startAutoRefresh();
    } else {
        supabase.auth.stopAutoRefresh();
    }
});

export default function Auth() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    async function signInWithEmail() {
        setLoading(true);
        const { error } = await supabase.auth.signInWithPassword({
            email: email,
            password: password,
        });

        if (error) {
            Alert.alert(error.message);
        } else {
            Alert.alert('signed in successfully!');
        }
        setLoading(false);
    }

    async function signUpWithEmail() {
        setLoading(true);
        const {
            data: { session },
            error,
        } = await supabase.auth.signUp({
            email: email,
            password: password,
        });

        if (error) Alert.alert(error.message);
        if (!session) Alert.alert('Please check your inbox for email verification!');
        setLoading(false);
    }

    return (
        <View style={styles.container}>
            <View style={[styles.verticallySpaced, styles.mt20]}>
                {/* <Controller */}
                {/*     control={control} */}
                {/*     render={({ field }) => ( */}
                {/*         <TextInput */}
                {/*             {...field} */}
                {/*             value={field.value ? `$${field.value}` : ''} */}
                {/*             className='h-12 w-full' */}
                {/*             placeholder='Buy In Amount' */}
                {/*             keyboardType='decimal-pad' */}
                {/*         /> */}
                {/*     )} */}
                {/*     name='buyin' */}
                {/*     rules={{ */}
                {/*         required: 'You must enter your Buy-In', */}
                {/*         pattern: { */}
                {/*             value: /^\S+@\S+$/i, */}
                {/*             message: 'Enter a valid number', */}
                {/*         }, */}
                {/*     }} */}
                {/* /> */}
                <TextInput
                    // label='Email'
                    // leftIcon={{ type: 'font-awesome', name: 'envelope' }}
                    onChangeText={(text: string) => setEmail(text)}
                    value={email}
                    placeholder='email@address.com'
                    autoCapitalize={'none'}
                />
            </View>
            <View style={styles.verticallySpaced}>
                <TextInput
                    // label='Password'
                    // leftIcon={{ type: 'font-awesome', name: 'lock' }}
                    onChangeText={(text: string) => setPassword(text)}
                    value={password}
                    secureTextEntry={true}
                    placeholder='Password'
                    autoCapitalize={'none'}
                />
            </View>
            <View style={[styles.verticallySpaced, styles.mt20]}>
                <Pressable disabled={loading} onPress={() => signInWithEmail()}>
                    <Text>Sign In</Text>
                </Pressable>
            </View>
            <View style={styles.verticallySpaced}>
                <Pressable disabled={loading} onPress={() => signUpWithEmail()}>
                    <Text>Sign Up</Text>
                </Pressable>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 40,
        padding: 12,
    },
    verticallySpaced: {
        paddingTop: 4,
        paddingBottom: 4,
        alignSelf: 'stretch',
    },
    mt20: {
        marginTop: 20,
    },
});
