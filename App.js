import React, { useState } from 'react';
import { Button, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);
  const goalInputHandler = (enterText) => {
    setEnteredGoal(enterText);
  };
  const addGoalHandler = () => {
    /*  setCourseGoals([...courseGoals,enteredGoal]) */
    setCourseGoals((currentGoals) => [...currentGoals, enteredGoal]);
  };
  return (
 
    <View style={styles.screen}>
      <View style={styles.inputContainer}>
        <TextInput
          placeholder='Write here...'
          style={styles.input}
          onChangeText={goalInputHandler}
          value={enteredGoal}
        />
        <Button title='Click Me Baby' color='green' onPress={addGoalHandler} />
      </View>
      <ScrollView>
        {courseGoals.map((goal) => (
          <View key={goal} style={styles.listItem}>
            <Text >{goal}</Text>
          </View>
        ))}
      </ScrollView>
    </View>
  
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
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
  listItem: {
    padding: 10,
    marginTop: 5,
    borderColor: 'black',
    backgroundColor: 'gray',
    borderWidth: 1,
  },
});
