import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';

const GoalItem = (props) => {
	return (
		<TouchableOpacity activeOpacity={0.8} onPress={props.onDelete.bind(this, props.id)}  style={styles.listItem}>
			<Text>{props.title}</Text>
		</TouchableOpacity>
	);
};

const styles = StyleSheet.create({
    listItem: {
		padding: 10,
		marginVertical: 10,
		backgroundColor: '#ccc',
		borderColor: 'black',
		borderWidth: 1
	}
})

export default GoalItem;