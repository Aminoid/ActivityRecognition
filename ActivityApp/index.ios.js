import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import Activity from '../activity-recognition';

export default class ActivityApp extends Component {
  constructor() {
      super();
      this.state = {
          activity: "",
          start: false,
      }
  }
  componentDidMount() {
      Activity.subscribe((activity) => {
          this.setState({
              activity
          })
      })
  }
  startActivity() {
      this.setState({
          start: true,
      })
      Activity.start(2500);
  }
  stopActivity() {
      this.setState({
          start: false
      })
      Activity.stop();
  }
  render() {
    return (
      <View style={styles.container}>
        {
            !this.state.start ?
            <Button
                onPress={() => this.startActivity()}
                title="Start Activity"
                color="#841584"
                accessibilityLabel="Start Activity"
            />
            :
            <Button
                onPress={() => this.stopActivity()}
                title="Stop Activity"
                color="#841584"
                accessibilityLabel="Stop Activity"
            />
        }
        {
            this.state.start?
            <Text style={styles.welcome}>
                Recording Activity: {this.state.activity}
            </Text>
            : null
        }
        <Text>

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

AppRegistry.registerComponent('ActivityApp', () => ActivityApp);
