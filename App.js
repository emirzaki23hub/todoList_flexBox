import React, {useState} from 'react';
import { StyleSheet, Text, View, ScrollView, FlatList, TouchableOpacity, TouchableWithoutFeedback, Keyboard} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';
import AddTodo from './components/addTodo';
import Header from './components/header';
import SandBox from './components/sandbox';
import TodoItem from './components/todoItem';


export default function App() {
 const [todos, setTodos]= useState([
   {text: 'Learn React JS', key:'1'},
   {text: 'Create an app', key:'2'},
   {text: 'Happy Coding', key:'3'}
 ]);
 
 const pressHandler = (key) => {
  setTodos((prevTodos) => {
    return prevTodos.filter(todo => todo.key != key);
  })
 }
 const submitHandler = (text) => {
   setTodos((prevTodos) => {
    return [
      {text: text, key: Math.random().toString() },
      ...prevTodos
    ]
   })
 } 
 return (


   <TouchableWithoutFeedback onPress={() => {Keyboard.dismiss();
   console.log('dismissed')}}>    
     <View style={styles.container}>
     <Header/>
      <View style={styles.content}>
        <AddTodo submitHandler={submitHandler}/>
        <View style={styles.list}>
        <FlatList 
        data={todos}
        renderItem={({item}) => (
         <TodoItem pressHandler={pressHandler} item={item} />
        )}
        />
        </View>
      </View>
    </View>
    </TouchableWithoutFeedback>

   );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff'
  },
  content: {
    padding: 40,
    flex: 1
  }, 
  list: {
    flex:1,
    marginTop:20,
 
  }
});
