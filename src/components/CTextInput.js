import React from 'react'
import { TextInput, StyleSheet } from 'react-native'

const CTextInput = ({ secureTextEntry, onChangeText, style, placeholder, value, placeholderTextColor }) => {
    return (
        <TextInput
            secureTextEntry={secureTextEntry}
            style={{ width: "100%" }}
            value={value}
            placeholder={placeholder}
            style={[styles.textinput, style]}
            placeholderTextColor={placeholderTextColor ? placeholderTextColor : "#828282"}
            onChangeText={(v) => {
                onChangeText ? onChangeText(v) : null
            }}

        />
    )
}

const styles = StyleSheet.create({
    textinput: {
        width: "100%",
        height: 42,
        borderWidth: 1,
        borderColor: 'rgba(242, 242, 242, 0.5)',
        borderRadius: 10,
        paddingHorizontal: 10,
        fontFamily: 'CSB',
        fontSize: 14,
        color: '#828282',
        marginTop: 10
    }
})

export default CTextInput
