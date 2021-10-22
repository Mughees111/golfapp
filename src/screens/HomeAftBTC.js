import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Dimensions, Image } from 'react-native'
import { navigate } from '../../Navigations'
import { AppCol } from '../components/AppColors'
import CButton from '../components/CButton'
import { BtDisable, LiveLocationIcon, NotiBtn, PercentageIcon } from '../components/Svgs'


const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window')

const HomeAftBTC = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar
                backgroundColor="white"
                style="black"
            />
            <Image
                source={require('../assets/map.png')}
                style={{ width: "100%", height: "100%", resizeMode: 'stretch', position: 'absolute', }}
            />

            <View style={{ width: "100%", paddingTop: 10, height: 120, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', backgroundColor: 'white', borderBottomLeftRadius: 20, borderBottomRightRadius: 20, elevation: 3, shadowColor: 'rgba(172, 172, 172, 0.25)', shadowRadius: 8, shadowOpacity: 0.8 }}>
                <Text>              </Text>
                <Text style={{ fontSize: 22, color: 'CSM', color: AppCol.pC }}>Home</Text>
                <TouchableOpacity
                    onPress={() => navigate('Notifications')}
                >
                    <NotiBtn />
                </TouchableOpacity>
            </View>
            <View style={{ marginTop: 15, width: "85%", alignSelf: 'center', borderRadius: 27, backgroundColor: 'white', flexDirection: 'row', paddingVertical: 10, paddingHorizontal: 15, alignItems: 'center' }}>
                <Image
                    source={require('../assets/img2.png')}
                    style={{ resizeMode: 'contain' }}
                />
                <Text style={{ fontFamily: 'LR', fontSize: 11, color: AppCol.pC, marginLeft: 15 }}>Rangefinder Connected</Text>

                <PercentageIcon
                    style={{ position: 'absolute', right: 10 }}
                />
            </View>
            <View style={{ position: 'absolute', top: viewportHeight / 2.2, alignSelf: 'center' }}>
                <View style={{ width: 146, height: 55, backgroundColor: 'white', borderRadius: 27, alignItems: 'center', flexDirection: 'row', alignSelf: 'center', paddingHorizontal: 10 }}>
                    <Image
                        source={require('../assets/img3.png')}
                    />
                    <Text style={{fontFamily:'LR',fontSize:11,color:AppCol.pC,marginLeft:5}}>Current Location</Text>
                </View>
                <View style={{ alignSelf: 'flex-end',marginTop:10 }}>
                    <LiveLocationIcon />
                </View>
            </View>

            <CButton
                style={{ width: "90%", alignSelf: 'center', position: 'absolute', bottom: 20 }}
                title="Disonnect Device"
                onPress={() => navigate('Home')}
            />

        </View>
    )
}

export default HomeAftBTC
