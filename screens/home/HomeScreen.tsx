import { View, Text, ScrollView, TouchableOpacity, Image, Dimensions, FlatList } from 'react-native'
import React, { useRef } from 'react'
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';
import { Slide } from '../../utils/caraosel';
import { slidesAsset } from '../../utils/caraosel';
import { SafeAreaView } from 'react-native-safe-area-context';


const { width, height } = Dimensions.get('window');

const COLORS = { primary: '#282534', white: '#fff' };
const HomeScreen = () => {
    const ref: any = useRef();


    return (
        <ScrollView className='flex-1 py-4 bg-white' >

            {/* profile and notif */}
            <View className='px-2 flex-row justify-between items-center'>
                <View className='flex-row items-center bg-light  p-1 rounded-full space-x-2' >
                    <View className='w-10 h-10 rounded-full bg-pink-200' >
                        <Image className='w-10 h-10 rounded-full' source={require('../../assets/images/profile.png')} resizeMode='cover' />
                    </View>
                    <Text className=' text-lg font-semibold px-2' >Leonardo</Text>
                </View>

                <View className='bg-light p-2 rounded-full ' >
                    <View className=' flex justify-center items-center relative' >
                        <Ionicons name="notifications-outline" size={27} color="black" />
                        <View className='h-6 w-3.5 absolute top-0 right-0 flex items-center justify-center' >
                            <Octicons name="dot-fill" size={10} color="red" />
                        </View>
                    </View>
                </View>
            </View>

            {/* main view */}
            <View className='flex-1 w-full px-4 py-8' >
                <View className='flex-col ' >
                    <Text className='text-[42px] font-Inter font-light text-secondary ' >Explore The  </Text>
                    <View className='flex-row items-center ' >
                        <View>
                            <Text className='text-[45px] font-bold text-secondary ' >
                                Beautiful
                            </Text>
                        </View>

                        <View className=' flex justify-center relative' >
                            <Text className='text-[45px] font-bold text-orange-500' > World !</Text>
                            <Image className='absolute bottom-0 top-3 w-full mt-10' source={require('../../assets/images/line.png')} />
                        </View>
                    </View>
                </View>
            </View>

            {/* caraosel */}
            <View className='flex flex-row justify-between items-center px-4 mt-4' >
                <Text className='text-lg font-semibold' >Best Destination </Text>
                <TouchableOpacity>
                    <Text className='text-lg text-orange-500' >View All</Text>
                </TouchableOpacity>
            </View>

            <SafeAreaView style={{ flex: 1 }}>
                <View style={{ flex: 1 }}>
                    <FlatList
                        data={slidesAsset}
                        horizontal
                        pagingEnabled
                        showsHorizontalScrollIndicator={false}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => <Slide item={item} />}
                    />
                </View>
            </SafeAreaView>


        </ScrollView>

    )
}

export default HomeScreen