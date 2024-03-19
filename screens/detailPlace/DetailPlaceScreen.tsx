import { View, Text, ScrollView, Image } from 'react-native'
import React from 'react'
import ButtonBack from '../../components/elements/buttonBack'

const DetailPlaceScreen = () => {
    return (
        <ScrollView className='flex-1 bg-white h-full w-full py-4'  >

            <View className='flex-1 px-2 h-full' >
                <ButtonBack bgColor='bg-slate-500 opacity-70' colorIcon='white' className='absolute z-10 ml-4 mt-3' />
                <Image className='w-full h-56 rounded-[20px]' resizeMode='cover' source={require('../../assets/images/detailPlace.png')} />
            </View>

        </ScrollView>
    )
}

export default DetailPlaceScreen