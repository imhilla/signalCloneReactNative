import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { StatusBar } from "expo-status-bar";

const Register = ({ navigation }) => {
  return (
    <KeyboardAvoidingView behavior="padding" style={styles.container} >
      <StatusBar style="light" />
      <Text h3 style={{ marginBottom: 50 }}>
        Create a signal account
      </Text>
    </KeyboardAvoidingView>
  )
}

export default Register

const styles = StyleSheet.create({});