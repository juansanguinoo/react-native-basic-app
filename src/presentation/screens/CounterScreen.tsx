import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';

export const CounterScreen = () => {
  const [counter, setCounter] = useState(1);

  const handleCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{counter}</Text>

      <Button
        mode="contained"
        onPress={handleCounter}
        onLongPress={() => {
          setCounter(1);
        }}>
        Incrementar
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 80,
    color: 'black',
    fontWeight: '300',
  },
});
