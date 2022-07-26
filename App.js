import { StatusBar } from 'expo-status-bar';
import { Animated, Dimensions, FlatList, View } from 'react-native';
import CalculatePage from './Pages/CalculatePage/CalculatePage';
import Home from './Pages/Home/Home';

const Components = {
  componentOne: <Home />,
  componentTwo: <CalculatePage />
};

const Data = Object.keys(Components).map((i) => ({
  Key: i,
  title: i,
  component: Components[i]
}));

const { width, height } = Dimensions.get('screen');

export default function App() {
  return (
    <View>

      <FlatList
        data={Data}
        keyExtractor={item => item.Key}
        showsVerticalScrollIndicator={false}
        snapToAlignment={'start'}
        decelerationRate={'normal'}
        snapToInterval={height}
        renderItem={({ item }) => {
          return <View
            style={{ width, height }}

          >
            {item.component}
          </View>
        }}
      />

      <StatusBar style="auto" />
    </View>
  );
};
