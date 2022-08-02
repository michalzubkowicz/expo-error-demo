import {registerRootComponent} from 'expo';
import 'intl-pluralrules';
import {observer} from 'mobx-react-lite';

import * as React from 'react';
import {Text, View} from 'react-native';

function App() {
   return <View><Text>dsdsada</Text></View>;
}

export default observer(App);

registerRootComponent(App);
