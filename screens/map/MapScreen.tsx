import React from 'react';
import MapView, { Marker } from 'react-native-maps';
import { Text, View } from 'react-native';
import { FontAwesome, Ionicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import ButtonPrimary from '../../components/elements/buttonPrimary';
import ButtonSecondary from '../../components/elements/ButtonSecondary';




export default function MapScreen() {
    const initialRegion = {
        latitude: 37.78825,
        longitude: -122.4324,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0421,
        title: 'Niladri',
        desc: 'Tempat Rekreasi'
    };

    return (
        <View className='flex-1 relative'>
            <View className='absolute w-full bottom-0 p-4' >
                <View className='flex h-48 bg-gray-600 opacity-80 p-4 rounded-xl  z-10' >
                    <View className='flex-row justify-between' >
                        <Text className='text-white text-lg' >Niladri Reservoir</Text>
                        <View className='flex-row items-center space-x-1' >
                            <FontAwesome name="star" size={19} color="#FFD336" />
                            <Text className='text-lg text-white' >4.5</Text>
                        </View>
                    </View>

                    <View className='flex-row items-center space-x-1 mt-2' >
                        <Ionicons name="location-outline" size={17} color="#fff" />
                        <Text className='text-white font-Inter' >Tekergat, Sunamgnj</Text>
                    </View>
                    <View className='flex-row items-center space-x-2 mt-2' >
                        <MaterialCommunityIcons name="clock-outline" size={17} color="#fff" />
                        <Text className='text-white font-Inter' >45 Minutes</Text>
                    </View>

                    <ButtonPrimary className='w-full h-12 rounded-xl mt-4'  >
                        <Text className='text-lg font-medium text-white '>
                            Booking Now
                        </Text>
                    </ButtonPrimary>
                </View>
            </View>

            <MapView className='w-full h-full' initialRegion={initialRegion}>
                <Marker
                    coordinate={{ latitude: initialRegion.latitude, longitude: initialRegion.longitude }}
                    title={initialRegion.title}
                    description={initialRegion.desc}
                />
            </MapView >

        </View >
    );
}
