import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from 'react-native';
import { useRouter } from 'expo-router';
import Features from '../../../components/Features.tsx'
import { useState } from 'react';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
import { dummyData } from '../../../constants/index.ts';
export default function HomeScreen() {
  const router = useRouter();
  const [messages, setMessages] = useState(dummyData);
  const [recording, setRecording] = useState(false);
  const [speaking, setSpeaking] = useState(true);

  const clear = () =>{
    setMessages([]);
  }

  const stopSpeaking = () => {
    setSpeaking(false);
  }
  return (
      <View className="flex-1 bg-white">
        <SafeAreaView className="flex-1 flex mx-5" >
          <View className="flex-row justify-center">
            <Image source={require('../../../assets/images/bot-home.png') } style={{width: hp(15), height: hp(15)}} >
            </Image>
          </View>
          {
            messages.length>0?(
              <View className="messages-y-2 flex-1">
              <Text style={{ fontSize: wp(5) }} className="text-gray-700 font-semibold ml-1">
                Assistant
              </Text>
              <View style={{ height: hp(58) }} className="bg-neutral-200 rounded-3xl p-4 mt-2">
                <ScrollView
                  bounces={false}
                  className="space-y-4"
                  showsVerticalScrollIndicator={false}
                >
                  {messages.map((message, index) => (
                    <View key={index}>
                      {message.role === "assistant" ? (
                        <>
                          {message.content.includes("https") ? (
                            <View key={index} className="flex-row justify-start">
                              <View className="p-2 flex rounded-2xl bg-emerald-100 rounded-tl-none">
                                <Image 
                                  source={{ uri: message.content }}
                                  className="rounded-xl"
                                  resizeMode="contain"
                                  style={{height: wp(60), width:wp(60)}}
                                />
                              </View>
                            </View>
                          ) : (
                            // text response
                            <View 
                              key={index}
                              style={{ width: wp(70) }}
                              className="bg-emerald-100 rounded-xl p-2 rounded-tr-none">
                              <Text>{message.content}</Text>
                            </View>
                          )}
                        </>
                      ) : (
                        // user input
                        <View key={index} className="flex-row justify-end">
                          <View 
                            style={{ width: wp(70) }}
                            className="bg-white rounded-xl p-2 rounded-tr-none">
                            <Text>{message.content}</Text>
                          </View>
                        </View>
                      )}
                    </View>
                  ))}
                </ScrollView>
              </View>
            </View>
            ):(
              <Features/>

            )
          }
          {/* recording, clear and stop buttons */}
          <View className="flex justify-center items-center">

            {recording ? (
              <TouchableOpacity>
                <Image
                  className="rounded-full"
                  source={require('../../../assets/images/voiceLoading.gif')}
                  style={{ width: hp(7), height: hp(7) }}
                />
              </TouchableOpacity>
            ) : (
              <TouchableOpacity>
                <Image
                  className="rounded-full"
                  source={require('../../../assets/images/recordingIcon.png')}
                  style={{ width: hp(7), height: hp(7) }}
                />
              </TouchableOpacity>
            )}

            {
              messages.length > 0 && (
                <TouchableOpacity onPress={clear} className="bg-neutral-400 rounded-3xl p-2 absolute right-10">
                    <Text className="text-white font-semibold">Clear</Text>
                </TouchableOpacity>
              )
            }

            {
              speaking && (
                <TouchableOpacity onPress={stopSpeaking} className="bg-red-400 rounded-3xl p-2 absolute left-10">
                    <Text className="text-white font-semibold">Stop</Text>
                </TouchableOpacity>
              )
            }
          </View>
        </SafeAreaView>
      </View>
  );
}