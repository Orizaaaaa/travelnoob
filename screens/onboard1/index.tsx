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
                        <View key={index}

                            style={[
                                styles.indicator,
                                currentSlideIndex == index && {
                                    backgroundColor: COLORS.white,
                                    width: 25,
                                    height: 5,
                                },
                            ]}
                        />
                    ))}
                </View>

                {/* Render buttons */}
                <View className='mb-5'>
                    {currentSlideIndex == slidesAsset.length - 1 ? (
                        <View className='h-12'>
                            <TouchableOpacity
                                style={styles.btn}
                                onPress={() => navigation.replace('home')}>
                                <Text className='font-bold '>
                                    GET STARTED
                                </Text>
                            </TouchableOpacity>
                        </View>
                    ) : (

                        <View className='flex-row ' >

                            <TouchableOpacity className='color-white flex-1 justify-center items-center h-12 border-2 rounded-md border-white background-transparent '
                                activeOpacity={0.8}
                                onPress={skip}>
                                <Text className='font-bold text-white'>
                                    SKIP
                                </Text>
                            </TouchableOpacity>

                            <View style={{ width: 15 }} />

                            <TouchableOpacity className='color-white flex justify-center items-center flex-1 h-12 rounded-md bg-white'
                                activeOpacity={0.8}
                                onPress={goToNextSlide}
                            >
                                <Text className='font-bold '>
                                    NEXT
                                </Text>
                            </TouchableOpacity>
                        </View>
                    )}
                </View>
            </View >
        );
    };

    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.primary }}>
            <StatusBar backgroundColor={COLORS.primary} />
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
            <Footer />
        </SafeAreaView>
    );
};


export default OnboardScreen;