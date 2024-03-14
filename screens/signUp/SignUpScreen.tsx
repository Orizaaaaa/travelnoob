import { View, Text, Dimensions, ScrollView, TouchableOpacity, Image, Linking } from 'react-native'
import React, { useEffect, useState } from 'react'
import { useNavigation } from '@react-navigation/native';
import ButtonBack from '../../components/elements/buttonBack';
import UserInput from '../../components/elements/input/authInput';
import ButtonPrimary from '../../components/elements/buttonPrimary';
import { connection } from '../../utils/dataObject';

const SignUpScreen = () => {
    const navigation: any = useNavigation();
    const screenWidth = Math.round(Dimensions.get("window").width)
    const screenHeight = Dimensions.get("window").height

    // form data input
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        password: ''
    })

    const handleChange = (name: string, text: string) => {
        setFormData({ ...formData, [name]: text });
    };



    // email regex
    const [validation, setValidation] = useState({
        email: true,
        password: true
    })
    useEffect(() => {
        if (formData.email) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            setValidation(prevValidation => ({
                ...prevValidation,
                email: emailRegex.test(formData.email)
            }))
        } else if (formData.password) {
            const passwordRegex = /^.{8,}$/
            setValidation(prevValidation => ({
                ...prevValidation,
                password: passwordRegex.test(formData.password)
            }))

        }
    }, [formData.email, formData.password]);


    // send signUp data with firebase

    return (
        <ScrollView className='flex-1 px-4 py-4 bg-white' >
            <ButtonBack />

            <View className='py-8' >
                <View className='flex justify-center items-center space-y-3' >
                    <Text className='text-4xl font-bold font-Inter' >Sign up now</Text>
                    <Text className=' text-gray-500 text-lg font-Inter' >Please fill the details and create account</Text>
                </View>
            </View>

            {/* login form */}
            <View className='flex-1 items-center justify-center space-y-6' >
                <View className='w-full flex items-center justify-center' >
                    <UserInput placeholder='Full Name' value={formData.fullName} onChangeText={(text) => handleChange('fullName', text)} isPass={false} />
                </View>

                <View className='w-full flex items-center justify-center' >
                    <UserInput placeholder='Email' value={formData.email} onChangeText={(text) => handleChange('email', text)} isPass={false}
                        border={validation.email ? 'border-gray-200' : 'border-red-500'} />
                </View>

                <View className='w-full flex items-center justify-center' >
                    <UserInput placeholder='Password' value={formData.password} onChangeText={(text) => handleChange('password', text)} isPass={true}
                        border={validation.password ? 'border-gray-200' : 'border-red-500'} />
                </View>

                <View className='w-full flex items-start justify-center' >
                    <TouchableOpacity>
                        <Text className={`font-Inter ${validation.password ? 'text-gray-500' : 'text-red-500'}`} >Password must be 8 character</Text>
                    </TouchableOpacity>
                </View>

                <View className='w-full flex items-end justify-end' >
                    <ButtonPrimary className='h-14 w-full rounded-xl' >
                        <Text className='text-lg font-medium text-white' >Sign Up</Text>
                    </ButtonPrimary>
                </View>
            </View>

            {/* footer */}
            <View className='flex w-full pt-10 flex-row items-center justify-center space-x-2' >
                <Text className='text-gray-500 font-Inter' > Already have an accoun?</Text>
                <TouchableOpacity onPress={() => navigation.navigate("login")}>
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

export default SignUpScreen