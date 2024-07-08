import { View, Text, SafeAreaView, Image, TouchableOpacity } from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import React from 'react';
import { useNavigation } from '@react-navigation/native';

export default function WelcomeScreen() {
  const navigation = useNavigation();
  return (
    <SafeAreaView className="flex-1 flex justify-around bg-white">
      <View className="space-y-2">
        <Text style={{fontSize: wp(10)}} className="text-center font-bold text-gray-700">
          Jarvis
        </Text>
        <Text style={{fontSize: wp(4)}} className="text-center tracking-wider text-gray-600 font-semibold">
          The Future is here
        </Text>
      </View>
      <View className="flex-row justify-center">
        <Image source={require('../../../assets/images/bot.png')} style={{width: wp(75), height: wp(75)}} className="w-72 h-72"></Image>
      </View>
      <TouchableOpacity onPress={()=>navigation.navigate('home')} className="bg-emerald-600 rounded-2xl p-4 mx-5 self-center">
        <Text className="text-white text-2xl font-semibold">Get Started</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}