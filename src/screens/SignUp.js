import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ImageBackground, ScrollView, Text, View, Image, SafeAreaView, TouchableOpacity, Alert, } from 'react-native';
import { navigate, navigateFromStack } from '../../Navigations';
import { AppCol } from '../components/AppColors';
import CButton from '../components/CButton';
import CTextInput from '../components/CTextInput';
import { EyeShow } from '../components/Svgs';



const SignUp = () => {

    const [name, setName] = useState('')
    const [userName, setUserName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [cPass, setCPass] = useState('')
    const [showPass, setShowPass] = useState(true)

    return (
        <View stye={{ flex: 1 }}>
            <StatusBar
                backgroundColor="black"
                style="light" />
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
                    <ScrollView contentContainerStyle={{ paddingBottom: 100 }} >
                        <Text style={{ fontFamily: 'CSM', fontSize: 22, color: AppCol.pC, marginTop: 30 }}>Let’s get started!</Text>
                        <Text style={{ fontFamily: 'CSB', fontSize: 14, color: '#E0E0E0', marginTop: 5 }}>Create an account to continue</Text>
                        <CTextInput
                            placeholder="Full name"
                            value={email}
                            onChangeText={(v) => { setName(v) }}
                            style={{ marginTop: 20 }}
                        />
                        <CTextInput
                            placeholder="Username"
                            value={email}
                            onChangeText={(v) => { setUserName(v) }}
                            style={{ marginTop: 10 }}
                        />
                        <CTextInput
                            placeholder="Email"
                            value={email}
                            onChangeText={(v) => { setEmail(v) }}
                            style={{ marginTop: 10 }}
                        />
                        <View style={{ marginTop: 10, flexDirection: 'row', }}>
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
                        <View style={{ marginTop: 10, flexDirection: 'row', }}>
                            <CTextInput
                                placeholder="Verify password"
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
                            title="Sign Up"
                            onPress={() => { }}
                            style={{ marginTop: 20 }}
                            onPress={() => navigateFromStack('HomeStack', 'Home')}
                        />
                        <TouchableOpacity
                            onPress={() => navigate('Login')}
                            style={{ marginTop: 20, alignSelf: 'center' }} >
                            <Text style={{ color: '#E0E0E0', fontFamily: 'CSB', fontSize: 14, }}>Already have account? Log In</Text>
                        </TouchableOpacity>
                    </ScrollView>
                </SafeAreaView>
            </ImageBackground>

        </View>
    )
}

export default SignUp
