import * as React from 'react';

import {StyleSheet, View} from 'react-native';
import BingMapsView from 'react-native-bing-maps';

export default function App() {
  return (
    <View style={{flex: 1}}>
      <BingMapsView
        credentialsKey="ApeRJMX5afRqSGV47g1UMZ0naRSp0mLDMgm5faSpUixMkXQcUQdcgwrLGFAbUCU9"
        mapLocation={{lat: 22.719568, long: 75.857727, zoom: 15}}
        style={{flex: 1}}
      />
    </View>
  );
}
