import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Dimensions,Image } from 'react-native'
import { goBack, navigate } from '../../Navigations'
import { AppCol } from '../components/AppColors'
import CButton from '../components/CButton'
import { BackButton, BtDisable, NotiBtn } from '../components/Svgs'


const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window')

const EnableBT = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar
                backgroundColor="white"
                style="black"
            />
            <View style={{ width: "90%", alignSelf: 'center',marginTop:10 }}>
                <TouchableOpacity
                    onPress={()=>goBack()}
                >
                    <BackButton />
                </TouchableOpacity>
            </View>
            <View style={{ alignSelf: 'center', marginTop: viewportHeight / 4 }}>
                <Image
                    source={require('../assets/BTimg.png')}
                    style={{alignSelf:'center'}}
                />
                <Text style={{ fontFamily: 'CSB', fontSize: 22, color: AppCol.pC,marginTop:15 ,textAlign:'center'}}>Enable Bluetooth</Text>
                <Text style={{ fontFamily: 'LR', fontSize: 14, color: '#4F4F4F',marginTop:10 }}>This app uses Bluetooth for Tracking Device</Text>
            </View>
            <CButton
                style={{ width: "90%", alignSelf: 'center', position: 'absolute', bottom: 20 }}
                title="Turn On Bluetooth"
                onPress={()=>navigate('TurnedOn')}
            />

        </SafeAreaView>
    )
}

export default EnableBT
