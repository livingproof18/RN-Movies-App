import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const profile = () => {
    return (
        <View className='bg-primary flex-1 px-10'>
            <View className='flex flex-1 flex-col gap-5 items-center justify-center mt-20 mb-5'>

                <View className='w-12 h-12 bg-gray-200 rounded-full justify-center items-center'>
                    <Text className='text-gray-800 text-xl'>👤</Text>
                </View>
                <Text className='text-white text-2xl font-bold'>Profile</Text>
                <Text className='text-gray-300 text-sm'>This is a placeholder profile page.</Text>

                <Text className='text-gray-300 text-sm'>View Saved Movies.</Text>
            </View>

        </View>
    )
}

export default profile

const styles = StyleSheet.create({})