import { View, Text, ScrollView, TouchableOpacity, Image } from 'react-native'
import React from 'react'
import ButtonBack from '../../components/elements/buttonBack'
import { Ionicons } from '@expo/vector-icons';
import { Octicons } from '@expo/vector-icons';

const HomeScreen = () => {

    return (
        <ScrollView className='flex-1 py-4 bg-white' >
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



        </ScrollView>
    )
}

export default HomeScreen