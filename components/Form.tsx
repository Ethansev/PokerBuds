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
        <SafeAreaView  className='p-4 flex-1 w-full bg-[#fff]'>
            <View  className='p-4 flex-1 w-full bg-[#fff]'>
                <Controller
                    control={control}
                    render={({ field }) => (
                        <TextInput
                            {...field}
                            className='h-12 w-full border-gray-200 border-2 px-4 py-2 rounded-xl mb-4'
                            placeholder="Your Name"
                        />
                    )}
                    name="name"
                    rules={{ required: 'You must enter your name' }}
                />
                {errors.name?.message && typeof errors.name.message === 'string' && <Text  className='text-red-500 mb-4'>{errors.name.message}</Text>}

                <Controller
                    control={control}
                    render={({ field }) => (
                        <TextInput
                            {...field}
                            className='h-12 w-full border-gray-200 border-2 px-4 py-2 rounded-xl'
                            placeholder="Email"
                        />
                    )}
                    name="email"
                    rules={{ required: 'You must enter your email', pattern: { value: /^\S+@\S+$/i, message: 'Enter a valid email address' } }}
                />
                {errors.email?.message && typeof errors.email.message === 'string' && <Text className='text-red-500 mb-4'>{errors.email.message}</Text>}

                <Button title="Submit" onPress={handleSubmit(onSubmit)} className='mb-2' />

                {submittedData && (
                    <View className='flex-1 items-center justify center'>
                        <Text className='mb-2'>Submitted Data:</Text>
                        <Text className='mb-2'>Name: {submittedData.name}</Text>
                        <Text>Email: {submittedData.email}</Text>
                    </View>
                )}
            </View>
        </SafeAreaView>
    );
}

// const styles = StyleSheet.create({
//     errorText: {
//         color: 'red',
//         marginBottom: 10,
//     },
// });
