import FontAwesome from '@expo/vector-icons/FontAwesome';
import { Tabs, useNavigation } from 'expo-router';
import React from 'react';

import { useClientOnlyValue } from '@/components/useClientOnlyValue';
import { useColorScheme } from '@/components/useColorScheme';
import Colors from '@/constants/Colors';

// You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
function TabBarIcon(props: {
    name: React.ComponentProps<typeof FontAwesome>['name'];
    color: string;
}) {
    return <FontAwesome size={28} style={{ marginBottom: -3 }} {...props} />;
}

export default function TabLayout() {
    const colorScheme = useColorScheme();
    const navigation = useNavigation();

    return (
        <Tabs
            screenOptions={{
                tabBarActiveTintColor: Colors[colorScheme ?? 'light'].tint,
                // Disable the static render of the header on web
                // to prevent a hydration error in React Navigation v6.
                headerShown: useClientOnlyValue(false, true),
                tabBarStyle: { alignItems: 'center', justifyContent: 'center' },
            }}>
            <Tabs.Screen
                name='reports'
                options={{
                    title: 'Reports',
                    tabBarIcon: ({ color }) => <TabBarIcon name='code' color={color} />,
                }}
            />

            {/* <Tabs.Screen */}
            {/*     name="index" */}
            {/*     options={{ */}
            {/*         title: 'Dashboard', */}
            {/*         tabBarIcon: ({ color }) => <TabBarIcon name="code" color={color} />, */}
            {/*         headerRight: () => ( */}
            {/*             <Link href="/modal" asChild> */}
            {/*                 <Pressable> */}
            {/*                     {({ pressed }) => ( */}
            {/*                         <FontAwesome */}
            {/*                             name="info-circle" */}
            {/*                             size={25} */}
            {/*                             color={Colors[colorScheme ?? 'light'].text} */}
            {/*                             style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }} */}
            {/*                         /> */}
            {/*                     )} */}
            {/*                 </Pressable> */}
            {/*             </Link> */}
            {/*         ), */}
            {/*     }} */}
            {/* /> */}

            <Tabs.Screen
                name='SessionFormModal'
                options={{
                    title: 'New Session',
                    tabBarIcon: ({ color }) => (
                        <FontAwesome size={25} name='plus-circle' color={color} />
                    ),
                    unmountOnBlur: true,
                }}
                listeners={({ navigation }) => ({
                    tabPress: (e) => {
                        e.preventDefault();
                        navigation.navigate('SessionFormModal');
                    },
                })}
            />

            <Tabs.Screen
                name='logbook'
                options={{
                    title: 'Logbook',
                    tabBarIcon: ({ color }) => <TabBarIcon name='code' color={color} />,
                }}
            />

            <Tabs.Screen
                name='four'
                options={{
                    title: 'More',
                    tabBarIcon: ({ color }) => <TabBarIcon name='code' color={color} />,
                }}
            />
        </Tabs>
    );
}
