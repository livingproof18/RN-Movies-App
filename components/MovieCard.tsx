import { Link } from 'expo-router'
import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

const MovieCard = ({ id, poster_path, title, vote_average, release_date }: MovieDetails) => {
    return (
        <Link href={`/movies/${id}`} asChild={true} >
            <TouchableOpacity className="w-[30%]">
                <Image
                    source={{ uri: poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : 'https://via.placeholder.com/600x400/1a1a1a/ffffff.png' }}
                    className="w-full h-52 rounded-lg"
                    resizeMode="cover"
                />
                <Text className="text-white text-sm h-11 font-semibold mt-2">{title}</Text>
                <View className="flex-row items-center justify-between mt-1">
                    <Text className="text-gray-300 text-xs">{release_date ? new Date(release_date).getFullYear() : 'N/A'}</Text>
                    <View className="flex-row items-center">
                        <Text className="text-yellow-400 text-xs font-semibold">{vote_average.toFixed(1)}</Text>
                        <Text className="text-gray-300 text-xs ml-1">/ 10</Text>
                    </View>
                </View>



            </TouchableOpacity>
        </Link>
    )
}

export default MovieCard