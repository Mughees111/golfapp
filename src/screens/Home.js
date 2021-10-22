import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { navigate } from '../../Navigations'
import { AppCol } from '../components/AppColors'
import CButton from '../components/CButton'
import { BtDisable, NotiBtn } from '../components/Svgs'


const { width:viewportWidth, height: viewportHeight } = Dimensions.get('window')

const Home = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar
                backgroundColor="white"
                style="black"
            />
            <View style={{ width: "100%", marginTop: 20, height: 100, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', backgroundColor: 'white', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, elevation: 3, shadowColor: 'rgba(172, 172, 172, 0.25)', shadowRadius: 8, shadowOpacity: 0.8 }}>
                <Text>              </Text>
                <Text style={{ fontSize: 22, color: 'CSM', color: AppCol.pC }}>Home</Text>
                <TouchableOpacity
                    onPress={()=>navigate('Notifications')}
                >
                    <NotiBtn />
                </TouchableOpacity>
            </View>
            <View style={{ alignSelf: 'center', flexDirection: 'row', alignItems: 'center', marginTop: viewportHeight / 2.8 }}>
                <BtDisable />
                <Text style={{ fontFamily: 'LR', fontSize: 14, color: '#000000' }}>No Device Connected</Text>
            </View>
            <CButton
                style={{width:"90%",alignSelf:'center',position: 'absolute',bottom:20}}
                title="Connect Device"
                onPress={()=>navigate('EnableBT')}
            />

        </View>
    )
}

export default Home
