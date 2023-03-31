import * as React from 'react';
import { View, Text, StyleProp, ViewStyle, TextStyle, StyleSheet, Button, ButtonProps } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { getHeaderTitle } from '@react-navigation/elements';
import {
  DrawerContentScrollView,
  DrawerItemList,
} from '@react-navigation/drawer'
import { color } from 'react-native-reanimated';
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
    <Drawer.Navigator useLegacyImplementation drawerContent={props=><CustomDrawer {...props}/>}  screenOptions={{
      drawerStyle: {
        backgroundColor: backgroundColor,
        width: width,
      }, 
      drawerPosition : drawerPosition,
      drawerType: animationTransition,
      overlayColor: 'transparent',
      drawerLabelStyle : drawerLabelStyle,
      drawerContentContainerStyle :drawerContentContainerStyle,
      drawerActiveBackgroundColor :'#aa18ea',
    }}>
      <Drawer.Screen name="Feed" component={Feed} options={{
          // drawerIcon: ({color}) => (
          //   <Ionicons name="home-outline" size={22} color={color} />
          // ),
          drawerItemStyle:{
            backgroundColor:'#8ca5db',
          },
          headerBackgroundContainerStyle:({alignContent:'center', })
        }}/>
      <Drawer.Screen name="Article" component={Article} options={{ drawerLabel: 'accessibilityLabelr' }}/>
    </Drawer.Navigator>
  );
}

const CustomDrawer = (props:any) => {
  function drawerHeader(title : string){
    return (<View style={Styles.drawerHeader}>
      <Text>
      {title}
      </Text>
  </View>);
  }

  function drawerFooter(buttonListProps : ButtonProps[]){
    return (<View style={Styles.drawerFooter}>
          {buttonListProps.map(btm => <Button title={btm.title} color={btm.color}
          onPress={btm.onPress} />)}
      </View>);
  }

  function makeBtnList(numOfItem: number){
    let buttonListProps : ButtonProps[] = [];
    for(let i =0; i< numOfItem; i++){
      buttonListProps.push({title: "item " +i, color : "#8ca5db" , onPress:()=> console.log("onPress", i)})
    }
    return buttonListProps;
  }
  return (
    <View style={Styles.container}>
      {drawerHeader("Drawer Header")}
      <View style={Styles.drawerContentScrollView}>
      <DrawerContentScrollView {...props} contentContainerStyle={Styles.container}>
        <DrawerItemList {...props}/>
      </DrawerContentScrollView>
      </View>
      {drawerFooter(makeBtnList(3))}
    </View>
  );
}

const Styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  drawerHeader:{
    flex: 1,
    paddingVertical: 25,
    backgroundColor: '#8ca5db',
    alignItems :'center'
  },
  drawerFooter:{
    flex: 3,
    flexDirection : 'row',
    // paddingBottom : 15,
    alignItems: 'flex-end',
    alignContent : 'space-between',
    backgroundColor: '#fff',
    flexWrap : 'nowrap',
  },
  drawerContentScrollView:{
    flex : 20
  },
  text: {
    fontSize: 30,
    color: '#000',
  },
});

// <View style={{flex: 1}}>
//       <DrawerContentScrollView
//         {...props}
//         contentContainerStyle={{backgroundColor: '#8200d6'}}>
//         <ImageBackground
//           source={require('../assets/images/menu-bg.jpeg')}
//           style={{padding: 20}}>
//           <Image
//             source={require('../assets/images/user-profile.jpg')}
//             style={{height: 80, width: 80, borderRadius: 40, marginBottom: 10}}
//           />
//           <Text
//             style={{
//               color: '#fff',
//               fontSize: 18,
//               fontFamily: 'Roboto-Medium',
//               marginBottom: 5,
//             }}>
//             John Doe
//           </Text>
//           <View style={{flexDirection: 'row'}}>
//             <Text
//               style={{
//                 color: '#fff',
//                 fontFamily: 'Roboto-Regular',
//                 marginRight: 5,
//               }}>
//               280 Coins
//             </Text>
//             <FontAwesome5 name="coins" size={14} color="#fff" />
//           </View>
//         </ImageBackground>
//         <View style={{flex: 1, backgroundColor: '#fff', paddingTop: 10}}>
//           <DrawerItemList {...props} />
//         </View>
//       </DrawerContentScrollView>
//       <View style={{padding: 20, borderTopWidth: 1, borderTopColor: '#ccc'}}>
//         <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
//           <View style={{flexDirection: 'row', alignItems: 'center'}}>
//             <Ionicons name="share-social-outline" size={22} />
//             <Text
//               style={{
//                 fontSize: 15,
//                 fontFamily: 'Roboto-Medium',
//                 marginLeft: 5,
//               }}>
//               Tell a Friend
//             </Text>
//           </View>
//         </TouchableOpacity>
//         <TouchableOpacity onPress={() => {}} style={{paddingVertical: 15}}>
//           <View style={{flexDirection: 'row', alignItems: 'center'}}>
//             <Ionicons name="exit-outline" size={22} />
//             <Text
//               style={{
//                 fontSize: 15,
//                 fontFamily: 'Roboto-Medium',
//                 marginLeft: 5,
//               }}>
//               Sign Out
//             </Text>
//           </View>
//         </TouchableOpacity>
//       </View>
//     </View>
export default function App() {
  return (
    <NavigationContainer >
      <MyDrawer  animationTransition='back' width={180} drawerPosition="right"  drawerLabelStyle={{borderBottomStartRadius: 50}}/>
    </NavigationContainer>
  );
}
