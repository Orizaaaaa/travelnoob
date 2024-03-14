import React, { useRef } from 'react';
import {
    SafeAreaView,
    Image,
    StyleSheet,
    FlatList,
    View,
    Text,
    StatusBar,
    TouchableOpacity,
    Dimensions,
} from 'react-native';
import { Slide, slidesAsset, styles } from '../../utils/dataObject';
import ButtonPrimary from '../../components/elements/button';

const { width, height } = Dimensions.get('window');

const COLORS = { primary: '#282534', white: '#fff' };




const OnboardScreen = ({ navigation }: any) => {

    const [currentSlideIndex, setCurrentSlideIndex] = React.useState(0);
    const ref: any = useRef();
    const updateCurrentSlideIndex = (e: any) => {
        const contentOffsetX = e.nativeEvent.contentOffset.x;
        const currentIndex = Math.round(contentOffsetX / width);
        setCurrentSlideIndex(currentIndex);
    };

    const goToNextSlide = () => {
        const nextSlideIndex = currentSlideIndex + 1;
        if (nextSlideIndex != slidesAsset.length) {
            const offset = nextSlideIndex * width;
            ref?.current.scrollToOffset({ offset });
            setCurrentSlideIndex(currentSlideIndex + 1);
        }
    };

    const skip = () => {
        const lastSlideIndex = slidesAsset.length - 1;
        const offset = lastSlideIndex * width;
        ref?.current.scrollToOffset({ offset });
        setCurrentSlideIndex(lastSlideIndex);
    };



    const Footer = () => {
        return (
            <View className='justify-between h-40 px-5' >

                {/* Indicator container */}
                <View className='flex-row justify-center mt-10'>

                    {/* Render indicator */}
                    {slidesAsset.map((_, index) => (
                        <View key={index} className='bg-primary'
                            style={[styles.indicator, currentSlideIndex == index && { width: 34, height: 8, },]}
                        />
                    ))}
                </View>

                {/* Render buttons */}
                <View className='mb-5'>
                    {currentSlideIndex == slidesAsset.length - 1 ? (
                        <View className='h-12'>
                            <ButtonPrimary onPress={() => navigation.replace('login')} className='flex-1 h-12'>
                                <Text className='font-bold text-white'>
                                    GET STARTED
                                </Text>
                            </ButtonPrimary>
                        </View>
                    ) : (

                        <View className='flex-row ' >

                            <TouchableOpacity className='color-white flex-1 justify-center items-center h-12 border-2 rounded-md border-primary background-transparent '
                                activeOpacity={0.8}
                                onPress={skip}>
                                <Text className='font-bold text-black'>
                                    SKIP
                                </Text>
                            </TouchableOpacity>

                            <View style={{ width: 15 }} />

                            <ButtonPrimary onPress={goToNextSlide} className='flex-1 h-12'>
                                <Text className='font-bold text-white'>
                                    NEXT
                                </Text>
                            </ButtonPrimary>
                        </View>
                    )}
                </View>
            </View >
        );
    };

    return (
        <SafeAreaView className='flex-1 bg-white' >
            <StatusBar backgroundColor={COLORS.primary} />
            <View className='flex-1 items-center justify-start ' >
                <FlatList
                    ref={ref}
                    onMomentumScrollEnd={updateCurrentSlideIndex}
                    contentContainerStyle={{ height: height * 0.75 }}
                    showsHorizontalScrollIndicator={false}
                    horizontal
                    data={slidesAsset}
                    pagingEnabled
                    renderItem={({ item }) => <Slide item={item} />}
                />

            </View>
            <Footer />

        </SafeAreaView>
    );
};


export default OnboardScreen;