import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'


type Props = {
    onPress?: () => void
    children: React.ReactNode
    className: string
}
const ButtonSecondary = ({ onPress, children, className }: Props) => {
    return (
        <TouchableOpacity className={` justify-center items-center border-2 border-primary background-transparent  ${className}`}
            activeOpacity={0.8}
            onPress={onPress}
        >
            {children}
        </TouchableOpacity>
    )

}

export default ButtonSecondary