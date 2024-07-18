import FontAwesome from '@expo/vector-icons/FontAwesome';
import DateTimePicker, { DateTimePickerEvent } from '@react-native-community/datetimepicker';
import { Link } from 'expo-router';
import React, { useState } from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Pressable, SafeAreaView, Text, TextInput, View } from 'react-native';
import Divider from './Divider';

export default function Form() {
    const [date, setDate] = useState<Date>(new Date());
    const [pickerMode, setPickerMode] = useState<string>('date');

    const {
        control,
        handleSubmit,
        formState: { errors },
    } = useForm();
    const [submittedData, setSubmittedData] = useState<{ name?: string; email?: string }>({});

    // TODO: fix the type for this
    const onSubmit = (data: any) => {
        // Simulate form submission
        console.log('Submitted Data:', data);
        setSubmittedData(data);
    };

    function onDateChange(event: DateTimePickerEvent, selectedDate: any) {
        if (selectedDate) setDate(selectedDate);
    }

    // TODO: data to implement:
    // buy-in amount
    // profit/loss - this should be auto calculated for us
    // notes,
    // casino name - blinds/stakes should be tied with casino name
    // blinds & stakes - I want these to be like wheels
    // cash game/tournament - possibly tabs at the top that user can swipe left/right on

    return (
        <SafeAreaView className='w-full flex-1 bg-orange-50 p-4'>
            <View className='mb-4 flex w-full gap-8 bg-orange-50 p-4'>
                {/* <View> */}
                {/*     <Controller */}
                {/*         control={control} */}
                {/*         render={({ field }) => ( */}
                {/*             <TextInput */}
                {/*                 {...field} */}
                {/*                 className='mb-4 h-12 w-full rounded-xl border-2 border-gray-200 px-4 py-2' */}
                {/*                 placeholder='Your Name' */}
                {/*             /> */}
                {/*         )} */}
                {/*         name='name' */}
                {/*         rules={{ required: 'You must enter your name' }} */}
                {/*     /> */}
                {/*     {errors.name?.message && typeof errors.name.message === 'string' && ( */}
                {/*         <Text className='mb-4 text-red-500'>{errors.name.message}</Text> */}
                {/*     )} */}
                {/* </View> */}
                {/**/}
                {/* <View className='mb-8'> */}
                {/*     <Controller */}
                {/*         control={control} */}
                {/*         render={({ field }) => ( */}
                {/*             <TextInput */}
                {/*                 {...field} */}
                {/*                 className='h-12 w-full rounded-xl border-2 border-gray-200 px-4 py-2' */}
                {/*                 placeholder='Email' */}
                {/*             /> */}
                {/*         )} */}
                {/*         name='email' */}
                {/*         rules={{ */}
                {/*             required: 'You must enter your email', */}
                {/*             pattern: { */}
                {/*                 value: /^\S+@\S+$/i, */}
                {/*                 message: 'Enter a valid email address', */}
                {/*             }, */}
                {/*         }} */}
                {/*     /> */}
                {/*     {errors.email?.message && typeof errors.email.message === 'string' && ( */}
                {/*         <Text className='mb-4 text-red-500'>{errors.email.message}</Text> */}
                {/*     )} */}
                {/* </View> */}

                {/* Time and Location  */}
                <View className='w-full rounded-3xl bg-[#fff] px-10 py-6'>
                    <View className='flex flex-row items-center gap-4'>
                        <Link href='/test'>
                            <View>
                                <FontAwesome size={25} name='money' color={''} />
                            </View>
                        </Link>
                        <Link href='/test'>
                            <View className=''>
                                <Controller
                                    control={control}
                                    render={({ field }) => (
                                        <TextInput
                                            {...field}
                                            value={field.value ? `$${field.value}` : ''}
                                            className='h-12 w-full'
                                            placeholder='Buy In Amount'
                                            keyboardType='decimal-pad'
                                        />
                                    )}
                                    name='buyin'
                                    rules={{
                                        required: 'You must enter your Buy-In',
                                        pattern: {
                                            value: /^\S+@\S+$/i,
                                            message: 'Enter a valid number',
                                        },
                                    }}
                                />
                                {errors.email?.message &&
                                    typeof errors.email.message === 'string' && (
                                        <Text className='mb-4 text-red-500'>
                                            {errors.email.message}
                                        </Text>
                                    )}
                            </View>
                        </Link>
                    </View>

                    <Divider twClasses='my-4 w-full' />

                    {/* TODO: turn this into its own component  */}
                    <View className='flex flex-row items-center gap-4'>
                        <View>
                            <FontAwesome size={25} name='calendar' color={''} />
                        </View>

                        <View className='flex'>
                            <Text className='mb-2 pl-4'>Start Time</Text>
                            <DateTimePicker
                                testID='dateTimePicker'
                                value={date}
                                mode={'datetime'}
                                // is24Hour={}
                                onChange={onDateChange}
                            />
                        </View>
                    </View>

                    <Divider twClasses='my-4 w-full' />

                    <View className='flex flex-row items-center gap-4'>
                        <View>
                            <FontAwesome size={25} name='money' color={''} />
                        </View>
                        <View className=''>
                            <Controller
                                control={control}
                                render={({ field }) => (
                                    <TextInput
                                        {...field}
                                        value={field.value ? `$${field.value}` : ''}
                                        className='h-12 w-full'
                                        placeholder='Cash Out Amount'
                                        keyboardType='decimal-pad'
                                    />
                                )}
                                name='buyin'
                                rules={{
                                    required: 'You must enter your Buy-In',
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: 'Enter a valid number',
                                    },
                                }}
                            />
                            {errors.email?.message && typeof errors.email.message === 'string' && (
                                <Text className='mb-4 text-red-500'>{errors.email.message}</Text>
                            )}
                        </View>
                    </View>

                    <Divider twClasses='my-4 w-full' />

                    <View className='flex flex-row items-center gap-4'>
                        <View>
                            <FontAwesome size={25} name='calendar' color={''} />
                        </View>

                        <View className='flex'>
                            <Text className='mb-2 pl-4'>End Time</Text>
                            <DateTimePicker
                                testID='dateTimePicker'
                                value={date}
                                mode={'datetime'}
                                // is24Hour={}
                                onChange={onDateChange}
                            />
                        </View>
                    </View>
                </View>

                {/* IDK yet  */}
                <View className='w-full flex-col rounded-3xl bg-[#fff] px-10 py-6'>
                    <View className='flex flex-row items-center gap-4'>
                        <View>
                            <FontAwesome size={25} name='money' color={''} />
                        </View>
                        <View className=''>
                            <Controller
                                control={control}
                                render={({ field }) => (
                                    <TextInput
                                        {...field}
                                        value={field.value ? `$${field.value}` : ''}
                                        className='h-12 w-full'
                                        placeholder='Stakes / Blinds'
                                        keyboardType='decimal-pad'
                                    />
                                )}
                                name='buyin'
                                rules={{
                                    required: 'You must enter your Buy-In',
                                    pattern: {
                                        value: /^\S+@\S+$/i,
                                        message: 'Enter a valid number',
                                    },
                                }}
                            />
                            {errors.email?.message && typeof errors.email.message === 'string' && (
                                <Text className='mb-4 text-red-500'>{errors.email.message}</Text>
                            )}
                        </View>
                    </View>

                    <Divider twClasses='my-4 w-full' />
                </View>
            </View>

            <View className='flex w-full items-end pr-8'>
                <Pressable
                    onPress={handleSubmit(onSubmit)}
                    className='mb-2 w-1/4 items-center rounded-full bg-red-200 px-2 py-2'>
                    <Text className='text-center'>Save</Text>
                </Pressable>
            </View>

            {submittedData && (
                <View className='justify center flex-1 items-center'>
                    <Text className='mb-2'>Submitted Data:</Text>
                    <Text className='mb-2'>Name: {submittedData.name}</Text>
                    <Text>Email: {submittedData.email}</Text>
                </View>
            )}
        </SafeAreaView>
    );
}

// const styles = StyleSheet.create({
//     errorText: {
//         color: 'red',
//         marginBottom: 10,
//     },
// });
