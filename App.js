  
import React, { useState } from 'react';
import { StyleSheet, Button, View, FlatList } from 'react-native';

import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
	const [ courseGoals, setCourseGoals ] = useState([]);
	const [ isAddMode, setIsAddMode ] = useState(false);

	const addGoalHandler = (goalTitle) => {
		if (goalTitle.length === 0) {
			return
		}
		// It will render the comp only once!
		setCourseGoals((currentGoals) => [ ...currentGoals, { id: Math.random().toString(), value: goalTitle } ]);
		setIsAddMode(false)
	};

	const removeGoalHandler = (goalId) => {
		setCourseGoals((currentGoals) => {
			return currentGoals.filter((goal) => goal.id !== goalId);
		});
	};

	const canselGoalAdditionHandler = () => {
		setIsAddMode(false)
	} 

	return (
		<View style={styles.screen}>
			<Button onPress={() => setIsAddMode(true)} title="Add New Goal" />
			<GoalInput 
				visible={isAddMode} 
				onCancel={canselGoalAdditionHandler} 
				onAddGoal={addGoalHandler} />
			<FlatList
				keyExtractor={(item, index) => item.id}
				data={courseGoals}
				renderItem={(itemdata) => (
					<GoalItem 
						id={itemdata.item.id} 
						onDelete={removeGoalHandler} 
						title={itemdata.item.value} />
				)}
			/>
		</View>
	);
}

const styles = StyleSheet.create({
	screen: {
		padding: 80
	}
});