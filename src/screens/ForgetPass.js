import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, View, Text, SafeAreaView } from 'react-native';
import { BackButton } from '../components/Svgs';
import { AppCol } from '../components/AppColors';
import CTextInput from '../components/CTextInput';
import CButton from '../components/CButton';
import { goBack, navigate } from '../../Navigations';

const ForgetPass = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar
                backgroundColor="white"
                style="dark" />
            <SafeAreaView style={{ width: "90%", alignSelf: 'center' }}>
                <TouchableOpacity
                    onPress={() => goBack()}
                    style={{ marginTop: 10 }}>
                    <BackButton />
                </TouchableOpacity>
                <Text style={{ fontFamily: 'CSB', fontSize: 22, color: AppCol.pC, marginTop: 20 }}>Forgot Password?</Text>
                <Text style={{ fontFamily: 'CSB', fontSize: 14, color: '#4F4F4F', marginTop: 5 }}>Don’t worry. We have got you covered. Enter your
                    registered email and we will send instructions to
                    reset your password.
                </Text>
                <CTextInput
                    style={{ borderColor: 'rgba(0, 164, 40, 0.4)', marginTop: 30 }}
                    placeholder="Enter Email"
                    placeholderTextColor="#E0E0E0"
                />
                <CButton
                    style={{ backgroundColor: AppCol.pC, marginTop: 35 }}
                    title="Submit"
                    textStyle={{ color: 'white' }}
                    onPress={() => { navigate('NewPass') }}
                />
            </SafeAreaView>

        </View>
    )
}

export default ForgetPass
