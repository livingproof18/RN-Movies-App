import { Link } from 'expo-router';
import React from 'react';
import { Alert, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
// import type { Movie } from '../types' // adjust this path if needed

interface SavedCardProps {
    movie: Movie;
    index: number;
    onRemove?: (id: number) => void;
}

const SavedCard = ({ movie, index, onRemove }: SavedCardProps) => {
    const { id, poster_path, title, vote_average, release_date } = movie;

    console.log('SavedCard', id, poster_path, title, vote_average, release_date)

    const handlePress = (id: number, title: string) => {
        console.log('Button pressed!', 'You just called the function.');
        console.log('Movie ID:', id);
        console.log('Movie Title:', title);


        if (onRemove) onRemove(id);

        // Here you can handle the logic for removing the movie from saved movies
        // For example, you might want to update the state or make an API call to remove it from a database.
        Alert.alert('Movie Removed', `${title} has been removed from your saved movies.`);
        // You can also navigate to another screen or show a confirmation message.
        // For example, you might want to navigate back to the saved movies list or show a
        // confirmation message.
        // navigation.navigate('SavedMovies'); // Uncomment if you have a navigation setup


        // Or do whatever you need here.
    };

    return (
        <Link href={`/movies/${id}`} asChild>
            <TouchableOpacity className="w-36 relative pl-0">
                <Image
                    source={{
                        uri: poster_path
                            ? `https://image.tmdb.org/t/p/w500${poster_path}`
                            : 'https://via.placeholder.com/600x400/1a1a1a/ffffff.png',
                    }}
                    className="w-36 h-56 rounded-lg"
                    resizeMode="cover"
                />

                <View className='absolute bottom-24 -left-4 px-2 py-1 rounded-full'>
                    <Text className='font-bold text-white text-6xl z-50' >{index + 1}</Text>
                </View>
                <View className="w-36 bg-black bg-opacity-50 px-2 py-1 rounded-b-lg">
                    <Text className="text-white text-sm font-semibold" numberOfLines={2}>{title}</Text>
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
                    </View>
                </View>
                <View className="w-36 flex flex-row rounded-b-lg bg-black">

                    <TouchableOpacity
                        style={[styles.button, styles.removeButton]}
                        onPress={() => Alert.alert('Remove Movie', `Are you sure you want to remove ${title}?`, [
                            { text: 'Cancel', style: 'cancel' },
                            { text: 'OK', onPress: () => handlePress(id, title) },
                        ])}
                    >
                        <Text style={styles.buttonTextSmall}>Remove</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={styles.button} onPress={() => console.log('Button pressed!', 'You just called the function.')}>
                        <Text style={styles.buttonText}>Press Me</Text>
                    </TouchableOpacity>


                </View>


                {/* Uncomment if you want to display title and other details below the image */}




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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    button: {
        backgroundColor: 'black',
        paddingVertical: 6,
        paddingHorizontal: 4,
        borderRadius: 6,
        marginHorizontal: 1,
        // borderBlockColor: 'white',
        borderWidth: 1,
    },

    removeButton: {
        backgroundColor: 'black',
        color: 'red',

    },

    buttonText: {
        color: '#fff',
        fontWeight: 'bold',
        fontSize: 12,
        textAlign: 'center',
    },

    buttonTextSmall: {
        color: 'red',
        fontSize: 12,
        fontWeight: '600',
    },

});

export default SavedCard;
