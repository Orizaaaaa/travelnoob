import { View, Text, ScrollView, TouchableOpacity, Button, Dimensions, Image, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import { Ionicons } from '@expo/vector-icons';
import ButtonBack from '../../components/elements/buttonBack';
import { useNavigation } from '@react-navigation/native';
import UserInput from '../../components/elements/input/authInput';
import ButtonPrimary from '../../components/elements/buttonPrimary';
import { connection } from '../../utils/dataObject';


const LoginScreen = () => {
    const navigation: any = useNavigation();
    const screenWidth = Math.round(Dimensions.get("window").width)

    // formData
    const [formData, setFormData] = useState({
        email: '',
        password: ''
    })
    const handleChange = (name: string, text: string) => {
        setFormData({ ...formData, [name]: text });
    };

    // validation regex
    const [emailValidate, setEmailValidate] = useState(true)
    useEffect(() => {
        if (formData.email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            setEmailValidate(emailRegex.test(formData.email));
        }
    }, [formData.email]);

    const [alert, setAlert] = useState(false)

    return (
        <ScrollView className='px-4 py-4 bg-white' >
            <ButtonBack />

            <View className='py-14' >
                <View className='flex justify-center items-center space-y-3' >
                    <Text className='text-4xl font-bold font-Inter' >Sign in now</Text>
                    <Text className=' text-gray-500 text-lg font-Inter' >Please sign in to continue our app</Text>
                </View>
            </View>

            {/* login form */}
            <View className='flex-1 items-center justify-center space-y-6' >
                <View className='w-full flex items-center justify-center' >
                    <UserInput placeholder='Email' value={formData.email} onChangeText={(text) => handleChange('email', text)} isPass={false}
                        border={emailValidate ? 'border-gray-200' : 'border-red-500'} />
                </View>

                <View className='w-full flex items-center justify-center' >
                    <UserInput placeholder='Password' value={formData.password} onChangeText={(text) => handleChange('password', text)} isPass={true} />
                </View>

                <View className='w-full flex items-end justify-end' >
                    <TouchableOpacity>
                        <Text className='text-orange-500 font-Inter' >Forget Password ?</Text>
                    </TouchableOpacity>
                </View>

                <View className='w-full flex items-end justify-end' >
                    <ButtonPrimary className='h-14 w-full' >
                        <Text className='text-lg font-medium text-white' >Sign In</Text>
                    </ButtonPrimary>
                </View>
            </View>

            {/* footer */}
            <View className='flex w-full pt-10 flex-row items-center justify-center space-x-2' >
                <Text className='text-gray-500 font-Inter' > Don't have an account?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("signup")}>
                    <Text className='text-orange-500 font-semibold ' >Sign Up</Text>
                </TouchableOpacity>
            </View>

            <View className='flex w-full pt-5 flex-row items-center justify-center '>
                <Text className=' text-gray-500 font-Inter' >
                    Or Conect
                </Text>
            </View>

            <View className='flex w-full pt-6 flex-row items-center justify-center '>
                <View className='flex-row space-x-6'>
                    {connection.map((items, index) => (
                        <TouchableOpacity key={index} onPress={() => Linking.openURL(items.link)}>
                            <Image resizeMode='contain' source={items.icon} className='w-10 h-10' />
                        </TouchableOpacity>
                    ))}
                </View>
            </View>


        </ScrollView>
    )
}

export default LoginScreen