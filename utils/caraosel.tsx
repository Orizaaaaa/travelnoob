import { Dimensions, Image, StyleSheet, Text, TouchableOpacity, View } from "react-native";
const screenWidth = Math.round(Dimensions.get("window").width);
import { FontAwesome } from '@expo/vector-icons';
import { EvilIcons } from '@expo/vector-icons';


export const Slide = ({ item, onPress }: any) => {
    return (

        <View className='flex-1  items-center justify-start m-4 rounded-[20px] p-3 ' style={styles.container}  >
            <TouchableOpacity onPress={onPress}>
                <Image source={item?.image}
                    resizeMode="cover"
                    className="h-80 w-64 rounded-[20px] "
                />
                <View className="flex-row items-center justify-between w-full mt-3" >
                    <Text className="text-lg" >Niladri Reservoirr</Text>
                    <View className="flex-row items-center space-x-1" >
                        <FontAwesome name="star" size={24} color="#FFD336" />
                        <Text className="text-lg font-Inter" >4.7</Text>
                    </View>
                </View>
                <View className="flex-row items-center justify-start w-full mt-2" >
                    <EvilIcons name="location" size={20} color="black" />
                    <Text className="font-Inter text-gray-500" >Lembang, Kab Band..</Text>
                </View>
            </TouchableOpacity>
        </View>

    );
};


export const slidesAsset = [
    {
        id: '1',
        image: require('../assets/images/onboard1.png'),
        title: 'Life is short and the world is ',
        textHero: <Text className="text-4xl font-Geometric underline text-orange-500" >wide</Text>,
        subtitle: 'At friens tours and travel, we customize realible and truthworthy educational tours to destinations all over the world. ',
    },
    {
        id: '2',
        image: require('../assets/images/onboard2.png'),
        title: 'It`s a big world out there go ',
        textHero: <Text className="text-4xl font-Geometric underline text-orange-500" >explore</Text>,
        subtitle: 'To get the best of your adventure you just need to leave and go where you like. we are waiting for you',
    },
    {
        id: '3',
        image: require('../assets/images/onboard3.png'),
        title: 'People don`t take trips, trips take ',
        textHero: <Text className="text-4xl font-Geometric underline text-orange-500" >People</Text>,
        subtitle: 'To get the best of your adventure you just need to leave and go where you like. we are waiting for you ',
    },

];


const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.15,
        shadowRadius: 0.54,
        elevation: 0.8, // hanya berlaku untuk platform Android
    },

});


