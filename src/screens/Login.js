import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ImageBackground, ScrollView, Text, View, Image, SafeAreaView, TouchableOpacity, Alert, ScrollViewBase } from 'react-native';
import { navigate } from '../../Navigations';
import { AppCol } from '../components/AppColors';
import CButton from '../components/CButton';
import CTextInput from '../components/CTextInput';
import { EyeShow } from '../components/Svgs';



const Login = () => {

    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [showPass, setShowPass] = useState(true)

    return (
        <View stye={{ flex: 1 }}>
            <StatusBar style="light" />
            <ImageBackground
                source={require('../assets/bg1.png')}
                style={{ width: "100%", height: "100%", }}
                resizeMode="stretch"
            >
                <SafeAreaView style={{ marginTop: 20, width: "90%", alignSelf: 'center' }}>
                    <Image
                        style={{ width: "100%", resizeMode: 'stretch', marginTop: 20 }}
                        source={require('../assets/img1.png')}
                    />
                    <ScrollView contentContainerStyle={{paddingBottom:100}} >
                        <Text style={{ fontFamily: 'CSM', fontSize: 22, color: AppCol.pC, marginTop: 30 }}>Welcome back!</Text>
                        <Text style={{ fontFamily: 'CSB', fontSize: 14, color: '#E0E0E0', marginTop: 5 }}>Enter email & password to continue    </Text>
                        <CTextInput
                            placeholder="Email"
                            value={email}
                            onChangeText={(v) => { setEmail(v) }}
                            keyboardType="email-address"
                            style={{ marginTop: 20 }}
                        />
                        <View style={{ marginTop: 5, flexDirection: 'row', }}>
                            <CTextInput
                                placeholder="Password"
                                value={pass}
                                onChangeText={(v) => { setPass(v) }}
                                secureTextEntry={showPass}
                            />
                            <TouchableOpacity
                                onPress={() => { setShowPass(!showPass) }}
                                style={{ position: 'absolute', alignSelf: 'center', right: 5, padding: 10, top: 10 }}>
                                <EyeShow />
                            </TouchableOpacity>
                        </View>
                        <TouchableOpacity style={{ padding: 10 }}>
                            <Text style={{ color: '#E0E0E0', fontSize: 'CSB', fontSize: 14, alignSelf: 'flex-end', }}>Forgot password?</Text>
                        </TouchableOpacity>
                        <CButton
                            title="Log In"
                            onPress={() => { }}
                            style={{ marginTop: 20 }}
                            onPress={()=>navigate('SignUp')}
                        />

                    </ScrollView>
                </SafeAreaView>

                <TouchableOpacity 
                    onPress={()=>navigate('SignUp')}
                    style={{ position: 'absolute', bottom: 20, alignSelf: 'center' }} >
                    <Text style={{ color: '#E0E0E0', fontFamily: 'CSB', fontSize: 14, }}>New here? Sign Up</Text>
                </TouchableOpacity>


            </ImageBackground>

        </View>
    )
}

export default Login
