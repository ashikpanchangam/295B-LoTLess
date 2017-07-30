import React, { Component } from 'react';
import axios from 'axios';
import { Actions } from 'react-native-router-flux';
import { View, TextInput, Dimensions, Image } from 'react-native';
import { CardSection } from './ModalComponents';
import { Button, Content } from './CommonComponents';

const signUp = ``;
class SignUp extends Component {

  constructor() {
    super();
   this.state = {
     visible: false,
     loaded: false,
     email: '',
     userId: '',
     password: '',
     retypePass: ''
   };
  }

  _check() {
    
  }

  _signUp(){
    if(this._check()) {
      // axios.post(signUp,{
      //   email: this.state.email,
      //   userId: this.state.userId,
      //   password: this.state.password
      // }).then( res => {
      //   console.log(res);
      //   if(res.status === 200) {
      //     Actions.login();
      //   } else {
      //     this.setState({
      //       error: true
      //     })
      //   }
      // }).catch( e => {
      //   console.log(e);
      //   this.setState({
      //     error: true
      //   })
      // });
    }
  }

   render() {
     const {
       container,
       textBox
     } = styles;
  return (
  <View style={container}>
    <Image source={require('../../assets/images/adv-ICE_logo_M.png')} />
      <Content weight='500' size={35} color='black'> adv-ICE </Content>
      <Content weight='200' size={15} color='black'>
      Please signUp below.
      </Content>
      <TextInput
        style={textBox}
        onChangeText={(email) => this.setState({ email })}
        placeholder='e-mail'
        placeholderTextColor="black"
        returnKeyType='done'
        numberOfLines={1}
        clearButtonMode='while-editing'
        value={this.state.email}
      />
      <TextInput
        style={textBox}
        onChangeText={(userId) => this.setState({ userId })}
        placeholder='userID'
        placeholderTextColor="black"
        returnKeyType='done'
        numberOfLines={1}
        clearButtonMode='while-editing'
        value={this.state.userId}
      />
      <TextInput
        style={textBox}
        onChangeText={(password) => this.setState({ password })}
        placeholder='password'
        placeholderTextColor="black"
        returnKeyType='done'
        secureTextEntry={true}
        numberOfLines={1}
        clearButtonMode='while-editing'
        value={this.state.password}
      />
      <TextInput
        style={textBox}
        onChangeText={(retypePass) => this.setState({ retypePass })}
        placeholder='re-type Password'
        placeholderTextColor="black"
        returnKeyType='done'
        secureTextEntry={true}
        numberOfLines={1}
        clearButtonMode='while-editing'
        value={this.state.retypePass}
      />
      <CardSection>
      <Button onPress={() => { Actions.login(); }}> SignUp </Button>
      </CardSection>
  </View>
  );
  }
}

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#FF8E1F',
    alignItems: 'center',
    alignContent: 'space-around',
    flexDirection: 'column',
    paddingTop: 100,
    borderColor: 'black',
    borderWidth: 2
  },
  textBox: {
    height: 40,
    backgroundColor: '#E0FFFF',
    borderColor: '#79CDCD',
    borderWidth: 0.3,
    borderRadius: 10,
    shadowColor: '#79CDCD',
    shadowOffset: { width: 1, height: 1 },
    shadowRadius: 1,
    shadowOpacity: 0.5,
    width: Dimensions.get('window').width - 60,
    marginHorizontal: 30,
    marginVertical: 15,
    textAlign: 'center'
  }
}


export default SignUp;
