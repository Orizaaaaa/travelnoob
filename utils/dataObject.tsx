import { Dimensions, Image, StyleSheet, Text, View } from "react-native";

export const Slide = ({ item }: any) => {
    return (
        <View className='flex-1  items-center justify-start' style={{ width: screenWidth }} >
            <Image source={item?.image}
                style={{ width: screenWidth }}
                resizeMode="cover"
                className="h-96 rounded-b-[30px]"
            />
            <View className="py-6 px-6 space-y-6 " >
                <Text className="font-Geometric text-4xl text-black text-center">{item?.title}{item?.textHero}</Text>
                <Text className="text-gray-600 font-Gil text-xl text-center py-6" >{item?.subtitle}</Text>
            </View>
        </View>
    );
};

const screenWidth = Math.round(Dimensions.get("window").width);
const screenHeight = Math.round(Dimensions.get("window").height);

export const COLORS = { primary: '#282534', white: '#fff' };
export const styles = StyleSheet.create({
    subtitle: {
        color: COLORS.white,
        fontSize: 13,
        marginTop: 10,
        maxWidth: '70%',
        textAlign: 'center',
        lineHeight: 23,
    },
    title: {
        color: COLORS.white,
        fontSize: 22,
        fontWeight: 'bold',
        marginTop: 20,
        textAlign: 'center',
    },
    image: {
        height: '100%',
        width: '100%',
        resizeMode: 'contain',
    },
    indicator: {
        height: 5,
        width: 10,
        backgroundColor: 'grey',
        marginHorizontal: 3,
        borderRadius: 2,
    },
    btn: {
        flex: 1,
        height: 50,
        borderRadius: 5,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
});


export const slidesAsset = [
    {
        id: '1',
        image: require('../assets/images/onboard1.png'),
        title: `Life is short and the world is `,
        textHero: <Text className="text-4xl font-Geometric underline text-orange-500" >wide</Text>,
        subtitle: 'At friens tours and travel, we customize realible and truthworthy educational tours to destinations all over the world. ',
    },
    {
        id: '2',
        image: require('../assets/images/onboard2.png'),
        title: 'Achieve Your Goals',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },
    {
        id: '3',
        image: require('../assets/images/onboard3.png'),
        title: 'Increase Your Value',
        subtitle: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    },

];