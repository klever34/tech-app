import React from 'react';
import {View, Text, StyleSheet, FlatList} from 'react-native';
import { useFonts } from '@use-expo/font';
import { AppLoading } from 'expo';

const History = (props) => {
    let [fontsLoaded] = useFonts({
        'Poppins-Bold': require('../assets/fonts/Poppins-Bold.ttf'),
        'Poppins-Medium': require('../assets/fonts/Poppins-Medium.ttf'),
        'Poppins-Light': require('../assets/fonts/Poppins-Light.ttf'),
      });
      if (!fontsLoaded) {
        return <AppLoading />;
      } else {
        return (
          <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text style={{ fontFamily: 'Poppins-Bold' }}>
              Inter SemiBoldItalic
            </Text>
            <Text style={styles.container}>Platform Default</Text>
          </View>
        );
      }
}

const styles = StyleSheet.create({
    container: {
        fontFamily: 'Poppins-Medium',
    }
})

export default History;