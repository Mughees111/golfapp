import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Dimensions, Image } from 'react-native'
import { goBack, navigate } from '../../Navigations'
import { AppCol } from '../components/AppColors'
import CButton from '../components/CButton'
import { BackButton, BtDisable, NotiBtn } from '../components/Svgs'


const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window')

const TurnedOn = () => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar
                backgroundColor="white"
                style="black"
            />
           
            <View style={{ width: "90%", alignSelf: 'center', marginTop: viewportHeight / 5 }}>
                <Image
                    source={require('../assets/turnedOn.png')}
                    style={{ alignSelf: 'center' }}
                />
                <Text style={{ fontFamily: 'CSB', fontSize: 22, color: AppCol.pC, marginTop: 15, textAlign: 'center' }}>Device Connected</Text>
                <View style={{width:"100%",paddingVertical:20,backgroundColor:'rgba(0, 0, 0, 0.06)',alignItems:'center',justifyContent:'center',borderRadius:10,marginTop:25}}>
                    <Text style={{fontFamily:'LR',fontSize:14,color:"#000000"}}>LASER RANGEFINDER - BR 650 WHITE</Text>
                </View>
            </View>
            <CButton
                style={{ width: "90%", alignSelf: 'center', position: 'absolute', bottom: 20 }}
                title="Track Location"
                onPress={() => navigate('HomeAftBTC')}
            />

        </SafeAreaView>
    )
}

export default TurnedOn
