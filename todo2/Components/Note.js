import React, { Component } from 'react';
import { StyleSheet,
   Text,
   View,
   ScrollView,
   Button,
   TouchableOpacity,
 } from 'react-native';
 
   export default class Note extends React.Component {
        state = {
            linethrough: false,
            };
      
            toggleLineThrough = () => {
                if (this.state.linethrough) {
                  this.setState({ linethrough: false });
                } else {
                  this.setState({ linethrough: true });
                }
              }
    render() {
        const { linethrough, underline } = this.state;
        let textStyle;
        if (linethrough) {
             textStyle = {
                 textDecorationLine: 'line-through',
                };
            }
       // let textDecorationLine = this.props.val.note.completed ? 'line-through' : 'none';
      return (
        
            // <TouchableOpacity onLongPress={ this.toggleLineThrough}
            //      //onPress={() => {noteText={textDecorationLine:'line-through'}}}
            //      //{this.props.val.note.textDecorationLine= 'line-through';}
            //      >
                 <View key={this.props.keyval} style={styles.note}>
                    <Text style={textStyle}>{this.props.val.note}</Text>        
                     
                    <TouchableOpacity onPress={this.toggleLineThrough} style={styles.notecomplete}>
                            <Text style={styles.notedeletetext}>Done!</Text>
                    </TouchableOpacity>
               
                    <TouchableOpacity onPress={this.props.deleteMethod}                
                                        style={styles.notedelete}>
                        <Text style={styles.notedeletetext}>Delete</Text>
                    </TouchableOpacity>
               </View>          
            // </TouchableOpacity>
      );
    }

    }
  


const styles = StyleSheet.create({
    note: {
        position: 'relative',
        padding: 20,
        paddingRight:100,
        borderBottomWidth: 2,
        borderBottomColor: '#ededed',
        backgroundColor: '#ffff99',
    },

    
    notetext: {
        paddingLeft: 20,
        borderLeftWidth: 10,
        borderLeftColor: '#E91E63',
        //textDecorationLine: 'line-through',
        //color: '#000000'
        //textDecorationLine: {textDecorationLine},
    },

    notedelete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'red',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 10,
    },

    notecomplete: {
        position: 'absolute',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'green',
        padding: 10,
        top: 10,
        bottom: 10,
        right: 80,
    },

    notedeletetext: {
        color: 'white',
    },

});


