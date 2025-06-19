import MovieCard from "@/components/MovieCard";
import SearchBar from "@/components/SearchBar";
import TrendingCard from "@/components/TrendingCards";
import { fetchMovies } from "@/services/api";
import useFetch from "@/services/useFetch";
import { useRouter } from "expo-router";
import React, { useEffect, useState } from "react";
import { ActivityIndicator, FlatList, ScrollView, Text, View } from "react-native";
import trendingMoviesData from "../../trendingMovies.json";

export default function Index() {
  const router = useRouter();
  const { data: movies, loading: moviesLoading, error: moviesError } = useFetch(() => fetchMovies({ query: "" }));
  const [trendingMovies, setTrendingMovies] = useState<Movie[]>([]);

  useEffect(() => {
    // Simulate async loading, even though the data is already available
    const loadMovies = async () => {
      try {
        // Pretend it's async, for consistency with real-world fetching
        const data = trendingMoviesData;
        setTrendingMovies(data.results); // set movies into state
      } catch (error) {
        console.error("Error loading movies:", error);
      }
    };

    loadMovies();
  }, []);

  // console.log("Trending Movies:", trendingMovies);
  return (
    <View className="flex-1 bg-primary">
      <View className="bg-secondary h-32 absolute w-full z-0">
      </View>

      <ScrollView className="flex-1 px-5" showsVerticalScrollIndicator={false} contentContainerStyle={{ minHeight: "100%", paddingBottom: 10 }}>
        {/* <Text className="w-12 h-10 mt-20 mb-5 mx-auto text-white text-xl font-bold">
          Logoooooo
        </Text> */}
        <View className="flex-row items-center justify-between mt-20 mb-5">
          <View className="flex-1">
            <Text className="text-white text-2xl font-bold">Welcome</Text>
            <Text className="text-gray-300 text-base">What do you want to watch today?</Text>
          </View>
          <View className="w-12 h-12 bg-gray-200 rounded-full justify-center items-center">
            <Text className="text-gray-800 text-xl">👤</Text>
          </View>
        </View>

        {moviesLoading ? (
          <ActivityIndicator size="large" color="#0000ff" className="mt-10 self-center" />
        ) : moviesError ? (
          <Text className="text-red-500 text-center mt-10">{moviesError}</Text>
        ) : (
          <View className="flex-1 mt-5">
            <SearchBar
              onPress={() => router.push("/search")}
              placeholder="Search for movies, series, or actors"
            // onChangeText={(text) => console.log("Search text:", text)}
            />

            <>
              <Text className="text-white text-lg font-bold mt-5 mb-3">Trending Movies</Text>
              <FlatList
                data={trendingMovies}
                renderItem={({ item, index }) => (
                  <View className="mr-3">
                    <TrendingCard
                      movie={item}
                      index={index}
                    />
                  </View>
                )}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                showsHorizontalScrollIndicator={false}
                ItemSeparatorComponent={() => <View className="w-4" />}
                className="mb-8 mt-3"
              // contentContainerStyle={{ paddingRight: 10 }}
              />

            </>

            <>
              <Text className="text-white text-lg font-bold mt-5 mb-3">Latest Movies</Text>

              <FlatList
                data={movies}
                renderItem={({ item }) => (
                  <MovieCard
                    {...item}
                  />

                )}
                keyExtractor={(item) => item.id.toString()}
                numColumns={3}
                columnWrapperStyle={{ justifyContent: "flex-start", gap: 20, marginBottom: 10, paddingRight: 5 }}
                className="mt-2 pb-32"
                scrollEnabled={false}
              />

            </>

          </View>

        )}




      </ScrollView>

    </View>
  );
}
