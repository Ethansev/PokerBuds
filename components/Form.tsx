import React, { useState } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { View, Text, TextInput, Button, StyleSheet, SafeAreaView } from 'react-native';

export default function Form() {
    const { control, handleSubmit, formState: { errors } } = useForm(); const [submittedData, setSubmittedData] = useState<{ name?: string, email?: string }>({});
    // TODO: fix the type for this
    const onSubmit = (data: any) => {
        // Simulate form submission
        console.log('Submitted Data:', data);
        setSubmittedData(data);
    };

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.container}>
                <Controller
                    control={control}
                    render={({ field }) => (
                        <TextInput
                            {...field}
                            style={styles.input}
                            placeholder="Your Name"
                        />
                    )}
                    name="name"
                    rules={{ required: 'You must enter your name' }}
                />
                {errors.name?.message && typeof errors.name.message === 'string' && <Text style={styles.errorText}>{errors.name.message}</Text>}

                <Controller
                    control={control}
                    render={({ field }) => (
                        <TextInput
                            {...field}
                            style={styles.input}
                            placeholder="Email"
                        />
                    )}
                    name="email"
                    rules={{ required: 'You must enter your email', pattern: { value: /^\S+@\S+$/i, message: 'Enter a valid email address' } }}
                />
                {errors.email?.message && typeof errors.email.message === 'string' && <Text style={styles.errorText}>{errors.email.message}</Text>}

                <Button title="Submit" onPress={handleSubmit(onSubmit)} />

                {submittedData && (
                    <View>
                        <Text style={styles.submittedTitle}>Submitted Data:</Text>
                        <Text>Name: {submittedData.name}</Text>
                        <Text>Email: {submittedData.email}</Text>
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 16,
        flex: 1,
        width: '100%',
        backgroundColor: '#fff'
    },
    input: {
        height: 40,
        width: '100%',
        borderColor: 'gray',
        borderWidth: 1,
        marginBottom: 20,
        padding: 8,
        borderRadius: 4
    },
    errorText: {
        color: 'red',
        marginBottom: 10,
    },
    submittedContainer: {

    },
    submittedTitle: {

    }
});
