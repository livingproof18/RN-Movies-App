import { fetchMovieDetails } from '@/services/api';
import useFetch from '@/services/useFetch';
import { router, useLocalSearchParams } from 'expo-router';
import * as WebBrowser from 'expo-web-browser';
import React from 'react';
import { Image, Linking, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

type MovieInfoProps = {
    label: string;
    value?: string | number | null;
}


const MovieInfo = ({ label, value }: MovieInfoProps) => (
    <View className='flex-col items-start justify-start  mt-5'>
        <Text className='text-light-200 font-normal text-sm'>{label}</Text>
        {/* <Text className='text-light-200 text-sm'>•</Text> */}
        <Text className='text-white text-sm'>{value ?? 'N/A'}</Text>
    </View>
)



const MovieDetails = () => {

    const { id } = useLocalSearchParams();

    const { data: movie, loading } = useFetch(() => fetchMovieDetails(id as string));



    return (
        <View className='flex-1 bg-primary'>

            <ScrollView className='w-full px-5'
                contentContainerStyle={{ paddingBottom: 80 }}
            // showsVerticalScrollIndicator={false}
            >
                <View>
                    <Image
                        source={{ uri: `https://image.tmdb.org/t/p/w500${movie?.poster_path}` }}
                        className='w-full h-[550px]'
                        resizeMode='stretch'
                    />
                </View>
                <View className='flex-col items-start justify-start mt-5 px-5'>
                    <Text className='text-white text-xl font-bold'>{movie?.title}</Text>
                    <View className='flex-row items-center gap-x-1 mt-2'>
                        <Text className='text-light-200 text-sm'>{movie?.release_date ? new Date(movie.release_date).getFullYear() : 'N/A'}</Text>
                        <Text className='text-light-200 text-sm'>•</Text>
                        <Text className='text-light-200 text-sm'>{movie?.runtime} min</Text>
                        <Text className='text-light-200 text-sm'>•</Text>
                        <Text className='text-light-200 text-sm'>{movie?.genres.map((genre: { name: string }) => genre.name).join(', ')}</Text>

                        {/* <View className='flex-row items-center'>
                            <Text className='text-yellow-400 text-xs font-semibold'>{movie?.vote_average.toFixed(1)}</Text>
                            <Text className='text-gray-300 text-xs ml-1'>/ 10</Text>
                        </View> */}
                    </View>
                    <View className='flex-row items-center bg-dark-100 px-2 py-1 rounded-md  gap-x-1 mt-2'>
                        <Text className='text-yellow-400 text-sm font-semibold'>{movie?.vote_average.toFixed(1)}</Text>
                        <Text className='text-gray-300 text-sm ml-1'>/ 10</Text>

                        <Text className='text-light-200 text-sm ml-1'>({movie?.vote_count} votes)</Text>
                    </View>


                    <MovieInfo label='Overview' value={movie?.overview} />
                    <MovieInfo label='Tagline' value={movie?.tagline} />
                    <MovieInfo label="Genres" value={movie?.genres.map((genre: { name: string }) => genre.name).join(', ') || 'N/A'} />

                    <MovieInfo label='Status' value={movie?.status} />
                    <MovieInfo label='Language' value={movie?.original_language} />

                    <TouchableOpacity
                        className=' bg-sky-700 w-32 h-12 rounded-full items-center justify-center mt-6'
                        onPress={() => {
                            const url = `https://www.themoviedb.org/movie/${movie?.id}`;
                            Linking.openURL(url).catch(err =>
                                console.error("Failed to open URL:", err)
                            );
                        }}
                    >
                        <Text className='text-white text-base font-bold'>Watch Movie</Text>
                    </TouchableOpacity>

                    <TouchableOpacity
                        className='bg-red-700 w-32 h-12 rounded-full items-center justify-center mt-6'
                        onPress={async () => {
                            const url = `https://www.themoviedb.org/movie/${movie?.id}`;
                            try {
                                // await WebBrowser.openBrowserAsync(url);
                                await WebBrowser.openBrowserAsync(url, {
                                    controlsColor: '#ff0000',
                                    toolbarColor: '#1f2937',
                                });

                            } catch (err) {
                                console.error('Failed to open in-app browser:', err);
                            }
                        }}
                    >
                        <Text className='text-white text-base font-bold'>Watch Movie In</Text>
                    </TouchableOpacity>

                </View>



            </ScrollView>
            <TouchableOpacity
                className='absolute bottom-5 right-5 bg-accent w-12 h-12 rounded-full items-center justify-center'
                onPress={() => router.back()}
            >
                <Text className='text-white text-2xl font-bold'>←</Text>
            </TouchableOpacity>




        </View>
    )
}

export default MovieDetails

const styles = StyleSheet.create({})