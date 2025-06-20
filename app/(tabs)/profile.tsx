import { router } from 'expo-router'
import React from 'react'
import { Button, StyleSheet, Text, View } from 'react-native'

const profile = () => {
    return (
        <View className='bg-primary flex-1 px-10'>
            <View className='flex flex-1 flex-col gap-5 items-center justify-center mt-20 mb-5'>

                <View className='w-12 h-12 bg-gray-200 rounded-full justify-center items-center'>
                    <Text className='text-gray-800 text-xl'>👤</Text>
                </View>
                <Text className='text-white text-2xl font-bold'>Profile</Text>
                <Text className='text-gray-300 text-sm'>This is a placeholder profile page.</Text>

                <Text onPress={() => router.push('/saved')} className='text-gray-300 text-lg border bg-slate-800 p-4 rounded-xl'>View Saved Movies.</Text>

                <Button
                    title='Return Home'
                    onPress={() => router.push('/')}
                    color='#1E90FF'
                />

            </View>

        </View>
    )
}

export default profile

const styles = StyleSheet.create({})