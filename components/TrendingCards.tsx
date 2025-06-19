import { Link } from 'expo-router';
import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
// import type { Movie } from '../types' // adjust this path if needed

interface TrendingCardProps {
    movie: Movie;
    index: number;
}

const TrendingCard = ({ movie, index }: TrendingCardProps) => {
    const { id, poster_path, title, vote_average, release_date } = movie;

    console.log('TrendingCard', id, poster_path, title, vote_average, release_date)

    return (
        <Link href={`/movies/${id}`} asChild>
            <TouchableOpacity className="w-32 relative pl-5">
                <Image
                    source={{
                        uri: poster_path
                            ? `https://image.tmdb.org/t/p/w500${poster_path}`
                            : 'https://via.placeholder.com/600x400/1a1a1a/ffffff.png',
                    }}
                    className="w-32 h-48 rounded-lg"
                    resizeMode="cover"
                />

                <View className='absolute bottom-9 -left-1.5 px-2 py-1 rounded-full'>
                    <Text className='font-bold text-white text-6xl z-50' >{index + 1}</Text>
                </View>
                <View className="absolute w-40 bottom-0 -left-1.5 z-10 right-0 bg-black bg-opacity-50 px-2 py-1 rounded-b-lg">
                    <Text className="text-white text-sm font-semibold" numberOfLines={1}>{title}</Text>
                    <View className="flex-row items-center justify-between mt-1">
                        {/* <Text className="text-gray-300 text-xs">
                            {release_date ? new Date(release_date).getFullYear() : 'N/A'}
                        </Text> */}
                        {/* <View className="flex-row items-center">
                            <Text className="text-yellow-400 text-xs font-semibold">
                                {vote_average.toFixed(1)}
                            </Text>
                            <Text className="text-gray-300 text-xs ml-1">/ 10</Text>
                        </View> */}
                    </View>
                </View>




                {/* <Text className="text-white text-sm h-11 font-semibold mt-2">{title}</Text>
                <View className="flex-row items-center justify-between mt-1">
                    <Text className="text-gray-300 text-xs">
                        {release_date ? new Date(release_date).getFullYear() : 'N/A'}
                    </Text>
                    <View className="flex-row items-center">
                        <Text className="text-yellow-400 text-xs font-semibold">
                            {vote_average.toFixed(1)}
                        </Text>
                        <Text className="text-gray-300 text-xs ml-1">/ 10</Text>
                    </View>
                </View> */}

            </TouchableOpacity>
        </Link>
    );
};

export default TrendingCard;
