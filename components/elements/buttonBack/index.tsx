import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native'


type Props = {
    className?: string
    colorIcon?: string
    bgColor?: string
}
const ButtonBack = ({ className, colorIcon = 'black', bgColor = 'bg-light' }: Props) => {
    const navigate: any = useNavigation()
    return (
        <TouchableOpacity onPress={() => navigate.goBack()} className={`w-12 h-12 rounded-full ${bgColor} flex justify-center items-center ${className}`} >
            <Ionicons name="chevron-back-outline" size={24} color={colorIcon} />
        </TouchableOpacity>
    )
}

export default ButtonBack