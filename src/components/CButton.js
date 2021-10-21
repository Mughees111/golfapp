import React from 'react'
import { TouchableOpacity, StyleSheet, Text } from 'react-native'

const CButton = ({ onPress, style, textStyle, title }) => {
    return (
        <TouchableOpacity
            style={[styles.btn, style]}
            onPress={() => onPress ? onPress() : null}
        >
            <Text style={[styles.text, textStyle]}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    btn: {
        width: "100%",
        backgroundColor: 'rgba(0, 0, 0, 1)',
        alignItems: 'center',
        justifyContent: 'center',
        height: 42,
        borderRadius: 10,
        marginTop: 10
    },
    text: {
        color: '#FFFFFF',
        fontSize: 14,
        fontFamily: 'CSB'
    }
})

export default CButton
