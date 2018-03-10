import React from 'react';
import { StyleSheet, Text, View, TextInput, ScrollView, TouchableOpacity, } from 'react-native';
import Note from './Note';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import Toast from 'react-native-simple-toast';

export default class Main extends React.Component {
  
  // static navigationOptions =
  //   {
  //      title: 'Agenda',
  //      headerStyle: { backgroundColor: '#0099cc'},
  //      headerTitleStyle: { color: 'white', textAlign: 'center'},
  //   };


  constructor(props) {
    super(props);
    this.state = {
      noteArray: [],
      noteText: '',
      
    }
  }
  render() {
    let notes = this.state.noteArray.map((val, key) => {
      return <Note key={key} keyval={key} val={val}
        deleteMethod={ ()=> this.deleteNote(key)}/>
    });
    
    return (
      <View style={styles.container}>
        <View style={styles.header}>
          <Text style={styles.headertext}>Agenda</Text>
        </View>
        {/* <TouchableOpacity style={styles.sharebutton}>
          <Text  style={styles.addbuttontext}>share</Text>
        </TouchableOpacity> */}
        <ScrollView style={styles.scrollcontainer}>
          {notes}
        </ScrollView>
        <View style={styles.footer}>
          <TextInput 
          style = {styles.textinput}
          placeholderTextColor='white'
          onChangeText={(noteText) => this.setState({noteText})}
          value={this.state.noteText}
          placeholder='Enter text here'></TextInput>
        </View>
        <KeyboardSpacer />
        <TouchableOpacity style={styles.addbutton}>
          <Text onPress={ (this.addNote.bind(this))} style={styles.addbuttontext}>+</Text>
        </TouchableOpacity>
        
      </View>
    );
  }

  addNote() {
      
    if (this.state.noteText) {

      //var t = new title();
      this.state.noteArray.push({
        'note': this.state.noteText,
        
      });
      this.setState({noteArray: this.state.noteArray})
      this.setState({noteText: ''})
      
    }
    Toast.show('Your Agenda is Added!');
    
  }
  
    deleteNote(key) {
        this.state.noteArray.splice(key,1);
        this.setState({noteArray: this.state.noteArray})
      }
 }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    },
   
    addbutton: {
      position: 'absolute',
      zIndex: 11,
      right: 10,
      bottom: 10,
      backgroundColor: '#0099cc',
      width: 90,
      height: 90,
      borderRadius: 50,
      alignItems: 'center',
      justifyContent: 'center',
      elevation: 8,
    },

    addbuttontext: {
      color: 'white',
      fontSize: 24,
    },

    header: {
      //flex: 1,
      height: 80,
      backgroundColor: '#0099cc',
      alignItems: 'center',
      justifyContent: 'center',
      //paddingTop: 22
    },
    headertext: {
      
      color: 'white',
      fontSize: 20,
      padding: 20,
      paddingTop: 22
     },

     scrollcontainer: {
       flex: 1,
       marginBottom: 100,
     },
     footer: {
       position: 'relative',
       bottom: 0,
       left: 0,
       right: 0,
       zIndex:10,
     },

     textinput: {
       alignSelf: 'stretch',
       backgroundColor: '#252525',
       padding: 20,
       color:'white',
       borderTopWidth: 2,
       borderTopColor: '#ededed'


     },

});
