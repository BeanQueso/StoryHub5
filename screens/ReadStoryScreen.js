import React from 'react';
import { StyleSheet, Text, View, FlatList, TouchableOpacity } from 'react-native';
import { ListItem } from 'react-native-elements';
import {SearchBar} from 'react-native-elements';
import {ScrollView} from 'react-native-gesture-handler'
import db from '../config'

export default class ReadStoryScreen extends React.Component{
   constructor(){
       super();
       this.state={
           search:'',
           requestedBooksList: [],
       };
       this.requestRef = null;
   }

    updateSearch = ( search ) =>
    {
        this.setState( { search: search } );
    }
 
    retrieveStory = async () =>
    {
        var text = this.state.search;
        var enteredText = text.split("");
        if(enteredText[0].toUpperCase()==='A'){
            const query = await db.collection("Story").where('Story', '==', text)
            .startAfter(this.state.lastVisibleSubmission).limit(10).get();
            query.docs.map((doc)=>{
                this.setState({
                    allInputs:[...this.state.allInputs, doc.data()],
                    lastVisibleSubmission:doc,
                })
            })
        } else if(enteredText[0].toUpperCase()==='A'){
            const query = await db.collection("Author").where('AuthorName', '==', text)
            .startAfter(this.state.lastVisibleSubmission).limit(10).get();
            query.docs.map((doc)=>{
                this.setState({
                    allInputs:[...this.state.allInputs, doc.data()],
                    lastVisibleSubmission:doc,
                })
            })      
         }
    }

    
    keyExtractor = ( item, index ) => index.toString();
    renderItem = ( { item, index } ) =>
    {
        return (
           <ListItem
                key={index}
                title={item.title}
                subtitle={item.author}
                titleStyle={{ color: 'black' }}
                bottomDivider
            /> 
        
        )
        console.log(this.state.requestedBooksList)
    }

    componentDidMount ()
    {
        this.retrieveStory();
    }

render()
{
        return(
            <View style={styles.container}>
                <View>
                <SearchBar
                    placeholder="Type Here..."
                    onChangeText={this.updateSearch}
                    value={this.state.search}
                    style = {styles.searchBar}
                    />
                </View>
                <View>
                <FlatList
                    keyExtractor={
                        this.keyExtractor
                    }
                    data={
                        this.state.requestedBooksList
                        
                    }
                    renderItem={
                        this.renderItem
                    }
                    />
                    </View>
                </View>
                     )
            }
        }
            
const styles = StyleSheet.create({    
    container: {      flex: 1,     
         marginTop: 20    }, 

     searchBar:{      flexDirection:'row',      height:40,      width:'auto',      borderWidth:0.5,      alignItems:'center',      backgroundColor:'grey',      },   
    bar:{      borderWidth:2,      height:30,      width:300,      paddingLeft:10,    },    
    searchButton:{      borderWidth:1,      height:30,      width:50,      alignItems:'center',      justifyContent:'center',      backgroundColor:'green'    } 
 })