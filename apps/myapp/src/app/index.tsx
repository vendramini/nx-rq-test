/* eslint-disable jsx-a11y/accessible-emoji */
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
} from 'react-native';
import {
  useQuery,
} from '@tanstack/react-query';
import { usePokeApi } from '@org/hooks';

export default function App() {
  const { data } = useQuery({
    queryKey: ['test'],
    queryFn: () =>
      fetch('https://pokeapi.co/api/v2/pokemon/ditto').then((res) =>
        res.json()
      ),
  });

  const { data: data2, error } = usePokeApi();

  console.log('pokeapi', data);
  console.log('pokeapi from lib', data2, error);

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView
        style={{
          flex: 1,
        }}
      >
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <View style={styles.section}>
            <Text>
              {data ? JSON.stringify(data).slice(0, 100) : 'No data from react-query'}
            </Text>
            <Text>
              {data2 ? JSON.stringify(data2).slice(0, 100) : 'No data from react-query'}
            </Text>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};
const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: '#ffffff',
  },
  section: {
    marginVertical: 12,
    marginHorizontal: 12,
  },
});
