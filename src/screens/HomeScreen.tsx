import React from 'react'
import { Image, ScrollView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

const HomeScreen = () => {
  return (
    <View className="bg-white h-full flex-1">
    <View className="bg-green-600 h-16 px-4 flex flex-row items-center">
      <View className="bg-white h-10 w-full rounded-lg flex flex-row items-center px-4">
        <TextInput placeholder='Search...'     
placeholderTextColor={'gray'} />
      </View>
    </View>
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      {/* Your content here ************************/}
      <View className="flex flex-row justify-center items-center my-5">
     
        <TouchableOpacity >
          <View className="flex flex-col items-center" style={{marginRight:45}}>
            <Image className="w-20 h-20 rounded-full" source={{}} />
            <Text className="text-lg font-bold text-gray-800 mt-2">Name</Text>
          </View>
        </TouchableOpacity>
      </View>


      <View className="px-2 bg-green-200 rounded-lg shadow-md mx-0 my-4">
      <View className="flex-row items-center justify-between px-4 py-2">
        <View className="flex-row items-center">
          <Text className="text-xl font-bold text-green-700 mr-2 text-shadow-md">Buy Now</Text>
          <AntDesign name="arrowright" size={22} color="#4D7C54" />
        </View>
      </View>
      <ScrollView horizontal={true} showsHorizontalScrollIndicator={false} className="mb-2">
        <View className="flex flex-row space-x-2 mx-2">
          <TouchableOpacity>
          <View className="rounded-lg overflow-hidden shadow-lg">
            <Image
              className="w-64 h-64"
              source={{uri : 'https://www.shutterstock.com/image-photo/fresh-fruits-260nw-372770197.jpg'}}
            />
          </View>
          </TouchableOpacity>
     
          <TouchableOpacity>
          <View className="rounded-lg overflow-hidden shadow-lg">
            <Image
              className="w-64 h-64"
              source={{uri : 'https://www.shutterstock.com/image-photo/fresh-fruits-260nw-372770197.jpg'}}
            />
          </View>
          </TouchableOpacity>
          <TouchableOpacity>
          <View className="rounded-lg overflow-hidden shadow-lg">
            <Image
              className="w-64 h-64"
              source={{uri : 'https://www.shutterstock.com/image-photo/fresh-fruits-260nw-372770197.jpg'}}
            />
          </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
      <Text className="text-base font-bold text-green-700 mb-4 mx-2">
        Buy Now to get it in discounted price.
      </Text>
    </View>

      {/***********************section for products****************************/}
      <View className="px-4 mt-4">
        <Text className="text-xl font-bold text-gray mb-4">Popular Products</Text>
        <View className="flex flex-row flex-wrap -mx-2">

            
            <View  className={`w-1/2 px-2  ''}`}>
              <View className="rounded-lg overflow-hidden shadow-md">
                <TouchableOpacity >
                  <Image className="w-full h-40 rounded-lg" source={{  }}/>
                  <Text className="text-sm font-semibold text-gray-700 mt-2 px-2"> </Text>
                </TouchableOpacity>
              </View>
            </View>

        </View>
      </View>
    


        <TouchableOpacity >
            <View className="bg-[#236b18] rounded-lg mx-2 mb-5 p-2 flex-row items-center" >
          <View className="flex-1 pr-2">
            <Text className="text-white font-bold text-base mb-1">First Name</Text>
            <Text className="text-white text-sm">LastName</Text>
            <View className="flex-row items-center mt-1">
              <Text className="text-white font-bold text-base mr-1">4.0</Text>
              <View className="flex-row">
                <MaterialIcons name="star" size={16} color="yellow" />
                <MaterialIcons name="star" size={16} color="yellow" />
                <MaterialIcons name="star" size={16} color="yellow" />
                <MaterialIcons name="star" size={16} color="yellow" />
                <FontAwesome name="star-half" size={16} color="yellow" />
              </View>
              <Text className="text-white text-sm ml-1">(12)</Text>
            </View>
          </View>
          
          <Image source={{}} style={{ width: 80, height: 80 }} />
        </View>
        </TouchableOpacity>

    </ScrollView>

    {/* Fixed icons at the bottom of the screen */}
    <View style={{ bottom: 0, left: 0, right: 0 }}>
      <View className="bg-white h-16 px-4 flex flex-row items-center justify-between">
        <View>
          <TouchableOpacity >
            <Entypo name="home" color={"green"} size={22}/>
            <Text className="text-xs font-bold text-green"> Home</Text>
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity >
            <MaterialIcons name="payment" color={"black"} size={22}/>
            <Text className="text-xs font-bold text-black"> Payment</Text>      
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity >
            <Entypo name="location-pin" color={"black"} size={22}/>
            <Text className="text-xs font-bold text-black"> Location</Text>     
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity >
            <Entypo name="shopping-cart" color={"black"} size={22}/>
            <Text className="text-xs font-bold text-black"> My Cart</Text>     
          </TouchableOpacity>
        </View>
        <View>
          <TouchableOpacity>
            <MaterialCommunityIcons name="account" color={"black"} size={22}/>
            <Text className="text-xs font-bold text-black"> Account</Text>   
          </TouchableOpacity>
        </View>
      </View>
    </View>
  </View>
  )
}

export default HomeScreen