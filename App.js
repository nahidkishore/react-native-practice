import React from 'react';
import { Button, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  return (
    <View style={{ padding: 40 }}>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <TextInput
          placeholder='Write here...'
          style={{
            width: '80%',
            borderColor: 'black',
            borderWidth: 1,
            padding: 5,
          }}
        />
        <Button title='Click Me Baby' color='green' />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({});
