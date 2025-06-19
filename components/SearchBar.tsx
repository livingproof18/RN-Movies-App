import React from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native';

interface Props {
    placeholder?: string;
    onPress?: () => void;
    value?: string;
    onChangeText?: (text: string) => void;
};
const SearchBar = ({ placeholder, onPress, value, onChangeText }: Props) => {
    return (
        <View className='flex-row items-center bg-dark-200 rounded-full px-5 py-4 gap-4'>
            <Text className='text-[#ab8bff] size-5'>🔍</Text>
            <TextInput
                onPressIn={onPress}
                placeholder={placeholder || 'Search...'}
                value={value}
                onChangeText={onChangeText}
                placeholderTextColor='#a8b5db'
                className='flex-1 text-white ml-2 border'
            />

        </View>
    )
}

export default SearchBar

const styles = StyleSheet.create({})