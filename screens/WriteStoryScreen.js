import React from 'react'
import {StyleSheet, Text, View, TextInput, TouchableOpacity} from 'react-native'
import AppHeader from '../components/AppHeader'
import db from '../config'
import firebase from 'firebase'
export default class WriteStoryScreen extends React.Component{

  constructor(){
    super();
    this.state = {
      title:'',
      author:'',
      story:''
    }
  }

  submitStory = ()=>{
    db.collection('title').add({
      title:this.state.title
    })

    db.collection('author').add({
      author:this.state.author
    })

    db.collection('story').add({
      story:this.state.story
    })
  }

    render(){
        return(
            <View>
                <AppHeader/>

                <TextInput
                style = {styles.inputBox}
                placeholder = "Story Title"
                onChangeText = {(text)=>{
                  this.setState({
                    title:text
                  })
                }}
                />

                <TextInput
                style = {styles.inputBox}
                placeholder = "Author"
                onChangeText = {(text)=>{
                  this.setState({
                    author:text
                  })
                }}
                />

                <TextInput
                style = {styles.inputBox2}
                multiline = {true}
                placeholder = "Write Story Here"
                onChangeText = {(text)=>{
                  this.setState({
                    story:text
                  })
                }}
                />

                <TouchableOpacity
                style = {styles.button}
                onPress = {()=>{
                  this.submitStory()
                  alert("Story Added Successfully")
                }}
                >
                    <Text style = {styles.buttonText}>
                    Submit
                    </Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    inputBox: {
        marginTop: 10,
        width: '80%',
        alignSelf: 'center',
        height: 40,
        textAlign: 'center',
        borderWidth: 4,
        outline: 'none',
      },
      inputBox2: {
        marginTop: 10,
        width: '80%',
        alignSelf: 'center',
        height: 320,
        textAlign: 'center',
        borderWidth: 4,
        outline: 'none',
      },
      button: {
        marginLeft: 50,
        marginTop: 25,
        width: 120,
        height: 50,
        backgroundColor: '#87ceeb',
        borderRadius: 100,
        alignItems: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
      },
   
      buttonText: {
        fontFamily: 'Arial',
        fontSize: 14,
        textAlign: 'center',
        color:'navy'
      },
})