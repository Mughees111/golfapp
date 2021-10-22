import React from 'react'
import { StatusBar } from 'expo-status-bar';
import { TouchableOpacity, View, Text, SafeAreaView } from 'react-native';
import { BackButton } from '../components/Svgs';
import { AppCol } from '../components/AppColors';
import CTextInput from '../components/CTextInput';
import CButton from '../components/CButton';
import { goBack, navigate } from '../../Navigations';

const PasswordChanged = () => {
    return (
        <View style={{ flex: 1, backgroundColor: 'white',alignItems:'center',justifyContent:'center',flexDirection:'row' }}>
            <StatusBar
                backgroundColor="white"
                style="dark" />
            <SafeAreaView style={{ width: "90%", alignSelf: 'center' }}>
                
                <Text style={{ fontFamily: 'CSB', fontSize: 22, color: AppCol.pC, marginTop: 20,alignSelf:"center",textAlign:'center' }}>Congratulations!</Text>
                <Text style={{ fontFamily: 'CSB', fontSize: 14, color: '#4F4F4F', marginTop: 10,alignSelf:"center",textAlign:'center' }}>Your password has been changed sucessfully</Text>
               
                <CButton
                    style={{  marginTop: 40 }}
                    title="Log In"
                    textStyle={{ color: 'white' }}
                    onPress={() => { navigate('Login') }}
                />
            </SafeAreaView>

        </View>
    )
}

export default PasswordChanged
