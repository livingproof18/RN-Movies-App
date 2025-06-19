import MovieCard from '@/components/MovieCard';
import SearchBar from '@/components/SearchBar';
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import React, { useEffect, useState } from 'react';
import { ActivityIndicator, FlatList, Text, View } from 'react-native';

const Search = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const { data: movies, loading: moviesLoading, error: moviesError, refetch: loadMovies, reset } = useFetch(() => fetchMovies({ query: searchQuery }), false);
    console.log("Movies:", movies);

    useEffect(() => {

        const timeoutId = setTimeout(async () => {
            if (searchQuery.trim()) {
                // Refetch movies when search query changes
                await loadMovies();
            } else {
                reset()
            }
        }, 500); // Debounce for 500ms
        return () => clearTimeout(timeoutId); // Cleanup timeout on unmount or when searchQuery changes

    }, [searchQuery]);


    return (
        <View className='flex-1 bg-primary'>
            <View className="bg-secondary h-32 absolute w-full z-0">
            </View>


            <FlatList
                data={movies}
                renderItem={({ item }) => (
                    <MovieCard
                        {...item}
                    />
                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{ justifyContent: "center", gap: 16, marginVertical: 10 }}
                className="px-5"
                contentContainerStyle={{ paddingBottom: 100 }}
                ListHeaderComponent={
                    <>
                        <View className="flex-1 mt-20 mb-5 w-full">
                            <View className="flex-col items-lefft justify-between mb-2 min-h-10 gap-2">
                                <Text className="text-white text-left text-2xl font-bold ">Search Movies</Text>
                                <Text className="text-gray-300 text-base">Search for movies, series, or actors</Text>

                            </View>
                        </View>

                        <View className="my-5">
                            <SearchBar placeholder='Search for movies, series, or actors'
                                value={searchQuery}
                                onChangeText={(text: string) => setSearchQuery(text)}
                            />
                        </View>

                        {moviesLoading && (
                            <ActivityIndicator size="large" color="#0000ff" className="my-3" />

                        )}

                        {moviesError && (
                            <Text className="text-red-500 px-5 my-3">Error: {moviesError}</Text>
                        )}

                        {!moviesLoading && !moviesError && 'SEARCH TERM' && movies?.length > 0 && (
                            <Text className="text-white text-lg font-bold mt-5 mb-3">Search Results for {searchQuery}</Text>

                        )}
                    </>
                }
                ListEmptyComponent={
                    !moviesLoading && !moviesError
                        ? (
                            <View className='mt-10 px-5'>
                                {searchQuery ? (
                                    <Text className="text-gray-400 text-center">
                                        No results found for "{searchQuery}"
                                    </Text>
                                ) : (
                                    <Text className="text-gray-400 text-center">Search for a Movie</Text>
                                )}
                            </View>
                        )
                        : null
                }



            />


        </View>
    )
}

export default Search
