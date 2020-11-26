import React, { useEffect } from 'react';
import { StyleSheet, View, Text } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const HomeScreen = (props) => {
  const loadProfile = async () => {
    const token = await AsyncStorage.getItem('access_token');
    if (!token) {
      props.navigation.navigate('Login');
    }
    console.log('access token', token);
  };

  useEffect(() => {
    loadProfile();
  });

  return (
    <View>
      <Text>Home Screen</Text>
    </View>
  );
};

const styles = StyleSheet.create({});

export default HomeScreen;
