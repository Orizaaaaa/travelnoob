import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import ButtonBack from '../../components/elements/buttonBack'
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';

const DetailPlaceScreen = () => {
    return (
        <ScrollView className='flex-1 bg-white h-full w-full py-4'  >

            {/* title and price */}
            <View className='flex-1 px-2 h-full' >
                <ButtonBack bgColor='bg-slate-500 opacity-70' colorIcon='white' className='absolute z-10 ml-4 mt-3' />
                <Image className='w-full h-56 rounded-[20px]' resizeMode='cover' source={require('../../assets/images/detailPlace.png')} />
            </View>

            <View className='flex-1 flex-row justify-between items-center px-2 mt-8' >
                <View>
                    <Text className='text-2xl font-Inter' >Niladri Reservoir</Text>
                    <Text className='text-lg font-Inter text-gray-500' >Tekergat, Sunamgn</Text>
                </View>
                <Image className='w-12 h-12 rounded-[20px]' resizeMode='cover' source={require('../../assets/images/profile.png')} />
            </View>

            <View className='flex-1 flex-row justify-between items-center px-2 mt-7' >
                <View className='flex-row justify-center items-center' >
                    <Ionicons name="location-outline" size={17} color="#7D848D" />
                    <Text className='text-gray-500 font-Inter' >Tekergat</Text>
                </View>

                <View className='flex-row justify-center items-center gap-1' >
                    <FontAwesome name="star" size={17} color="#FFD336" />
                    <Text className='text-gray-500 font-Inter' >4.7</Text>
                    <Text className='text-gray-500 font-Inter' >(2498)</Text>
                </View>

                <Text className='text-gray-500 font-Inter' ><Text className='text-primary' >$59</Text>/Person</Text>
            </View>

            {/* description */}
            <View className='px-4 mt-10' >
                <Text className='text-gray-500 font-Inter' >You will get a complete travel package on the beaches. Packages in
                    the form of airline tickets, recommended Hotel rooms, Transportation,
                    Have you ever been on holiday to the Greek ETC
                </Text>
            </View>


        </ScrollView>
    )
}

export default DetailPlaceScreen