import { StatusBar } from 'expo-status-bar';
import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Keyboard, Button } from 'react-native';


export default  class App extends Component <Props> {

  constructor(props){
    super(props)
    this.state = {height:0, mass:0, result:0, resultCategory:""}
    this.calculate = this.calculate.bind(this)
  }

    calculate(){
      let imc = this.state.mass / (this.state.height * this.state.height)
      let s = this.state
      s.result = imc
     

      if (s.result < 18.5) {
        s.resultCategory = "Underweight";

      } else if (s.result < 25){
        s.resultCategory = "Normal Weight";

      } else if (s.result < 30){
        s.resultCategory = "Overweight";

      } else {
        s.resultCategory = "Obese" ;   
        
      }
      

      this.setState(s)
      Keyboard.dismiss();
    }

  render () {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.header}>Simple BMI Calculator</Text>
      </View>
      <View style={styles.inputs}>
        <TextInput placeholder="Height"  keyboardType="numeric" style={styles.input} onChangeText={(height)=>{this.setState({height})}}/>
        <TextInput placeholder="Mass" keyboardType="numeric" style={styles.input} onChangeText={(mass)=>{this.setState({mass})}}/>
      </View>
      <View style={styles.calculate}>
        <TouchableOpacity style={styles.button} onPress={this.calculate}><Text style={styles.buttonText}>Calculate</Text></TouchableOpacity>
        <Text style={styles.result}>{this.state.result.toFixed(2)}</Text>
        <Text style={styles.resultCategory}>{this.state.resultCategory}</Text>
      </View>
    </View>
  );
}
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    justifyContent: 'center',
  },
  inputs: {
    flexDirection: 'row',
    marginBottom: 30
  },
  input: {
    height: 80,
    textAlign: "center",
    width: "50%",
    fontSize: 30,
    marginTop: 24    
  },
  header: {
    textAlign: "center",
    fontSize: 40
  },
  button: {
    backgroundColor: '#00FF7F',
    marginBottom: 20
  },
  buttonText: {
    fontSize: 30,
    textAlign: "center",
    padding: 20,
    color: '#2F4F4F',
    fontWeight: 'bold'
  },
  result: {
    fontSize: 30,
    textAlign: "center",
    padding: 15,
    color: '#2F4F4F'
  },
  resultCategory: {
    fontSize: 30,
    textAlign: "center",
    padding: 15,
    color: '#2F4F4F'
  }
});
