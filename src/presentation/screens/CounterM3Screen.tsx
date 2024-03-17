import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {globalStyles} from '../theme/global.styles';
import {FAB} from 'react-native-paper';

export const CounterM3Screen = () => {
  const [counter, setCounter] = useState(1);

  const handleCounter = () => {
    setCounter(counter + 1);
  };

  return (
    <View style={globalStyles.centerContainer}>
      <Text style={globalStyles.title}>{counter}</Text>

      <FAB
        style={globalStyles.fab}
        onPress={handleCounter}
        onLongPress={() => {
          setCounter(1);
        }}
        icon="add-outline"
      />
    </View>
  );
};
