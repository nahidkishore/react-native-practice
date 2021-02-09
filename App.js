import React, { useState } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';
import GoalInput from './components/GoalInput';
import GoalItems from './components/GoalItems';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);

  const addGoalHandler = (goalTitle) => {
    /*  setCourseGoals([...courseGoals,enteredGoal]) */
    setCourseGoals((currentGoals) => [
      ...currentGoals,
      { id: Math.random().toString(), value: goalTitle },
    ]);
  };
  const removeGoalHandler = (goalId) => {
    setCourseGoals((courseGoals) => {
      return courseGoals.filter((goal) => goal.id !== goalId);
    });
  };
  return (
    <View style={styles.screen}>
      <GoalInput onAddGoal={addGoalHandler} />
      <FlatList
        keyExtractor={(item, index) => item.id}
        data={courseGoals}
        renderItem={(itemData) => (
          <GoalItems
            id={itemData.item.id}
            onDelete={removeGoalHandler}
            title={itemData.item.value}
          />
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  screen: {
    padding: 50,
  },
});
