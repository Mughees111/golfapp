import { StatusBar } from 'expo-status-bar'
import React from 'react'
import { SafeAreaView, View, Text, TouchableOpacity, Dimensions } from 'react-native'
import { goBack, navigate } from '../../Navigations'
import { AppCol } from '../components/AppColors'
import CButton from '../components/CButton'
import { ArrowBack, BtDisable, NotiBtn } from '../components/Svgs'


const { width: viewportWidth, height: viewportHeight } = Dimensions.get('window')

const Notifications = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar
                backgroundColor="white"
                style="black"
            />
            <View style={{ paddingHorizontal: 20, width: "100%", marginTop: 20, height: 100, alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', backgroundColor: 'white', borderBottomLeftRadius: 10, borderBottomRightRadius: 10, elevation: 3, shadowColor: 'rgba(172, 172, 172, 0.25)', shadowRadius: 8, shadowOpacity: 0.8 }}>
                <TouchableOpacity
                    onPress={() => goBack()}
                >
                    <ArrowBack />
                </TouchableOpacity>
                <Text style={{ fontSize: 22, color: 'CSM', color: AppCol.pC }}>Notifications</Text>
                <Text>     </Text>

            </View>
            <View style={{ width: "90%", alignSelf: 'center' }}>

                <TouchableOpacity style={{ paddingHorizontal: 15, width: "100%", paddingVertical: 20, backgroundColor: 'rgba(0, 0, 0, 0.06)', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', borderRadius: 10, marginTop: 25 }}>
                    <Text style={{ fontFamily: 'LR', fontSize: 12, color: "#454545" }}>Device is 100 yards away. </Text>
                    <Text style={{ fontFamily: 'LR', fontSize: 12, color: "#000000" }}>View Location</Text>
                </TouchableOpacity>
                <TouchableOpacity style={{ paddingHorizontal: 15, width: "100%", paddingVertical: 20, backgroundColor: 'rgba(0, 0, 0, 0.06)', alignItems: 'center', justifyContent: 'space-between', flexDirection: 'row', borderRadius: 10, marginTop: 15 }}>
                    <Text style={{ fontFamily: 'LR', fontSize: 12, color: "#454545" }}>Device is disconnected.</Text>
                    <Text style={{ fontFamily: 'LR', fontSize: 12, color: "#000000" }}>View Location</Text>
                </TouchableOpacity>
            </View>

            <CButton
                style={{ width: "90%", alignSelf: 'center', position: 'absolute', bottom: 20 }}
                title="Connect Device"
                onPress={() => navigate('EnableBT')}
            />

        </View>
    )
}

export default Notifications
