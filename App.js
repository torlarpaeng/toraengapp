import React from 'react';
import { Navigationcontainer } from '@react-navigation/native';

import appstackscreens from './src/stacks/AppStackScreens';
import AppStackScreens from './src/stacks/AppStackScreens';

export default  App = () => {
  return (
    <Navigationcontainer>
      <AppStackScreens />
    </Navigationcontainer>
  );
}



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
