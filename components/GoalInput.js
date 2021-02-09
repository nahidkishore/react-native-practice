import React, { useState } from 'react';
import { Button, StyleSheet, TextInput, View } from 'react-native';

const GoalInput = (props) => {
  const [enteredGoal, setEnteredGoal] = useState('');
  const goalInputHandler = (enterText) => {
    setEnteredGoal(enterText);
  };
  return (
    <View style={styles.inputContainer}>
    <TextInput
      placeholder='Write here...'
      style={styles.input}
      onChangeText={goalInputHandler}
      value={enteredGoal}
    />
    <Button title='Click Me Baby' color='green' onPress={()=> props.onAddGoal(enteredGoal)} />
  </View>
  );
};

const styles = StyleSheet.create({
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  input: {
    width: '80%',
    borderColor: 'black',
    borderWidth: 1,
    padding: 5,
  },
})
export default GoalInput;