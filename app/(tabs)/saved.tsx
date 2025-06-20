import SavedCard from "@/components/SavedCards";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, StyleSheet, Text, View } from 'react-native';
import savedMoviesData from '../../trendingMovies.json';

const saved = () => {
    const [savedMovies, setSavedMovies] = useState<Movie[]>([]);
    const [loading, setLoading] = useState(true);
    useEffect(() => {
        // Simulate async loading, even though the data is already available
        const loadSavedMovies = async () => {
            setLoading(true);
            try {
                // Pretend it's async, for consistency with real-world fetching
                const data = savedMoviesData;
                setSavedMovies(data.results); // set movies into state
            } catch (error) {
                console.error("Error loading saved movies:", error);
            } finally {
                setLoading(false);
            }

        };

        loadSavedMovies();
    }, []);

    console.log("Saved Movies:", savedMovies);


    return (
        <View className='flex-1 bg-primary px-5'>
            <View className="bg-secondary h-32 absolute w-full z-0">
            </View>
            <View className="flex-row items-center justify-between mt-20 mb-3">
                <View className="flex-1">
                    <Text className="text-white text-2xl font-bold">Saved Movies</Text>
                    <Text className="text-gray-300 text-base">View your saved movies here.</Text>
                </View>
                <View className="w-12 h-12 bg-gray-200 rounded-full justify-center items-center">
                    <Text className="text-gray-800 text-xl">💾</Text>
                </View>
            </View>

            {loading ? (
                <ActivityIndicator size="large" color="#0000ff" className="mt-10 self-center" />
            ) : (
                <View className="flex mt-2">
                    {savedMovies.length > 0 ? (
                        // savedMovies.map((movie, index) => (
                        //     <View key={index} className="bg-gray-800 p-4 mb-3 rounded-lg">
                        //         <Text className="text-white text-lg font-bold">{movie.title}</Text>
                        //         <Text className="text-gray-300">{movie.overview}</Text>
                        //     </View>
                        // ))
                        <FlatList
                            data={savedMovies}
                            keyExtractor={(item) => item.id.toString()}
                            renderItem={({ item, index }) => (
                                <View className="">
                                    <SavedCard
                                        movie={item}
                                        index={index}
                                        setSavedMovies={setSavedMovies}
                                        savedMovies={savedMovies}
                                    />
                                </View>
                            )}
                            // ItemSeparatorComponent={() => <View className="w-4" />}
                            className="mb-56 mt-3"
                            numColumns={2}
                            columnWrapperStyle={{ justifyContent: "center", gap: 40, marginBottom: 40, paddingRight: 5 }}



                        />


                    ) : (
                        <Text className="text-gray-300 text-center">No saved movies found.</Text>
                    )}
                </View>
            )}


        </View>
    )
}

export default saved

const styles = StyleSheet.create({})