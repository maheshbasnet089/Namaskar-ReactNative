import { NativeStackNavigationProp } from "@react-navigation/native-stack";


export type RootStackNavigatorParamsList = {
    Home : undefined, 
    Register : undefined, 
    Login : undefined
  }
export type NavigationProp = NativeStackNavigationProp<RootStackNavigatorParamsList>

export enum Status{
  Loading = 'loading', 
  Success = 'success', 
  Error = 'error'
}
