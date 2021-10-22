import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, View, Text, SafeAreaView } from 'react-native';
import { BackButton } from '../components/Svgs';
import { AppCol } from '../components/AppColors';
import CTextInput from '../components/CTextInput';
import CButton from '../components/CButton';
import { goBack, navigate } from '../../Navigations';

const NewPass = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white' }}>
            <StatusBar
                backgroundColor="white"
                style="dark" />
            <SafeAreaView style={{ width: "90%", alignSelf: 'center' }}>
                <TouchableOpacity 
                    onPress={()=>goBack()}
                    style={{ marginTop: 10 }}>
                    <BackButton />
                </TouchableOpacity>
                <Text style={{ fontFamily: 'CSB', fontSize: 22, color: AppCol.pC, marginTop: 20 }}>Enter new password</Text>
                <Text style={{ fontFamily: 'CSB', fontSize: 14, color: '#4F4F4F', marginTop: 5 }}>Let's reset your password so you can get back to the money!</Text>
                <CTextInput
                    style={{ borderColor: 'rgba(0, 164, 40, 0.4)', marginTop: 30 }}
                    placeholder="Enter Email"
                    placeholderTextColor="#E0E0E0"
                />
                <CTextInput
                    style={{ borderColor: 'rgba(0, 164, 40, 0.4)', marginTop: 10 }}
                    placeholder="Confirm your new password"
                    placeholderTextColor="#E0E0E0"
                />
                <CButton
                    style={{ backgroundColor: AppCol.pC, marginTop: 35 }}
                    title="Save"
                    textStyle={{ color: 'white' }}
                    onPress={()=>navigate('PasswordChanged')}
                />
            </SafeAreaView>

        </View>
    )
}

export default NewPass
