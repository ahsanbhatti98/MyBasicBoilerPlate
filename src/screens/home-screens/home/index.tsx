import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { Pressable, StyleSheet, Text, View } from 'react-native';
import { HomeRoutes } from '../../../constants';

export const Home = ({}) => {
  const navigation = useNavigation();
  return (
    <View style={{justifyContent: 'center', alignItems: 'center',flex:1}}>
      <Pressable onPress={() => navigation.navigate(HomeRoutes['Profile'])}>
        <Text>Home</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});
