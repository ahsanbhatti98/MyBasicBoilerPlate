import {Pressable, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {useLogin} from '../../../hooks/api';

export const Login = ({}) => {
  const {mutate: loginFunc, isPending, error} = useLogin();

  return (
    <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
      <Pressable
        onPress={() =>
          loginFunc({
            password: '12345678',
            username: 'techversatile2020@gmail.com',
            token_fcm: '8888888888',
          })
        }>
        <Text>Login</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({});
