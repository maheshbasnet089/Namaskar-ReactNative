import { useNavigation } from '@react-navigation/native'
import React from 'react'
import { ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import {NativeStackNavigationProp} from '@react-navigation/native-stack'
import { NavigationProp } from '../../types/global'

const Register = () => {
    const navigation = useNavigation<NavigationProp>()
    
  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }} keyboardShouldPersistTaps="handled">
    <View className="bg-white-300 h-full w-full flex justify-center items-center">
      {/***********************Title and form******************/}
      <View className="h-full w-full flex justify-around pt-10 pb-10">
        {/***************Title********************/}
        <View className="flex items-center mb-6">
          <Text className="text-green-600 font-bold tracking-wider text-4xl">Welcome</Text>
        </View>
        {/***************Form********************/}
        <View className="flex items-center mx-4 space-y-4">
          <View className="bg-gray-200 p-3 rounded-2xl w-full">
            <TextInput
              placeholder='First Name'
              placeholderTextColor={'gray'}


            />
          </View>
          <View className="bg-gray-200 p-3 rounded-2xl w-full">
            <TextInput
              placeholder='Last Name'
              placeholderTextColor={'gray'}
       
            />
          </View>
          <View className="bg-gray-200 p-3 rounded-2xl w-full">
            <TextInput
              placeholder='Email'
              placeholderTextColor={'gray'}
     
            />
          </View>
          <View className="bg-gray-200 p-3 rounded-2xl w-full">
            <TextInput
              placeholder='Address'
              placeholderTextColor={'gray'}
 
            />
          </View>
          <View className="bg-gray-200 p-3 rounded-2xl w-full">
            <TextInput
              placeholder='Password'
              placeholderTextColor={'gray'}
              secureTextEntry

            />
          </View>
          <View className="flex flex-row items-center justify-between w-full">
            <Text className="font-semibold">Choose your role</Text>
            <View className="flex flex-row space-x-4">
              <TouchableOpacity
                className={`p-2 rounded-md  bg-gray-200`}
              >
                <Text className="font-semibold">Seller</Text>
              </TouchableOpacity>
              <TouchableOpacity
                className={`p-2 rounded-md'bg-gray-200`}
           
              >
                <Text className="font-semibold">Consumer</Text>
              </TouchableOpacity>
            </View>
          </View>
          <View className="w-full">
            <TouchableOpacity className="w-full bg-green-600 p-3 rounded-2xl mb-3" 
            >
              <Text className="text-xl font-bold text-white text-center">Create Account</Text>
            </TouchableOpacity>
          </View>
          <View className="flex-row justify-center">
            <Text>Already have an account?</Text>
            <TouchableOpacity onPress={()=>navigation.navigate('Login')}>
              <Text  className="text-green-600 font-semibold"> Sign In</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  </ScrollView>
  )
}

export default Register