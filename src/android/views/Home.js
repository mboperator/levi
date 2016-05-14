import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { connectModule } from 'redux-modules';
import todoModule from '../../_shared/modules/todo';

const selector = state => {
  return {
    data: state.todos.toJS(),
  };
};

@connectModule(selector, todoModule)
export default class App extends Component {
  render() {
    const { actions = {}, data = [] } = this.props.todos = {};
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          {JSON.stringify(data)}
        </Text>
        <Text style={styles.instructions}>
          To get started, edit index.android.js
        </Text>
        <Text style={styles.instructions}>
          Shake or press menu button for dev menu
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
