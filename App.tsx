import * as React from 'react';
import { View, Text, StyleProp, ViewStyle, TextStyle } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { getHeaderTitle } from '@react-navigation/elements';
// import {RouteConfigComponent} from '@react-navigation/drawer/src/types'

function Feed() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Feed Screen</Text>
    </View>
  );
}

function Article() {
  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
      <Text>Article Screen</Text>
    </View>
  );
}

const Drawer = createDrawerNavigator();

interface DrawerParms{
  backgroundColor?: string,
  width? : number,
  drawerPosition? : 'left' | 'right',
  animationTransition?: 'front' | 'back' | 'slide' | 'permanent',
  drawerContentContainerStyle?:  StyleProp<ViewStyle>,
  drawerLabelStyle?: StyleProp<TextStyle>,
  // component : ScreenComponentType<ParamList, RouteName>;
}
function MyDrawer(param : DrawerParms) {
  const {backgroundColor, width, drawerPosition, animationTransition, drawerLabelStyle, drawerContentContainerStyle} =  param;
  return (
    <Drawer.Navigator useLegacyImplementation   screenOptions={{
      drawerStyle: {
        backgroundColor: backgroundColor,
        width: width,
      }, 
      drawerPosition : drawerPosition,
      drawerType: animationTransition,
      overlayColor: 'transparent',
      drawerLabelStyle : drawerLabelStyle,
      drawerContentContainerStyle :drawerContentContainerStyle,
    }}>
      <Drawer.Screen name="Feed" component={Feed} />
      <Drawer.Screen name="Article" component={Article} options={{ drawerLabel: 'accessibilityLabelr' }}/>
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <NavigationContainer >
      <MyDrawer  animationTransition='back' width={220} drawerPosition="right"  drawerLabelStyle={{borderBottomStartRadius: 50}}/>
    </NavigationContainer>
  );
}
